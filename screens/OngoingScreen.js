import TopMostCard from "../components/TopMostCard";
import OngoingEventCard from "../components/OngoingEventCard";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";

function OngoingScreen(props) {
    
    const [ongoingEvents, setOngoingEvents] = useState([
        {
            gameName: 'Basketball',
            id: 'Basketball',
            teamA: 'ECE-META',
            teamB: 'CSE',
            scoreA: '4',
            scoreB: '6'
        },
        {
            gameName: 'Cricket',
            id: 'Cricket',
            teamA: 'ECE-META',
            teamB: 'CSE',
            scoreA: '4',
            scoreB: '6'
        },
        {
            gameName: 'Football',
            id: 'Football',
            teamA: 'ECE-META',
            teamB: 'CSE',
            scoreA: '4',
            scoreB: '6'
        },
        {
            gameName: 'Tennis',
            id: 'Tennis',
            teamA: 'ECE-META',
            teamB: 'CSE',
            scoreA: '4',
            scoreB: '6'
        },
    ]);

    return(
        <View style={styles.eventsContainer}>
            <FlatList 
            data={ongoingEvents}
            renderItem={ (itemData)=>{
        
            return (
                <OngoingEventCard 
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

export default OngoingScreen;

const styles = StyleSheet.create({
    eventsContainer:{
        flex:5,
    }
})