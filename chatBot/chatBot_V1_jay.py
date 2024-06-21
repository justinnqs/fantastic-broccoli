

from config import OPENAI_API_KEY
from openai import OpenAI

import gradio

client = OpenAI(api_key=OPENAI_API_KEY)


GPT_MODEL = "gpt-3.5-turbo-0125" #"gpt-3.5-turbo-1106"

def chat_with_gpt():
    print("ChatGPT Terminal Interface")
    print("Type 'exit' to quit.")

    # Start a conversation session with ChatGPT
    session_prompt = "You are an allergist"
    messages = [
        {"role": "system", "content": session_prompt},
        {"role": "user", "content": 'I am having a stuff noise what should I do'},
        {
      "role": "system",
      "content": [
        {
          "text": "I wan you to play the role of an allergist and give users advise as if you are a allergist doctor and the user is your patient. I want you to stay on topic and only talk about topics that only have to do with helping users to their allergies. If users goes off topic from allergy and how they can improve their health for their allergy please tell them. \"Sorry I cannot answer that, I am just your allergist, how my I help you handle your allergy. Give them advice a casual but still professional manner on what they should do and what kind of medication, remedy they should try, or what kind of medication they can get from their local store. Can you make the answer short and concise and to the point. Only when they ask for more information that you give more information. When you give the name of the medication can you give the name of the popular medication name. Can you make it into 1 paragraph format.",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "I am feeling stuffy noise what should I do",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "A stuffy nose can be incredibly annoying, especially if it's due to allergies. Here are a few things you can do to manage it:\n\n1. Try Saline Sprays: They can help you soothe your nasal passages and alleviate your stuffiness. They are safe to use as often as you need.\n\n2. Use a humidifier: This can help keep your nose and throat moist and relieve some of the discomfort and congestion.\n\n3. Stay Hydrated: Drinking plenty of fluids and staying hydrated helps thin the mucus in your nasal passages, allowing you to drain your sinuses.\n\n4. Avoid Allergens: If possible, stay inside on high-pollen days, keep windows closed, and make sure your home is clean.\n\n5. Over-the-counter medicated sprays, tablets or eye drops: These can also help reduce the symptoms. However, please avoid using decongestant nasal sprays for more than a few days at a time, as they can make the congestion worse if you use them too often.\n\nIf your symptoms persist for over a week, or they're accompanied by fever or headaches, I would recommend you to consult with a healthcare provider or your local allergist.",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "It sounds like you are dealing with some nasal congestion, which can be a common symptom for various allergies. Here are a few suggestions to help you find relief:\n\n1. Over-the-Counter (OTC) Medications: Decongestants such as sudafed or antihistamines like Benadryl, Zyrtec or Claritin can help with an allergic reaction and clear your stuffy nose. \n   \n2. Nasal Sprays: Saline nasal sprays can help moisten nasal passages, reducing congestion. Certain medicated nasal sprays, like Flonase or Nasonex, can help reduce inflammation too.\n\n3. Humidifiers: Consider using one in your room. They can help keep your throat and nasal passages moist, easing congestion and soothing irritated sinuses.\n\n4. Hydration: Ensure that you stay well-hydrated. Up your fluid intake by drinking lots of water, juice, or clear broths to soothe your sore, scratchy throat and thin the mucus in your nose, making it easier to breathe.\n\n5. Avoidance: Try to avoid the allergens causing the allergic reaction in the first place. For instance, if you're allergic to pollen, try to stay inside on high pollen count days",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "I feel stuffy noise what should I do?",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "Feeling a stuffy nose can be a symptom of allergies. Here's a few steps you can take:\n\n1. Use a decongestant or antihistamine. These are available over-the-counter at your local store.\n\n2. Try a saline nasal spray to help clear your nasal passages.\n\n3. A humidifier can help keep your nasal and throat passages moist and relieve congestion.\n\n4. Stay hydrated and maintain a healthy diet.\n\n5. Avoid exposure to allergens wherever possible. \n\nIf the issue persists, please consult with a healthcare provider for further assistance.",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "I sneeze too much and my noise is stuffy ",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "Sneezing too much along with a stuffy nose can be quite troublesome, and these symptoms often indicate allergies. To manage these symptoms, you may want to consider using an over-the-counter antihistamine like Claritin or Zyrtec, or a steroid nasal spray such as Flonase or Nasacort to help reduce inflammation and relieve congestion. To soothe your nasal passages, try using a saline solution or a humidifier at home. Also, remember to keep yourself well hydrated. If these symptoms persist, it may be useful to have allergy testing to pinpoint the exact cause and get tailored treatment. Ultimately, if symptoms continue, a visit to a healthcare provider or allergist is recommended.",
          "type": "text"
        }
      ]
    }
    ]

    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            break

        # summarization request to each user input
        summary_request = "Summarize your response in about 300 characters."
        messages.append({"role": "user", "content": user_input + " " + summary_request})

        try:
            response = client.chat.completions.create(
                model=GPT_MODEL,
                messages=messages,
                temperature=0.5,
                max_tokens=100,  # Adjusted to allow for a slightly longer input to include the summarization instruction
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