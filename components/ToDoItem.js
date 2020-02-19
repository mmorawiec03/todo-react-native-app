import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ToDoItem({ content, date }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text>{content}</Text>
            </View>
            <View style={styles.cardDate}>
                <Text>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'grey'
    },
    cardContent: {
        flex: 0.7
    },
    cardDate: {
        flex: 0.3
    }


})