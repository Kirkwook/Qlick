import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const InternalUserDashboard = () => {
    const [editingAccounts, setEditingAccounts] = useState(false);
    const [editingDatabase, setEditingDatabase] = useState(false);

    const handleEditAccounts = () => {
        setEditingAccounts(true);
        // Navigate to edit accoutns page
    };

    const handleEditDatabase = () => {
        setEditingDatabase(true);
        // Navigate to edit database page
    };

    const handleSwitchToStudentMode = () => {
      // Navigate to the student dashboard
      // All student capabilities should be available to 
      // somebody who has access to this button
  };

  const handleSwitchToProfMode = () => {
      // Navigate to the professor dashboard
      // All student capabilities should be available
      // as only internal user has this button
  };

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Internal User Dashboard</Text>
            <ButtonContainer onPress={handleSwitchToStudentMode} title="Student Mode" />
            <ButtonContainer onPress={handleSwitchToProfMode} title="Professor Mode" />
            <ButtonContainer onPress={handleEditAccounts} title="Edit User Accounts" />
            <ButtonContainer onPress={handleEditDatabase} title="Edit Database" />
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
      width:"100%",
      height: '100%',
      borderRadius:75,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#4499FF",
  }
  });
  
  export default InternalUserDashboard;