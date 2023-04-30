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
import {
  handleStartSession,
  handleSetSessionSettings,
  handleAddRemoveAccounts,
  handleViewSessionStatistics,
  handleViewQuestions,
} from "../components/session_components.js";

const SessionManagerDashboard = () => {
  const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");

  return (
    <ImageBackground
      source={backgroundImageSource}
      resizeMode="cover"
      style={globalStyles.backgroundImage}
      imageStyle={{ opacity: 0.15 }}
    >
      <View style={dashboardStyles.accountContainer}>
        <TouchableOpacity
          onPress={handleSwitchToAccountSettings}
          style={dashboardStyles.settingsButton}
        >
          <Image
            source={require("../assets/settings.png")}
            style={dashboardStyles.settingsIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={dashboardStyles.container}>
        <DashboardButtonGreen
          onPress={handleStartSession}
          title="Start a Session"
        />
        <DashboardButtonContainer
          onPress={handleSetSessionSettings}
          title="Set Session Settings"
        />
        <DashboardButtonContainer
          onPress={handleViewQuestions}
          title="View Questions"
        />
        <DashboardButtonContainer
          onPress={handleAddRemoveAccounts}
          title="Add and Remove Accounts"
        />
        <DashboardButtonContainer
          onPress={handleViewSessionStatistics}
          title="View Session Statistics"
        />
      </View>
    </ImageBackground>
  );
};

export default SessionManagerDashboard;
