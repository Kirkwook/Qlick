import React, { useState } from 'react';
import { StatusBar, TextInput, ImageBackground, View,  TouchableOpacity, Image, Text} from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { DashboardButtonEnroll, DashboardButtonContainer, } from '../components/dashboard_components.js'
import axios from "axios";
  
const API_BASE_URL = 'http://10.35.195.217:3000';


const StudentUserDashboard = ({ navigation }) => {

  const [sessionCode, setSessionCode] = useState('');
  const [sessionId, setSessionId] = useState(null);
  const [sessionInfo, setSessionInfo] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [error, setError] = useState(null);

  const handleSwitchToAccountSettings = () => {
    navigation.navigate("AccountEditingPage");
  };


  const joinSession = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/sessions/${sessionCode}/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 1 }), // Replace with actual student ID
      });
      if (response.ok) {
        setIsJoined(true);
      } else {
        setError(await response.text());
      }
    } catch (err) {
      console.error(err);
      setError('Error joining session');
    }
};




  const handleSwitchToEnroll = async () => {

    // TODO: Add session joining logic
    // try {
    //   const response = await axios.post("http://10.35.195.217:3000/classCode", {
    //     currentCode: code,
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }



    // 5/5/23 Currently just displaying the basic quiz
    navigation.navigate("BasicDisplayTest");

  };

  const handleSwitchToViewPastSessions = () => {
    navigation.navigate("StudentViewPastSessions");
  };

  const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");


  return (
    <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.4 }}>
      < View style={dashboardStyles.accountContainer}>
        <TouchableOpacity onPress={handleSwitchToAccountSettings} style={dashboardStyles.settingsButton}>
        <Image source={require('../assets/settings.png')} style={dashboardStyles.settingsIcon}/>  
        </TouchableOpacity>
      </View>

        <View style={globalStyles.container}>
          <View style={globalStyles.inputViewEnroll}>
            <TextInput
              style={globalStyles.textInputEnroll}
              placeholder="Class Code"
              placeholderTextColor="#696969"
              onChangeText={(code) => setSessionCode(code)}
            />
          </View>

            {/* 
            COULD AUTOMATICALLY ENROLL AFTER PRESSING ENTER
            COULD AUTOMATICALLY REFILL LAST SESSION CODE? */

            }
          <DashboardButtonEnroll onPress={joinSession} title="Join a Session" />
          <DashboardButtonContainer onPress={handleSwitchToViewPastSessions} title="View Past Sessions" />
      </View>
      </ImageBackground>
  );
};

export default StudentUserDashboard;