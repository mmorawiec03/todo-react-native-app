import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddToDo({ submitHandler }) {
    const [todo, setTodo] = useState('');
    const [date, setDate] = useState('');

    const changeTodoHandler = (val) => {
        setTodo(val);
    }
    const changeDateHandler = (val) => {
        setDate(val);
    }

    return (
        <View>
            <View style={styles.form}>
                <TextInput placeholder='add todo' onChangeText={changeTodoHandler} required />
            </View>
            <View style={styles.form}>
                <TextInput placeholder='date' onChangeText={changeDateHandler} />
            </View>
            <View style={styles.btn}>
                <Button title='Add ToDo' color='grey' onPress={() => submitHandler({content: todo, date})} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginBottom: 20,
        marginHorizontal: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey'
    },
    btn: {
        marginBottom: 40,
        marginHorizontal: 20
    }
})