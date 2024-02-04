import { Text, View, StyleSheet , Dimensions} from 'react-native';

function UpcomingEventCard() {
    return (
        <View>
            <LinearGradient
              start={{x: 0.20, y: 0.1}} end={{x: 0.65, y: 0.5}}
              locations={[0.6,1]}
              colors={['white', '#d41d77']}
              style={styles.cardTop}
            >
                <Text>This is the Upcoming Event</Text>
            </LinearGradient>
            <View style={styles.cardBottom}>
                <Text style={styles.BottomTextGame}>Basketball</Text>
                <Text style={styles.BottomTextTeams}>ECE-META v/s CSE</Text>
            </View>
        </View>
    );
}

export default UpcomingEventCard;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  cardTop: {
    height: 0.15*deviceHeight,
    marginHorizontal: 0.04*deviceWidth,
    padding: 16,
    backgroundColor: 'white',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.75,
  },
  cardBottom: {
    marginBottom: 0.04*deviceHeight,
    height: 0.09*deviceHeight,
    marginHorizontal: '4%',
    padding: 10,
    backgroundColor: 'black',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    elevation: 20,
    shadowColor: '#d41d77',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.95,
  },
  BottomTextGame: {
    color: "white",
    fontSize: 18
  },
  BottomTextTeams:{
    color: 'gray'
  }
});
