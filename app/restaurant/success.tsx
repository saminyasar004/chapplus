import { useRouter } from 'expo-router';
import { Check } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white px-10">
      <View className="w-full items-center rounded-[32px] border border-[#F1F5F9] bg-white p-10 shadow-2xl shadow-slate-200">
        <View className="mb-8 h-16 w-16 items-center justify-center rounded-full bg-[#166534]">
          <Check size={32} color="white" strokeWidth={4} />
        </View>

        <Text className="mb-4 text-center text-2xl font-bold text-[#334155]">
          Account has been created Successfully
        </Text>

        <Text className="text-center text-base leading-6 text-[#94A3B8]">
          Wait for the confirmation from the admin Restaurant offers whimsical fusion comfort food,
          like Cloud Burgers and Electric Soup.
        </Text>
      </View>

      <View className="absolute bottom-10 left-10 right-10">
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/home')}
          className="h-16 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-200">
          <Text className="text-xl font-bold text-white">Let's Begin The Journey</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
