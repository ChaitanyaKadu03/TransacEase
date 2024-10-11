from db.pymongo_get_database import get_database
from bson.objectid import ObjectId
from bson.json_util import dumps
import json
import datetime
from bson import ObjectId

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
    
def delete_transactions_list_db(email):
    transaction_collection.delete_many({"email": email})
    
    return {
        "msg": "Transactions list Deleted!"
    }
    
def find_transaction_db(email, word):
    searchList = transaction_collection.find(
        {
            "email": email, 
            "title": {"$regex": f"{word}", "$options": "i"}
        }
    ).limit( 5 )
    
    return searchList
    
def find_one_transaction_db(transactionId):
    searchList = transaction_collection.find_one(
        {
            "_id": ObjectId(transactionId), 
        }
    )
    
    return searchList
    
def find_all_transaction_db(email):
    
    searchList = transaction_collection.find(
        {
            "email": email, 
        }
    )
    
    return list(searchList)

def get_transaction_statistics(email):

    now = datetime.datetime.now()
    
    # Calculate start of this week (assuming week starts on Monday)
    week_start = now - datetime.timedelta(days=now.weekday())
    # Calculate start of this month
    month_start = now.replace(day=1)

    # Fetch transactions for the current user
    transactions = list(transaction_collection.find({"email": email}))

    if not transactions:
        return {
            "avg_amount_week": 0,
            "avg_amount_month": 0,
            "total_credited": 0,
            "total_debited": 0,
            "total_amount": 0
        }

    # Initialize variables
    total_credited = 0
    total_debited = 0
    total_amount = 0
    week_transactions = []
    month_transactions = []

    # Loop through all transactions for the user
    for transaction in transactions:
        # Add up total credited and debited amounts
        if transaction["type"] == "CREDITED":
            total_credited += transaction["amount"]
        elif transaction["type"] == "DEBITED":
            total_debited += transaction["amount"]

        # Add to total amount
        total_amount += transaction["amount"]

        # Filter transactions for this week and this month
        if transaction["date"] >= week_start:
            week_transactions.append(transaction["amount"])
        if transaction["date"] >= month_start:
            month_transactions.append(transaction["amount"])

    # Calculate average for week and month
    avg_amount_week = sum(week_transactions) / len(week_transactions) if week_transactions else 0
    avg_amount_month = sum(month_transactions) / len(month_transactions) if month_transactions else 0

    # Prepare the result
    stats = {
        "avg_amount_week": avg_amount_week,
        "avg_amount_month": avg_amount_month,
        "total_credited": total_credited,
        "total_debited": total_debited,
        "total_amount": total_amount
    }

    return stats