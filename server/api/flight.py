from flask_restx import Namespace, Resource, fields
from flask import request
from server.db.database import get_db
from bson import json_util
from flask import Response

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
        return Response(json_util.dumps({'flights': flights}), mimetype='application/json')