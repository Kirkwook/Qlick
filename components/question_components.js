import axios from "axios";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { quizStyles } from "../styles/quiz";
import { AnswerOption } from "./answerOption";

// Load in a question, display it to console
export const QuestionLoader = async () => {
  try {
    const response = await axios.post(
      "http://10.35.195.217:3000/questionLoader",
      {
        quiz_id: 1,
        creator_id: 123,
      }
    );
    console.log("response accepted!");

    if (response.data) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

export const BasicQuestionDisplay = ({
  questionIndex,
  question,
  onNextQuestion,
}) => {
  return (
    <View>
      <Text>Question {questionIndex + 1}</Text>
      <Text>{question.question_text}</Text>

      <Image
        source={{ uri: `data:image/png;base64,${question.image_encoding}` }}
        style={{ width: 200, height: 200 }}
      />

      {question.options.map((option, i) => (
        <Text key={i}>{option}</Text>
      ))}
      <TouchableOpacity onPress={onNextQuestion}>
        <Text>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
};

export const QuizDisplay = ({ questionIndex, question, onNextQuestion }) => {
  const letters = ["A", "B", "C", "D", "E"];

  return (
    <View style={quizStyles.container}>
      <View>
        {/* This is where the title and question info are located */}
        <View style={{ height: 50 }}>
          <Text style={quizStyles.qTitle}>Question {questionIndex + 1}</Text>
          <Text style={quizStyles.qText}>{question.question_text}</Text>
          <Image
            source={{ uri: `data:image/png;base64,${question.image_encoding}` }}
            style={quizStyles.image}
          />
        </View>

        {/* Answer options section of page */}
        <View style={quizStyles.answerOptions}>
          {question.options.map((option, i) => (
            <AnswerOption
              key={i}
              letter={letters[i]}
              option={option}
            ></AnswerOption>
          ))}
        </View>

        {/* These are the navigation buttons for the previous and next questions */}
        {/* TODO Add functionality for previous question button */}
        <View style={quizStyles.qNav}>
          <TouchableOpacity style={quizStyles.leftButton}>
            <Text style={quizStyles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={quizStyles.rightButton}
            onPress={onNextQuestion}
          >
            <Text style={quizStyles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* TODO Make exit button show up */}

        <View style={quizStyles.exit}>
          <Button title="Exit quiz" />
        </View>
      </View>
    </View>
  );
};
