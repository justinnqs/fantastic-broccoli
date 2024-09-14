from flask import Flask, request, jsonify
from chatBot_Flask_V1 import get_chat_response 

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    if not data or 'message' not in data:
        return jsonify({'error': 'No message provided'}), 400

    user_message = data['message']
    try:
        response = get_chat_response(user_message)
        return jsonify({'response': response})  
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
