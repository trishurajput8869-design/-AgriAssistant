import os
import uuid
from pathlib import Path

from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter()

# Allowed extensions and content types
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png"}
ALLOWED_CONTENT_TYPES = {"image/jpeg", "image/jpg", "image/png"}

# Upload directory (relative to backend/)
UPLOAD_DIR = Path("static/uploads")


def ensure_upload_dir() -> None:
    """Create the upload directory if it doesn't exist."""
    UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    """
    Accepts a leaf image (JPG/JPEG/PNG), validates it,
    and saves it with a unique filename.
    NOTE: This endpoint only stores the image. It does NOT run
    any prediction — that will be handled later by /predict
    once the ML model is integrated.
    """

    # --- 1. Validate extension ---
    original_filename = file.filename or ""
    ext = Path(original_filename).suffix.lower()

    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported file type '{ext}'. Allowed types: JPG, JPEG, PNG.",
        )

    # --- 2. Validate content type (extra safety check) ---
    if file.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported content type '{file.content_type}'. Allowed: JPG, JPEG, PNG.",
        )

    # --- 3. Read file contents ---
    contents = await file.read()

    # --- 4. Reject empty files ---
    if not contents or len(contents) == 0:
        raise HTTPException(status_code=400, detail="Uploaded file is empty.")

    # --- 5. Ensure upload directory exists ---
    ensure_upload_dir()

    # --- 6. Generate unique filename ---
    unique_filename = f"{uuid.uuid4().hex}{ext}"
    save_path = UPLOAD_DIR / unique_filename

    # --- 7. Save file to disk ---
    try:
        with open(save_path, "wb") as f:
            f.write(contents)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to save file: {str(e)}"
        )

    # --- 8. Build response ---
    file_url = f"/static/uploads/{unique_filename}"

    return {
        "success": True,
        "original_filename": original_filename,
        "saved_filename": unique_filename,
        "file_path": str(save_path).replace("\\", "/"),
        "file_url": file_url,
        "message": "Image uploaded successfully. Prediction not yet implemented.",
    }