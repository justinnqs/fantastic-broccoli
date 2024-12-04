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
  const [messages, setMessages] = useState<Array<{ id: string; text: string, type: "user" | "ai" }>>(
    []
  );

  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        { id: messages.length.toString(), text: inputText, type: "user" },
      ]);
      setInputText("");
      handleReceive(inputText.trim())
    }
  };

  const handleReceive = async (userText: string) => {
    try {
      // Send POST request to the Flask server
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      if (response.ok) {
        const data = await response.json;
        console.log(data)
        const aiMessage = data.body;

        setMessages([
          ...messages,
          { id: messages.length.toString(), text: userText, type: "user" },
          { id: "ai" + messages.length.toString(), text: aiMessage, type: "ai" },
        ]);
      } else {
        // Handle server error
        console.error("Server error:", response.statusText);
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => item.type == "user" ? (
            <View style={styles.message}>
              <Text>{item.text}</Text>
            </View>
          ): (
            <View style={styles.aimessage}>
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
  aimessage: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginVertical: 5,
    alignSelf: "flex-start",
  },
  message: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    marginVertical: 5,
    alignSelf: "flex-end",
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
