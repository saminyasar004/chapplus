import { useRouter } from 'expo-router';
import { ArrowLeft, Upload } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddCategory() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text
          className="flex-1 text-center text-[20px] font-bold text-[#6D7437]"
          style={{ fontFamily: 'Inter' }}>
          Add Categories
        </Text>
        <View className="w-6" /> {/* Spacer to balance header */}
      </View>

      <View className="flex-1 px-6 pb-[100px] pt-8">
        <View className="mb-3">
          <Text className="mb-3 text-[15px] font-bold text-[#475569]">Category name</Text>
          <View className="rounded-xl border border-[#F1F5F9] bg-white px-4 py-4">
            <TextInput
              placeholder="e.g. Vegetables"
              placeholderTextColor="#94A3B8"
              value={name}
              onChangeText={setName}
              className="text-[15px] font-medium text-[#1E293B]"
            />
          </View>
        </View>

        <View className="mb-3">
          <Text className="mb-3 text-[15px] font-bold text-[#475569]">Category Image</Text>
          <TouchableOpacity
            className="h-48 w-full items-center justify-center rounded-2xl border-2 border-dashed border-[#F1F5F9] bg-white"
            activeOpacity={0.7}>
            <View className="items-center">
              <Upload size={32} color="#CBD5E1" strokeWidth={1.5} />
              <Text className="mt-3 text-[13px] font-bold text-[#64748B]">Thumbnail</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-1" />

        <TouchableOpacity
          onPress={() => router.push('/menu/')}
          className="mb-10 w-full items-center justify-center rounded-2xl bg-[#FF8C00] py-5 shadow-xl shadow-orange-100">
          <Text className="text-[18px] font-bold text-white">Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
