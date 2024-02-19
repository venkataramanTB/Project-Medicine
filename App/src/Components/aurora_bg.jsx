import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const AuroraBackground = ({ mode }) => {
    const colorAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(colorAnimation, {
                    toValue: 100,
                    duration: 15000,
                    useNativeDriver: false,
                }),
                Animated.timing(colorAnimation, {
                    toValue: 0,
                    duration: 15000,
                    useNativeDriver: false,
                }),
            ]),
        ).start();
    }, []);

    const backgroundColor = colorAnimation.interpolate({
        inputRange: [0, 20, 40, 60, 80, 100],
        outputRange: mode === 'dark' 
            ? ['rgb(128,0,0)', 'rgb(128,128,0)', 'rgb(0,128,0)', 'rgb(0,128,128)', 'rgb(0,0,128)', 'rgb(128,0,128)'] 
            : ['rgb(255,0,0)', 'rgb(255,255,0)', 'rgb(0,255,0)', 'rgb(0,255,255)', 'rgb(0,0,255)', 'rgb(255,0,255)'],
    });

    return (
        <Animated.View style={[styles.container, { backgroundColor }]} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AuroraBackground;