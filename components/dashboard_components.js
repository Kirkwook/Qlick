import React, { useState } from 'react';
import {Styles, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';
import { NavigationActions } from 'react-navigation';

// MOST OF THESE ARE NOT IMPORTED AS THEY ARE NOW IN EACH LOCAL DASHBOARD

const handleSwitchToAccountSettings = () => {
  navigation.navigate("AccountEditingPage");
};

const handleSwitchToStudentMode = () => {
  navigation.navigate("StudentViewMode");
};

const handleSwitchToProfMode = () => {
  navigation.navigate("ProfViewMode");

};

export const DashboardButtonContainer = ({ onPress, title }) => (
  <View style={dashboardStyles.buttonContainer}>
    <TouchableOpacity style={dashboardStyles.buttonText} onPress={onPress}>
      <Text style={dashboardStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export const DashboardButtonGreen = ({ onPress, title }) => (
  <View style={dashboardStyles.buttonContainer}>
    <TouchableOpacity style={dashboardStyles.buttonTextGreen} onPress={onPress}>
      <Text style={dashboardStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export const DashboardButtonEnroll = ({ onPress, title }) => (
  <View style={dashboardStyles.buttonContainerEnroll}>
    <TouchableOpacity style={dashboardStyles.buttonTextEnroll} onPress={onPress}>
      <Text style={dashboardStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  </View>
);


// import { NAMEs }from '../components/dashboard_components.js'
