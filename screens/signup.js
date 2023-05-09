import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, Alert, ScrollView} from 'react-native';
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
            <ScrollView contentContainerStyle={globalStyles.container} KeyboardShouldPersistTaps='handled'>
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
            <View style={globalStyles.passwordContainer}>
                <TextInput
                style={globalStyles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#FFF0F0"
                value={password1}
                onChangeText={setPassword1}
                secureTextEntry={!showPassword1}
                />
                <TouchableOpacity
                style={globalStyles.passwordToggle}
                onPress={() => setShowPassword1(!showPassword1)}
                >
                <Text style={globalStyles.passwordToggleText}>{showPassword1 ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.passwordContainer}>
                <TextInput
                style={globalStyles.passwordInput}
                placeholder="Confirm Password"
                placeholderTextColor="#FFF0F0"
                value={password2}
                onChangeText={setPassword2}
                secureTextEntry={!showPassword2}
                />
                <TouchableOpacity
                style={globalStyles.passwordToggle}
                onPress={() => setShowPassword2(!showPassword2)}
                >
                <Text style={globalStyles.passwordToggleText}>{showPassword2 ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
            </View>
  
            <View style={styles.checkboxContainer}>
            <Checkbox 
                style={styles.checkbox}
                value={isProfessor}
                onValueChange={setIsProfessor}
                // color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.passwordToggleText}>Are you registering as a professor?</Text>
            </View>
  
            <TouchableOpacity style={globalStyles.signUpButton} onPress={signup}>
                <Text style={globalStyles.loginText}>
                Register
                </Text>
              </TouchableOpacity>

            </ScrollView>
      </ImageBackground>
    );
  // };
}


const styles = StyleSheet.create({
  input: {
    width: '100%',
    maxWidth: 600,
    minHeight: 30,
    backgroundColor:"#A2B1C3",
    color: "#FFFFFF",
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  checkbox: {
    marginRight : 10,
  },
});

// export default RegisterAccount;
