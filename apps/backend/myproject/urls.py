"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

urlpatterns = [
    path('api/auth/signup', views.register_user, name='register_user'),
    
    path('api/auth/signin', views.signin_user, name='signin_user'),
    
    path('api/transactions', views.all_transactions, name='all_transactions'),
    
    path('api/add-transaction', views.add_transaction, name='add_transactions'),
    
    path('api/transactions/search', views.find_a_transactions, name='search_transactions'),
    
    path('api/transaction/delete', views.delete_transaction, name='delete_transactions'),
    
    path('api/transactions/delete-all', views.delete_all_transaction, name='delete_all_transactions'),
    
    path('api/transaction/update', views.update_transaction , name='update_transaction'),
    
    path('api/statistics/update', views.update_statistics , name='update_statistics'),
    
    path('api/statistics', views.get_statistics , name='get_statistics'),
]
