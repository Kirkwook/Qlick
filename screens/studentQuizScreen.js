import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";
import AnswerOption from "../components/quizButton";

const StudentQuizScreen = () => {
  const handleButtonPress = () => {
    console.log("Button pressed!");
  };

  const qImage = require("../assets/Qlick_Logo_CM.png");
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imgDiv}>
          <Image source={qImage} style={styles.image} />
        </View>

        {/* These are the navigation buttons for the previous and next questions */}
        <View style={styles.qNav}>
          <TouchableOpacity style={styles.leftButton}>
            <Text style={styles.buttonText}>Previous Question</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton}>
            <Text style={styles.buttonText}>Next Question</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.qText}>Which Answer is the best Answer?</Text>
        </View>
        {/* Answer options section of page */}
        <View style={styles.answerOptions}>
          {/* <AnswerOption letter={"A"} option={"Answer 1"}></AnswerOption>
          <AnswerOption letter={"B"} option={"Answer 2"}></AnswerOption>
          <AnswerOption letter={"C"} option={"Answer 3"}></AnswerOption>
          <AnswerOption letter={"D"} option={"Answer 4"}></AnswerOption>
          <AnswerOption letter={"E"} option={"Answer 5"}></AnswerOption> */}

          <AnswerOption letter="A" option="Answer 1"></AnswerOption>
          <AnswerOption letter="B" option="Answer 2"></AnswerOption>
          <AnswerOption letter="C" option="Answer 3"></AnswerOption>
          <AnswerOption letter="D" option="Answer 4"></AnswerOption>
          <AnswerOption letter="E" option="Answer 5"></AnswerOption>
          {/* <TouchableOpacity style={styles.answerOption}>
            <Text style={styles.optionText}>A) Answer 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerOption}>
            <Text style={styles.optionText}>B) Answer 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerOption}>
            <Text style={styles.optionText}>C) Answer 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerOption}>
            <Text style={styles.optionText}>D) Answer 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answerOption}>
            <Text style={styles.optionText}>E) Answer 5</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* TODO Make exit button show up */}
      <View>
        <View style={styles.exit}>
          <Button title="Exit quiz" />
        </View>
      </View>
    </View>
  );
};

export default StudentQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    opacity: 1,
  },
  exit: {
    paddingBottom: 20,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  imgDiv: {
    paddingTop: 20,
  },
  image: {
    width: "100%",
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
  // Styling the Question text
  qText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  // These three style the area for the answer options
  answerOptions: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },

  // answerOption: {
  //   backgroundColor: "lightblue",
  //   padding: 10,
  //   borderRadius: 5,
  //   marginBottom: 10,
  // },
  // optionText: {
  //   color: "darkblue",
  //   fontSize: 16,
  //   fontWeight: "bold",
  //   textAlign: "center",
  // },
  // The styling code below styles the previous and next buttons for the
  // Student quiz navigation bar
  qNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  leftButton: {
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  rightButton: {
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#00008b",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
