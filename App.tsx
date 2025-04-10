import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, FlatList, Image } from 'react-native';

import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';
import { useTodo } from './hooks/useTodo';
import { Todo } from './types/todo';

// Implement this
export default function App() {
  const { 
    handleAddTodo, 
    handleUpdateTodo, 
    handleDeleteTodo, 
    todos, 
    getTodos } = useTodo();

  useEffect(() => {
     getTodos();
  }, [])

  const renderItem = ({item}: { item: Todo})  => {
    return (<TodoItem key={item.id} 
    text={item.text} 
    checked={item.completed} 
    onEdit={() => handleUpdateTodo(item.id, item.completed)} 
    onPressDelete={() => handleDeleteTodo(item.id)} />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('./assets/logo-enzrossi-new.png')}
      />

      <AddTodo onAddTodo={handleAddTodo} />

      <FlatList 
       data={todos}
       renderItem={renderItem}
       keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8
  },
  logo: {
    width: 100,
    height: 40,
    marginTop: 8,
    alignSelf: 'center',
  },
});
