import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

const ViewStudentResponses = () => {
  return (
    <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.15 }}>
        <View style={globalStyles.container}>
            <Text> ViewStudentResponses UNDER CONSTRUCTION </Text>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
});

export default ViewStudentResponses;