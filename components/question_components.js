import axios from "axios";
import React from "react";


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