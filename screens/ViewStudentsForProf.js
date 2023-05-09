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

//Controls the orientation of the student list objects
const StudentListItem = ({ item }) => (
    <View style={styles.studentListContainer}>
        <Text>{item.text}</Text>

        <View style={styles.edit}>
            <Button title="Delete student" />
        </View>
    </View>
);


const ViewStudentsForProf = () => {
    return (
        <View>

            <View>
                <FlatList
                    data={classData}
                    renderItem={({ item }) => <StudentListItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <Button title="Logout" color="#ff0000" />
        </View>
    );
};


export default ViewStudentsForProf;

const styles = StyleSheet.create({
    studentListContainer: {
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