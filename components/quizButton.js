import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// This is going to return the button to the student Quiz file
// It takes in the textLeft --> which is a letter like A)
// It takes in the textRight --> which is the answer option
// The on press would be the function/action to take
const CustomButton = ({ textLeft, textRight, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.leftText}>{textLeft}</Text>
      <Text style={styles.rightText}>{textRight}</Text>
    </TouchableOpacity>
  );
};

const answerLabels = ["A)", "B)", "C)", "D)", "E)"];
const answerOptions = [
  "answer 1",
  "answer 2",
  "answer 3",
  "answer 4",
  "answer 5",
];

function makeAnswerButton(item, index) {
  return (
    <View key={index}>
      <CustomButton
        textLeft={answerLabels[index]}
        textRight={item}
        onPress={handleButtonPress}
      />
    </View>
  );
}

function renderAnswerButtons() {
  return answerOptions.map(makeAnswerButton);
}

return <View>{renderAnswerButtons()}</View>;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00bfff",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  leftText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  rightText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomButton;
