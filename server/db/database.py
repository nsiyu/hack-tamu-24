from pymongo import MongoClient
import os
MONGODB_URI = os.environ.get("MONGO_URI")
client = MongoClient()

def get_db():
    db_uri = MONGODB_URI
    client = MongoClient(db_uri)
    db_name = db_uri.split('/')[-1]
    return client[db_name]

def close_db(e=None):
    client.close()