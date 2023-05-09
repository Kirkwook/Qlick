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
        navigation.navigate("ViewStudentsForProf");
    }
    const handleViewProfQuizSet = () => {
        navigation.navigate("ViewProfQuizSets");
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
                    title="View list of set questions"
                />
                <DashboardButtonContainer
                    onPress={handleViewQuestions}
                    title="Professor's question view"
                />
                {/* <DashboardButtonContainer
          onPress={handleAddRemoveAccounts}
          title="Add and Remove Accounts"
        /> */}
                <DashboardButtonContainer
                    onPress={handleViewSessionStatistics}
                    title="View a list of students for this professor"
                />
                <DashboardButtonContainer
                    onPress={handleViewProfQuizSet}
                    title="View the professor's quiz sets"
                />
            </View>
        </ImageBackground>
    );
};

export default SessionManagerDashboard;
