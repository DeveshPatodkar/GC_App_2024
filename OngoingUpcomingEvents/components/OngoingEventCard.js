import { Text, View, StyleSheet , Dimensions, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function OngoingEventCard() {
    return (
        <View>
          
            <LinearGradient
              start={{x: 0.20, y: 0.1}} end={{x: 0.65, y: 0.5}}
              locations={[0.6,1]}
              colors={['white', '#e3e3e3']}
              style={styles.cardTop}
            >
                <Image
                  style={styles.LeftImageContainer}
                  source={require('../assets/images/ECE-META.jpg')}
                />
                <Image/>
                <Text style={styles.LEFTscoreText}>4</Text>
                <Text style={styles.RIGHTscoreText}>6</Text>
                <Image
                  style={styles.RightImageContainer}
                  source={require('../assets/images/CSE.jpg')}
                />
                <Image/>
            </LinearGradient>
          
          <View style={styles.cardBottom}>
              <Text style={styles.BottomTextGame}>Basketball</Text>
              <Text style={styles.BottomTextTeams}>ECE-META v/s CSE</Text>
          </View>
        </View>
    );
}

export default OngoingEventCard;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  cardTop: {
    flexDirection: 'row',
    height: 0.15*deviceHeight,
    marginTop: 12,
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
  },
  LeftImageContainer:{
    width: deviceWidth<380?26:46,
    height: deviceWidth<380?26:46,
    borderRadius: deviceWidth<380?13:23,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 9,
    marginTop: 36,
    position: 'absolute',
    left: 9,
  },
  RightImageContainer:{
    width: deviceWidth<380?26:46,
    height: deviceWidth<380?26:46,
    borderRadius: deviceWidth<380?13:23,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 9,
    marginTop: 36,
    position: 'absolute',
    right: 9,
  },
  LEFTscoreText: {
    fontSize: 26,
    color:'#322d2d',
    position: 'absolute',
    left:70,
    margin: 9,
    marginTop: 38,
  },
  RIGHTscoreText: {
    color:'#322d2d',
    fontSize: 26,
    position: 'absolute',
    right: 70,
    margin: 9,
    marginTop: 38,
  },
});
