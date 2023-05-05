import React, { useState } from 'react';
import { StatusBar, TextInput, ImageBackground, View,  TouchableOpacity, Image, Text} from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { DashboardButtonEnroll, DashboardButtonContainer, } from '../components/dashboard_components.js'
import axios from "axios";
  
const StudentUserDashboard = ({ navigation }) => {

  const handleSwitchToAccountSettings = () => {
    navigation.navigate("AccountEditingPage");
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

  const [code, setCode] = useState("");

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
              onChangeText={(code) => setCode(code)}
            />
          </View>

            {/* 
            COULD AUTOMATICALLY ENROLL AFTER PRESSING ENTER
            COULD AUTOMATICALLY REFILL LAST SESSION CODE? */

            }
          <DashboardButtonEnroll onPress={handleSwitchToEnroll} title="Enroll in a Session" />
          <DashboardButtonContainer onPress={handleSwitchToViewPastSessions} title="View Past Sessions" />
      </View>
      </ImageBackground>
  );
};

export default StudentUserDashboard;