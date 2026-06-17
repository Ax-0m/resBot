from dotenv import load_dotenv
from fastapi import FastAPI

load_dotenv()

app = FastAPI(title="ResBot")

@app.get("/health")
def health():
    return {"status": "ok", "service": "ai-serivce"}