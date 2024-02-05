import React, { useState } from 'react';
import { Button, TextInput, View, Alert } from 'react-native';

function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username && password) {
            navigation.navigate('NextScreen');
        } else {
            Alert.alert('Error', 'Please enter your username and password');
        }
    };

    return (
        <View>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}

export default Login;