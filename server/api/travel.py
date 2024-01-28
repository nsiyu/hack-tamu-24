from flask_restx import Namespace, Resource, fields
from flask import request, jsonify
import requests
import json
from openai import OpenAI

client = OpenAI(api_key='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')

# Assuming you have set up the namespace and other imports as before

travel_api = Namespace('travel', description='Travel itinerary operations')

preferences_model = travel_api.model('Preferences', {
    'destination': fields.String(required=True, description='Travel Destination'),
})


@travel_api.route('/generate-itinerary', methods=['POST'])
class GenerateItineraryResource(Resource):
    @travel_api.doc('generate-itinerary')
    @travel_api.expect(preferences_model)
    @travel_api.response(200, 'Itinerary generated successfully')
    def post(self):
        data = request.get_json()
        destination = data['destination']

        prompt = f"Create a list of specific food recommendations and locations to visit in {destination}. Format the response as 'food:[list]' each item should have the price rating ($, $$, $$$) and address and ratings. And also 'destionation:[list]' each item should have the"

        gpt_response = client.chat.completions.create(
            model="gpt-3.5-turbo-1106",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )

        if gpt_response:
            itinerary = gpt_response.choices[0].message.content
            return {'itinerary': itinerary}, 200
        else:
            return {'message': 'Error generating itinerary'}, 404