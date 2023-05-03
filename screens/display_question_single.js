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

    console.log("response data:", response.data);

    if (response.data) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

class QuizPageSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionIndex: 0,
    };
  }

  // Awaits promise made by render
  async componentDidMount() {
    const response = await questionLoader();
    const questions = response.data.questions;
    console.log("did componentDidMount questions:", questions);
    this.setState({ questions });
  }

  // Handles displaying one question at a time logic
  handleNextQuestion = () => {
    const { questionIndex, questions } = this.state;
    if (questionIndex < questions.length - 1) {
      this.setState({ questionIndex: questionIndex + 1 });
    }
  };


  // Renders the page to display loaded JSON one at a time
  render() {
    const { questions, questionIndex } = this.state;
    const question = questions[questionIndex];

    
    console.log("question1:", questions[0]);
    console.log("question2:", questions[1]);
    console.log("question3:", questions[2]);

    return (
        // Check for length before rendering. Throws an error if not loaded instantly (impossible)
      <View>
        {questions.length > 0 ? (
        <View>
            <Text>Question {questionIndex + 1}</Text>
            <Text>{question.question_text}</Text>
            {question.image_path && <Image source={{ uri: question.image_path }} />}

            {question.options.map((option, i) => (
            <Text key={i}>{option}</Text>
            ))}

            <TouchableOpacity onPress={this.handleNextQuestion}>
            <Text>Next Question</Text>
            </TouchableOpacity>
        </View>
        ) : (
        <Text>Loading Question</Text>
        )}
      </View>
    );
  }
}

export default QuizPageSingle;
