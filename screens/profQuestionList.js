import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const ProfQuestionList = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <TouchableOpacity
          onPress={() => setIsSwitchOn((prev) => !prev)}
          style={[
            styles.slider,
            isSwitchOn ? styles.sliderOn : styles.sliderOff,
          ]}
        >
          <View
            style={[
              styles.sliderButton,
              isSwitchOn ? styles.sliderButtonOn : styles.sliderButtonOff,
            ]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.exit}>
        <Button title="Exit question" color="#ff0000" />
      </View>

      <View style={styles.imgDiv}>
        <Image
          style={styles.sampleQ}
          source={require("../assets/sampleQuestion2.PNG")}
        />
      </View>

      <View style={styles.prev}>
        <Button title="Previous Question" />
      </View>

      <View style={styles.next}>
        <Button title="Next Question" />
      </View>
    </View>
  );
};

export default ProfQuestionList;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "97%",
    display: "inline-block",
  },

  exit: {
    paddingBottom: 20,
  },

  exitButton: {
    textAlign: "center",
    height: 60,
  },

  switch: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  slider: {
    position: "relative",
    display: "inline-block",
    width: 60,
    height: 34,
    borderRadius: 34,
    backgroundColor: "#ff0000",
    transition: ".4s",
  },

  sliderOn: {
    backgroundColor: "#bfff00",
  },

  sliderOff: {
    backgroundColor: "#808080",
  },

  sliderButton: {
    position: "absolute",
    height: 26,
    width: 26,
    bottom: 4,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    transition: ".4s",
  },

  sliderButtonOn: {
    transform: [{ translateX: 26 }],
  },

  sliderButtonOff: {
    transform: [{ translateX: 0 }],
  },

  imgDiv: {
    alignItems: "center",
    paddingBottom: 10,
  },

  sampleQ: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  prev: {
    paddingBottom: 10,
  },

  next: {
    paddingBottom: 10,
  },
});
