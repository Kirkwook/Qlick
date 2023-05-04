import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Switch, } from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

//This screen list all of the questions of a given question set that a professor has

const data = [
    { id: 1, text: 'Question 1' },
    { id: 2, text: 'Question 2' },
    { id: 3, text: 'Question 3' },
    // add more data objects as needed, replace this with JSON 
];

//Controls the orientation of the list objects
const ListItem = ({ item }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    return (
        <View style={styles.listContainer}>
            <Text style={{ marginRight: 10 }}>{item.text}</Text>
            <Switch
                trackColor={{ false: "#80ff00", true: "#ff0000" }}
                disabledTrackColor="lightgreen"
                onValueChange={toggleSwitch}
                value={isEnabled}
                ios_backgroundColor="white"
                thumbColor="white" />
            <Text>{isEnabled ? 'Closed' : 'Open'}</Text>

            <View style={styles.edit}>
                <Button title="Edit question" />
            </View>
            <View style={styles.exit}>
                <Button title="Delete question" />
            </View>

            {/*<View style={styles.imgDiv}>
                <Image
                    style={styles.sampleQ}
                    source={require("../assets/Qlick_Logo_CM.png")} />
            </View>*/}
        </View>
    );
};

const ProfQuestionList = () => {
    return (
        <><View style={styles.exit}>
            <Button title="Exit question set" color="#ff0000" />
        </View><FlatList
                data={data}
                renderItem={({ item }) => <ListItem item={item} />}
                keyExtractor={item => item.id.toString()} /></>
    );
};

export default ProfQuestionList;

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 5,
        opacity: 1,
        height: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        opacity: 1,
    },

    exit: {
        paddingTop: 20,
        color: "red",
    },

    edit: {
        color: "lightblue",
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

    sliderButton: {
        position: "absolute",
        height: 26,
        width: 26,
        bottom: 4,
        borderRadius: 50,
        backgroundColor: "#ffffff",
        transition: ".4s",
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
});