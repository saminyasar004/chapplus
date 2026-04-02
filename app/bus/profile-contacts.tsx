import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, Upload } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputField = ({
  label,
  placeholder,
  multiline = false,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
}) => (
  <View className="mb-6">
    <Text className="mb-3 text-[15px] font-bold text-[#64748B]">{label}</Text>
    <View
      className={`rounded-xl border border-[#F1F5F9] bg-white px-5 py-4 ${multiline ? 'h-32' : 'h-14'}`}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#CBD5E1"
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        className="flex-1 text-[16px] font-medium text-[#334155]"
      />
    </View>
  </View>
);

export default function BusProfileContacts() {
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
              className={`h-1.5 flex-1 rounded-full ${step <= 3 ? 'bg-[#FF8C00]' : 'bg-[#CBD5E1]'}`}
            />
          ))}
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-6">
          <Text className="mb-6 text-lg font-bold text-[#475569]">Contacts</Text>
          <InputField label="E-mail" placeholder="Enter here" />
          <InputField label="Trade License Number" placeholder="Enter here" />

          <Text className="mb-4 text-[15px] font-bold text-[#64748B]">Add Documents</Text>
          <TouchableOpacity className="mb-8 h-14 w-full flex-row items-center justify-center rounded-xl border border-[#F1F5F9] bg-[#FAFAFA]">
            <Upload size={20} color="#94A3B8" />
            <Text className="ml-2 text-sm font-bold text-[#94A3B8]">Upload Document</Text>
          </TouchableOpacity>

          <InputField label="Website Link" placeholder="Enter here" />
          <InputField label="Facebook Link" placeholder="Enter here" />
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
          onPress={() => router.push('/bus/agreement')}
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
