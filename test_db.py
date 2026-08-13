import pyodbc

try:
    conn = pyodbc.connect(
        r"DRIVER={ODBC Driver 17 for SQL Server};"
        r"SERVER=np:\\.\pipe\sql\query;"
        r"DATABASE=AgriAssistDB;"
        r"Trusted_Connection=yes;"
    )

    print("✅ Connected Successfully")

except Exception as e:
    print(e)