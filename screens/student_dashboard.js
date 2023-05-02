import React, { useState } from 'react';
import { StatusBar, TextInput, ImageBackground, View,  TouchableOpacity, Image, Text} from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { DashboardButtonEnroll, DashboardButtonContainer, 
  handleSwitchToAccountSettings, handleSwitchToEnroll,
  handleSwitchToViewPastSessions } from '../components/dashboard_components.js'
  



const StudentUserDashboard = () => {

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