import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { DashboardButtonContainer, handleSwitchToEnroll, handleSwitchToViewPastSessions } from '../components/dashboard_components.js'


const StudentUserDashboard = () => {
  
  return (
    <View style={globalStyles.backgroundImageContainer}>

      <Image 
            style={globalStyles.backgroundImage} 
            source = {require("../assets/logo.png")} 
            resizeMode="cover"/>

      <View style={globalStyles.container}>
          <DashboardButtonContainer onPress={handleSwitchToEnroll} title="Enroll in a Session" />
          <DashboardButtonContainer onPress={handleSwitchToViewPastSessions} title="View Past Sessions" />

      </View>

    </View>
  );
};

export default StudentUserDashboard;