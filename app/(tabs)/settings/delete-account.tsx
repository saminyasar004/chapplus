import { useRouter } from 'expo-router';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DeleteAccountScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={28} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        <Text className="mb-12 mt-2 text-center text-3xl font-bold text-[#848F4B]">
          Delete Account
        </Text>

        <View className="mb-16 items-center px-4">
          <Text className="text-center text-lg font-medium leading-7 text-[#94A3B8]">
            Deleting your account will permanently remove all your data and saved information.
          </Text>
        </View>

        <View className="mb-12">
          <Text className="mb-4 text-xl font-bold text-[#475569]">Please Enter Your Password</Text>
          <View className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-white px-4 py-5 shadow-sm shadow-slate-100">
            <TextInput
              secureTextEntry={!showPassword}
              placeholder="**********"
              placeholderTextColor="#94A3B8"
              className="flex-1 text-base font-medium text-[#334155]"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff size={24} color="#94A3B8" />
              ) : (
                <Eye size={24} color="#94A3B8" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className="w-full rounded-2xl bg-[#EF4444] py-5 shadow-xl shadow-red-200">
          <Text className="text-center text-2xl font-bold text-white">Delete Account</Text>
        </TouchableOpacity>

        {/* Spacer for bottom tab bar */}
        <View className="h-32" />
      </ScrollView>
    </SafeAreaView>
  );
}
