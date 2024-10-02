from pymongo_get_database import get_database
from bson.objectid import ObjectId

dbname = get_database()

transaction_collection = dbname["Transaction"]

def add_transaction_db(transaction):
    transaction_collection.insert_one(transaction)
    
    return {
        'msg': "New transaction added!"
    }
    
def update_transaction_db(transactionId, newTransaction):
    transaction_collection.find_one_and_update(
        {
            "_id": ObjectId(transactionId)
        }, 
        {
            "$set": newTransaction
        }
    )
    
    return {
        "msg": "Transaction Updated!"
    }
    
def delete_transaction_db(transactionId):
    transaction_collection.delete_one({"_id": ObjectId(transactionId)})
    
    return {
        "msg": "Transaction Deleted!"
    }
    
def find_transaction_db(userId, word):
    searchList = transaction_collection.find(
        {
            "_id": ObjectId(userId), 
            "title": {"$regex": f"{word}", "$options": "i"}
        }
    ).limit( 5 )

    
    return searchList