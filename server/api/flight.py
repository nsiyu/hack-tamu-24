from flask_restx import Namespace, Resource, fields
from flask import request
from server.db.database import get_db
from bson import json_util
from flask import Response
import requests

flight_api = Namespace('flights', description='User operations')

flight_model = flight_api.model('Flight', {
    'flight_id': fields.String(required=True, description='Flight Number'),
    'user_id': fields.String(required=True, description='User Id'),
})

@flight_api.route('/add-flight', methods=['POST'])
class AddFlightResource(Resource):
    @flight_api.doc('add-flight')
    @flight_api.expect(flight_model)
    @flight_api.response(201, 'Added flight successfully')
    def post(self):
        db = get_db()
        data = request.get_json()
        flight_id = data['flight_id']
        user_id = data['user_id']
        db.flight.insert_one({'flight_id': flight_id, 'user_id': user_id})
        return {'message': 'Added flight successfully'}, 201

@flight_api.route('/get-flights', methods=['GET'])
class GetFlightResource(Resource):
    @flight_api.doc(
        description='Retrieve flights based on user ID',
        params={'user_id': 'The ID of the user to fetch flights for'}
    )
    @flight_api.response(201, 'Added flight successfully')
    def get(self):
        db = get_db()
        user_id = request.args.get('user_id')
        flights_cursor = db.flight.find({'user_id': user_id})
        flights = list(flights_cursor)
        res = []
        for flight in flights:
            flight_id = flight['flight_id']
            flight_iata = ''.join(filter(str.isalpha, flight_id))
            flight_number = ''.join(filter(str.isdigit, flight_id))

            aviation_api_url = f'http://api.aviationstack.com/v1/flights?access_key=asfas&flight_number={flight_number}&airline_iata={flight_iata}'
            try:
                aviation_api_response = requests.get(aviation_api_url).json()
                print(aviation_api_response)
                if not aviation_api_response or 'data' not in aviation_api_response or not aviation_api_response['data']:
                    continue

                departure_airport = aviation_api_response['data'][0]['departure']['iata']
                arrival_airport = aviation_api_response['data'][0]['arrival']['iata']
                coordinates_api_from = f'https://api.checkwx.com/station/K{departure_airport.upper()}'
                coordinates_api_to = f'https://api.checkwx.com/station/K{arrival_airport.upper()}'

                coordinate_api_from_request = requests.get(coordinates_api_from, headers={'X-API-Key': 'f87f86d210de4a4eac6a49e7fc'}).json()
                coordinate_api_to_request = requests.get(coordinates_api_to, headers={'X-API-Key': 'f87f86d210de4a4eac6a49e7fc'}).json()
                departure_coordinates = coordinate_api_from_request['data'][0]['geometry']['coordinates']
                arrival_coordinates = coordinate_api_to_request['data'][0]['geometry']['coordinates']

                flight_details = aviation_api_response['data'][0]
                flight_info = {
                    'flight_date': flight_details['flight_date'],
                    'flight_status': flight_details['flight_status'],
                    'departure_airport': flight_details['departure']['airport'],
                    'departure_timezone': flight_details['departure']['timezone'],
                    'departure_iata': flight_details['departure']['iata'],
                    'departure_icao': flight_details['departure']['icao'],
                    'departure_terminal': flight_details['departure']['terminal'],
                    'departure_gate': flight_details['departure']['gate'],
                    'departure_delay': flight_details['departure'].get('delay'),
                    'scheduled_departure': flight_details['departure']['scheduled'],
                    'estimated_departure': flight_details['departure']['estimated'],
                    'arrival_airport': flight_details['arrival']['airport'],
                    'arrival_timezone': flight_details['arrival']['timezone'],
                    'arrival_iata': flight_details['arrival']['iata'],
                    'arrival_icao': flight_details['arrival']['icao'],
                    'arrival_terminal': flight_details['arrival']['terminal'],
                    'arrival_gate': flight_details['arrival']['gate'],
                    'arrival_baggage': flight_details['arrival']['baggage'],
                    'arrival_delay': flight_details['arrival'].get('delay'),
                    'scheduled_arrival': flight_details['arrival']['scheduled'],
                    'estimated_arrival': flight_details['arrival']['estimated'],
                    'airline_name': flight_details['airline']['name'],
                    'airline_iata': flight_details['airline']['iata'],
                    'airline_icao': flight_details['airline']['icao'],
                    'flight_number': flight_details['flight']['number'],
                    'latitude_start': departure_coordinates[0],
                    'latitude_end': arrival_coordinates[0],
                    'longitude_start': departure_coordinates[1],
                    'longitude_end': arrival_coordinates[1]
                }
                res.append(flight_info)

            except Exception as e:
                print(f"Error occurred: {e}")
        return Response(json_util.dumps({'flights': res}), mimetype='application/json')
