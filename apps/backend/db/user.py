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
        "email": user['email'],
        "title": "Bought a new book",
        "description": "Harry potter: A curse child is now in my bag. All thanks to mom.",
        "type": "DEBITED",
        "category": "purchase",
        "date": "2024-10-11T21:32:57.484Z",
        "amount": 825,
        "currency": "₹",
        "proof": "12-234-5678-765",
        "paymentType": "Cash"
    }
    
    add_transaction_db(sampleTransaction)
    
    add_statistics_db(user["email"])
    
    return {
        "msg": "User Added Successfully",
        "email": user['email'],
        "success": True,
    }

def update_user_db(email,newuser):
    user_collection.find_one_and_update(
        {
            "_id": email,
        }, 
        {
            "$set" : newuser    
        })
    
    return {
        "msg": "Updated successfully!"
    }

def delete_user_db(email):
    user_collection.find_one_and_delete({'email': email})
    
    delete_transaction_db(email)
    
    return {
        "msg": "Deleted successfully!",
    }