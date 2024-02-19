import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../Components/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import AuroraBackground from '../Components/aurora_bg';

const Login = ({ navigation }) => {
    const { dark, toggleDark } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            navigation.navigate('Welcome', { username });
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Login Success',
                visibilityTime: 1000,
                autoHide: true,
            });
        } else {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Login Failed',
                text2: 'Please enter your username and password',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    };
    

    return (
            <View style={{ flex: 1, margin: 0, padding: 0 }}>
            <AuroraBackground mode={dark ? 'dark' : 'light'} />
            <View style={styles.header}>
                <Text style={dark ? styles.title_dark : styles.title}>Medicine Reminders</Text>
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
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor={dark ? 'lightgray' : 'gray'}
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[dark ? styles.button_dark : styles.button, styles.buttonMargin]} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={dark ? styles.button_dark : styles.button} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container_dark: {
        backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
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
        width: 150,
        marginTop: 10,
    },
    button_dark: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    buttonMargin: {
        marginRight: 10,
    },
});

export default Login;