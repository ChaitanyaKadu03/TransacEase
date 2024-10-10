from db.pymongo_get_database import get_database
from bson.objectid import ObjectId
from bson.json_util import dumps
import json

dbname = get_database()

transaction_collection = dbname["Transaction"]

def add_transaction_db(transaction):
    transaction_collection.insert_one(transaction)
    
    return {
        'msg': "New transaction added!",
        "success": True
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
        "msg": "Transaction Updated!",
        "success": True
    }
    
def delete_transaction_db(transactionId):
    result = transaction_collection.delete_one({"_id": ObjectId(transactionId)})
    
    if result.deleted_count == 1:
        return {
            "msg": "Transaction Deleted!",
            "success": True
        }
        
    return {
        "msg": "Failed to delete!",
        "success": False
    }
    
def delete_transactions_list_db(userId):
    transaction_collection.delete_many({"userId": ObjectId(userId)})
    
    return {
        "msg": "Transactions list Deleted!"
    }
    
def find_transaction_db(userId, word):
    searchList = transaction_collection.find(
        {
            "userId": ObjectId(userId), 
            "title": {"$regex": f"{word}", "$options": "i"}
        }
    ).limit( 5 )
    
    return searchList
    
def find_all_transaction_db(userId):
    
    searchList = transaction_collection.find(
        {
            "userId": ObjectId(userId), 
        }
    )
    
    return list(searchList)