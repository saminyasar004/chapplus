import AsyncStorage from '@react-native-async-storage/async-storage';
import NoRippleTabButton from 'components/no-rippler-pressable';
import { Tabs } from 'expo-router';
import {
  Briefcase,
  House,
  Settings2,
  UserRound,
  Package,
  DollarSign,
  Settings,
} from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Layout() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const savedRole = await AsyncStorage.getItem('userRole');
      setRole(savedRole);
    };
    getRole();
  }, []);

  const isEcommerce = role === 'ecommerce';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingTop: 10,
          paddingBottom: 25,
          paddingLeft: 15,
          paddingRight: 15,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        tabBarActiveTintColor: '#FF8C00',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarButton: (props) => <NoRippleTabButton {...props} />,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View className="w-full items-center">
              {focused && (
                <View className="absolute -top-[18px] h-3 w-10 rounded-b-xl bg-[#FF8C00]" />
              )}
              <House size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          headerShown: false,
          title: 'Order',
          tabBarIcon: ({ color, focused }) => (
            <View className="w-full items-center">
              {focused && (
                <View className="absolute -top-[18px] h-3 w-10 rounded-b-xl bg-[#FF8C00]" />
              )}
              {isEcommerce ? (
                <Package size={24} color={color} />
              ) : (
                <Briefcase size={24} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: isEcommerce ? 'Revenue' : 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <View className="w-full items-center">
              {focused && (
                <View className="absolute -top-[18px] h-3 w-10 rounded-b-xl bg-[#FF8C00]" />
              )}
              {isEcommerce ? (
                <View
                  className={`h-6 w-6 items-center justify-center rounded-md ${focused ? 'bg-[#FF8C00]' : 'bg-[#94A3B8]'}`}>
                  <DollarSign size={16} color="white" strokeWidth={3} />
                </View>
              ) : (
                <Settings2 size={24} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: isEcommerce ? 'Settings' : 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View className="w-full items-center">
              {focused && (
                <View className="absolute -top-[18px] h-3 w-10 rounded-b-xl bg-[#FF8C00]" />
              )}
              {isEcommerce ? (
                <Settings size={24} color={color} />
              ) : (
                <UserRound size={24} color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="my-plan"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
