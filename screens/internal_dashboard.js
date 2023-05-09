import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { DashboardButtonContainer, } from '../components/dashboard_components.js'


const InternalUserDashboard = ({ navigation }) => {

  const handleSwitchToAccountSettings = () => {
    navigation.navigate("AccountEditingPage");
  };
  const handleSwitchToStudentMode = () => {
    navigation.navigate("StudentViewMode");
  };
  const handleSwitchToProfMode = () => {
    navigation.navigate("ProfViewMode");
  };
  const handleEditAccounts = () => {
    setEditingAccounts(true);
    navigation.navigate("EditUserAccounts");
  };
  const handleEditDatabase = () => {
    setEditingDatabase(true);
    navigation.navigate("EditDatabase");
  };
  const handleGoToLogin = () => {
    navigation.navigate("IntGoToLogin");
  };

  // MAY NEED TO BE ADDED TO COMPONENTS. FUNCTIONALITY NEEDED
    const [editingAccounts, setEditingAccounts] = useState(false);
    const [editingDatabase, setEditingDatabase] = useState(false);

    const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

    return (

      <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.15 }}>
        < View style={dashboardStyles.accountContainer}>
          <TouchableOpacity onPress={handleSwitchToAccountSettings} style={dashboardStyles.settingsButton}>
          <Image source={require('../assets/settings.png')} style={dashboardStyles.settingsIcon}/>  
          </TouchableOpacity>
        </View>
        <View style={dashboardStyles.container}>
          <DashboardButtonContainer onPress={handleSwitchToStudentMode} title="Student Mode" />
          <DashboardButtonContainer onPress={handleSwitchToProfMode} title="Professor Mode" />
          {/* <DashboardButtonContainer onPress={handleEditAccounts} title="Edit User Accounts" />
          <DashboardButtonContainer onPress={handleEditDatabase} title="Edit Database" /> */}
          <DashboardButtonContainer onPress={handleGoToLogin} title="Go to Login Page" />
        </View>
      </ImageBackground>

    );
};
  
export default InternalUserDashboard;