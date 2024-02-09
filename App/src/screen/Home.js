import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../Components/theme';

const medicines = [
    { id: '1', name: 'Citracin', date: '2022-01-01', time: '08:00 AM' },
    { id: '2', name: 'Dolo 650', date: '2022-01-02', time: '09:00 AM' },
];

const handleEdits = () => {
    console.log("Had Medicine");
}

const Home = ({ navigation }) => {
    const { dark, toggleDark } = useContext(AuthContext);
    return (
        <View style={dark ? styles.container_dark : styles.container}>
            <Text style={dark ? styles.title_dark : styles.title}>Medicine Reminders {dark ? "dark" : "light"}</Text>
            <FlatList
                data={medicines}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={dark ? styles.medicine_dark : styles.medicine}>
                        <Text style={dark ? styles.name_dark : styles.name}>{item.name}</Text>
                        <Text style={dark ? styles.date_dark : styles.date}>{item.date}</Text>
                        <Text style={dark ? styles.time_dark : styles.time}>{item.time}</Text>
                        <Button title="Done" onPress={handleEdits} />
                        <Button title="Toggle Dark Mode" onPress={toggleDark} />
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title_dark: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
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
});

export default Home;