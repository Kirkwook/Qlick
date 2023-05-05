import React from "react";
// import Home from './screens/home';
// import { NavigationContainer } from '@react-navigation/native';
import LoginStack from "./routes/loginStack";
import DevStack from "./routes/devStack";

import { StyleSheet, Text, View } from "react-native";

export default function App() {

  return (
    <LoginStack/>
    
  );

}

// const AppNavigator = createSwitchNavigator({
//   LoginStack: LoginStack,
//   StudentStack: StudentStack,
//   ProfessorStack: ProfessorStack
// },
// // {
// //   initialRouteName: ''
// // }
// );
// const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
