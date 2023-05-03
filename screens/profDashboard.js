import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Switch, } from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

//This screen lists all of the students and question sets a professor has

const classData = [
    { id: 1, text: 'Student 1' },
    { id: 2, text: 'Student 2' },
    { id: 3, text: 'Student 3' },
    // add more data objects as needed, replace this with JSON 
];

const quizSets = [
    { id: 1, text: 'Quiz 1' },
    { id: 2, text: 'Quiz 2' },
    { id: 3, text: 'Quiz 3' },
    // add more data objects as needed, replace this with JSON 
];

//Controls the orientation of the student list objects
const StudentListItem = ({ item }) => (
    <View style={styles.studentListContainer}>
        <Text>{item.text}</Text>

        <View style={styles.edit}>
            <Button title="Delete student" />
        </View>
    </View>
);


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

const ProfQuestionList = () => {
    return (
        <View>

            <View>
                <FlatList
                    data={classData}
                    renderItem={({ item }) => <StudentListItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

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


export default ProfQuestionList;

const styles = StyleSheet.create({
    studentListContainer: {
        padding: 5,
        margin: 0,
        opacity: 1,
        left: "66%",
        width: "33%",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    quizSetContainer: {
        justifyContent: "flex-start",
        padding: 5,
        margin: 0,
        opacity: 1,
        width: "33%",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
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