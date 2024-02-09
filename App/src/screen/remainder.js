import React, { useState } from 'react';
import { View, Button, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = ({ navigation }) => {
  const [medicine, setMedicine] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  const setReminder = async () => {
    await AsyncStorage.setItem('medicine', medicine);
    await AsyncStorage.setItem('time', date.toString());

    PushNotification.localNotificationSchedule({
      message: `It's time to take your medicine: ${medicine}`,
      date: date,
      repeatType: 'day',
    });

    navigation.navigate('Reminder');
  };

  return (
    <View>
      <TextInput placeholder="Medicine" onChangeText={setMedicine} />
      <Button onPress={showTimepicker} title="Show time picker!" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Button title="Set Reminder" onPress={setReminder} />
    </View>
  );
};