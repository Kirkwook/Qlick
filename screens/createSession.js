import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, ScrollView} from 'react-native';
import Checkbox from 'expo-checkbox';
import axios from "axios";
import { dashboardStyles } from "../styles/dashboards";
import {
    DashboardButtonContainer,
    handleSwitchToAccountSettings,
    DashboardButtonGreen,
  } from "../components/dashboard_components.js";
import { globalStyles } from '../styles/global';


export default function CreateSession({ navigation }) {
    const [sessionCode, setSessionCode] = useState('');
    const [sessionId, setSessionId] = useState(null);
    // const [sessionInfo, setSessionInfo] = useState(null);
    
    //test variable values
    const sessionName = 'testname';
    const quizId = 0;
    const userId = 1;
    
    const [isJoined, setIsJoined] = useState(false);
    const [error, setError] = useState(null);
  
    const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");


    const API_BASE_URL = 'http://10.35.195.217:3000';
  
  
  // const createSession = async (sessionName, quizId) => {
  const createSession = async () => {
    try {
    //   const response = await axios.post(`${API_BASE_URL}/sessions`, {
    //     sessionName,
    //     quizId,
    //     isQuizSession: false,
    //     currentQuestionNumber: 0,
    //     isActive: false,
    //   });
    const response = await axios.post(`${API_BASE_URL}/sessions`, {
        userId,
        quizId,
      });
      //route.params.sessionCode
      const { sessionId, sessionCode } = response.data;
      console.log(response.data);
      setSessionCode(sessionCode);
      setSessionId(sessionId);
      Alert.alert('Success!', 'You\'ve successfully created a session.', [
        {
          text: 'OK',
          onPress: () => navigation.navigate("StartSession", {sessionCode, sessionId})
        }
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  
  // This function takes two arguments, sessionName and quizId, which represent the name of the session and the ID of the quiz associated with the session, respectively.
  
  // The function then makes a POST request to the /api/sessions endpoint on the server with the session information, including the sessionName, quizId, isQuizSession (set to false for a regular session), currentQuestionNumber (set to 0 initially), and isActive (set to false initially) properties.
  
  // If the request is successful, the function returns the response data (which would include the session ID generated by the server). If there's an error, the function logs the error to the console.
  




  const createQuizSession = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/quiz-sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ professorId: 1, quizId: 1 }), // Replace with actual professor and quiz IDs
      });
      if (response.ok) {
        const { sessionId } = await response.json();
        setSessionId(sessionId);
      } else {
        setError(await response.text());
      }
    } catch (err) {
      console.error(err);
      setError('Error creating quiz session');
    }
  };
  
  
    return (
      <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.15 }}>
            <View style={dashboardStyles.container}>
                <DashboardButtonGreen
                    onPress={createSession}
                    title="Create Session"
                />
            </View>
      </ImageBackground>
    );
  // };
}


const styles = StyleSheet.create({
  input: {
    width: '100%',
    maxWidth: 600,
    minHeight: 30,
    backgroundColor:"#A2B1C3",
    color: "#FFFFFF",
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  checkbox: {
    marginRight : 10,
  },
});

// export default RegisterAccount;