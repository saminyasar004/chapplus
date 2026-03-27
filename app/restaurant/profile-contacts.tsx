import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileContacts() {
  const router = useRouter();

  const fields = [
    { label: 'Email', placeholder: 'Enter here' },
    { label: 'Contact Number', placeholder: 'Enter here' },
    { label: 'Website Link', placeholder: 'Enter here' },
    { label: 'Facebook Link', placeholder: 'Enter here' },
  ];

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
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
        </View>
      </View>

      <ScrollView className="flex-1 px-6 pt-10" showsVerticalScrollIndicator={false}>
        <Text className="mb-8 text-xl font-bold text-[#475569]">Contacts</Text>

        <View className="space-y-6">
          {fields.map((field) => (
            <View key={field.label} className="mb-6">
              <Text className="mb-3 text-base font-medium text-[#475569]">{field.label}</Text>
              <TextInput
                placeholder={field.placeholder}
                placeholderTextColor="#D1D5DB"
                className="h-14 rounded-xl border border-[#F1F5F9] bg-white px-4 text-base text-[#111827]"
              />
            </View>
          ))}
        </View>

        {/* Spacer for button area */}
        <View className="h-40" />
      </ScrollView>

      {/* Footer Buttons */}
      <View className="flex-row gap-x-4 bg-white px-6 py-10 shadow-2xl shadow-slate-900/50">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-14 flex-1 flex-row items-center justify-center rounded-xl border border-[#FF8C00]">
          <ArrowLeft size={20} color="#94A3B8" />
          <Text className="ml-2 text-lg font-bold text-[#94A3B8]">Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/restaurant/agreement')}
          className="h-14 flex-1 flex-row items-center justify-center rounded-xl bg-[#FF8C00]">
          <Text className="mr-2 text-lg font-bold text-white">Create</Text>
          <ArrowRight size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
