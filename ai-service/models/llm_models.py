from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

MODEL_ID = "microsoft/Phi-3-mini-4k-instruct"

tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    device_map="cpu",
    dtype=torch.float32
)

model.eval()


def generate_text(topic: str, tone: str = "professional", length: str = "long"):
    messages = [
        {
            "role": "system",
            "content": "You are an expert SEO content writer and digital marketer."
        },
        {
            "role": "user",
            "content": f"""
Write a {length} SEO-optimized blog post in a {tone} tone.

Topic: {topic}

Requirements:
- Meta title (max 60 characters)
- Meta description (max 160 characters)
- Use H1, H2, H3 headings
- Include keywords naturally
- Add a FAQ section
- End with a short image generation prompt
"""
        }
    ]

    inputs = tokenizer.apply_chat_template(
        messages,
        add_generation_prompt=True,
        return_tensors="pt"
    ).to(model.device)

    with torch.no_grad():
        outputs = model.generate(
            inputs,
            max_new_tokens=800,
            temperature=0.7,
            top_p=0.9,
            do_sample=True,
            eos_token_id=tokenizer.eos_token_id,
            pad_token_id=tokenizer.eos_token_id
        )

    return tokenizer.decode(
        outputs[0][inputs.shape[-1]:],
        skip_special_tokens=True
    )

# Example usage
print(generate_text("What is a Market?"))

