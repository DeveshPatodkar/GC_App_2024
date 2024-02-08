import TopMostCard from "../components/TopMostCard";
import UpcomingEventCard from "../components/UpcomingEventCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { StyleSheet } from "react-native";

import { View } from "react-native";

function UpcomingScreen(props) {
    
    const [upComingEvents, setUpcomingEvents] = useState([
        {
            gameName: 'Basketball',
            id: 'Basketball',
            teamA: 'ECE-META',
            teamB: 'CSE',
        },
        {
            gameName: 'Cricket',
            id: 'Cricket',
            teamA: 'ECE-META',
            teamB: 'CSE',
        },
        {
            gameName: 'Football',
            id: 'Football',
            teamA: 'ECE-META',
            teamB: 'CSE',
        }
    ]);

    return(
        <View style={styles.eventsContainer}>
            <FlatList 
            data={upComingEvents}
            renderItem={ (itemData)=>{
        
            return (
                <UpcomingEventCard
                gameName={itemData.item.gameName} 
                id={itemData.item.id}
                teamA={itemData.item.teamA} 
                teamB={itemData.item.teamB} 
                scoreA={itemData.item.scoreA} 
                scoreB={itemData.item.scoreB} 
                />
            );
            }} 
            keyExtractor={(item, index) => {
            return item.id;
            }}
            alwaysBounceVertical={false}
            />
        </View>
        
    );
}

export default UpcomingScreen;

const styles = StyleSheet.create({
    eventsContainer:{
        flex:5,
    }
})