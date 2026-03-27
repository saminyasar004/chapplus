import { useRouter } from 'expo-router';
import { ChevronLeft, Lock, Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChangePasswordScreen() {
  const router = useRouter();
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ChevronLeft size={28} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        <Text className="mb-12 mt-2 text-center text-3xl font-bold text-[#848F4B]">
          Change Password
        </Text>

        <View className="space-y-8">
          {/* Old Password */}
          <View className="mb-8">
            <Text className="mb-3 text-base font-bold text-[#475569]">Old Password *</Text>
            <View className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-white px-4 py-4 shadow-sm shadow-slate-100">
              <Lock size={20} color="#94A3B8" />
              <TextInput
                secureTextEntry={!showOld}
                placeholder="Password"
                placeholderTextColor="#94A3B8"
                className="ml-4 flex-1 text-base font-medium text-[#334155]"
              />
              <TouchableOpacity onPress={() => setShowOld(!showOld)}>
                {showOld ? <EyeOff size={20} color="#94A3B8" /> : <Eye size={20} color="#94A3B8" />}
              </TouchableOpacity>
            </View>
          </View>

          {/* New Password */}
          <View className="mb-8">
            <Text className="mb-3 text-base font-bold text-[#475569]">New Password *</Text>
            <View className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-white px-4 py-4 shadow-sm shadow-slate-100">
              <Lock size={20} color="#94A3B8" />
              <TextInput
                secureTextEntry={!showNew}
                placeholder="Password"
                placeholderTextColor="#94A3B8"
                className="ml-4 flex-1 text-base font-medium text-[#334155]"
              />
              <TouchableOpacity onPress={() => setShowNew(!showNew)}>
                {showNew ? <EyeOff size={20} color="#94A3B8" /> : <Eye size={20} color="#94A3B8" />}
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View className="mb-12">
            <Text className="mb-3 text-base font-bold text-[#475569]">Confirm New Password *</Text>
            <View className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-white px-4 py-4 shadow-sm shadow-slate-100">
              <Lock size={20} color="#94A3B8" />
              <TextInput
                secureTextEntry={!showConfirm}
                placeholder="Password"
                placeholderTextColor="#94A3B8"
                className="ml-4 flex-1 text-base font-medium text-[#334155]"
              />
              <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? (
                  <EyeOff size={20} color="#94A3B8" />
                ) : (
                  <Eye size={20} color="#94A3B8" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.back()}
            className="w-full rounded-2xl bg-[#FF8C00] py-5 shadow-xl shadow-orange-200">
            <Text className="text-center text-2xl font-bold text-white">Save Password</Text>
          </TouchableOpacity>
        </View>

        {/* Spacer for bottom tab bar */}
        <View className="h-32" />
      </ScrollView>
    </SafeAreaView>
  );
}
