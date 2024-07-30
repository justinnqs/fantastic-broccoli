// screens/ChatScreen.js
import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Page = () => {
  const [messages, setMessages] = useState<Array<{ id: string; text: string }>>(
    []
  );
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        { id: messages.length.toString(), text: inputText },
      ]);
      setInputText("");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View style={styles.message}>
              <Text>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesContainer}
        />
        <View style={styles.inputContainer}>
          <TextInput
            keyboardAppearance="dark"
            autoFocus={true}
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message"
            onSubmitEditing={handleSend}
            blurOnSubmit={false}
          />
          {/* <Button title="Send" onPress={handleSend} /> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
  },
  messagesContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    margin: 10,
  },
  message: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginVertical: 5,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: "white",
    width: "100%",
    height: 40,
  },
});

export default Page;
