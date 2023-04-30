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


const profQuizScreen = () => {

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

export default profQuizScreen;

const styles = StyleSheet.create({
    .q {
    position: relative,
    top: 60 %,
    width: 95 %,
    justify- content: center,
    text - align: center,
    display: inline - block,
    },

    .exit {
        padding - bottom: 20px
    }

    .exit button {
        background: #ff0000,
        text - align: center,
        height: 60px,
    }

    .prev button {
        background: #00bfff,
        text - align: center,
        height: 60px,
        display: inline,
        float: left,
    },

    .next button {
        background: #00bfff,
        text - align: center,
        height: 60px,
        display: inline,
        float: right,
    },

    .switch {
        padding- left: 1100px,
        width: 10px,
        height: 10px,
    },

    /* open mode */
    .toggle {
        position: relative,
        display: inline - block,
        width: 100px,
        height: 52px,
        background - color: #bfff00,
        border - radius: 30px,
        border: 2px solid #808080,
    },

    /* After slide changes (closed mode) */
    .toggle:after {
        content: '',
        position: absolute,
        width: 50px,
        height: 50px,
        border - radius: 25px,
        background - color: #808080,
        top: 1px,
        left: 1px,
        transition: all 0.5s,
    },

    /* Checkbox checked effect (circle object) */
    .checkbox: checked + .toggle::after {
        left: 49px
    },

    /* Checkbox checked toggle label bg color */
    .checkbox: checked + .toggle {
        background - color: #ff0000
    },

    /* Checkbox vanished */
    .checkbox {
        display: none
    },

    img {
        display: block,
        margin - left: auto,
        margin - right: auto,
        width: 50 %,
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
        background - color: #ff0000,
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
        background - color: #ffffff,
        -webkit - transition: .4s,
        transition: .4s,
    },

    input: checked + .slider {
        background - color: #bfff00,
    },

    input: checked + .slider:before {
        -webkit - transform: translateX(26px),
        -ms - transform: translateX(26px),
        transform: translateX(26px),
    },

    /* Rounded sliders */
    .slider.round {
        border - radius: 34px
    },

    .slider.round:before {
        border - radius: 50 %
    },

    .list {
        list - style - type: none,
        padding: 0px
    },

});