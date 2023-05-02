import React, { Component  } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import data from '../test_data/test_question_set.json'
import imagePath from '../assets/Qlick_Logo_CM.png';

import axios from 'axios';

axios.post("http://10.35.195.217:3000/questionLoader", {
  params: {
    id: 123,
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });


  class QuizPageDB extends Component {
    render() {
      const { questions } = data;
      return (
        <View>
          {questions.map((question, index) => (
  
            <View key={question.question_id}>
  
              <Text>{question.question_text}</Text>
  
              {question.image_path && <Image source={{ uri: question.image_path }} />}
              
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