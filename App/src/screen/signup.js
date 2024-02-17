import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../Components/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

const Signup = ({ navigation }) => {
    const { dark, toggleDark } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if (username && email && password) {  
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Sign up Success',
                visibilityTime: 3000,
                autoHide: true,
            });
            navigation.navigate('Login');
        } else {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Signup Failed',
                text2: 'Please fill all details',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    };

    return (
        <View style={dark ? styles.container_dark : styles.container}>
            <View style={styles.header}>
                <Text style={dark ? styles.title_dark : styles.title}>Create an Account</Text>
                <TouchableOpacity onPress={toggleDark}>
                    <Icon name={dark ? 'sunny-outline' : 'moon-outline'} size={24} color={dark ? 'white' : 'black'} />
                </TouchableOpacity>
            </View>
            <TextInput
                style={dark ? styles.input_dark : styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                placeholderTextColor={dark ? 'lightgray' : 'gray'}
            />
            <TextInput
                style={dark ? styles.input_dark : styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor={dark ? 'lightgray' : 'gray'}
            />
            <TextInput
                style={dark ? styles.input_dark : styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor={dark ? 'lightgray' : 'gray'}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignup} color={dark ? 'lightblue' : 'blue'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container_dark: {
        backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    input_dark: {
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        color: 'white',
        backgroundColor: '#282828',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title_dark: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
});

export default Signup;