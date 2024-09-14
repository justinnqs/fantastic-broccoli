import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { Circle, useFont } from "@shopify/react-native-skia";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SharedValue } from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={Colors.primary} />;
}

const DATA = Array.from({ length: 8 }, (_, i) => ({
  day: i,
  lowOxygen: 10 + 10 * Math.random(),
  highOxygen: 50 + 30 * Math.random(),
}));

const POLLEN_DATA = [
  ["Tree Pollen", Math.random() * 100],
  ["Ragweed Pollen", Math.random() * 100],
  ["Mold", Math.random() * 100],
  ["Grass Pollen", Math.random() * 100],
  ["Dust & Dander", Math.random() * 100],
];

const PollenBar = ({ pollenCount }: { pollenCount: number }) => {
  if (pollenCount < 35) {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor: "green",
          position: "absolute",
          bottom: 0,
          borderRadius: 16,
        }}
      />
    );
  } else if (pollenCount < 65) {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor: "yellow",
          position: "absolute",
          bottom: 0,
          borderRadius: 16,
        }}
      />
    );
  } else {
    return (
      <View
        style={{
          height: 10,
          width: "100%",
          backgroundColor: "red",
          position: "absolute",
          bottom: 0,
          borderRadius: 16,
        }}
      />
    );
  }
};

const Page = () => {
  const { user } = useUser();

  const headerHeight = useHeaderHeight();
  const font = useFont(require("@/assets/fonts/SpaceMono-Regular.ttf"), 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });
  const { data: tickers } = useQuery({
    queryKey: ["tickers"],
    queryFn: async (): Promise<any[]> =>
      fetch(`/api/tickers`).then((res) => res.json()),
  });

  return (
    <ScrollView
      style={{
        backgroundColor: Colors.background,
        // flex: 1,
        // flexDirection: "column",
      }}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <View style={styles.account}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.balance}>Hello,</Text>
            <Text style={styles.balance}>A Rocky Rock</Text>
          </View>
          <TouchableOpacity style={styles.captureBtn}>
            <Image source={require('@/assets/images/Dwayne__The_Rock__Johnson_Visits_the_Pentagon_(41)_(cropped).jpg')} style={styles.avatar} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={defaultStyles.sectionHeader}>Trends</Text>
      <View style={styles.transactions}>
        <Link href={`/trends`} asChild>
          <TouchableOpacity
            style={{
              height: 30,
              backgroundColor: "white",
              minWidth: "100%",
              alignItems: "flex-end",
            }}
          >
            <Ionicons size={30} name="arrow-forward" color="gray" />
          </TouchableOpacity>
        </Link>
        <View style={{ height: 300 }}>
          <CartesianChart
            data={DATA} // 👈 specify your data
            xKey="day" // 👈 specify data key for x-axis
            yKeys={["lowOxygen", "highOxygen"]} // 👈 specify data keys used for y-axis
            axisOptions={{
              font,
              formatXLabel: (label: number): string => {
                switch (label) {
                  case 0:
                    return "Sun";
                  case 1:
                    return "Mon";
                  case 2:
                    return "Tue";
                  case 3:
                    return "Wed";
                  case 4:
                    return "Thur";
                  case 5:
                    return "Fri";
                  case 6:
                    return "Sat";
                }
                return "";
              },
            }} // 👈 we'll generate axis labels using given font.
          >
            {/* 👇 render function exposes various data, such as points. */}
            {({ points }) => (
              // 👇 and we'll use the Line component to render a line path.
              <Line
                curveType="natural"
                points={points.highOxygen}
                color="blue"
                strokeWidth={3}
              />
            )}
          </CartesianChart>
        </View>
      </View>

      <Text style={defaultStyles.sectionHeader}>Pollen</Text>
      <View style={{ marginHorizontal: 10 }}>
        <ScrollView horizontal style={{ height: 200 }}>
          {POLLEN_DATA.map((pollenTuple: Array<string | number>) => {
            return (
              <View style={styles.pollenCard} key={pollenTuple[0]}>
                <View style={styles.col}>
                  <Link href={`/pollen`} asChild>
                    <TouchableOpacity
                      style={{
                        height: 30,
                        backgroundColor: "white",
                        alignItems: "flex-end",
                      }}
                    >
                      <Ionicons size={20} name="arrow-forward" color="gray" />
                    </TouchableOpacity>
                  </Link>
                  <Text>{pollenTuple[0]}</Text>
                  <PollenBar pollenCount={pollenTuple[1]} />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  account: {
    height: 100,
    margin: 20,
    padding: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 10,
  },
  col: {
    height: "100%",
    flexDirection: "column",
  },
  balance: {
    fontSize: 35,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 20,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
  pollenCard: {
    marginHorizontal: 4,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    width: 134,
    height: 115,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  captureBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
  },
});
export default Page;
