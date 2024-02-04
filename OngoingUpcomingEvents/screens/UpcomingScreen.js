import TopMostCard from "../components/TopMostCard";
import UpcomingEventCard from "../components/UpcomingEventCard";

import { Modal, View } from "react-native";

function UpcomingScreen(props) {
    
    return(
        
        <View>
            <TopMostCard/>
            <UpcomingEventCard/>
        </View>
    );
}

export default UpcomingScreen;