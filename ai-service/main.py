from fastapi import FastAPI
from pydantic import BaseModel
from models.llm_models import generate_text

app = FastAPI()

class GenerateRequest(BaseModel):
    prompt: str

@app.post("/generate")
def generate(req: GenerateRequest):
    response = generate_text(req.prompt)
    return {
        "prompt": req.prompt,
        "response": response
    }

@app.get("/")
def health():
    return {"status": "AI service running 🚀"}
