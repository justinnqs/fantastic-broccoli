import 'nativewind';
import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function MessageScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', user: 'other' },
    { id: '2', text: 'Hi there!', user: 'me' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: (prevMessages.length + 1).toString(), text: inputText, user: 'me' },
    ]);
    setInputText('');
  };

  return (
    <View className="absolute">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 80} // Adjust the offset as needed
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="h-screen flex-1 flex-col">
            <FlatList
              data={messages}
              renderItem={({ item }) => (
                <View
                  className={`my-1 rounded-lg p-3 ${
                    item.user === 'me' ? 'self-end bg-blue-200' : 'self-start bg-gray-200'
                  }`}>
                  <Text className="text-lg">{item.text}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
              className="flex-1 p-3"
            />
            <View className="flex-row">
              <TextInput
                className="mr-3 flex-1 rounded-lg border border-gray-300 px-3"
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
    </View>
  );
}
