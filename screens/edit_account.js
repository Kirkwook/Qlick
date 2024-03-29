import React, { useState } from 'react';
import { ScrollView, ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

const AccountEditingPage = () => {
  const [fName, setFName] = useState('John');
  const [lName, setLName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);

  const handleEdit = () => {
    // Handle editing logic and backend connection
    // WILL BE SIMILAR TO SIGNUP PAGE LOGIC
  };

  const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

  return (
    <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.15 }}>
    <ScrollView contentContainerStyle={globalStyles.container} KeyboardShouldPersistTaps='handled'>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>First Name:</Text>
            <Text style={styles.infoText}>{fName}</Text>
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Last Name:</Text>
            <Text style={styles.infoText}>{lName}</Text>
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Email:</Text>
            <Text style={styles.infoText}>{email}</Text>
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Password:</Text>
            <Text style={styles.infoText}>********</Text>
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    maxWidth : 800,
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: "#A2B1C3",
    borderRadius: 5,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: '#3CB371',
    borderRadius: 5,
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default AccountEditingPage;