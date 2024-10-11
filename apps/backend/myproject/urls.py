from django.urls import path
from . import views

urlpatterns = [
    # path('api/auth/research', views.research, name='research'),
    
    path('api/auth/signup', views.register_user, name='register_user'),
    
    path('api/auth/signin', views.signin_user, name='signin_user'),
    
    path('api/transactions', views.all_transactions, name='all_transactions'),
    
    path('api/add-transaction', views.add_transaction, name='add_transactions'),
    
    path('api/transactions/find', views.find_one_transactions, name='find_transactions'),
    
    path('api/transactions/search', views.find_a_transactions, name='search_transactions'),
    
    path('api/transaction/delete', views.delete_transaction, name='delete_transactions'),
    
    path('api/transactions/delete-all', views.delete_all_transaction, name='delete_all_transactions'),
    
    path('api/transaction/update', views.update_transaction , name='update_transaction'),
    
    path('api/statistics/update', views.update_statistics , name='update_statistics'),
    
    path('api/statistics', views.get_statistics , name='get_statistics'),
    
    path('api/statistics/data', views.get_statistics_data , name='get_statistics_data'),
]
