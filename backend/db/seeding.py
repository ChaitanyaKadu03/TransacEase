from db.pymongo_get_database import get_database
from user import add_user_db

dbname = get_database()

user_collection = dbname["User"]
        
userSampleInfo = [
    {
        "email": "arun.kumar@example.com",
        "password": "hashed_password_1",
        "firstname": "Arun",
        "lastname": "Kumar"
    },
    {
        "email": "geeta.patel@example.com",
        "password": "hashed_password_2",
        "firstname": "Geeta",
        "lastname": "Patel"
    },
    {
        "email": "rajesh.nair@example.com",
        "password": "hashed_password_3",
        "firstname": "Rajesh",
        "lastname": "Nair"
    },
    {
        "email": "lakshmi.sharma@example.com",
        "password": "hashed_password_4",
        "firstname": "Lakshmi",
        "lastname": "Sharma"
    },
    {
        "email": "anil.singh@example.com",
        "password": "hashed_password_5",
        "firstname": "Anil",
        "lastname": "Singh"
    },
    {
        "email": "deepa.rao@example.com",
        "password": "hashed_password_6",
        "firstname": "Deepa",
        "lastname": "Rao"
    },
    {
        "email": "priya.iyer@example.com",
        "password": "hashed_password_7",
        "firstname": "Priya",
        "lastname": "Iyer"
    },
    {
        "email": "vijay.verma@example.com",
        "password": "hashed_password_8",
        "firstname": "Vijay",
        "lastname": "Verma"
    },
    {
        "email": "neha.joshi@example.com",
        "password": "hashed_password_9",
        "firstname": "Neha",
        "lastname": "Joshi"
    },
    {
        "email": "ajay.sen@example.com",
        "password": "hashed_password_10",
        "firstname": "Ajay",
        "lastname": "Sen"
    },
    {
        "email": "sunita.das@example.com",
        "password": "hashed_password_11",
        "firstname": "Sunita",
        "lastname": "Das"
    },
    {
        "email": "manish.mehra@example.com",
        "password": "hashed_password_12",
        "firstname": "Manish",
        "lastname": "Mehra"
    }
]

for UserInfo in userSampleInfo:
    response = add_user_db(UserInfo)
    
    print(response)