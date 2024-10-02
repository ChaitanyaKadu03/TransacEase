from pymongo_get_database import get_database
from bson.objectid import ObjectId

dbname = get_database()

statistics_collection = dbname["Statistics"]

def add_statistics_db(userId):
    statistics_collection.insert_one({
        "userId": ObjectId(userId),
        "thisWeek": 125,
        "thisMonth": 125,
        "credited": 0,
        "debited": 125,
        "total": -125,
    })
    
    return {
        "msg": "Statistics for the user is created"
    }
    
def update_statistics_db(userId, newStatistics):
    statistics_collection.find_one_and_update(
        {
            "userId": userId
        },
        {
            "$set": 
                {
                    newStatistics
                }   
        }
        )