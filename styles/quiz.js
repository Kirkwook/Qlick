import { StyleSheet } from "react-native";

export const quizStyles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    opacity: 1,
    width: "100%",
  },
  exit: {
    paddingBottom: 20,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "auto",
    resizeMode: "contain",
  },

  // Styling the Question text
  qTop: {
    flex: 2,
    height: 50,
    backgroundColor: "lightblue",
  },

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
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10,
    backgroundColor: "white", //Get rid of this when done
  },

  optionSelected: {
    borderColor: "purple",
    backgroundColor: "lightblue",
  },

  // The styling code below styles the previous and next buttons for the
  // Student quiz navigation bar
  qNav: {
    flex: 1,
    height: "200%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "lightgray", // get rid of this when done
  },
  prevButton: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#00008b",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
