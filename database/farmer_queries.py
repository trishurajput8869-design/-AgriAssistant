from connection import get_connection


def save_farmer_query(user_id, query_text, response=None):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO FarmerQueries (user_id, query_text, response)
        VALUES (?, ?, ?)
    """, (user_id, query_text, response))

    conn.commit()

    cursor.close()
    conn.close()


def get_all_queries():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT query_id, user_id, query_text, response, created_at
        FROM FarmerQueries
        ORDER BY created_at DESC
    """)

    queries = cursor.fetchall()

    cursor.close()
    conn.close()

    return queries


def get_user_queries(user_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT query_id, query_text, response, created_at
        FROM FarmerQueries
        WHERE user_id = ?
        ORDER BY created_at DESC
    """, (user_id,))

    queries = cursor.fetchall()

    cursor.close()
    conn.close()

    return queries


if __name__ == "__main__":
    queries = get_all_queries()

    print("Farmer Queries:")

    for query in queries:
        print(query)