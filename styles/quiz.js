import { StyleSheet } from "react-native";

export const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    opacity: 1,
  },
  exit: {
    paddingBottom: 20,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  imgDiv: {
    paddingTop: 20,
  },
  image: {
    width: "100%",
    height: "auto",
    resizeMode: "contain",
  },
  questionContainer: {
    position: "relative",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },

  // Styling the Question text
  qText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  qTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  // These three style the area for the answer options
  answerOptions: {
    height: 400,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10,
    margin: 20,
  },

  // The styling code below styles the previous and next buttons for the
  // Student quiz navigation bar
  qNav: {
    height: "200%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 20,
  },
  leftButton: {
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    height: "100%",
  },
  rightButton: {
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 5,
    height: "100%",
  },
  buttonText: {
    color: "#00008b",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
