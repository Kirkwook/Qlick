import React from 'react';
import Home from './screens/home';
import Navigator from './routes/homeStack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Navigator/>
    /*<View style={styles.container}>
          <StatusBar style="auto" />

          <h1>Welcome to QClick</h1>
          <div className="login-wrapper">
              <form>
                  <label>
                      <p>Username</p>
                      <input type="text" />
                  </label>
                  <label>
                      <p>Password</p>
                      <input type="password" />
                  </label>
                  <div>
                      <button type="submit">Submit</button>
                  </div>
              </form>
          </div>
    </View>*/
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
