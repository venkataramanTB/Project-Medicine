import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../Components/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import ConfettiCannon from 'react-native-confetti-cannon';
import Toast from 'react-native-toast-message';
import checkIcon from '../../assets/check_success.gif';

const medicines = [
    { id: '1', name: 'Citracin', date: '2022-01-01', time: '08:00 AM' },
    { id: '2', name: 'Dolo 650', date: '2022-01-02', time: '09:00 AM' },
];

const Home = ({ navigation }) => {
    const { dark, toggleDark } = useContext(AuthContext);
    const [showConfetti, setShowConfetti] = useState(false);
    const [color, setColor] = useState(getRandomColor());

    const handleEdits = () => {
        console.log("Had Medicine");
        setShowConfetti(true);
        setColor(getRandomColor());
        Toast.show({
            type: 'success',
            position: 'top',
            Icon: checkIcon,            
            text1: 'Updated in DB',
            textAlign: 'center',
            text2: 'Consistancy is key to success',
            visibilityTime: 3000,
            autoHide: true,

        });
    }

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 5000); // Reset after 5 seconds

            return () => clearTimeout(timer); // Clean up timer on unmount
        }
    }, [showConfetti]);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <View style={dark ? styles.container_dark : styles.container}>
            {showConfetti && (
                <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} explosionSpeed={350} fallSpeed={3000} colors={['#ff0', '#0f0', '#0ff', '#f0f', '#f00']} fadeOut={true} />
            )}
            <View style={styles.header}>
                <Text style={dark ? styles.title_dark : styles.title}>Medicine Reminders</Text>
                <TouchableOpacity onPress={toggleDark}>
                    <Icon name={dark ? 'sunny' : 'moon'} size={24} color={dark ? 'white' : 'black'} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={medicines}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={dark ? styles.medicine_dark : styles.medicine}>
                        <Text style={dark ? styles.name_dark : styles.name}>{item.name}</Text>
                        <Text style={dark ? styles.date_dark : styles.date}>{item.date}</Text>
                        <Text style={dark ? styles.time_dark : styles.time}>{item.time}</Text>
                        <TouchableOpacity onPress={handleEdits} style={[styles.button, {backgroundColor: color}]}>
                            <Text style={styles.buttonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container_dark: {
        backgroundColor: '#000000',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
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
    medicine: {
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    medicine_dark: {
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#282828',
    },
    name: {
        fontSize: 18,
    },
    name_dark: {
        fontSize: 18,
        color: 'white',
    },
    date: {
        fontSize: 14,
        color: 'grey',
    },
    date_dark: {
        fontSize: 14,
        color: 'lightgrey',
    },
    time: {
        fontSize: 14,
        color: 'grey',
    },
    time_dark: {
        fontSize: 14,
        color: 'lightgrey',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Home;