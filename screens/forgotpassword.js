import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    Keyboard,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
import { globalStyles } from "../styles/global";

const recover = async () => {
    /*
    try {

    } catch (error) {
      console.error(error);
    }
    */
  };

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    return (
      <ScrollView contentContainerStyle={globalStyles.container} KeyboardShouldPersistTaps='handled'>
            <View style={styles.container}>
                <Text>Forgot Password?</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#FFF0F0"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity style={styles.recoverButton}  onPress={recover}>
              <Text style={globalStyles.loginText}>
                Recover
              </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    input: {
        width: 300,
        backgroundColor:"#A2B1C3",
        color: "#FFFFFF",
        height: 60,
        minHeight: 60,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 18,
        paddingLeft: 10,
      },
    recoverButton: {
        width: 300,
        backgroundColor:"#A6C0DF",
        color: "#FFFFFF",
        height: 60,
        minHeight: 60,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 18,
        alignItems: "center",
        justifyContent: "center",
      },
});