import Layout from 'components/layout';
import RoleCard from 'components/role-card';
import { useRouter } from 'expo-router';
import { Briefcase, Store, Hotel, UtensilsCrossed } from 'lucide-react-native';
import { useState } from 'react';
import { Text, View } from 'react-native';

const ROLES = [
  {
    id: 'ecommerce',
    title: 'E-commerce Product Seller',
    icon: Store,
    accentColor: '#F86241',
  },
  {
    id: 'bus',
    title: 'Bus Service Provider',
    icon: Briefcase,
    accentColor: '#6D7437',
  },
  {
    id: 'hotel',
    title: 'Hotel Service Provider',
    icon: Hotel,
    accentColor: '#6D7437',
  },
  {
    id: 'restaurant',
    title: 'Restaurant Owner',
    icon: UtensilsCrossed,
    accentColor: '#6D7437',
  },
];

export default function RoleSelection() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState('ecommerce');

  const handleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    // Add logic to save role if needed
    setTimeout(() => {
        router.push('/login');
    }, 500);
  };

  return (
    <Layout>
      <View className="flex-1 bg-white px-6 pt-10">
        <View className="items-center mb-10">
          <Text className="text-3xl font-bold text-[#6D7437]">
            Choose Your Role
          </Text>
          <Text className="mt-4 text-center text-base text-[#9A9DAE] px-4">
            Select how you want to use the platform.{"\n"}
            You can manage your services based on your role.
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between gap-y-4">
          {ROLES.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              icon={role.icon}
              selected={selectedRole === role.id}
              onPress={() => handleSelect(role.id)}
              accentColor={role.accentColor}
            />
          ))}
        </View>
      </View>
    </Layout>
  );
}
