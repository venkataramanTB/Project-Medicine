import React, { useContext, useLayoutEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import capsulesImage from '../../assets/capsules.png';
import { AuthContext } from '../Components/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-root-toast';

const WelcomeScreen = ({ route, navigation }) => {
    const { username } = route.params;
    const { dark, toggleDark } = useContext(AuthContext); 
    const scale = useRef(new Animated.Value(1)).current;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={toggleDark} style={{ marginRight: 10 }}>
                    <Icon 
                        name={dark ? 'sunny' : 'moon'} 
                        size={30} 
                        color={dark ? 'black' : 'black'} 
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation, toggleDark, dark]);

    const showToast = () => {
        let toast = Toast.show('Navigating to Home...', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });

        setTimeout(function () {
            Toast.hide(toast);
            navigation.navigate('Home');
        }, 2000);
    };

    const animateImage = () => {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.3,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(showToast);
    };

    return (
        <View style={dark ? styles.container_dark : styles.container}>
            <Animated.Image 
                style={[styles.image, { transform: [{ scale }] }]}
                source={capsulesImage}
            />
            <Text style={dark ? styles.title_dark : styles.title}>Welcome back, {username}!</Text>
            <Text style={dark ? styles.subtitle_dark : styles.subtitle}>Let's manage your health.</Text>
            <TouchableOpacity onPress={animateImage} style={styles.button}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
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
    container_dark: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    title_dark: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: 'black',
    },
    subtitle_dark: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: 'white',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
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

export default WelcomeScreen;