import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Our App!</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default WelcomeScreen;