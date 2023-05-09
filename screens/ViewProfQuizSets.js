import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Switch, } from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

//This screen lists all of the students and question sets a professor has

const quizSets = [
    { id: 1, text: 'Quiz 1' },
    { id: 2, text: 'Quiz 2' },
    { id: 3, text: 'Quiz 3' },
    // add more data objects as needed, replace this with JSON 
];

//Controls the orientation of the quiz list objects
const QuizListItem = ({ item }) => (
    <View style={styles.quizSetContainer}>
        <Text>{item.text}</Text>

        <View style={styles.edit}>
            <Button title="View question set" />
        </View>

        <View style={styles.exit}>
            <Button title="Delete question set" />
        </View>
    </View>
);

const ViewProfQuizSets = () => {
    return (
        <View>
            <View>
                <FlatList
                    data={quizSets}
                    renderItem={({ item }) => <QuizListItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />

            </View>
            <Button title="Logout" color="#ff0000" />
        </View>
    );
};


export default ViewProfQuizSets;

const styles = StyleSheet.create({
    quizSetContainer: {
        flex: 1,
        padding: 5,
        margin: 0,
        opacity: 1,
        //left: "33%",
        width: "100%",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
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
});