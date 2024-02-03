import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Leaderboard from "./screens/Leaderboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Leaderboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
