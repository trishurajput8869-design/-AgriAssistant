from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os
import base64


# ==========================
# Environment
# ==========================

load_dotenv()


# ==========================
# Groq Client
# ==========================

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)



# ==========================
# FastAPI App
# ==========================

app = FastAPI(
    title="AgriAssist AI",
    version="3.0.0",
    description="AI Smart Farming Assistant"
)



# ==========================
# CORS
# ==========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# ==========================
# Home
# ==========================

@app.get("/")
def home():

    return {
        "message":"🌱 AgriAssist AI Running"
    }



# ==========================
# Health
# ==========================

@app.get("/health")
def health():

    return {
        "status":"healthy"
    }



# ==========================
# Check Groq Models
# ==========================

@app.get("/models")
def models():

    available_models = client.models.list()

    return {

        "models":[
            model.id 
            for model in available_models.data
        ]

    }




# ==========================
# Chat Schema
# ==========================

class ChatRequest(BaseModel):

    message:str



# ==========================
# Text Chat
# ==========================

@app.post("/chat")
async def chat(request:ChatRequest):

    try:


        response = client.chat.completions.create(

            model="llama-3.3-70b-versatile",

            messages=[

                {
                    "role":"system",

                    "content":
                    """
You are AgriAssist AI.

You are an agriculture expert.

Help farmers with:
- Crop diseases
- Pest problems
- Fertilizers
- Irrigation
- Soil
- Farming techniques

Reply in simple Hindi.
Give practical bullet point solutions.
"""
                },


                {
                    "role":"user",

                    "content":request.message
                }

            ],

            temperature=0.4

        )


        return {

            "success":True,

            "response":
            response.choices[0].message.content

        }



    except Exception as e:


        return {

            "success":False,

            "error":str(e)

        }





# ==========================
# Image Upload
# ==========================

@app.post("/predict")
async def predict(file:UploadFile = File(...)):

    try:

        image_data = await file.read()


        base64_image = base64.b64encode(
            image_data
        ).decode("utf-8")



        # Temporary response
        # Vision model connect after checking Groq models


        return {

            "success":True,

            "filename":file.filename,

            "message":
            "Image received successfully 🌱",

            "prediction":
            """
Image upload ho gayi hai.

Next step:
Vision AI model connect karke
crop disease prediction activate karenge.
"""

        }



    except Exception as e:


        return {

            "success":False,

            "error":str(e)

        }