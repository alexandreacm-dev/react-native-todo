import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../config/theme';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}

export function Checkbox({ checked, onPress }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={[styles.check, checked && styles.checkCompleted]}
      onPress={() => onPress()}>
      {checked && <Feather name="check" color={colors.blue} size={14} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  check: {
    width: 24,
    height: 24,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCompleted: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.lightBlue,
  },
});
