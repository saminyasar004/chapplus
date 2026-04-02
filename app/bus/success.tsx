import { useRouter } from 'expo-router';
import { CheckCircle2 } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BusSuccess() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="flex-1 items-center justify-center px-10">
        <View className="mb-8 rounded-full bg-[#F0FDF4] p-6">
          <View className="rounded-full bg-[#22C55E] p-4">
            <CheckCircle2 size={48} color="white" />
          </View>
        </View>
        <View className="rounded-3xl border border-[#F1F5F9] bg-[#FAFAFA] p-8 shadow-sm shadow-slate-100">
          <Text className="text-center text-xl font-bold text-[#1E293B]">
            Account has been created Successfully
          </Text>
          <Text className="mt-4 text-center text-sm leading-6 text-[#94A3B8]">
            Wait for the confirmation from the admin. The team will review your profile and
            documents before activation.
          </Text>
        </View>
      </View>
      <View className="px-6 pb-10">
        <TouchableOpacity
          onPress={() => router.replace('/(tabs)/home')}
          className="h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20 active:opacity-90">
          <Text className="text-lg font-bold text-white">Let's Begin The Journey</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
