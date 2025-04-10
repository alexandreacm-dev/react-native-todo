import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState, useRef } from 'react';
import { colors } from '../config/theme';

interface AddTodoProps {
  onAddTodo: (todo: string) => void;
}

export function AddTodo({ onAddTodo }: AddTodoProps) {
  const textInputRef = useRef<TextInput>(null);
  const [todo, setTodo] = useState('');

  function handleAddTodo() {
    if (!todo) {
      return;
    }
    
    onAddTodo(todo);
    setTodo('');
    textInputRef.current?.focus();
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef}
        placeholderTextColor={colors.lightText}
        placeholder="Add Item"
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
        onSubmitEditing={handleAddTodo}
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.button}>
        <Feather name="plus" size={16} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    marginBottom: 12
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: colors.light,
    borderRadius: 22,
    paddingHorizontal: 12,
    color: colors.text
  },
  button: {
    position: 'absolute',
    top: 18,
    right: 20,
    width: 32,
    height: 32,
    backgroundColor: colors.blue,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
