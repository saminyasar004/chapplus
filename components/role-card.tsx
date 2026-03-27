import { LucideIcon } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface RoleCardProps {
  title: string;
  icon: LucideIcon;
  selected: boolean;
  onPress: () => void;
  accentColor?: string;
}

export default function RoleCard({
  title,
  icon: Icon,
  selected,
  onPress,
  accentColor,
}: RoleCardProps) {
  const iconColor = selected ? accentColor || '#F86241' : '#6D7437';
  const borderColor = selected ? accentColor || '#F86241' : '#6D7437';
  const textColor = selected ? '#F86241' : '#6D7437';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.card, { borderColor }, selected && styles.cardSelected]}>
      <View style={styles.iconWrap}>
        <Icon size={40} color={iconColor} />
      </View>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  cardSelected: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconWrap: {
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
});
