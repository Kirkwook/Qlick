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
import { dashboardStyles } from "../styles/dashboards";

const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

// const { sessionCode, sessionId } = route.params;
// const sessionCode = navigation.getParam('sessionCode');
// const sessionId = props.navigation.getParam('sessionId');

const ProfQuizScreen = ({ navigation, props }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleTogglePress = () => {
    setIsSwitchOn(!isSwitchOn);
  };

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
          <TouchableOpacity onPress={handleTogglePress}

              style={[styles.toggleSwitch, isSwitchOn && styles.toggleSwitchOn]}>
                <Text style={styles.buttonTitle}>{isSwitchOn ? 'Question Closed' : 'Accepting Responses'}</Text>

          </TouchableOpacity>
        </View>

        <QuizPageSingle displayType="prof" />



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
    // flexDirection: "row",
    // alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  toggleSwitch: {
    width: 250,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#808080",
    backgroundColor: "#bfff00",
    alignItems: "center",
    justifyContent: "center",
  },

  toggleSwitchOn: {
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: "flex-start",
  },
  buttonTitle: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
