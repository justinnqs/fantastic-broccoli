import os

#put the path to where you have the gpt key stored
key_file_path = '/Users/jpatel/Documents/BlueJay/gptKey/gpt_key.txt'

if os.path.exists(key_file_path):
    with open(key_file_path, 'r') as file:
        gpt_api_key = file.read().strip()
else:
    #this is just to catch a file not found error
    raise FileNotFoundError(f"The key file at {key_file_path} was not found.")

# print(gpt_api_key) --> if you want to double check it got the right key
OPENAI_API_KEY = gpt_api_key