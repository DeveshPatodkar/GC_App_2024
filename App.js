import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import OngoingScreen from "./screens/OngoingScreen";
import UpcomingScreen from "./screens/UpcomingScreen";
import TopMostCard from "./components/TopMostCard";
import OngoingUpcomingButton from "./components/OngoingUpcomingButtons";

//LeaderBoard Screen
// import Leaderboard from "./screens/Leaderboard";

//update score Admin
// import AdminOngoingScreen from './screens/AdminOngoingScreen';
// instead of Ongoing screen

export default function App() {
  const [screen, setScreen] = useState(1);
  function renderOngoing() {
    setScreen(1);
  }
  function renderUpcoming() {
    setScreen(0);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopMostCard />
      <View style={styles.ButtonContainer}>
        <OngoingUpcomingButton
          onPress={renderOngoing}
          currentScreen={screen}
          currentButton={0}
        >
          ONGOING
        </OngoingUpcomingButton>
        <OngoingUpcomingButton
          onPress={renderUpcoming}
          currentScreen={screen}
          currentButton={1}
        >
          UPCOMING
        </OngoingUpcomingButton>
      </View>
      {screen == 1 ? <OngoingScreen /> : <UpcomingScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000000",
  },
  ButtonContainer: {
    marginLeft: 16,
    flexDirection: "row",
    marginBottom: 24,
  },
});
