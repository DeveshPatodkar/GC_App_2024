import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import LeaderBoardElement from "../components/LeaderBoardElement";

const logoPaths = {
  CSE: require("../assets/logos/CSE.png"),
  EE: require("../assets/logos/EE.png"),
  ECEMETA: require("../assets/logos/ECE+META.png"),
  CIVIL: require("../assets/logos/CIVIL.png"),
  MECH: require("../assets/logos/MECH.png"),
  MSc: require("../assets/logos/MSc.png"),
  MTech: require("../assets/logos/MTech.png"),
  PhD: require("../assets/logos/PhD.png"),
};
export default function Leaderboard() {
  const BranchesData = [
    {
      Name: "CSE",
      Score: 41735,
    },
    {
      Name: "ECE+META",
      Score: 53200,
    },
    {
      Name: "EE",
      Score: 31700,
    },
    {
      Name: "MECH",
      Score: 93600,
    },
    {
      Name: "CIVIL",
      Score: 3612,
    },
    {
      Name: "M.Sc",
      Score: 3900,
    },
    {
      Name: "M.Tech",
      Score: 3678,
    },
    {
      Name: "PhD",
      Score: 3000,
    },
  ];
  BranchesData.sort((a, b) => b.Score - a.Score);
  const top3 = BranchesData.slice(0, 3);
  let restData = BranchesData.slice(3).map((item, index) => {
    return { ...item, rank: index + 4 };
  });
  const renderItem = ({ item }) => {
    // console.log(item);
    return (
      <View style={{ padding: 5 }}>
        <LeaderBoardElement branchData={item} logoPaths={logoPaths} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.containertop}>
        <View style={styles.containertop1}>
          <View style={styles.number2top}>
            <View style={styles.iconCont}>
              <FontAwesome5 name="crown" size={22} color="#ADABA1" />
            </View>
            <Image
              source={logoPaths[top3[1].Name.replace(".", "").replace("+", "")]}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styles.number2bottom}>
            <Text style={[styles.leadHeading]}>{top3[1].Name}</Text>
            <Text style={styles.leadScore}>{top3[1].Score}</Text>
          </View>
        </View>
        <View style={styles.containertop2}>
          <View style={styles.number1top}>
            <View style={styles.iconCont}>
              <FontAwesome5 name="crown" size={24} color="#FFAA00" />
            </View>
            <Image
              source={logoPaths[top3[0].Name.replace(".", "").replace("+", "")]}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styles.number1bottom}>
            <Text style={[styles.leadHeading]}>{top3[0].Name}</Text>
            <Text style={styles.leadScore}>{top3[0].Score}</Text>
          </View>
        </View>
        <View style={styles.containertop3}>
          <View style={styles.number3top}>
            <View style={styles.iconCont}>
              <FontAwesome5 name="crown" size={20} color="#CB7E32" />
            </View>
            <Image
              source={logoPaths[top3[2].Name.replace(".", "").replace("+", "")]}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styles.number3bottom}>
            <Text style={[styles.leadHeading]}>{top3[2].Name}</Text>
            <Text style={styles.leadScore}>{top3[2].Score}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <FlatList
          data={restData}
          renderItem={renderItem}
          // style={styles.LeaderBoardList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  containertop: {
    flex: 1.5,
    backgroundColor: "#000000",
    color: "white",
    flexDirection: "row",
  },
  containertop1: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  containertop2: {
    flex: 1.25,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  containertop3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  number1top: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  number1bottom: {
    flex: 0.75,
    backgroundColor: "#746030",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  number2top: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  number2bottom: {
    flex: 0.75,
    backgroundColor: "#52514F",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  number3top: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  number3bottom: {
    flex: 0.75,
    backgroundColor: "#795038",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCont: {
    padding: 5,
  },
  container2: {
    flex: 2,
    backgroundColor: "#000000",
    color: "white",
    flexDirection: "row",
    paddingTop: 10,
  },
  leadHeading: {
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  leadScore: {
    fontSize: 25,
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  text: {
    color: "white",
  },
  LeaderBoardList: {
    flex: 1,
    backgroundColor: "#000000",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
