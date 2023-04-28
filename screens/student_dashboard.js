import React, { useState } from 'react';
import { ImageBackground, View,  } from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { DashboardButtonContainer, handleSwitchToEnroll, handleSwitchToViewPastSessions } from '../components/dashboard_components.js'


const StudentUserDashboard = () => {

  const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

  return (
    <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.4 }}>
      <View style={globalStyles.container}>
          <DashboardButtonContainer onPress={handleSwitchToEnroll} title="Enroll in a Session" />
          <DashboardButtonContainer onPress={handleSwitchToViewPastSessions} title="View Past Sessions" />
      </View>
      </ImageBackground>
  );
};

export default StudentUserDashboard;