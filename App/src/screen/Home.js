import React from 'react';
import { View, Text, FlatList, StyleSheet,Button } from 'react-native';
import { useContext } from 'react';

const medicines = [
    { id: '1', name: 'Citracin', date: '2022-01-01', time: '08:00 AM' },
    { id: '2', name: 'Dolo 650', date: '2022-01-02', time: '09:00 AM' },
];
const handleEdits = () => {
    console.log("Had Medicine");
}

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Medicine Reminders</Text>
            <FlatList
                data={medicines}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.medicine}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                        <Button title="Done" onPress={handleEdits} />
                        <Button title="Toggle Dark Mode" onPress={toggleTheme} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    medicine: {
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
    },
    date: {
        fontSize: 14,
        color: 'grey',
    },
    time: {
        fontSize: 14,
        color: 'grey',
    },
});

export default Home;