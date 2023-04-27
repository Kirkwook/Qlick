import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const StudentUserDashboard = () => {

  const handleSwitchToEnroll = () => {
    // Naviagte to enroll in a session screen
  };

  const handleSwitchToViewPast = () => {
    // Navigate to the student dashboard
    // All student capabilities should be available to 
    // somebody who has access to this button
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Student View</Text>
      <ButtonContainer onPress={handleSwitchToEnroll} title="Enroll in a Session" />
      <ButtonContainer onPress={handleSwitchToViewPast} title="View Past Sessions" />
    </View>
  );
};

const ButtonContainer = ({ onPress, title }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    color: 'black',
    paddingBottom: 50,
    fontSize: 26
  },
  buttonContainer: {
    width: '80%',
    height: '15%',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonTitle: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  loginBtn: {
    width: "100%",
    height: '100%',
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4499FF",
  }
});

export default StudentUserDashboard;