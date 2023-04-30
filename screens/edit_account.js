import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

const AccountEditingPage = () => {
  const [fName, setFName] = useState('John');
  const [lName, setLName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);

  const handleEdit = () => {
    // Handle editing logic and backend connection
  };

  const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

  return (
    <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.15 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={globalStyles.container}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>First Name:</Text>
            <Text style={styles.infoText}>{fName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Last Name:</Text>
            <Text style={styles.infoText}>{lName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Email:</Text>
            <Text style={styles.infoText}>{email}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Password:</Text>
            <Text style={styles.infoText}>********</Text>
            <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
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