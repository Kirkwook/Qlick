import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import data from '../test_data/test_question_set.json'
import imagePath from "../assets/Qlick_Logo_CM.png";
import axios from "axios";

const questionLoader = async () => {
  try {
    const response = await axios.post(
      "http://10.35.195.217:3000/questionLoader",
      {
        quiz_id: 1,
        creator_id: 123,
      }
    );

    console.log(response.data);

    if (response.data) {
      console.log(response.data);
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

class QuizPageDB extends Component {
  render() {
    data = questionLoader();
    console.log(data);

    const { questions } = data;
    return (
      <View>
        {questions.map((question, index) => (
          <View key={question.question_id}>
            <Text>{question.question_text}</Text>

            {question.image_path && (
              <Image source={{ uri: question.image_path }} />
            )}

            {question.options.map((option, i) => (
              <Text key={i}>{option}</Text>
            ))}
          </View>
        ))}
      </View>
    );
  }
}

export default QuizPageDB;
