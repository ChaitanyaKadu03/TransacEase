from django.http import JsonResponse
from db.user import add_user_db
from db.transaction import add_transaction_db
from db.transaction import find_all_transaction_db, find_transaction_db, delete_transaction_db, delete_transactions_list_db, update_transaction_db, find_one_transaction_db, get_transaction_statistics
from db.userstatistics import update_statistics_db, get_statistics_db, calculate_statistics
from db.pymongo_get_database import get_database
from bson.json_util import dumps
from bson.objectid import ObjectId
import json
import jwt

# from db. import create_user
from django.views.decorators.csrf import csrf_exempt

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
            return JsonResponse({"msg": "User already exists", "success": False}, status=400)
        
        data = add_user_db(newUser)
        
        return JsonResponse(data, status=201)
        
        
# Signin Route
def signin_user(request):
    
    if request.method == 'GET':
         
        email = request.GET.get('email')
        
        password = request.GET.get('password')
        
        dbname = get_database()
    
        user_collection = dbname["User"]
        
        userData = user_collection.find_one({
            "email": email,
            "password": password
        })
                
        if userData:
            data = {
                "msg": "User found",
                "success": True 
            }
            return JsonResponse(data, status=200)
        
        else:  
            return JsonResponse({"msg": "User not found", "success": False}, status=200)
        
        
# Add transaction Route
def add_transaction(request):
    
    if request.method == 'POST':
         
        transaction = json.loads(request.body)
        
        newTransaction = {
        "email": transaction["email"],
        "title": transaction["title"],
        "description": transaction["description"],
        "type": transaction["type"],
        "category": transaction["category"],
        "date": transaction["date"],
        "amount": transaction["amount"],
        "currency": transaction["currency"],
        "proof": transaction["proof"],
        "paymentType": transaction["paymentType"]
        }
        
        result = add_transaction_db(newTransaction)
        
        print(result["success"])
        
        if result["success"]:
            return JsonResponse(result, status=201)
            
        return JsonResponse({"msg": "Failed!", "success": False}, status=400)


# Transactions List Route
def all_transactions(request):
    
    if request.method == 'GET':
        
        email = request.GET.get('email')
        
        transactionsList = find_all_transaction_db(email)
        
        return JsonResponse({"transactionList": json.loads(dumps(transactionsList)), "success": True}, status=200)


# Search Transactions List Route
def find_a_transactions(request):
    
    if request.method == 'GET':
        
        email = request.GET.get('email')
        
        input_word = request.GET.get('word')
                
        transactionsList = find_transaction_db(email, input_word)
        
        return JsonResponse({"transactionList": json.loads(dumps(transactionsList)), "success": True}, status=201)

# Find One Transactions List Route
def find_one_transactions(request):
    
    if request.method == 'GET':
              
        transactionId = request.GET.get('transactionId')
                
        transactionsList = find_one_transaction_db(transactionId)
        
        return JsonResponse({"transactionList": json.loads(dumps(transactionsList)), "success": True}, status=201)


# Delete one transactionr route
def delete_transaction(request):
    
    if request.method == 'POST':
        
        user_input = json.loads(request.body)
        
        result = delete_transaction_db(user_input['transactionId'])
        
        return JsonResponse(result, status=200)


# Delete all transactions route
def delete_all_transaction(request):
    
    if request.method == 'DELETE':
        
        user_input = json.loads(request.body)
        
        result = delete_transactions_list_db(user_input['email'])
        
        return JsonResponse(result, status=200)


# update transaction route
def update_transaction(request):
    
    if request.method == 'PUT':
        
        user_input = json.loads(request.body)
        
        print(user_input['transactionId'])
        
        result = update_transaction_db(user_input['transactionId'], user_input["newTransaction"])
        
        return JsonResponse(result, status=200)


# update statistics route
def update_statistics(request):
    
    if request.method == 'PUT':
        
        user_input = json.loads(request.body)
        
        result = update_statistics_db(user_input['email'], user_input["newStatistics"])
        
        return JsonResponse(result, status=200)


# get statistics route
def get_statistics(request):
    
    if request.method == 'GET':
        
        email = request.GET.get('email')
        
        result = get_statistics_db(email)
        
        return JsonResponse(result, status=200)
    
def get_statistics_data(request):
    
    if request.method == "GET":
        
        email = request.GET.get('email')
        
        result = calculate_statistics(email)
        
        return JsonResponse({'result':result, 'success': True}, status=200)