from connection import get_connection


def get_all_crops():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT crop_id, crop_name, season
        FROM Crops
        ORDER BY crop_id
    """)

    crops = cursor.fetchall()

    cursor.close()
    conn.close()

    return crops


if __name__ == "__main__":
    crops = get_all_crops()

    for crop in crops:
        print(crop)