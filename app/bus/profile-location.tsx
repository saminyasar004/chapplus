import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BusProfileLocation() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#848F4B]">Create Profile</Text>
          <View className="w-10" />
        </View>
        {/* Progress Indicator */}
        <View className="mt-4 flex-row gap-x-2 py-4">
          {[1, 2, 3, 4].map((step) => (
            <View
              key={step}
              className={`h-1.5 flex-1 rounded-full ${step <= 2 ? 'bg-[#FF8C00]' : 'bg-[#CBD5E1]'}`}
            />
          ))}
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}>
        <View className="flex-1">
          <View className="px-6 py-6">
            <View className="mb-4 h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-4 shadow-sm shadow-slate-100">
              <TextInput
                placeholder="Street, road."
                placeholderTextColor="#CBD5E1"
                className="flex-1 text-base"
              />
              <TouchableOpacity className="mx-2">
                <Text className="font-bold text-[#FF8C00]">Locate me</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-lg bg-[#FF8C00] p-2">
                <ArrowRight size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View className="rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm shadow-slate-100">
              <Text className="mb-2 text-xs font-bold text-[#64748B]">Suggestions</Text>
              <View className="border-b border-[#F1F5F9] py-3">
                <Text className="text-sm text-[#475569]">Dalas, TX.</Text>
              </View>
              <View className="py-3">
                <Text className="text-sm text-[#475569]">Dalas, TX.</Text>
              </View>
            </View>
          </View>
          <View className="h-[400px] w-full items-center justify-center bg-[#E2E8F0]">
            <MapPin size={48} color="#FF8C00" />
            <Text className="mt-4 font-bold text-[#64748B]">Map view goes here</Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="absolute bottom-10 left-0 right-0 flex-row gap-x-4 px-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-14 flex-1 items-center justify-center rounded-2xl border border-[#FF8C00]">
          <Text className="text-lg font-bold text-[#FF8C00]">Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/bus/profile-contacts')}
          className="flex-2 h-14 items-center justify-center rounded-2xl bg-[#FF8C00] px-10 shadow-xl shadow-orange-500/20 active:opacity-90">
          <View className="flex-row items-center">
            <Text className="text-lg font-bold text-white">Next</Text>
            <ArrowRight size={20} color="white" className="ml-2" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
