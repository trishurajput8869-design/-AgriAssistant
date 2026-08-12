from fastapi import APIRouter
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

API_KEY = os.getenv("WEATHER_API_KEY")


@router.get("/")
def get_weather():

    return {
        "message": "Weather API connected",
        "api_key_status": API_KEY
    }