import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ToDo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30,
        height: 80,
        backgroundColor: 'green'
    },
    title: {
        paddingTop: 40,
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})