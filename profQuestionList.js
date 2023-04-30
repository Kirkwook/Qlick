import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from "react-native";
import { globalStyles } from '../styles/global';
import axios from 'axios';


const profQuestionList = () => {

    return (
            <div class="switch">
    <input type="checkbox" id="switch" class="checkbox" /input>
    <label for="switch" class="toggle"></label>
</div>

<div class="exit">
    <button type="submit">Exit question</button>
</div>

<div class="imgDiv">
    <img id="sampleQ" src="sampleQuestion2.PNG" alt="Sample Question">
</div>

<div class="prev">
    <button>Previous Question</button>
</div>

<div class="next">
    <button>Next Question</button>
</div>
    );
};

export default profQuestionList;

const styles = StyleSheet.create({
    .questionList {
    position: relative,
    width: 97 %,
    display: inline - block,
},

.list {
    list- style - type: none,
padding: 0px,
},

li {
    border - bottom - style: solid,
    padding - bottom: 5 %,
},

.exit {
    padding - bottom: 20px,
},

.exit button {
    background: red,
    text - align: center,
    height: 60px,
},

.switch {
    float: right,
},

    /* open mode */
.toggle {
    position: relative,
    display: inline - block,
    width: 100px,
    height: 52px,
    background - color: greenyellow,
    border - radius: 30px,
    border: 2px solid gray,
},

/* After slide changes (closed mode) */
.toggle:after {
    content: '',
    position: absolute,
    width: 50px,
    height: 50px,
    border - radius: 50 %,
    background - color: gray,
    top: 1px,
    left: 1px,
    transition: all 0.5s,
},

/* Checkbox checked effect (circle object) */
.checkbox: checked + .toggle::after {
    left: 49px,
},

/* Checkbox checked toggle label bg color */
.checkbox: checked + .toggle {
    background - color: red,
},

/* Checkbox vanished */
.checkbox {
    display: none,
},

.switch {
    position: relative,
    display: inline - block,
    width: 60px,
    height: 34px,
},

    /* Hide default HTML checkbox */
.switch input {
    opacity: 0,
    width: 0,
    height: 0,
},

/* The slider */
.slider {
    position: absolute,
    display: inline - block,
    cursor: pointer,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background - color: red,
    -webkit - transition: .4s,
    transition: .4s,
},

.slider:before {
    position: absolute,
    content: "",
    height: 26px,
    width: 26px,
    left: 4px,
    bottom: 4px,
    background - color: white,
    -webkit - transition: .4s,
    transition: .4s,
},

input: checked + .slider {
    background - color: greenyellow,
},

input: checked + .slider:before {
    -webkit - transform: translateX(26px),
    -ms - transform: translateX(26px),
    transform: translateX(26px),
},

/* Rounded sliders */
.slider.round {
    border - radius: 34px,
},

.slider.round:before {
    border - radius: 50 %,
},

});
