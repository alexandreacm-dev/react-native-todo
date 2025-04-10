import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../config/theme';

interface TrashButtonProps {
  onPress: () => void;
}

export function TrashButton({ onPress }: TrashButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather name="trash" color={colors.orange} size={14} />
    </TouchableOpacity>
  );
}
