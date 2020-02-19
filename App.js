import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

export default function App() {
  const [todos, setTodos] = useState([
    {content: 'go shopping', date: '22.03.2020', key: '1'},
    {content: 'fix the chair', date: '23.02.2020', key: '2'},
  ]);
  const [nextKey, setNextKey] = useState(3);

  const pressHandler = (key) => {
    setTodos(todos.filter(todo => {
      return todo.key != key;
    }));
  }

  const submitHandler = (todo) => {
    setTodos([...todos, {content: todo.content, date: todo.date, key: nextKey.toString()}]);
    setNextKey(nextKey + 1);
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddToDo submitHandler={submitHandler} />
      <View>
        <Text style={styles.bigText}>Your todos:</Text>
        <Text style={styles.smallText}>(tap to delete)</Text>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <ToDoItem content={item.content} date={item.date} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  bigText: {
    fontSize: 20,
    textAlign: 'center'
  },
  smallText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20
  }
});
