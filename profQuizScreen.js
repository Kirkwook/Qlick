import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Switch, } from "react-native";
import axios from "axios";

const ProfQuizScreen = () => {
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


            <View style={styles.exitContainer}>
                <Button title="Exit question" onPress={() => { }} />
            </View>

            <View style={styles.imgDivContainer}>
                <Image
                    source={require("../assets/sampleQuestion2.png")}
                    style={styles.img}
                />
            </View>

            <View style={styles.navContainer}>
                <View style={styles.prevContainer}>
                    <Button title="Previous Question" onPress={() => { }} />
                </View>
                <View style={styles.nextContainer}>
                    <Button title="Next Question" onPress={() => { }} />
                </View>
            </View>

        </View>

    );
};

export default ProfQuizScreen;

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
    answerOption: {
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    optionText: {
        color: "darkblue",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
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