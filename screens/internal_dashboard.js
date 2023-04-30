import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { DashboardButtonContainer, handleSwitchToAccountSettings, handleEditAccounts, handleEditDatabase, handleSwitchToStudentMode, handleSwitchToProfMode } from '../components/dashboard_components.js'


const InternalUserDashboard = () => {

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
          <DashboardButtonContainer onPress={handleEditAccounts} title="Edit User Accounts" />
          <DashboardButtonContainer onPress={handleEditDatabase} title="Edit Database" />
        </View>
      </ImageBackground>

    );
};
  
export default InternalUserDashboard;