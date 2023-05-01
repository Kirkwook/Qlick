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
