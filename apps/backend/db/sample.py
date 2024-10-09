from db.transaction import find_transaction_db

response = find_transaction_db("66fd100c3ef9eb3a1f45a36f", 'h')

for document in response:
    print(document)