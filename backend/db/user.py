from db.pymongo_get_database import get_database
from db.transaction import add_transaction_db, delete_transaction_db
from db.userstatistics import add_statistics_db
from bson.objectid import ObjectId
import datetime

dbname = get_database()
    
user_collection = dbname["User"]

    
def add_user_db(user):
    newUser = user_collection.insert_one(user)
    
    sampleTransaction = {
        "userId": newUser.inserted_id,
        "title": "Bought a new book",
        "description": "Harry potter: A curse child is now in my bag. All thanks to mom.",
        "type": "DEBITED",
        "category": "purchase",
        "date": datetime.datetime.now(),
        "amount": 825,
        "currency": "₹",
        "proof": None,
        "paymentType": "Cash"
    }
    
    add_transaction_db(sampleTransaction)
    
    add_statistics_db(newUser.inserted_id)
    
    return {
        "msg": "User Added Successfully",
        "userId": str(newUser.inserted_id),
        "success": True,
    }

def update_user_db(userId,newuser):
    user_collection.find_one_and_update(
        {
            "_id": userId,
        }, 
        {
            "$set" : newuser    
        })
    
    return {
        "msg": "Updated successfully!"
    }

def delete_user_db(userId):
    user_collection.find_one_and_delete({'_id': ObjectId(userId)})
    
    delete_transaction_db(userId)
    
    return {
        "msg": "Deleted successfully!",
    }