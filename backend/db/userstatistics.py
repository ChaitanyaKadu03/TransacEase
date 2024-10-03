from db.pymongo_get_database import get_database
from bson.json_util import dumps
from bson.objectid import ObjectId
import json

dbname = get_database()

statistics_collection = dbname["Statistics"]

def add_statistics_db(userId):
    statistics_collection.insert_one({
        "userId": ObjectId(userId),
        "thisWeek": 125,
        "thisMonth": 125,
        "thisYear": 125,
        "credited": 125,
        "debited": 125,
        "total": 125,
    })
    
    return {
        "msg": "Statistics for the user is created"
    }
    
def update_statistics_db(userId, newStatistics):
     
    data = statistics_collection.find_one_and_update(
        {
            "userId": ObjectId(userId)
        },
        {
            "$set": newStatistics
        }
        )
    
    return {
        "msg": "Updated the statistics!"
    }
    
def get_statistics_db(userId):
     
    data = statistics_collection.find_one(
        {
            "userId": ObjectId(userId)
        }
    )
    
    return {
        "msg": "Found the statistics!",
        "data": json.loads(dumps(data)),
        "success": True
    }