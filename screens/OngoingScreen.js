import TopMostCard from "../components/TopMostCard";
import OngoingEventCard from "../components/OngoingEventCard";
import AdminOngoingEventCard from "../components/adminOngoingEventCard";
import { useState,useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import axios from "axios";

const back_link = "https://cp29bd07-3002.inc1.devtunnels.ms/";
function OngoingScreen(props) {
    const [ongoingEvents, setOngoingEvents] = useState(
        [
        // {
        //     gameName: 'Basketball',
        //     id: 'Basketball',
        //     teamA: 'ECE-META',
        //     teamB: 'CSE',
        //     scoreA: '4',
        //     scoreB: '6'
        // },
        // {
        //     gameName: 'Cricket',
        //     id: 'Cricket',
        //     teamA: 'ECE-META',
        //     teamB: 'CSE',
        //     scoreA: '4',
        //     scoreB: '6'
        // },
        // {
        //     gameName: 'Football',
        //     id: 'Football',
        //     teamA: 'ECE-META',
        //     teamB: 'CSE',
        //     scoreA: '4',
        //     scoreB: '6'
        // },
        // {
        //     gameName: 'Tennis',
        //     id: 'Tennis',
        //     teamA: 'ECE-META',
        //     teamB: 'CSE',
        //     scoreA: '4',
        //     scoreB: '6'
        // },
    ]
    );
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response = await axios.get(back_link + "api/event/getAllLiveEvents");
                console.log(response.data);
                const data = response.data.events;
                const newData = data.map((item) => {
                const event = item.eventId;
                const teams = item.subEvents;
                console.log("teams",item);
                const newSubEvents = teams.map((item1) => {
                    const teamA = item1.data.points ? item1.data.points?.teamA : item1.data.pointsTable?.teamA;
                    const teamB = item1.data.points ? item1.data.points?.teamB : item1.data.pointsTable?.teamB;
                    const idx = item1.data.details.title.split(' ').findIndex(word => word.toLowerCase() === 'vs');
                    const gameName= item1.data.details.title.split(' ').slice(0, idx-1).join(' ');
                    return {
                        details:item1.data.details,
                        status:item1.data.status,
                        gameName:gameName,
                        id: item1.data.details.title.split(" ").join('') + item1.subEventId.split(" ").join(''),
                        // teamA: item1.subEventId.split(" vs ")[0],
                        // teamB: item1.subEventId.split(" vs ")[1],
                        teamA:teamA?.name || item1.subEventId.split(" vs ")[0],
                        teamB:teamB?.name ||  item1.subEventId.split(" vs ")[1],
                        scoreA:teamA?.points,
                        scoreB:teamB?.points,
                    };
                });
                return newSubEvents;
            });
            console.log(newData.flat());
            setOngoingEvents(newData.flat());
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[])

    return(
        <View style={styles.eventsContainer}>
            <FlatList 
            key={1}
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
            return item.id+index;
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