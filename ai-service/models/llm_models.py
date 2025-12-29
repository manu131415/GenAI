from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

MODEL_NAME = "google/flan-t5-base"

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME)

def generate_text(prompt: str, tone: str, length: str) -> str:
    # Combine all three inputs into one instruction
    final_prompt = (
        f"Write a {length} response in a {tone} tone.\n"
        f"Topic: {prompt}"
    )

    inputs = tokenizer(final_prompt, return_tensors="pt")

    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=150,
            temperature=0.7,
            do_sample=True
        )

    return tokenizer.decode(outputs[0], skip_special_tokens=True)

