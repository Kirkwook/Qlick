import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            <Text>More Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40
    }
});