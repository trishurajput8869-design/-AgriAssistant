import pyodbc


def get_connection():
    connection = pyodbc.connect(
        r"DRIVER={ODBC Driver 17 for SQL Server};"
        r"SERVER=np:\\.\pipe\sql\query;"
        r"DATABASE=AgriAssistDB;"
        r"Trusted_Connection=yes;"
    )

    return connection