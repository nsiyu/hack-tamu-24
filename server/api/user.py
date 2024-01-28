import math
import requests
from flask_restx import Namespace, Resource, fields
from server.db.database import get_db
from flask import request, jsonify

user_api = Namespace('users', description='User operations')

get_user_model = user_api.model('User', {
    'user_id': fields.String(required=True, description='User Id'),
})

signup_model = user_api.model('User', {
    'fname': fields.String(required=True, description='User first name'),
    'password': fields.String(required=True, description='User password'),
    'email': fields.String(required=True, description='User email'),
    'lname': fields.String(required=True, description='User last name'),
})

login_model = user_api.model('Login', {
    'password': fields.String(required=True, description='User password'),
    'email': fields.String(required=True, description='User email'),
})

@user_api.route('/signup')
class SignupResource(Resource):
    @user_api.doc('signup', body=signup_model)
    @user_api.expect(signup_model)
    @user_api.response(201, 'User registered successfully')
    def post(self):
        db = get_db()
        data = request.get_json()
        email = data['email']
        password = data['password']
        fname = data['fname']
        lname = data['lname']
        db.user.insert_one({'email': email, 'password': password, 'fname': fname, 'lname': lname})
        return Jsonify({'email': email}), 201

@user_api.route('/login')
class LoginResource(Resource):
    @user_api.doc('login', body=login_model)
    @user_api.expect(login_model)
    def post(self):
        db = get_db()
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        user = db.user.find_one({'email': email, 'password': password})
        if user:
            return {'message': 'Login successful'}, 200
        else:
            return {'message': 'Invalid email or password'}, 401

@user_api.route('/passport-data')
class PassportDataResource(Resource):
    @user_api.doc(
        description='Retrieve passport data based on user ID',
        params={'user_id': 'The ID of the user to fetch passport data for'}
    )
    @user_api.response(200, 'Passport Data for user retrieved successfully')
    def get(self):
        db = get_db()

        user_id = request.args.get('user_id')
        if not user_id:
            user_api.abort(400, "user_id is required")

        flights_cursor = db.flight.find({'user_id': user_id})
        num_flights = 0
        total_distance = 0
        total_delay_time = 0
        airports_visited = set()

        for flight in flights_cursor:
            flight_id = flight['flight_id']
            flight_iata = ''.join(filter(str.isalpha, flight_id))
            flight_number = ''.join(filter(str.isdigit, flight_id))
            aviation_api_url = f'http://api.aviationstack.com/v1/flights?access_key=689292887ba553a4fa0c4a56e93e5f35&flight_number={flight_number}&airline_iata={flight_iata}'
            try:
                aviation_api_response = requests.get(aviation_api_url).json()
                departure_airport = aviation_api_response['data'][0]['departure']['iata']
                arrival_airport = aviation_api_response['data'][0]['arrival']['iata']
                coordinates_api_from = f'https://api.checkwx.com/station/K{departure_airport.upper()}'
                coordinates_api_to = f'https://api.checkwx.com/station/K{arrival_airport.upper()}'

                coordinate_api_from_request = requests.get(coordinates_api_from, headers={'X-API-Key': 'f87f86d210de4a4eac6a49e7fc'}).json()
                coordinate_api_to_request = requests.get(coordinates_api_to, headers={'X-API-Key': 'f87f86d210de4a4eac6a49e7fc'}).json()
                departure_coordinates = coordinate_api_from_request['data'][0]['geometry']['coordinates']
                arrival_coordinates = coordinate_api_to_request['data'][0]['geometry']['coordinates']

                long1, lat1 = departure_coordinates
                long2, lat2 = arrival_coordinates
                lat1, lat2 = float(lat1), float(lat2)
                long1, long2 = float(long1), float(long2)

                total_distance += math.acos(
                math.sin(long1) * math.sin(long2) + math.cos(
                    long1) * math.cos(long2) * math.cos(
                    lat2 - long2)) * 6371

                num_flights += 1
                airports_visited.add(departure_airport)
                airports_visited.add(arrival_airport)

            except Exception as e:
                print(f"Error occurred: {e}")
                return 401
        num_airports = len(airports_visited)

        passport_data = {
            'number_of_flights': num_flights,
            'distance_traveled': total_distance,
            'number_of_airports': num_airports,
            'time_lost_due_to_delays': total_delay_time
        }

        return passport_data, 200