import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

const RegisterAccount = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleRegister = () => {
    // Handle registration logic and backend connection
  };

  return (
    // TouchableWithoutFeedback removes keyboard when tapping anywhere on screen
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("dismissed keyboard");
        Keyboard.dismiss();
      }}
    >
        <View style={globalStyles.container}>
        <Text style={styles.title}>Registration</Text>
        <TextInput
            style={styles.input}
            placeholder="First Name"
            value={fName}
            onChangeText={setFName}
        />
        <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lName}
            onChangeText={setLName}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
            <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password1}
            onChangeText={setPassword1}
            secureTextEntry={!showPassword1}
            />
            <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setShowPassword1(!showPassword1)}
            >
            <Text style={styles.passwordToggleText}>{showPassword1 ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
            <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            value={password2}
            onChangeText={setPassword2}
            secureTextEntry={!showPassword2}
            />
            <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setShowPassword2(!showPassword2)}
            >
            <Text style={styles.passwordToggleText}>{showPassword2 ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  passwordToggle: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  passwordToggleText: {
    fontSize: 12,
    // fontWeight
  },
});

export default RegisterAccount;
