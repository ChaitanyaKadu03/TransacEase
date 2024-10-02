from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from db.user import delete_user_db
import json
# from db. import create_user

@csrf_exempt 
def register_user(request):
    
    if request.method == 'POST': 
        
        user_data = json.loads(request.body)
        
        delete_user_db(user_data["userId"])
        
        return JsonResponse({"message": "Hare Krishna"}, status=201)
        
