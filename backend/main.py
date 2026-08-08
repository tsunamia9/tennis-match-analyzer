from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Tennis Match Analyzer API",
    description="Backend for the Tennis Match Analyzer",
    version="1.0.0"
)

# Allow the GitHub Pages frontend to communicate
# with the backend during development.
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
def get_players():
    return {
        "players": [
            {
                "name": "Carlos Alcaraz",
                "country": "Spain",
                "country_code": "ES",
                "ranking": 1
            },
            {
                "name": "Jannik Sinner",
                "country": "Italy",
                "country_code": "IT",
                "ranking": 2
            },
            {
                "name": "Novak Djokovic",
                "country": "Serbia",
                "country_code": "RS",
                "ranking": 3
            },
            {
                "name": "Alexander Zverev",
                "country": "Germany",
                "country_code": "DE",
                "ranking": 4
            }
        ]
    }
