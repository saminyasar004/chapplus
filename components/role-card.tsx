import { LucideIcon } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

interface RoleCardProps {
  title: string;
  icon: LucideIcon;
  selected: boolean;
  onPress: () => void;
  accentColor?: string;
}

export default function RoleCard({ title, icon: Icon, selected, onPress, accentColor }: RoleCardProps) {
  const iconColor = selected ? (accentColor || '#F86241') : '#6D7437';
  const borderColor = selected ? (accentColor || '#F86241') : '#6D7437';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ borderColor }}
      className={`w-[48%] aspect-square rounded-2xl border items-center justify-center p-4 bg-white ${
        selected ? 'shadow-sm' : ''
      }`}>
      <View className="mb-3">
        <Icon size={40} color={iconColor} />
      </View>
      <Text 
        className={`text-center font-semibold text-sm ${
          selected ? 'text-[#F86241]' : 'text-[#6D7437]'
        }`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
