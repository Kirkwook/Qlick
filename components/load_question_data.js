import React, { Component } from "react";
import { View, Text } from "react-native";
import imagePath from "../assets/Qlick_Logo_CM.png";
import { QuestionLoader } from "../components/question_components";
import { BasicQuestionDisplay } from "../screens/basic_question_display";

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
  }


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
            {displayType === "edit" && this.renderEditDisplay()}
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