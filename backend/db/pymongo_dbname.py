from db.pymongo_get_database import get_database

dbname = get_database()

user_collection = dbname["User"]
transaction_collection = dbname["Transaction"]
statistics_collection = dbname["Statistics"]



