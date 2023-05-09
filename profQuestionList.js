import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Switch, } from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

const ProfQuestionList = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#80ff00", true: "#ff0000" }}
                disabledTrackColor="lightgreen"
                onValueChange={toggleSwitch}
                value={isEnabled}
                ios_backgroundColor="white"
                thumbColor="white"
            />
            <Text>{isEnabled ? 'Closed' : 'Open'}</Text>

            <View style={styles.exit}>
                <Button title="Exit question" color="#ff0000" />
            </View>

            <View style={styles.imgDiv}>
                <Image
                    style={styles.sampleQ}
                    source={require("./assets/Qlick_Logo_CM.png")}
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
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
        opacity: 1,
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