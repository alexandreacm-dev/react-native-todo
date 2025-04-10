import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Todo } from '../types/todo';
import { colors } from '../config/theme';
import { Checkbox } from './Checkbox';
import { TrashButton } from './TrashButton';

interface TodoItemProps {
  text: string;
  checked: boolean;
  onPressDelete: () => void;
  onEdit: () => void;
}

// Implement this
export function TodoItem({checked, text, onPressDelete, onEdit}: TodoItemProps) {
  return (
    <View style={styles.conainerItem}>
      <Checkbox checked={checked} onPress={onEdit} />
    <View style={styles.conainerButton}>
        <Text style={styles.text}>{ text }</Text>
        <TrashButton onPress={onPressDelete} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    conainerItem: {
         width: '100%',
         padding: 12,
         borderWidth: 1,
         borderColor: colors.border,
         flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8
    },
    conainerButton: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between',
    },
    text: {
      textAlign: 'left'
    }
});
