import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <Image source = {require("../assets/logo.png")}/>
            
        <StatusBar style='auto'/>
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>

        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image:{
        marginBottom: 40
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width:"80%",
        borderRadius:25,
        height: 50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#FF1493",
    }
});


// export default function Home() {
//     return (
//         <View style={styles.container}>
//             <StatusBar style="auto"/>
//             <Text>Welcome to Qlick</Text>
//             <div className='login-wrapper'>
//                 <form>
//                     <label>
//                         <Text>Username</Text>
//                         <input type='text'/>
//                     </label>
//                     <label>
//                         <Text>Password</Text>
//                         <input type='password'/>
//                     </label>
//                     <div>
//                         <button type='submit'>
//                             <Text>Submit</Text>
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </View>
        
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
// });