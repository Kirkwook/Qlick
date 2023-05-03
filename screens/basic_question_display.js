import React, { useState } from 'react';
import QuizPageSingle from "../components/load_question_data"
import { View, Text, Image, TouchableOpacity } from "react-native";

export const BasicQuestionDisplay = ({ questionIndex, question, onNextQuestion}) => {
  
    return (
      <View>
        <Text>Question {questionIndex + 1}</Text>
        <Text>{question.question_text}</Text>

        <Image source={{ uri: `data:image/png;base64,${question.image_encoding}`}} 
        style={{ width: 200, height: 200 }}/>

        {question.options.map((option, i) => (
          <Text key={i}>{option}</Text>
        ))}
        <TouchableOpacity onPress={onNextQuestion}>
          <Text>Next Question</Text>
        </TouchableOpacity>
      </View>
    );
  };


const BasicDisplayTest = () => {
    return (

        <QuizPageSingle displayType="basic" />

    );
};

export default BasicDisplayTest;