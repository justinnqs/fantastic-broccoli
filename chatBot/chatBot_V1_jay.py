from config import OPENAI_API_KEY
from openai import OpenAI

import gradio

client = OpenAI(api_key=OPENAI_API_KEY)

GPT_MODEL = "gpt-3.5-turbo-0125" #"gpt-3.5-turbo-1106"

def chat_with_gpt():
    print("ChatGPT Terminal Interface")
    print("Type 'exit' to quit.")

    # Start a conversation session with ChatGPT
    session_prompt = "You are an allergist. Provide advice to users on managing their allergies in a concise and helpful manner."
    messages = [
        {"role": "system", "content": session_prompt}
    ]

    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            break
        # summary_request = "Summarize your response in about 300 characters."
        # messages.append({"role": "user", "content": user_input + " " + summary_request})
        # Append the user's message to the conversation history
        messages.append({"role": "user", "content": user_input})

        try:
            response = client.chat.completions.create(
                model=GPT_MODEL,
                messages=messages,
                temperature=0.5,
                max_tokens=150,  # Allow enough tokens for a detailed response
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
            )

            chat_response = response.choices[0].message.content
            print("ChatGPT:", chat_response)
            messages.append({"role": "assistant", "content": chat_response})
        except Exception as e:
            print(f"An error occurred: {e}")

if __name__ == "__main__":
    chat_with_gpt()
