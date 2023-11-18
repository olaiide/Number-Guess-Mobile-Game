import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} />
      <View style={styles.buttonsContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: "#72063c",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.25,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
  },
});
