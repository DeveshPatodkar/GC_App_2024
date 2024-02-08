import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { useState } from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import OngoingScreen from './screens/OngoingScreen';
import UpcomingScreen from './screens/UpcomingScreen';
import TopMostCard from './components/TopMostCard';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

export default function App() {

return (
      <SafeAreaView style={styles.container}>
        <TopMostCard/>
        <OngoingScreen/>
      </SafeAreaView>
      // <StatusBar style="auto" />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor: '#000000',
  },
});
