import axios from "axios";
const fs = require('fs');

import React, { useState } from "react";
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

export const QuizDisplay = ({
  questionIndex,
  question,
  onNextQuestion,
  onPrevQuestion,
}) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const letters = ["A", "B", "C", "D", "E"];

  const handleAnswerOptionPress = (questionIndex, optionIndex) => {
    // Update the selected answer index state
    setSelectedAnswerIndex(optionIndex);
  
    // Store the selected answer in a JSON object to be saved later
    const answer = {
      questionIndex: questionIndex,
      selectedOptionIndex: optionIndex
    };
  
    // Do something with the answer object, such as adding it to an array of answers
    // or saving it to a file/database
    console.log(answer);

  };

  return (
    <View style={quizStyles.container}>
      <View>
        {/* This is where the title and question info are located */}
        <View style={quizStyles.qTop}>
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
              index={i}
              select={selectedAnswerIndex === i}
              onPress={handleAnswerOptionPress}
            ></AnswerOption>
          ))}
        </View>

        {/* These are the navigation buttons for the previous and next questions */}
        {/* TODO Add functionality for previous question button */}
        <View style={quizStyles.qNav}>
          <TouchableOpacity
            style={quizStyles.prevButton}
            onPress={onPrevQuestion}
          >
            <Text style={quizStyles.buttonText}>
              &#x3C;&#x2D;&#x2D; Previous &#x2D;&#x2D;
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={quizStyles.nextButton}
            onPress={onNextQuestion}
          >
            <Text style={quizStyles.buttonText}>
              &#x2D;&#x2D; Next &#x2D;&#x2D;&#x3E;
            </Text>
          </TouchableOpacity>
        </View>

        {/* TODO Make exit button show up */}
        {/* 
        <View style={quizStyles.exit}>
          <Button title="Exit quiz" />
        </View> */}
      </View>
    </View>
  );
};
