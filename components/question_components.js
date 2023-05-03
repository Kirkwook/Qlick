import axios from "axios";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

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

export const BasicQuestionDisplay = ({ questionIndex, question, onNextQuestion }) => {
    return (
      <View>
        <Text>Question {questionIndex + 1}</Text>
        <Text>{question.question_text}</Text>
        {question.image_path && (
          <Image source={{ uri: question.image_path }} />
        )}
        {question.options.map((option, i) => (
          <Text key={i}>{option}</Text>
        ))}
        <TouchableOpacity onPress={onNextQuestion}>
          <Text>Next Question</Text>
        </TouchableOpacity>
      </View>
    );
  };