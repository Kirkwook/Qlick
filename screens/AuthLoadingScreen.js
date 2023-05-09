import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from 'react-native-async-storage';
import axios from 'axios';

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        try {
          const response = await axios.get('/protected');
          navigation.navigate('Main');
        } catch (error) {
          // If the token is invalid or expired, remove it from AsyncStorage and show the login screen
          await AsyncStorage.removeItem('token');
          navigation.navigate('Login');
        }
      } else {
        navigation.navigate('Login');
      }
    };
    checkToken();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoadingScreen;