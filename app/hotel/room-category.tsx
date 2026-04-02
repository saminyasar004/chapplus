import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Upload } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ImageUpload = ({ label }: { label: string }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    className="aspect-square flex-1 items-center justify-center rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] p-4">
    <Upload size={24} color="#94A3B8" />
    <Text className="mt-2 text-xs font-medium text-[#94A3B8]">{label}</Text>
  </TouchableOpacity>
);

const InputField = ({
  label,
  placeholder,
  value,
}: {
  label: string;
  placeholder: string;
  value?: string;
}) => (
  <View className="mb-6">
    <Text className="mb-3 text-[15px] font-bold text-[#64748B]">{label}</Text>
    <View className="h-14 rounded-xl border border-[#F1F5F9] bg-white px-5 py-4">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#CBD5E1"
        defaultValue={value}
        className="flex-1 text-[16px] font-medium text-[#334155]"
      />
    </View>
  </View>
);

export default function RoomCategory() {
  const router = useRouter();
  const { type = 'create' } = useLocalSearchParams();
  const isUpdate = type === 'update';

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#848F4B]">
            {isUpdate ? 'Update Category' : 'Create Category'}
          </Text>
          <View className="w-10" />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <View className="mt-8">
          <InputField
            label="Category name"
            placeholder="General Room"
            value={isUpdate ? 'General Room' : ''}
          />
          <InputField label="Cost per day" placeholder="$80" value={isUpdate ? '$80' : ''} />

          <Text className="mb-4 text-[15px] font-bold text-[#64748B]">Room Image</Text>
          <View className="gap-y-4">
            <View className="flex-row gap-x-4">
              <ImageUpload label="Thumbnail" />
              <ImageUpload label="Extras" />
            </View>
            <View className="flex-row gap-x-4">
              <ImageUpload label="Extras" />
              <ImageUpload label="Extras" />
            </View>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-12 h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20 active:opacity-90">
          <Text className="text-lg font-bold text-white">
            {isUpdate ? 'Update' : 'Create Category'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
