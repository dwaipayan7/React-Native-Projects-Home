import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@react-native-firebase/auth';

const EmailPasswordAuth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {

        createUserWithEmailAndPassword(getAuth(),
            email,
            password
        ).then(() => {
            console.log('User created successfully')
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        })

    }

    const loginUser = () => {
        signInWithEmailAndPassword(getAuth(),
            email,
            password
        ).then(() => {
            console.log('User Signin Successfully')
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        })
    }

    return (
        <View style={styles.container}>
            {/* <Text>EmailPasswordAuth</Text> */}

            <TextInput
                style={styles.textInput}
                placeholder='Enter Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Enter Password'
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={() => createUser()}>
                <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => loginUser()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default EmailPasswordAuth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        alignItems: 'center',
    },
    textInput: {
        width: '90%',
        height: 55,
        borderWidth: 0.6,
        borderRadius: 20,
        marginTop: 15,
        paddingLeft: 15

    },
    button: {
        marginTop: 20,
        width: 120,
        height: 55,
        backgroundColor: '#4CAF50',
        borderRadius: 20,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})