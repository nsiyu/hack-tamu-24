from flask import Flask, request
from flask_restx import Namespace, Resource, fields, Api
from server.db.database import get_db

app = Flask(__name__)
api = Api(app)

user_api = Namespace('users', description='User operations')

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
        return {'message': 'User registered successfully'}, 201

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
            # Valid credentials, login successful
            return {'message': 'Login successful'}, 200
        else:
            # Invalid credentials
            return {'message': 'Invalid email or password'}, 401


if __name__ == '__main__':
    app.run(debug=True)
