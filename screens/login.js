import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { globalStyles } from "../styles/global";
import axios from "axios";
import { dashboardStyles } from '../styles/dashboards';
import { NavigationActions } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from 'react-native-async-storage';

export default function Home({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupPress = () => {
    navigation.navigate("SignUp");
    // navigation.goBack(); //option for a button that goes to the previous stack screen
  };

  const forgotPress = () => {
    navigation.navigate("ForgotPassword");
  };

  const login = async () => {
    try {
      const response = await axios.post("http://10.35.195.217:3000/login", {
        username: email,
        password: password
      });

      const token = response.data.token;
      const isProfessor = response.data.isProfessor;
      await AsyncStorage.setItem('token', token);
      if (isProfessor){
        console.log("Is professor")
        navigation.navigate("ProfessorUserDashboard") //add other data to pass to dashbaords (i.e userId)
      }
      else {
        navigation.navigate("StudentUserDashboard") //add other data to pass to dashbaords (i.e userId)
        console.log("Is NOT professor")
      }
    } catch (error) {
      console.error(error);
    }
  };
  const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

  return (
    
    // Use ScrollViews with 'KeyboardShouldPersistTaps='handled'' to close the keyboard by tapping anywhere
    
    <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.15 }}>
        
          <ScrollView contentContainerStyle={globalStyles.container} KeyboardShouldPersistTaps='handled'>
            <StatusBar style="auto" />
            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.textInput}
                placeholder="Email"
                placeholderTextColor="#D0D0D0"
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={globalStyles.inputView}>
              <TextInput
                style={globalStyles.textInput}
                placeholder="Password"
                placeholderTextColor="#D0D0D0"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotPassswordButton} onPress={forgotPress}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}  onPress={login}>
              <Text style={globalStyles.loginText}>
                Log In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.signUpButton} onPress={signupPress}>
              <Text style={globalStyles.loginText}>
                Sign Up
              </Text>
            </TouchableOpacity>

          </ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  forgotPassswordButton: {
    height: 15,
    marginBottom: 30,
    height: 20,
    marginBottom: "auto",
    alignItems: "center",
  },

  loginButton: {
    maxWidth: 600,
    width: "100%",
    borderRadius: 25,
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    minHeight: 30,
    backgroundColor: "#79A0CF",
    color: "#FFFFFF"
  },

});
