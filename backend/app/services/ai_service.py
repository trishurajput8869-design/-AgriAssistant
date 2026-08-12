from groq import Groq
from dotenv import dotenv_values
from app.services.prompt import SYSTEM_PROMPT

config = dotenv_values(".env")

client = Groq(
    api_key=config["GROQ_API_KEY"]
)


def ask_ai(message: str):
    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": message
            }
        ]
    )

    return response.choices[0].message.content