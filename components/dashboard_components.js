import React, { useState } from 'react';
import {Styles, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { dashboardStyles } from '../styles/dashboards';

export const handleEditAccounts = () => {
  setEditingAccounts(true);
  // Navigate to edit accoutns page
};

export const handleEditDatabase = () => {
  setEditingDatabase(true);
  // Navigate to edit database page
};

export const handleSwitchToStudentMode = () => {
  // Navigate to the student dashboard
  // All student capabilities should be available to
  // somebody who has access to this button
};

export const handleSwitchToProfMode = () => {
  // Navigate to the professor dashboard
  // All student capabilities should be available
  // as only internal user has this button
};

export const handleSwitchToAccountSettings = () => {
  // Navigate to page
};

export const handleSwitchToCreateQuestionSet = () => {
  // Navigate to page
};

export const handleSwitchToSessionManager = () => {
  // Navigate to page
};

export const handleSwitchToResponseManager = () => {
  // Navigate to page
};

export const handleSwitchToEnroll = () => {
  // Naviagte to enroll in a session screen
};

export const handleSwitchToViewPastSessions = () => {
  // Navigate to the student dashboard
  // All student capabilities should be available to
  // somebody who has access to this button
};

export const DashboardButtonContainer = ({ onPress, title }) => (
  <View style={dashboardStyles.buttonContainer}>
    <TouchableOpacity style={dashboardStyles.buttonText} onPress={onPress}>
      <Text style={dashboardStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  </View>
);

// import { NAMEs }from '../components/dashboard_components.js'
