import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationScreen() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={28} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-6">
        <Text className="mb-12 mt-2 text-center text-3xl font-bold text-[#848F4B]">
          Notification
        </Text>

        <View className="mb-auto flex-row items-center justify-between rounded-2xl bg-white p-6 shadow-sm shadow-slate-200">
          <Text className="text-xl font-bold text-[#475569]">Notification sound</Text>
          <Switch
            trackColor={{ false: '#E2E8F0', true: '#000' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#E2E8F0"
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className="mb-20 w-full rounded-2xl bg-[#FF8C00] py-5 shadow-xl shadow-orange-200">
          <Text className="text-center text-2xl font-bold text-white">Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
