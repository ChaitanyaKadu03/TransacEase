from pymongo import MongoClient

def get_database():
    
    CONNECTING_STRING = "mongodb://localhost:27017/"
    
    client = MongoClient(CONNECTING_STRING)
    
    return client["TransacEase"]
    
if __name__ == "__main__":
    
    dbname = get_database()