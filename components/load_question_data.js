import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  QuestionLoader,
  BasicQuestionDisplay,
  QuizDisplay,
} from "../components/question_components";

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
    const response = await QuestionLoader();
    const questions = response.data.questions;
    console.log("Questions logged!");
    this.setState({ questions });
  }

  // Handles displaying one question at a time logic
  handleNextQuestion = () => {
    const { questionIndex, questions } = this.state;
    if (questionIndex < questions.length - 1) {
      this.setState({ questionIndex: questionIndex + 1 });
    }
  };

  handlePrevQuestion = () => {
    const { questionIndex, questions } = this.state;
    if (questionIndex > 0) {
      this.setState({ questionIndex: questionIndex - 1 });
    }
  };

  // Renders the page to display loaded JSON one at a time
  // DOES THIS NEED THE LOADING LOGIC OR JUST THE RENDER?
  renderBasicQuestionDisplay = () => {
    const { questions, questionIndex } = this.state;
    const question = questions[questionIndex];

    return (
      <View>
        <BasicQuestionDisplay
          questionIndex={questionIndex}
          question={question}
          onNextQuestion={this.handleNextQuestion}
        />
      </View>
    );
  };

  renderQuizDisplay = () => {
    const { questions, questionIndex } = this.state;
    const question = questions[questionIndex];

    return (
      <View>
        <QuizDisplay
          questionIndex={questionIndex}
          question={question}
          onNextQuestion={this.handleNextQuestion}
          onPrevQuestion={this.handlePrevQuestion}
        />
      </View>
    );
  };

  renderProfQuizDisplay = () => {
    const { questions, questionIndex } = this.state;
    const question = questions[questionIndex];

    return (
      <View>
        <QuizDisplay
          questionIndex={questionIndex}
          question={question}
          onNextQuestion={this.handleNextQuestion}
          onPrevQuestion={this.handlePrevQuestion}
        />
      </View>
    );
  };


  // Renders the desired page
  render() {
    const { displayType } = this.props;

    const { questions, questionIndex } = this.state;
    const question = questions[questionIndex];

    return (
      <View>
        {questions.length > 0 ? (
          <View>
            {displayType === "basic" && this.renderBasicQuestionDisplay()}
            {displayType === "quiz" && this.renderQuizDisplay()}
            {displayType === "prof" && this.renderProfQuizDisplay()}
            {displayType === "preview" && this.renderPreviewDisplay()}
          </View>
        ) : (
          <Text>Loading Question...</Text>
        )}
      </View>
    );
  }
}

export default QuizPageSingle;
