import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// This is going to return the button to the student Quiz file
// It takes in the textLeft --> which is a letter like A)
// It takes in the textRight --> which is the answer option
// The on press would be the function/action to take
export const AnswerOption = ({ letter, option }) => {
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

const styles = StyleSheet.create({
  answerOption: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "light-blue",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "light-blue",
    marginBottom: 10,
  },
  optionSelected: {
    borderColor: "purple",
    shadowColor: "black",
    shadowOffset: { width: 4, height: -4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  letter: {
    flex: 1,
  },
  option: {
    flex: 10,
    textAlign: "center",
  },
});
