import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { globalStyles } from "../styles/global";

export default function testSite({ navigation }) {
    const signupPress = () => {
      navigation.navigate("SignUp");
    }

    const forgotPress = () => {
        navigation.navigate("ForgotPassword");
    };

    const loginPress = () => {
        navigation.navigate("Login");
    };

    const editaccPress = () => {
        navigation.navigate("AccountEditingPage");
    };

    const adashPress = () => {
        navigation.navigate("InternalUserDashboard");
    };

    const sdashPress = () => {
        navigation.navigate("StudentUserDashboard");
    };

    const pdashPress = () => {
        navigation.navigate("ProfessorUserDashboard");
    };

    const pdashPress2 = () => {
        navigation.navigate("profDashboard");
    };

    const squizPress = () => {
        navigation.navigate("studentsQuizScreen");
    };

    const createqPress = () => {
        navigation.navigate("QuizCreator");
    };

    const idashPress = () => {
        navigation.navigate("InternalUserDashboard");
    };

    const sessionPress = () => {
        navigation.navigate("SessionManagerDashboard");
    };

    const pquizPress = () => {
        navigation.navigate("ProfQuestionList");
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container} KeyboardShouldPersistTaps='handled'>
            <StatusBar style="auto" />
            <TouchableOpacity style={styles.button} onPress={signupPress}>
                <Text>
                    Sign Up
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={forgotPress}>
                <Text>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loginPress}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={editaccPress}>
                <Text>
                    Edit Account
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={adashPress}>
                <Text>
                    Admin Dashboard
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={sdashPress}>
                <Text>
                    Student Dashboard
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={pdashPress}>
                <Text>
                    Professor Dashboard
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={pdashPress2}>
                <Text>
                    Professor Dashboard 2
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={squizPress}>
                <Text>
                    Students Quiz Screen (BROKEN)
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={createqPress}>
                <Text>
                    Create Quiz
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={idashPress}>
                <Text>
                    Internal User Dashboard
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={sessionPress}>
                <Text>
                    Session Manger
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={pquizPress}>
                <Text>
                    Prof Quiz Screen
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
      maxWidth: 600,
      width: "100%",
      borderRadius: 25,
      height: "8%",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      minHeight: 30,
      backgroundColor: "#79A0CF",
      color: "#FFFFFF"
    }, 
  });