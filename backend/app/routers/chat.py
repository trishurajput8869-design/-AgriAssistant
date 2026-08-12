from fastapi import APIRouter
from pydantic import BaseModel

from app.services.ai_service import ask_ai

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
async def chat(data: ChatRequest):
    reply = ask_ai(data.message)

    return {
        "response": reply
    }