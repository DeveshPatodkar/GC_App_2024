import TopMostCard from "../components/TopMostCard";
import OngoingEventCard from "../components/OngoingEventCard";

import { View } from "react-native";

function OngoingScreen(props) {
    

    return(
        <View>
            <TopMostCard/>
            <OngoingEventCard/>
        </View>
    );
}

export default OngoingScreen;