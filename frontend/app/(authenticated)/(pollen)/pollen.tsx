import { Stack } from "expo-router";
import { Text, View } from "react-native";

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{ title: "Trends", headerBackTitleVisible: false }}
      />
      <View>
        <Text>Page</Text>
      </View>
    </>
  );
};
export default Page;
