import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import axios from "axios";

const StudentQuizScreen = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.exit}>
        <Button title="Exit quiz" />
      </View>
      <View style={styles.imgDiv}>
        <Image
          source={require("../assets/Qlick_Logo_CM.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.prev}>
        <Button title="Previous Question" />
      </View>
      <View style={styles.next}>
        <Button title="Next Question" />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.qtitle}>Question 1</Text>
        <View style={styles.radio}>
          <TextInput
            name="test"
            type="radio"
            value="inc"
            style={styles.radioBtn}
          />
          <Text style={styles.radioText}>A) 1</Text>
        </View>
        <View style={styles.radio}>
          <TextInput
            name="test"
            type="radio"
            value="ans"
            style={styles.radioBtn}
          />
          <Text style={styles.radioText}>B) 2</Text>
        </View>
        <View style={styles.radio}>
          <TextInput
            name="test"
            type="radio"
            value="inc"
            style={styles.radioBtn}
          />
          <Text style={styles.radioText}>C) 3</Text>
        </View>
        <View style={styles.radio}>
          <TextInput
            name="test"
            type="radio"
            value="inc"
            style={styles.radioBtn}
          />
          <Text style={styles.radioText}>D) 4</Text>
        </View>
      </View>
    </View>
  );
};

export default StudentQuizScreen;

const styles = StyleSheet.create({
  exit: {
    paddingBottom: 20,
  },
  exitBtn: {
    textAlign: "center",
    height: 60,
    backgroundColor: "#ff0000",
  },
  imgDiv: {
    paddingTop: 20,
  },
  image: {
    width: "50%",
    height: "auto",
    resizeMode: "contain",
  },
  questionContainer: {
    position: "relative",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  qtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioBtn: {
    height: 20,
    width: 20,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
  radioText: {
    fontSize: 16,
  },
  prev: {
    backgroundColor: "#00bfff",
    textAlign: "center",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  next: {
    backgroundColor: "#00bfff",
    textAlign: "center",
    height: 60,
    display: "flex",
    alignSelf: "flex-end",
  },
});
