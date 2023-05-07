import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { globalStyles } from "../styles/global";
import { dashboardStyles } from "../styles/dashboards";
import {
  DashboardButtonContainer,
  handleSwitchToAccountSettings,
  DashboardButtonGreen,
} from "../components/dashboard_components.js";

const SessionManagerDashboard = ({ navigation }) => {
  const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");
  





  const handleStartSession = () => {
    navigation.navigate("AccountEditingPage");
  }
  const handleCreateSession = () => {
    navigation.navigate("CreateSession");
  }
  const handleSetSessionSettings = () => {
    navigation.navigate("ProfQuestionList");
  }
  const handleViewQuestions = () => {
    navigation.navigate("ProfQuizScreen");
  }
  // const handleAddRemoveAccounts = () => {
  //   navigation.navigate("ProfQuestionList");
  // }
  const handleViewSessionStatistics = () => {
    navigation.navigate("ProfQuestionList2");
  }


  return (
    <ImageBackground
      source={backgroundImageSource}
      resizeMode="cover"
      style={globalStyles.backgroundImage}
      imageStyle={{ opacity: 0.15 }}
    >
      <View style={dashboardStyles.container}>
      <DashboardButtonGreen
          onPress={handleCreateSession}
          title="Create a Session"
        />
        <DashboardButtonGreen
          onPress={handleStartSession}
          title="Start a Session"
        />
        <DashboardButtonContainer
          onPress={handleSetSessionSettings}
          title="Justin Screen 1"
        />
        <DashboardButtonContainer
          onPress={handleViewQuestions}
          title="Justin Screen 2"
        />
        {/* <DashboardButtonContainer
          onPress={handleAddRemoveAccounts}
          title="Add and Remove Accounts"
        /> */}
        <DashboardButtonContainer
          onPress={handleViewSessionStatistics}
          title="Justin Screen 3"
        />
      </View>
    </ImageBackground>
  );
};

export default SessionManagerDashboard;
