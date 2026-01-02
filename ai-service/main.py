from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from models.llm_models import generate_text

app = FastAPI()

# ✅ Allow Next.js to call API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GenerateRequest(BaseModel):
    prompt: str
    tone: str
    length: str

@app.post("/generate")
def generate(req: GenerateRequest):
    output = generate_text(req.prompt, req.tone, req.length)
    return {"output": output}

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Service API"}