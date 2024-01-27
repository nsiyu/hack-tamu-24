from flask_restx import Namespace, Resource, fields
from flask import request
from server.db.database import get_db

user_api = Namespace('users', description='User operations')

user_model = user_api.model('User', {
    'username': fields.String(required=True, description='User username'),
    'password': fields.String(required=True, description='User password'),
})

get_user_model = user_api.model('User', {
    'user_id': fields.String(required=True, description='User Id'),
})

@user_api.route('/signup')
class SignupResource(Resource):
    @user_api.doc('signup')
    @user_api.expect(user_model)
    @user_api.response(201, 'User registered successfully')
    def post(self):
        db = get_db()
        data = request.get_json()
        username = data['username']
        password = data['password']
        db.user.insert_one({'username': username, 'password': password})
        return {'message': 'User registered successfully'}, 201


@user_api.route('/past-flights')
class PastFlightsResource(Resource):
    @user_api.doc(
        description='Retrieve flights based on user ID',
        params={'user_id': 'The ID of the user to fetch flights for'}
    )
    @user_api.response(201, 'Past Flights retrieved successfully')
    def post(self):
        db = get_db()
        user_id = request.args.get('user_id')
        return {'message': 'User registered successfully'}, 201