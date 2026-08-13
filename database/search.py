from connection import get_connection


def search_crop(crop_name):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT crop_id, crop_name, season
        FROM Crops
        WHERE crop_name LIKE ?
    """, (f"%{crop_name}%",))

    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return results


def search_disease(disease_name):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            d.disease_id,
            d.disease_name,
            c.crop_name
        FROM Diseases d
        JOIN Crops c
            ON d.crop_id = c.crop_id
        WHERE d.disease_name LIKE ?
    """, (f"%{disease_name}%",))

    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return results


def get_diseases_by_crop_name(crop_name):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            c.crop_name,
            d.disease_id,
            d.disease_name
        FROM Crops c
        JOIN Diseases d
            ON c.crop_id = d.crop_id
        WHERE c.crop_name = ?
        ORDER BY d.disease_id
    """, (crop_name,))

    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return results


if __name__ == "__main__":

    print("Crop Search:")
    for crop in search_crop("Tom"):
        print(crop)

    print("\nDisease Search:")
    for disease in search_disease("Early"):
        print(disease)

    print("\nTomato Diseases:")
    for disease in get_diseases_by_crop_name("Tomato"):
        print(disease)