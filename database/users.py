from connection import get_connection


def create_user(name, email, phone):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO Users (name, email, phone)
        VALUES (?, ?, ?)
    """, (name, email, phone))

    conn.commit()

    cursor.close()
    conn.close()

    print("✅ User created successfully")


def get_all_users():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT user_id, name, email, phone, created_at
        FROM Users
        ORDER BY user_id
    """)

    users = cursor.fetchall()

    cursor.close()
    conn.close()

    return users


if __name__ == "__main__":
    users = get_all_users()

    print("Users:")
    for user in users:
        print(user)