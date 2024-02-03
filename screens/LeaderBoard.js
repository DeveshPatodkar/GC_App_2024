import { View, Text, StyleSheet, FlatList } from "react-native";
// import CSELogo from "../assets/CSELogo.png";
import { Image } from "react-native";
import LeaderBoardElement from "../Components/LeaderBoardElement";

const LeaderBoard = () => {
  const BranchesData = [
    {
      "Name": "CSE",
      "Score": 31735,
    },
    {
      "Name": "ECE_Meta",
      "Score": 31735,
    },
    {
      "Name": "EE",
      "Score": 31735,
    },
    {
      "Name": "Mech",
      "Score": 36,
    },
    {
      "Name": "Civil",
      "Score": 36,
    },
    {
      "Name": "MSC",
      "Score": 36,
    },
    {
      "Name": "MTech",
      "Score": 36,
    },
    {
      "Name": "PHD",
      "Score": 36,
    },
  ];
  const renderItem=({item})=>{
    // console.log(item);
    return (
      <View style={{padding:5}}>

      <LeaderBoardElement branchData={item}/>
      </View>

    );
  }
  return (
    <FlatList
        data={BranchesData}
        renderItem={renderItem}
        // style={styles.LeaderBoardList}
    />
  );
};

const styles = StyleSheet.create({
    LeaderBoardList:{
        flex: 1,
        backgroundColor: "#000000",
        gap:10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    }
});

export default LeaderBoard;
