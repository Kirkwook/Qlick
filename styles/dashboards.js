import { StyleSheet } from "react-native";

export const dashboardStyles = StyleSheet.create({
  settingsButton: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  settingsIcon: {
    width: 35,
    height: 35,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    opacity: 1,
  },
  buttonContainer: {
    width: "100%",
    height: "15%",
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttonTitle: {
    fontSize: 28,
    color: "#FFFFFF",
  },
  buttonText: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4499FF",
  },
  buttonTextGreen: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5BA258",
  },
  buttonContainerEnroll: {
    width: "100%",
    height: "12%",
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttonTextEnroll: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5BA258",
  },
});

/*

import { dashboardStyles } from '../styles/dashboards';
to use this sheet.

Make any style notes about additions or color pallettes below:


*/
