from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from db.user import add_user_db
from db.transaction import find_all_transaction_db, find_transaction_db, delete_transaction_db, delete_transactions_list_db, update_transaction_db
from db.userstatistics import update_statistics_db, get_statistics_db
from db.pymongo_get_database import get_database
from bson.json_util import dumps
from bson.objectid import ObjectId
import json

# from db. import create_user

# @csrf_exempt 

# Signup Route
def register_user(request):
    
    if request.method == 'POST':
         
        user_data = json.loads(request.body)
        
        dbname = get_database()
    
        user_collection = dbname["User"]
        
        newUser = {
            "email": user_data["email"],
            "password": user_data["password"],
            "firstname": user_data["firstname"],
            "lastname": user_data["lastname"],
        }
        
        userData = user_collection.find_one({
            "email": user_data["email"],
        })
        
        if userData:
            return JsonResponse({"msg": "User already exists", "success": False}, status=404)
        
        data = add_user_db(newUser)
        
        return JsonResponse(data, status=201)
        
        
# Signin Route
def signin_user(request):
    
    if request.method == 'GET':
         
        user_data = json.loads(request.body)
        
        dbname = get_database()
    
        user_collection = dbname["User"]
        
        userData = user_collection.find_one({
            "email": user_data["email"],
            "password": user_data["password"]
        })
                
        if userData:
            data = {
                "msg": "User found",
                "userId": str(userData["_id"]) 
            }
            return JsonResponse(data, status=200)
        
        else:  
            return JsonResponse({"msg": "User not found", "exists": False}, status=404)


# Transactions List Route
def all_transactions(request):
    
    if request.method == 'GET':
        
        user_input = json.loads(request.body)
        
        transactionsList = find_all_transaction_db(user_input['userId'])
        
        return JsonResponse({"transactionList": json.loads(dumps(transactionsList)), "success": True}, status=200)


# Search Transactions List Route
def find_a_transactions(request):
    
    if request.method == 'GET':
        
        user_input = json.loads(request.body)
        
        transactionsList = find_transaction_db(user_input['userId'], user_input['word'])
        
        return JsonResponse({"transactionList": json.loads(dumps(transactionsList)), "success": True}, status=201)


# Delete one transactionr route
def delete_transaction(request):
    
    if request.method == 'DELETE':
        
        user_input = json.loads(request.body)
        
        result = delete_transaction_db(user_input['transactionId'])
        
        return JsonResponse(result, status=200)


# Delete all transactions route
def delete_all_transaction(request):
    
    if request.method == 'DELETE':
        
        user_input = json.loads(request.body)
        
        result = delete_transactions_list_db(user_input['userId'])
        
        return JsonResponse(result, status=200)


# update transaction route
def update_transaction(request):
    
    if request.method == 'PUT':
        
        user_input = json.loads(request.body)
        
        result = update_transaction_db(user_input['transactionId'], user_input["newTransaction"])
        
        return JsonResponse(result, status=200)


# update statistics route
def update_statistics(request):
    
    if request.method == 'PUT':
        
        user_input = json.loads(request.body)
        
        result = update_statistics_db(user_input['userId'], user_input["newStatistics"])
        
        return JsonResponse(result, status=200)


# get statistics route
def get_statistics(request):
    
    if request.method == 'GET':
        
        user_input = json.loads(request.body)
        
        result = get_statistics_db(user_input['userId'])
        
        return JsonResponse(result, status=200)