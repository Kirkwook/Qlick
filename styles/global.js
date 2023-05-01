import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#2B609F",
    borderRadius: 30,
    width: "100%",
    height: "10%",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    width: "80%",
    fontSize: 24,
    color: "#FFFFFF",
  },
  signUpButton: {
    width: "100%",
    borderRadius: 25,
    height: "6%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
    margin: 10,
    backgroundColor: "#A6C0DF",
    color: "#FFFFFF",
  },
  loginText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});

/*

import { globalStyles } from '../styles/global';
to use this sheet.

Make any style notes about additions or color pallettes below:


*/
