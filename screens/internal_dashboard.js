import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { DashboardButtonContainer, handleEditAccounts, handleEditDatabase, handleSwitchToStudentMode, handleSwitchToProfMode } from '../components/dashboard_components.js'

const InternalUserDashboard = () => {

  // MAY NEED TO BE ADDED TO COMPONENTS. FUNCTIONALITY NEEDED
    const [editingAccounts, setEditingAccounts] = useState(false);
    const [editingDatabase, setEditingDatabase] = useState(false);

    return (
      <View style={globalStyles.backgroundImageContainer}>

        <Image 
              style={globalStyles.backgroundImage} 
              source = {require("../assets/logo.png")} 
              resizeMode="cover"/>

        <View style={globalStyles.container}>
            <DashboardButtonContainer onPress={handleSwitchToStudentMode} title="Student Mode" />
            <DashboardButtonContainer onPress={handleSwitchToProfMode} title="Professor Mode" />
            <DashboardButtonContainer onPress={handleEditAccounts} title="Edit User Accounts" />
            <DashboardButtonContainer onPress={handleEditDatabase} title="Edit Database" />
        </View>

      </View>
    );
};
  
export default InternalUserDashboard;