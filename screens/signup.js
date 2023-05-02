import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import axios from "axios";
import { globalStyles } from '../styles/global';

export default function Signup({ navigation }) {
  // const RegisterAccount = () => {
    const [isProfessor, setIsProfessor] = useState(false);
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
  
    const signup = async () => {
      if (password1 == password2){
        try {
          const response = await axios.post("http://10.35.195.217:3000/signup", {
            firstname: fName,
            lastname: lName,
            username: email,
            isProfessor: isProfessor,
            password: password1
          });
          console.log(response.data);
          if(response.data.success == true){
            Alert.alert('Success!', 'You\'ve successfully signed up. Please log in', [
              {
                text: 'OK',
                onPress: () => navigation.navigate("Login")
              }
            ]);
          }
        } catch (error) {
          console.error(error);
        }
      }
      else if(fName.length == 0 || lName == 0 || email == 0 || password1 == 0 || password2 == 0) { ////////////////////NEED TO FIX
        Alert.alert('There is an empty field. Please enter all information and try again. ', [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed')
          }
        ]);
      }
      else{
        Alert.alert('Passwords Don\'t Match', 'The passwords do not match. Please try again. ', [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed')
          }
        ]);
      }
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
  
            <View style={styles.passwordContainer}>
            <Checkbox 
                style={styles.checkbox}
                value={isProfessor}
                onValueChange={setIsProfessor}
                // color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.passwordToggleText}>Are you registering as a professor?</Text>
            </View>
  
            <TouchableOpacity style={globalStyles.signUpButton}>
                <Text style={globalStyles.loginText} onPress={signup}>
                Register
                </Text>
              </TouchableOpacity>
  
  
  
  
  
            </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  // };
}


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

// export default RegisterAccount;
