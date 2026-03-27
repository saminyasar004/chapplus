import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, LocateFixed, Search } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileLocation() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#111827" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#848F4B]">Create Restaurant Profile</Text>
          <View className="w-8" />
        </View>

        {/* Progress Bar */}
        <View className="mt-8 flex-row gap-x-3 px-2">
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
        </View>
      </View>

      <View className="relative flex-1">
        {/* Mock Map Background */}
        <View className="absolute inset-0 items-center justify-center bg-[#E2E8F0]">
          <Text className="font-bold text-[#94A3B8]">Map View Area</Text>
          {/* Note: In a real app, this would be a Map component. 
                 Using styled View as a placeholder for pixel-perfect design accuracy. */}
          <View className="absolute left-1/2 top-1/2 -ml-6 -mt-12">
            <View className="h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-red-500 shadow-xl">
              <View className="h-3 w-3 rounded-full bg-white" />
            </View>
          </View>
        </View>

        {/* Search Overlay */}
        <View className="px-6 pt-6">
          <View className="overflow-hidden rounded-xl bg-white shadow-xl shadow-slate-200">
            <View className="flex-row items-center border-b border-[#F1F5F9] px-4 py-2">
              <TextInput
                placeholder="Street, road."
                placeholderTextColor="#94A3B8"
                className="h-12 flex-1 text-base text-[#111827]"
              />
              <TouchableOpacity className="flex-row items-center px-2">
                <Text className="mr-2 font-bold text-[#FF8C00]">Locate me</Text>
                <View className="rounded-xl bg-[#FF8C00] p-3">
                  <ArrowRight size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Suggestions */}
            <View className="p-4">
              <Text className="mb-4 text-sm font-bold text-[#475569]">Suggestions</Text>
              <TouchableOpacity className="border-b border-[#F1F5F9] py-3">
                <Text className="text-base text-[#64748B]">Dalas, TX.</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3">
                <Text className="text-base text-[#64748B]">Dalas, TX.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Footer Buttons */}
      <View className="flex-row gap-x-4 bg-white px-6 py-10 shadow-2xl shadow-slate-900/50">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-6 h-14 flex-1 flex-row items-center justify-center rounded-xl border border-[#FF8C00]">
          <ArrowLeft size={20} color="#94A3B8" />
          <Text className="ml-2 text-lg font-bold text-[#94A3B8]">Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/restaurant/profile-contacts')}
          className="h-14 flex-1 flex-row items-center justify-center rounded-xl bg-[#FF8C00]">
          <Text className="mr-2 text-lg font-bold text-white">Next</Text>
          <ArrowRight size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
