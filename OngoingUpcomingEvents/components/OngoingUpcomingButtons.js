import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from 'expo-linear-gradient';

function OngoingUpcomingButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >

        {/* <MaskedView maskElement={<Text>{children}</Text>}>
          <LinearGradient
            colors={["#d41d77", "white"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>{children}</Text>
          </LinearGradient>
        </MaskedView> */}

        <Text style={styles.buttonText}>{children}</Text> 
      </Pressable>
    </View>
  );
}

export default OngoingUpcomingButton;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 16,
    marginTop: 0.005*deviceHeight,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: '12%',
    paddingHorizontal: '12%',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign:'center'
  },
  pressed: {
    opacity: 0.75,
    color: '#d41d77'
  },
});
