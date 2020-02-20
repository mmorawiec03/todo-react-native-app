import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ToDoItem({ content, date }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardIcon}>
                <Ionicons name='md-checkmark-circle-outline' size={20} />
            </View>
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
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'grey'
    },
    cardIcon: {
        flex: 0.1
    },
    cardContent: {
        flex: 0.6
    },
    cardDate: {
        flex: 0.3
    }


})