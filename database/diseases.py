from connection import get_connection


def get_diseases_by_crop(crop_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT disease_id, disease_name
        FROM Diseases
        WHERE crop_id = ?
        ORDER BY disease_id
    """, (crop_id,))

    diseases = cursor.fetchall()

    cursor.close()
    conn.close()

    return diseases


if __name__ == "__main__":
    crop_id = 13  # Tomato

    diseases = get_diseases_by_crop(crop_id)

    for disease in diseases:
        print(disease)