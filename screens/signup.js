import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

const RegisterAccount = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleRegister = () => {
    // Handle registration logic and backend connection
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
          <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#FFF0F0"
              value={fName}
              onChangeText={setFName}
          />
          <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#FFF0F0"
              value={lName}
              onChangeText={setLName}
          />
          <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#FFF0F0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
              <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#FFF0F0"
              value={password1}
              onChangeText={setPassword1}
              secureTextEntry={!showPassword1}
              />
              <TouchableOpacity
              style={styles.passwordToggle}
              onPress={() => setShowPassword1(!showPassword1)}
              >
              <Text style={styles.passwordToggleText}>{showPassword1 ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
              <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#FFF0F0"
              value={password2}
              onChangeText={setPassword2}
              secureTextEntry={!showPassword2}
              />
              <TouchableOpacity
              style={styles.passwordToggle}
              onPress={() => setShowPassword2(!showPassword2)}
              >
              <Text style={styles.passwordToggleText}>{showPassword2 ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
          </View>

          <TouchableOpacity style={globalStyles.signUpButton}>
              <Text style={globalStyles.loginText} onPress={handleRegister}>
              Register
              </Text>
            </TouchableOpacity>





          </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor:"#A2B1C3",
    color: "#FFFFFF",
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  passwordInput: {
    backgroundColor:"#A2B1C3",
    flex: 1,
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  passwordToggle: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  passwordToggleText: {
    fontSize: 12,
    // fontWeight
  },
});

export default RegisterAccount;
