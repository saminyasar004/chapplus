import { useRouter } from 'expo-router';
import { ChevronRight, ArrowLeft } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SettingsItemProps {
  label: string;
  onPress: () => void;
  showBorder?: boolean;
}

const SettingsItem = ({ label, onPress, showBorder = true }: SettingsItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    className={`flex-row items-center justify-between py-5 ${showBorder ? 'border-b border-[#F1F5F9]' : ''}`}>
    <Text className="text-lg font-medium text-[#475569]">{label}</Text>
    <ChevronRight size={20} color="#94A3B8" />
  </TouchableOpacity>
);

export default function SettingsMenu() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const savedRole = await AsyncStorage.getItem('userRole');
      setRole(savedRole);
    };
    getRole();
  }, []);

  const isRestaurant = role === 'restaurant';

  const settingsItems = [
    { label: 'Terms & Conditions', route: '/(tabs)/settings/terms' },
    { label: 'Policies', route: '/(tabs)/settings/policies' },
    {
      label: isRestaurant ? 'Profile Set up' : 'Shop information set up',
      route: isRestaurant ? '/restaurant/create-profile' : '/ecommerce/shop-info-1',
    },
    { label: 'Help and Support', route: '/(tabs)/settings/help' },
    { label: 'Notification sound', route: '/(tabs)/settings/notification' },
    { label: 'Change password', route: '/(tabs)/settings/change-password' },
    { label: 'Delete Account', route: '/(tabs)/settings/delete-account' },
    { label: 'Logout', route: '/login' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={28} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        <Text className="mb-8 mt-2 text-3xl font-bold text-[#848F4B]">Settings</Text>

        <View className="rounded-2xl bg-white px-6 shadow-sm shadow-slate-200">
          {settingsItems.map((item, index) => (
            <SettingsItem
              key={item.label}
              label={item.label}
              onPress={() => item.route && router.push(item.route as any)}
              showBorder={index !== settingsItems.length - 1}
            />
          ))}
        </View>

        {/* Spacer for bottom tab bar */}
        <View className="h-32" />
      </ScrollView>
    </SafeAreaView>
  );
}
