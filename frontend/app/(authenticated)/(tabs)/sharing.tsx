import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Page = () => {
  return (
    <View
      style={{
        height: "100%",
        // justifyContent: "center",
      }}
    >
      <View style={styles.account}>
        <Text style={styles.title}>Sharing</Text>
      </View>
      <View style={styles.content}>
        <Ionicons
          style={{ alignSelf: "center", marginTop: 15 }}
          name="information-circle"
          size={100}
          color={Colors.primary}
        />
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: Colors.dark,
            alignSelf: "center",
          }}
        >
          Health Sharing
        </Text>
        <View style={styles.listItem}>
          <Ionicons name="list" size={65} color={Colors.primary}></Ionicons>
          <View style={{ justifyContent: "center", flexDirection: "column" }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: Colors.dark }}
            >
              You're in control
            </Text>
            <Text style={{ fontSize: 15, color: Colors.dark, maxWidth: 250 }}>
              Keep friends and family up to date on how you're doing by securely
              sharing your Health data.
            </Text>
          </View>
        </View>
        <View style={styles.listItem}>
          <Ionicons
            name="notifications-sharp"
            size={65}
            color={Colors.primary}
          ></Ionicons>
          <View style={{ justifyContent: "center", flexDirection: "column" }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: Colors.dark }}
            >
              Dashboard and Notifications
            </Text>
            <Text style={{ fontSize: 15, color: Colors.dark, maxWidth: 250 }}>
              Data you share will appear in their Health app. They can also get
              notifications if there's an update
            </Text>
          </View>
        </View>
        <View style={styles.listItem}>
          <Ionicons
            name="lock-closed"
            size={65}
            color={Colors.primary}
          ></Ionicons>
          <View style={{ justifyContent: "center", flexDirection: "column" }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: Colors.dark }}
            >
              Private and Secure
            </Text>
            <Text style={{ fontSize: 15, color: Colors.dark, maxWidth: 250 }}>
              Only a summary of each topic is shared, not the details. The
              information is encrypted and you can stop sharing at any time
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            marginHorizontal: 10,
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 20, color: Colors.dark }}>
            Share with Someone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primaryMuted,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: Colors.dark }}>
            Ask Someone to Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "column",
    marginHorizontal: 20,
    height: "75%",
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 15,
  },
  listItem: { flexDirection: "row", alignSelf: "center", gap: 10 },
});

export default Page;
