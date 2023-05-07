import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// This is going to return the button to the student Quiz file
// It takes in the textLeft --> which is a letter like A)
// It takes in the textRight --> which is the answer option
// The on press would be the function/action to take
const AnswerOption = ({ letter, option }) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity onPress={() => setSelected(!selected)}>
      <View style={[styles.answerOption, selected && styles.optionSelected]}>
        <Text style={styles.letter}>{letter})</Text>
        <Text style={styles.option}>{option}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AnswerOption;

const styles = StyleSheet.create({
  answerOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "light-blue",
    marginBottom: 10,
  },
  optionSelected: {
    borderColor: "black",
    shadowColor: "#black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  letter: {
    flex: 1,
  },
  option: {
    flex: 2,
    textAlign: "center",
  },
});
