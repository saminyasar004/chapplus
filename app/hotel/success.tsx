import { useRouter } from 'expo-router';
import { Check } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Success() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="flex-1 items-center justify-center px-8">
        <View className="w-full rounded-2xl border border-[#F1F5F9] bg-white p-8 shadow-sm">
          <View className="mb-6 items-center">
            <View className="h-14 w-14 items-center justify-center rounded-full bg-[#10B981]">
              <Check size={32} color="white" />
            </View>
          </View>

          <Text className="mb-4 text-center text-[22px] font-bold text-[#475569]">
            Account has been created Successfully
          </Text>

          <Text className="text-center text-[15px] leading-6 text-[#94A3B8]">
            Wait for the confirmation from the admin Restaurant offers whimsical fusion comfort
            food, like Cloud Burgers and Electric Soup.
          </Text>
        </View>

        {/* Footer Button */}
        <TouchableOpacity
          onPress={() => router.replace('/(tabs)/home')}
          className="absolute bottom-10 h-14 w-[90%] items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20">
          <Text className="text-lg font-bold text-white">Let's Begin The Journey</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
