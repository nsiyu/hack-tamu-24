from flask_restx import Namespace, Resource, fields
from flask import request
from server.db.database import get_db

user_api = Namespace('users', description='User operations')

user_model = user_api.model('User', {
    'username': fields.String(required=True, description='User username'),
    'password': fields.String(required=True, description='User password'),
    'email': fields.String(required=True, description='User email'),
    'state': fields.String(required=True, description='User state'),
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