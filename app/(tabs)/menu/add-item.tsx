import { useRouter } from 'expo-router';
import { ArrowLeft, Upload } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddItem() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const UploadBox = ({ label }: { label: string }) => (
    <TouchableOpacity
      className="mb-4 h-28 w-[48%] items-center justify-center rounded-xl border border-[#F1F5F9] bg-white"
      activeOpacity={0.7}>
      <View className="items-center">
        <Upload size={24} color="#CBD5E1" strokeWidth={1.5} />
        <Text className="mt-2 text-[12px] font-bold text-[#64748B]">{label}</Text>
      </View>
    </TouchableOpacity>
  );

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
          Add Items
        </Text>
        <View className="w-6" />
      </View>

      <ScrollView
        className="flex-1 px-6 pt-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="mb-6">
          <Text className="mb-3 text-[15px] font-bold text-[#475569]">Item name</Text>
          <View className="rounded-xl border border-[#F1F5F9] bg-white px-4 py-4">
            <TextInput
              placeholder="e.g. Jagung"
              placeholderTextColor="#94A3B8"
              value={name}
              onChangeText={setName}
              className="text-[15px] font-medium text-[#1E293B]"
            />
          </View>
        </View>

        <View className="mb-6">
          <Text className="mb-3 text-[15px] font-bold text-[#475569]">Price</Text>
          <View className="rounded-xl border border-[#F1F5F9] bg-white px-4 py-4 text-center">
            <TextInput
              placeholder="$104.56"
              placeholderTextColor="#94A3B8"
              value={price}
              onChangeText={setPrice}
              className="text-[15px] font-medium text-[#1E293B]"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View className="mb-6">
          <Text className="mb-3 text-[15px] font-bold text-[#475569]">Food Description</Text>
          <View className="h-32 rounded-xl border border-[#F1F5F9] bg-white px-4 py-4">
            <TextInput
              placeholder="Description here......"
              placeholderTextColor="#94A3B8"
              value={description}
              onChangeText={setDescription}
              multiline
              textAlignVertical="top"
              className="flex-1 text-[15px] font-medium text-[#1E293B]"
            />
          </View>
        </View>

        <View className="mb-6">
          <Text className="mb-4 text-[15px] font-bold text-[#475569]">Item Image</Text>
          <View className="flex-row flex-wrap justify-between">
            <UploadBox label="Thumbnail" />
            <UploadBox label="Extras" />
            <UploadBox label="Extras" />
            <UploadBox label="Extras" />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.back()}
          className="w-full items-center justify-center rounded-2xl bg-[#FF8C00] py-5 shadow-xl shadow-orange-100">
          <Text className="text-[18px] font-bold text-white">Create</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
