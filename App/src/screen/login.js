import React, { useState } from 'react';
import { Button, TextInput, View, Alert, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../Components/theme';
const Login = ({ navigation }) => {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Please enter your username and password');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Signup')}
            />
            <Button title="Toggle Dark Mode" onPress={toggleTheme} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: isDark ? '#121212' : '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        fontStyle: 'italic',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default Login;