import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FormInput = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <View className="mb-6">
    <Text className="mb-2 text-sm font-bold text-[#64748B]">{label}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#CBD5E1"
      className="h-14 rounded-xl border border-[#F1F5F9] bg-white px-4 text-base text-[#1E293B]"
    />
  </View>
);

export default function ProfileContacts() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#848F4B]">Create Hotel Profile</Text>
          <View className="w-10" />
        </View>

        {/* Progress Bar */}
        <View className="mt-8 flex-row gap-x-3">
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
        </View>
      </View>

      <ScrollView
        className="flex-1 px-6 pt-10"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}>
        <Text className="mb-8 text-xl font-bold text-[#64748B]">Contacts</Text>

        <FormInput label="Email" placeholder="Enter here" />
        <FormInput label="Contact Number" placeholder="Enter here" />
        <FormInput label="Website Link" placeholder="Enter here" />
        <FormInput label="Facebook Link" placeholder="Enter here" />

        {/* Navigation Buttons */}
        <View className="mt-10 flex-row gap-x-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-14 flex-1 flex-row items-center justify-center rounded-2xl border border-[#FF8C00] bg-white">
            <ArrowLeft size={20} color="#64748B" className="mr-2" />
            <Text className="text-lg font-bold text-[#64748B]">Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/hotel/agreement')}
            className="h-14 flex-1 flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20">
            <Text className="mr-2 text-lg font-bold text-white">Create</Text>
            <ArrowRight size={20} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
