1. pip install flask
2. pip install openai (TODO we should make a pipenv file)
3. python chatbot_server.py
4. Add you api key to config.py
5. You can test the app with a curl request
-  curl -X POST http://127.0.0.1:5000/chat -H "Content-Type: application/json" -d '{"message": "Hello, Flask!"}'
7. start the front end with bun run ios