from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.chat import router as chat_router
from app.routers.predict import router as predict_router
from app.routers.upload import router as upload_router

app = FastAPI(
    title="AgriAssist AI"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AgriAssist Backend Running"
    }


@app.get("/health")
def health():
    return {
        "status": "OK"
    }


# Routers
app.include_router(chat_router)
app.include_router(predict_router)
app.include_router(upload_router)