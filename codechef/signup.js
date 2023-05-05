import React, { useState, useEffect, } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity, TextInput } from 'react-native';
import Login from './Login';
import FirstScreen from './FirstScreen';
// import { TextInput } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper';
// import app  from '@react-native-firebase/app';


const Signup = ({ navigation }) => {
    const [Name, setName] = useState("");
    const [Password, setPass] = useState("");


    const Login = async() => {

        console.log("--------api called-------");


       let result = await fetch('http://192.168.43.213:80//project/E-commerApi/Inserted.php', {
            method: 'POST',
            headers: {
                Accept: 'text/html',
                'Content-Type': 'text/html',
            },
            body: JSON.stringify({
                Name:Name,
                Password:Password
            }),
        });
          console.log("----------response",result.json);
    }

    // }


    return (
        <View style={styles.container}>
            <Text style={styles.title}> SIGNUP </Text>
            <TextInput
                style={styles.inputstyle}
                label={'Colloge Name'}
                mode='outlined'
                value={Name}
                placeholder='Enter Name'
                onChangeText={txt => setName(txt)}

            />

            <TextInput
                style={styles.inputstyle}
                label={'Colloge Name'}
                mode='outlined'
                value={Password}
                placeholder='Entre Password'
                onChangeText={txt => setPass(txt)}
            />
            <Button onPress={() => { Login() }} style={styles.btn}>
                Login
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        marginTop: 100,
        margin: 10,

    }
    ,
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        margin: 10,


    },
    inputstyle: {
        marginTop: 20, borderRadius: 10, borderWidth: 1, color: 'white', textAlign: 'center',
    },
    btn: {
        marginTop: 20, borderRadius: 10, borderWidth: 1, color: 'white', fontWeight: 'bold',
        height: 50, textAlign: 'center', backgroundColor: 'orange',


    }

})

export default Signup;
