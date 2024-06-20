import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import 'nativewind';

export default function MessageScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', user: 'other' },
    { id: '2', text: 'Hi there!', user: 'me' }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: (prevMessages.length + 1).toString(), text: inputText, user: 'me' }
    ]);
    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 80} // Adjust the offset as needed
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 justify-end">
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <View
                className={`p-3 rounded-lg my-1 ${
                  item.user === 'me'
                    ? 'bg-blue-200 self-end'
                    : 'bg-gray-200 self-start'
                }`}
              >
                <Text className="text-lg">{item.text}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            className="flex-1 p-3"
          />
          <View className="flex-row p-3 border-t border-gray-300 mb-10">
            <TextInput
              className="flex-1 border border-gray-300 rounded-lg px-3 mr-3"
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type your message"
              onSubmitEditing={sendMessage}
              returnKeyType="send"
            />
            <Button title="Send" onPress={sendMessage} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}