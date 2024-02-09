import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useContext } from 'react';
// import { ThemeContext } from '../Components/theme';

const Signup = ({ navigation }) => {
    // const { isDark, toggleTheme } = useContext(ThemeContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if (username && email && password) {  
            Alert.alert('Success', 'Account created successfully');
            navigation.navigate('Login');
        } else {
            Alert.alert('Error', 'Please fill all fields');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignup} />
            {/* <Button title="Toggle Dark Mode" onPress={toggleTheme} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: isDark ? '#121212' : '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default Signup;