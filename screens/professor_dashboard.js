import React, { useState } from 'react';
import { Text, ImageBackground, TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { NavigationActions } from 'react-navigation';
import { DashboardButtonContainer ,handleSwitchToStudentMode, handleSwitchToCreateQuestionSet, handleSwitchToSessionManager, handleSwitchToResponseManager } from '../components/dashboard_components.js'

const ProfessorUserDashboard = ({ navigation }) => {

  const handleSwitchToAccountSettings = () => {
    navigation.navigate("AccountEditingPage");
  };

  const handleSwitchToCreateQuestionSet = () => {
    navigation.navigate("QuizCreator");
  };
  
  const handleSwitchToSessionManager = () => {
    navigation.navigate("SessionManagerDashboard");
  };
  
  const handleSwitchToResponseManager = () => {
    navigation.navigate("ViewStudentResponses");
  };

  const handleSwitchToStudentMode = () => {
    navigation.navigate("StudentViewMode");
  };
    const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

    return (

      <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.15 }}>
        < View style={dashboardStyles.accountContainer}>
          <TouchableOpacity onPress={handleSwitchToAccountSettings} style={dashboardStyles.settingsButton}>
          <Image source={require('../assets/settings.png')} style={dashboardStyles.settingsIcon}/>  
          </TouchableOpacity>
        </View>
        < View style={dashboardStyles.container}>
          <DashboardButtonContainer onPress={handleSwitchToCreateQuestionSet} title="Create Question Set" />
          <DashboardButtonContainer onPress={handleSwitchToSessionManager} title="Start or Manage Sessions" />
          <DashboardButtonContainer onPress={handleSwitchToResponseManager} title="View Student Responses" />
          <DashboardButtonContainer onPress={handleSwitchToStudentMode} title="Student Mode" />
        </View>
      </ImageBackground>

    );
};
  
export default ProfessorUserDashboard;