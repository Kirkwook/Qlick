import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flexDirection: "column",
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      opacity: 1,
    },
    backgroundImage: {
      flex: 1,
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    inputView: {
      backgroundColor:"#2B609F",
      borderRadius: 30,
      width: "100%",
      height:'10%',
      minHeight: 40,
      maxWidth: 600,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: 'center',
    },
    textInput: {
      maxWidth: 600,
      flex: 1,
      width: "100%",
      padding: 20,
      fontSize: 24,
      color: "#FFFFFF",
    },
    signUpButton:{
      minHeight: 30,
      width: "100%",
      borderRadius: 25,
      height: "6%",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: 600,
      marginTop: "auto",
      margin: 10,
      backgroundColor: "#A6C0DF",
      color: "#FFFFFF"
    },
    loginText: {
      fontSize: 20,
      color: "#FFFFFF"
    },
    inputViewEnroll: {
      maxWidth: 800,
      backgroundColor:"#E2E9F1",
      borderRadius: 30,
      width: "100%",
      height:'15%',
      marginBottom: 20,
      alignItems: "center",
      justifyContent: 'center',
      opacity: .95,
    },
    textInputEnroll: {
      flex: 1,
      width: "80%",
      fontSize: 48,
      color: "#696969",
      alignItems: "center",
      justifyContent: 'center',
      textAlign: 'center',
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
    passwordContainerLogin: {
      backgroundColor: "#2B609F",
      borderRadius: 30,
      width: "100%",
      height: "10%",
      marginBottom: 20,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    passwordTextInputLogin: {
      flex: 1,
      fontSize: 24,
      color: "#FFFFFF",
    },
});

/*

import { globalStyles } from '../styles/global';
to use this sheet.

Make any style notes about additions or color pallettes below:


*/
