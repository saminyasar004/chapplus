import { useRouter } from 'expo-router';
import { CheckCircle2 } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupSuccess() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <View className="flex-1 items-center justify-center">
        <View className="w-full items-center rounded-2xl border border-[#F1F5F9] bg-white p-8 shadow-2xl">
          <View className="mb-6 h-16 w-16 items-center justify-center rounded-full bg-green-600">
            <CheckCircle2 size={32} color="white" />
          </View>

          <Text className="mb-4 text-center text-xl font-bold text-[#334155]">
            Account has been created Successfully
          </Text>

          <Text className="text-center text-sm leading-5 text-[#64748B]">
            Wait for the confirmation from the admin Restaurant offers whimsical fusion comfort
            food, like Cloud Burgers and Electric Soup.
          </Text>
        </View>
      </View>

      <View className="pb-8">
        <TouchableOpacity
          onPress={() => router.replace('/login')}
          className="h-14 items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
          <Text className="text-lg font-bold text-white">Let's Begin The Journey</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
