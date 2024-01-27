from flask import Flask
from api.routes import SetupRoutes
from flask_cors import CORS
from flask_restx import Api


app = Flask(__name__)
api = Api(title='HackTamu API', version='1.0', description='API Documentation')
CORS(app)
SetupRoutes(app, api)

if __name__ == '__main__':
    app.run()