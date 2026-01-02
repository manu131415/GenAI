from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

MODEL_ID = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"

# Globals (loaded once)
_tokenizer = None
_model = None


def load_model():
    global _tokenizer, _model

    if _model is None:
        print("🔹 Loading TinyLlama model (safe mode)...")

        _tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

        _model = AutoModelForCausalLM.from_pretrained(
            MODEL_ID,
            device_map={"": "cpu"},        # ✅ CPU only (SAFE)
            torch_dtype=torch.float32,     # ✅ Stable on laptops
            low_cpu_mem_usage=True
        )

        _model.eval()
        print("✅ TinyLlama loaded successfully")

    return _tokenizer, _model


def generate_text(prompt: str, tone: str = "professional", length: str = "short"):
    tokenizer, model = load_model()

    # Convert length to token budget
    max_tokens_map = {
        "short": 180,
        "medium": 260,
        "long": 320
    }
    max_new_tokens = max_tokens_map.get(length.lower(), 150)

    messages = [
    {
        "role": "system",
        "content": (
            "Write in a neutral, informative blog style. "
            "Do not mention yourself, the writer, SEO, marketing strategy, or clients. "
            "The content should read like a published blog article for general readers."
        )
    },
    {
        "role": "user",
        "content": f"Write a {length} blog post in a {tone} tone about the following topic:\n\n{prompt}"
    }
]


    # TinyLlama uses chat template
    input_ids = tokenizer.apply_chat_template(
        messages,
        add_generation_prompt=True,
        return_tensors="pt"
    )

    attention_mask = torch.ones_like(input_ids)

    with torch.no_grad():
        outputs = model.generate(
            input_ids=input_ids,
            attention_mask=attention_mask,
            max_new_tokens=max_new_tokens,   # 🔒 HARD LIMIT
            temperature=0.7,
            top_p=0.9,
            do_sample=True,
            pad_token_id=tokenizer.eos_token_id,
            eos_token_id=tokenizer.eos_token_id
        )

    return tokenizer.decode(
        outputs[0][input_ids.shape[-1]:],
        skip_special_tokens=True
    )
