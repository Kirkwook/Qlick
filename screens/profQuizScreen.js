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
  ImageBackground,
} from "react-native";
import { globalStyles } from "../styles/global";
import axios from "axios";
import QuizPageSingle from "../components/load_question_data";

const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

// const { sessionCode, sessionId } = route.params;
// const sessionCode = navigation.getParam('sessionCode');
// const sessionId = props.navigation.getParam('sessionId');

const ProfQuizScreen = ({ navigation, props }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <ImageBackground
      source={backgroundImageSource}
      resizeMode="cover"
      style={globalStyles.backgroundImage}
      imageStyle={{ opacity: 0.05 }}
    >
      {/* <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      > */}
      <View style={globalStyles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Session Code: {navigation.getParam("sessionCode")}</Text>
        </View>



        <View style={styles.switchContainer}>
          <TouchableOpacity onPress={() => setIsSwitchOn(!isSwitchOn)}>
            <View
              style={[styles.toggleSwitch, isSwitchOn && styles.toggleSwitchOn]}
            />
          </TouchableOpacity>
        </View>

        <QuizPageSingle displayType="prof" />



        <View style={styles.exitContainer}>
          <Button title="Exit question" onPress={() => {}} />
        </View>

        <View style={styles.imgDivContainer}>
          <Image
            source={require("../assets/Qlick_Logo_CM.png")}
            style={styles.img}
          />
        </View>

        <View style={styles.navContainer}>
          <View style={styles.prevContainer}>
            <Button title="Previous Question" onPress={() => {}} />
          </View>
          <View style={styles.nextContainer}>
            <Button title="Next Question" onPress={() => {}} />
          </View>
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </ImageBackground>
  );
};

export default ProfQuizScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    alignItems: 'center',
    padding: 20,
  },

  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  toggleSwitch: {
    width: 100,
    height: 52,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#808080",
    backgroundColor: "#bfff00",
  },

  toggleSwitchOn: {
    backgroundColor: "#ff0000",
  },

  exitContainer: {
    paddingBottom: 20,
  },

  imgDivContainer: {
    paddingTop: 20,
    paddingBottom: 10,

  },

  img: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },

  navContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  prevContainer: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#00bfff",
    height: 60,
  },

  nextContainer: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#00bfff",
    height: 60,
  },
  infoText: {
    color: "#FFFFFF",
    fontSize: 28,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    fontWeight: 'bold'
  },
  infoContainer: {
    maxWidth: 800,
    width: "100%",
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#696969",
    borderRadius: 5,
    opacity: 0.65,
  },
});
