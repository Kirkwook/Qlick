import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
  } from "react-native";
import * as FileSystem from 'expo-file-system';
import { globalStyles } from "../styles/global";
import axios from "axios";

const CreateQuizPage = () => {
    const backgroundImageSource = require("../assets/Qlick_Logo_CM.png");
    const [quizTitle, setQuizTitle] = useState('');
    const [quizQuestions, setQuizQuestions] = useState([]);

    const addQuestion = () => {
        const newQuestion = {
        question_id: quizQuestions.length + 1,
        image_path: '',
        question_text: '',
        options: ['', '', '', ''],
        correct_index: 0,
        };
        setQuizQuestions([...quizQuestions, newQuestion]);
    };
    const updateQuestion = (index, field, value) => {
        const updatedQuestion = { ...quizQuestions[index], [field]: value };
        const updatedQuestions = [...quizQuestions];
        updatedQuestions[index] = updatedQuestion;
        setQuizQuestions(updatedQuestions);
    };

    const updateAnswer = (questionIndex, answerIndex, value) => {
        const updatedQuestion = { ...quizQuestions[questionIndex] };
        updatedQuestion.options[answerIndex] = value;
        const updatedQuestions = [...quizQuestions];
        updatedQuestions[questionIndex] = updatedQuestion;
        setQuizQuestions(updatedQuestions);
    };

    const updateCorrectAnswer = (questionIndex, answerIndex) => {
        const updatedQuestion = { ...quizQuestions[questionIndex] };
        updatedQuestion.correct_index = answerIndex;
        const updatedQuestions = [...quizQuestions];
        updatedQuestions[questionIndex] = updatedQuestion;
        setQuizQuestions(updatedQuestions);
    };
    const saveQuiz = async () => {
        const quiz = {
            quiz_id: 0,
            title: quizTitle,
            creator_id: 123,
            questions: quizQuestions.map((q) => ({
              question_id: q.question_id,
              image_path: q.image_path,
              question_text: q.question_text,
              options: q.options,
              correct_index: q.correct_index,
            })),
          };
        console.log(quiz);
        //Add code to send to server here
        try {
            const response = await axios.post(
              "http://10.35.195.217:3000/saveQuiz", quiz
            );
            console.log("response accepted!");
        
            if (response.status === 200) {
              console.error("Quiz saved successfully!");
              setQuizTitle('');
              setQuizQuestions([]);
            }
          } catch (error) {
              if (error.response && error.response.status === 409) {
                console.error("Quiz already exists!");
              } else {
                console.error(error);
              }
          }
      }

      return (
        <ImageBackground source={backgroundImageSource} resizeMode="cover" style={globalStyles.backgroundImage} imageStyle={{ opacity: 0.15 }}>    
            <ScrollView contentContainerStyle={globalStyles.container} KeyboardShouldPersistTaps='handled'>
                <View style={styles.smallView}>
                    <TextInput
                        style={styles.titleInput}
                        placeholder="Quiz Title"
                        placeholderTextColor="#D0D0D0"
                        value={quizTitle}
                        onChangeText={setQuizTitle}
                    />
                </View>
                {quizQuestions.map((q, i) => (
                <View key={i}>
                    <TextInput
                        style={styles.questionInput}
                        placeholder={`Question ${i + 1} Text`}
                        value={q.question_text}
                        onChangeText={(text) => updateQuestion(i, 'question_text', text)}
                    />
                    {q.options.map((o, j) => (
                    <View key={j} style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.answerInput}
                        placeholder={`Option ${j + 1}`}
                        value={o}
                        onChangeText={(text) =>
                        updateAnswer(i, j, text)
                        }
                    />
                    <TouchableOpacity style={styles.checkbox} onPress={() => updateCorrectAnswer(i, j)}>
                        <Text style={styles.checkText}>{q.correct_index === j ? '✓' : ' '}</Text>
                    </TouchableOpacity>
                    </View>
                ))}
                <TextInput
                    style={styles.imgInput}
                    placeholder={`Question ${i + 1} Image Path`}
                    value={q.image_path}
                    onChangeText={(text) => updateQuestion(i, 'image_path', text)}
                    />
                </View>
                ))}
                <TouchableOpacity style={styles.localButton}  onPress={addQuestion}>
                    <Text style={globalStyles.loginText}>
                        Add Question
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.localButton}  onPress={saveQuiz}>
                    <Text style={globalStyles.loginText}>
                        Create Quiz
                    </Text>
                </TouchableOpacity>    
            </ScrollView>
        </ImageBackground>
      )
}
export default CreateQuizPage;

const styles = StyleSheet.create({
    smallView: {
        width: '90%',
        maxWidth: 400,
        backgroundColor:"#2B609F",
        borderRadius: 30,
        minHeight: 40,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: 'center',
      },

    titleInput: {
        width: '85%',
        height: 25,
        alignItems: "center",
        justifyContent: 'center',
        fontSize: 24,
        color: "#FFFFFF",
    },
  
    questionInput: {
      maxWidth: 400,
      width: "100%",
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#79A0CF",
      color: "#FFFFFF"
    },
    answerInput: {
        maxWidth: 400,
        width: "90%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2B609F",
        color: "#FFFFFF",
        marginTop: 3
      },
     imgInput: {
        maxWidth: 400,
        width: "100%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#228B22",
        color: "#FFFFFF",
        marginBottom: 3,
        marginTop: 3
      },

    localButton: {
        maxWidth: 400,
        width: "100%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#79A0CF",
        color: "#FFFFFF"
      },
    
      checkbox: {
        width: 30,
        height: 30,
        borderWidth: 1,
        marginTop: 3,
        alignItems: "center",
        justifyContent: "center",
      },

      checkText: {
        fontSize:30
      }
  
  });