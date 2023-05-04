import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// This is going to return the button to the student Quiz file
// It takes in the textLeft --> which is a letter like A)
// It takes in the textRight --> which is the answer option
// The on press would be the function/action to take
export const AnswerOption = ({ letter, option, index, selected, onPress }) => {
  const setSelected = useState(false);

  const handlePress = () => {
    onPress(index);
  };
  return (
    <TouchableOpacity key={option.id} onPress={handlePress}>
      <View
        style={[styles.answerOption, selected && quizStyles.optionSelected]}
      >
        <Text style={styles.letter}>{letter})</Text>
        <Text style={styles.option}>{option}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  answerOption: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "light-blue",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "light-blue",
    marginBottom: 10,
  },

  letter: {
    flex: 1,
  },
  option: {
    flex: 10,
    textAlign: "center",
  },
});
