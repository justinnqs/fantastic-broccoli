from config import OPENAI_API_KEY
from openai import OpenAI

client = OpenAI(api_key=OPENAI_API_KEY)
GPT_MODEL = "gpt-3.5-turbo-0125"

def get_chat_response(user_input):
    session_prompt = "You are an allergist. Provide advice to users on managing their allergies in a concise and helpful manner."
    messages = [
        {"role": "system", "content": session_prompt},
        {"role": "user", "content": user_input}
    ]

    response = client.chat.completions.create(
        model=GPT_MODEL,
        messages=messages,
        temperature=0.5,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    return response.choices[0].message.content
