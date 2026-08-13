from connection import get_connection


def save_prediction(user_id, crop_id, disease_id, confidence):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO Predictions
        (user_id, crop_id, disease_id, confidence)
        VALUES (?, ?, ?, ?)
    """, (user_id, crop_id, disease_id, confidence))

    conn.commit()

    cursor.close()
    conn.close()

    print("✅ Prediction saved successfully")


def get_prediction(prediction_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            p.prediction_id,
            u.name,
            c.crop_name,
            d.disease_name,
            p.confidence,
            p.predicted_at
        FROM Predictions p
        JOIN Users u
            ON p.user_id = u.user_id
        JOIN Crops c
            ON p.crop_id = c.crop_id
        JOIN Diseases d
            ON p.disease_id = d.disease_id
        WHERE p.prediction_id = ?
    """, (prediction_id,))

    prediction = cursor.fetchone()

    cursor.close()
    conn.close()

    return prediction


def get_user_predictions(user_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            p.prediction_id,
            c.crop_name,
            d.disease_name,
            p.confidence,
            p.predicted_at
        FROM Predictions p
        JOIN Crops c
            ON p.crop_id = c.crop_id
        JOIN Diseases d
            ON p.disease_id = d.disease_id
        WHERE p.user_id = ?
        ORDER BY p.predicted_at DESC
    """, (user_id,))

    predictions = cursor.fetchall()

    cursor.close()
    conn.close()

    return predictions


def get_prediction_history(user_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            h.history_id,
            c.crop_name,
            d.disease_name,
            p.confidence,
            h.created_at
        FROM PredictionHistory h
        JOIN Predictions p
            ON h.prediction_id = p.prediction_id
        JOIN Crops c
            ON p.crop_id = c.crop_id
        JOIN Diseases d
            ON p.disease_id = d.disease_id
        WHERE h.user_id = ?
        ORDER BY h.created_at DESC
    """, (user_id,))

    history = cursor.fetchall()

    cursor.close()
    conn.close()

    return history


if __name__ == "__main__":
    predictions = get_user_predictions(1)

    print("Predictions:")

    for prediction in predictions:
        print(prediction)
        
        