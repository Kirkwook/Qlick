import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import { globalStyles } from '../styles/global';
import axios from 'axios';

export default function Home({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const signupPress = () => {
        navigation.navigate('SignUp');
        // navigation.goBack(); //option for a button that goes to the previous stack screen
    }

  const forgotPress = () => {
    navigation.navigate("ForgotPassword");
  };


    const login = async () => {
        try {
            const response = await axios.post('http://10.35.195.217:3000/login', {
                username: email,
                password: password
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
      // TouchableWithoutFeedback removes keyboard when tapping anywhere on screen
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("dismissed keyboard");
          Keyboard.dismiss();
        }}
      >
        <View style={globalStyles.container}>
          <Image source={require("../assets/logo.png")} />

          <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={forgotPress}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            {/* <Text style={styles.forgot_button} onPress={() => navigation.navigate("Register")}>REGISTER</Text> */}
            <Text style={styles.forgot_button} onPress={signupPress}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={login}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
