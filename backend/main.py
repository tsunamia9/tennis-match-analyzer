from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import httpx

app = FastAPI(
    title="Tennis Match Analyzer API",
    description="Backend for the Tennis Match Analyzer",
    version="1.0.0"
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
        "message": "Tennis Match Analyzer API is running 🎾",
        "status": "online"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "tennis-match-analyzer"
    }


@app.get("/api/players")
async def get_players():
    api_key = os.getenv("RAPIDAPI_KEY")

    if not api_key:
        return {
            "error": "RAPIDAPI_KEY is not configured",
            "players": []
        }

    url = "https://tennis-api-atp-wta-itf.p.rapidapi.com"

    headers = {
        "x-rapidapi-key": api_key,
        "x-rapidapi-host": "tennis-api-atp-wta-itf.p.rapidapi.com"
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                url,
                headers=headers,
                timeout=10
            )

        return {
            "status_code": response.status_code,
            "data": response.json()
        }

    except Exception as error:
        return {
            "error": str(error),
            "players": []
        }
