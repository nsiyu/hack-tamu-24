from server.api.user import user_api
from server.api.flight import flight_api

def SetupRoutes(app, api):
    api.add_namespace(user_api, path='/users')
    api.add_namespace(flight_api, path='/flights')
    api.init_app(app)