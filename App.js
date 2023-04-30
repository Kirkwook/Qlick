import React from 'react';
// import Home from './screens/home';
import LoginStack from './routes/loginStack';
import DevStack from './routes/devStack';

import { StyleSheet, Text, View } from 'react-native';
// import { useParams } from "react-router";
//import { Link } from "react-router-dom";

export default function App() {
  return (
    <DevStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
