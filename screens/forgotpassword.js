import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function ForgotPassword() {
    return (
        <View style={styles.container}>
            <Text>Forgot Password</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40
    }
});