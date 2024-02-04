import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OngoingScreen from './screens/OngoingScreen';
import UpcomingScreen from './screens/UpcomingScreen';
import TopMostCard from './components/TopMostCard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

return (

    <View style={styles.container}>
      <SafeAreaView>
        <OngoingScreen/>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 5,
    flex: 1,
    backgroundColor: '#000000',
  },
});
