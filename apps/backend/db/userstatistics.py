from db.pymongo_get_database import get_database
from bson.json_util import dumps
from bson.objectid import ObjectId
import json

dbname = get_database()

statistics_collection = dbname["Statistics"]

def add_statistics_db(email):
    statistics_collection.insert_one({
        "email": email,
        "total": 125,
        "credited": 125,
        "debited": 125,
        "purchase": 125,
        "investment": 125,
        "income": 125,
        "savings": 125,
        "total_count": 2,
        "credited_count": 2,
        "debited_count": 2,
    })
    
    return {
        "msg": "Statistics for the user is created"
    }
    
def update_statistics_db(email, newStatistics):
     
    data = statistics_collection.find_one_and_update(
        {
            "email": email
        },
        {
            "$set": newStatistics
        }
        )
    
    return {
        "msg": "Updated the statistics!",
        "success": True
    }
    
def get_statistics_db(email):
     
    data = statistics_collection.find_one(
        {
            "email": email
        }
    )
    
    return {
        "msg": "Found the statistics!",
        "data": json.loads(dumps(data)),
        "success": True
    }
    
def calculate_statistics(email):
    
    transaction_collection = dbname["Transaction"]
    
    data = transaction_collection.find({'email':email})
    
    total = 0
    total_count = 0
    
    credited = 0
    credited_count = 0
    
    debited = 0
    debited_count = 0
    
    purchase = 0
    
    investment = 0
    
    income = 0
    
    savings = 0
    
    for transaction in data:
        
        print(transaction)
        
        total = total + transaction['amount']

        total_count = total_count + 1
        
        if (transaction['type'] == "CREDITED"):
            
            credited = credited + transaction['amount']

            credited_count = credited_count + 1
        
        if (transaction['type'] == "DEBITED"):
            
            debited = debited + transaction['amount']

            debited_count = debited_count + 1
        
        if (transaction['category'] == "purchase"):
            
            purchase = purchase + transaction['amount']
        
        if (transaction['category'] == "investment"):
            
            investment = investment + transaction['amount']
        
        if (transaction['category'] == "income"):
            
            income = income + transaction['amount']
        
        if (transaction['category'] == "savings"):
            
            savings = savings + transaction['amount']
            
    result = {'total': total , 'credited': credited, 'debited': debited, 'purchase': purchase, 'investment': investment, 'income': income, 'savings': savings, 'total_count': total_count , 'credited_count': credited_count , 'debited_count': debited_count}
    
    return result         
    