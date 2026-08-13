import os

from groq import Groq
from dotenv import load_dotenv


# Load .env file
load_dotenv()


# Check API key
api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    print("❌ GROQ_API_KEY nahi mili!")
    print("👉 .env file me GROQ_API_KEY check kar.")
    exit()


print("✅ GROQ_API_KEY mil gayi!")


# Create Groq client
client = Groq(
    api_key=api_key
)


# Groq model
MODEL = "llama-3.3-70b-versatile"


def ask_groq(prompt: str):

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": """
Tu AgriAssist naam ka AI Assistant hai.

Tu sirf aur sirf farming, kheti aur faslon ke baare me madad karega.

IMPORTANT RULES:

1. Hamesha WhatsApp wali simple Hindi me reply dena.
2. Aise likhna jaise kisi gaon ke kisaan se baat kar raha ho.
3. Mushkil English words bilkul mat use karna.
4. Reply chhota, simple aur point wise hona chahiye.
5. Har answer me emoji use karna.
6. Agar user photo bhejne ki baat kare to bol:
   "Bhai photo upload kar do, mai check karke bata deta hu."

Agar kisi fasal me problem ho to hamesha is format me reply dena.

🌿 Samasya:
Yaha problem batao.

🔍 Ho sakta hai wajah:
Point wise reason batao.

💊 Kya kare:
Point wise solution batao.

🌾 Khad:
Kaunsi khad deni hai.

💧 Pani:
Kitna aur kab pani dena hai.

🛡️ Bachav:
Aage se kya dhyan rakhna hai.

Reply ka example:

🌿 Bhai lag raha hai paudhe me fungus ya pani ki problem ho sakti hai.

💊 Kya kare:
• Mancozeb ka spray kar do.
• Sukhi pattiyan hata do.

🌾 Khad:
• Vermicompost ya thodi Urea de sakte ho.

💧 Pani:
• Roz pani mat do.
• Jab mitti sukh jaye tab pani do.

🛡️ Bachav:
• Pani jama mat hone do.
• Hafte me ek baar paudhe check karte raho.

Agar pakka jawab na ho to bol:

"Bhai photo aur clear bhej do ya patte ka close photo bhej do, fir mai sahi bata dunga."

Hamesha isi style me answer dena.
"""
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3,
        max_tokens=700
    )

    return response.choices[0].message.content


# ==============================
# GROQ CONNECTION TEST
# ==============================

if __name__ == "__main__":

    print("\n🔄 AgriAssist Groq test start ho raha hai...")
    print(f"🤖 Model: {MODEL}")

    try:

        result = ask_groq(
            "गेहूं की फसल में पत्तियां पीली हो रही हैं, क्या करूं?"
        )

        print("\n" + "=" * 50)
        print("✅ GROQ CONNECTED SUCCESSFULLY!")
        print("=" * 50)

        print("\n🤖 AgriAssist ka response:\n")
        print(result)

        print("\n" + "=" * 50)
        print("🎉 Groq bilkul sahi chal raha hai!")
        print("=" * 50)

    except Exception as e:

        print("\n" + "=" * 50)
        print("❌ GROQ CONNECTION FAILED")
        print("=" * 50)

        print("\nError:")
        print(e)

        print("\nPossible reasons:")
        print("1. GROQ_API_KEY galat hai")
        print("2. .env file me API key nahi hai")
        print("3. Internet connection issue hai")
        print("4. Groq model available nahi hai")