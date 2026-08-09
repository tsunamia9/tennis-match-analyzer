import os
from pathlib import Path

import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

app = FastAPI(
    title="Tennis Match Analyzer API",
    description="Backend for the Tennis Match Analyzer",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")

RAPIDAPI_HOST = (
    "tennis-api-atp-wta-itf.p.rapidapi.com"
)

BASE_DIR = (
    Path(__file__).resolve().parent.parent
)


@app.get("/")
def home():
    return {
        "message":
            "Tennis Match Analyzer API is running 🎾",
        "status": "online",
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "tennis-match-analyzer",
    }


@app.get("/api/test")
async def api_test():

    if not RAPIDAPI_KEY:
        raise HTTPException(
            status_code=500,
            detail="RAPIDAPI_KEY is not configured",
        )

    return {
        "status": "API key detected",
        "message":
            "Backend is ready to connect to tennis data 🎾",
    }


@app.get("/api/player/{player_name}")
async def get_player(player_name: str):

    if not RAPIDAPI_KEY:
        raise HTTPException(
            status_code=500,
            detail="RAPIDAPI_KEY is not configured",
        )

    url = (
        f"https://{RAPIDAPI_HOST}"
        f"/tennis/v2/ms-api/profile/"
        f"{player_name}"
    )

    headers = {
        "Content-Type": "application/json",
        "x-rapidapi-host": RAPIDAPI_HOST,
        "x-rapidapi-key": RAPIDAPI_KEY,
    }

    try:

        async with httpx.AsyncClient(
            timeout=15
        ) as client:

            response = await client.get(
                url,
                headers=headers,
            )

        if response.status_code != 200:

            raise HTTPException(
                status_code=response.status_code,
                detail=response.text,
            )

        return response.json()

    except httpx.RequestError as error:

        raise HTTPException(
            status_code=500,
            detail=f"Connection error: {str(error)}",
        )


@app.get("/app")
def frontend():

    return FileResponse(
        BASE_DIR / "index.html"
    )


@app.get("/script.js")
def javascript():

    return FileResponse(
        BASE_DIR / "script.js"
    )