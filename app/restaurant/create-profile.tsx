import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, Upload, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FormInput = ({
  label,
  placeholder,
  multiline = false,
  numberOfLines = 1,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
  numberOfLines?: number;
}) => (
  <View className="mb-5">
    <Text className="mb-2 text-sm font-bold text-[#64748B]">{label}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#CBD5E1"
      multiline={multiline}
      numberOfLines={numberOfLines}
      className={`rounded-xl border border-[#F1F5F9] bg-white px-4 py-3 text-base text-[#1E293B] ${
        multiline ? 'h-32 pt-4 text-start' : 'h-14'
      }`}
      textAlignVertical={multiline ? 'top' : 'center'}
    />
  </View>
);

export default function CreateProfile() {
  const router = useRouter();
  const [images] = useState([
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400&auto=format&fit=crop',
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <View className="mr-6 flex-1 items-center">
            <Text className="text-xl font-bold text-[#848F4B]">Create Restaurant Profile</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View className="mt-8 flex-row gap-x-3">
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 40 }}>
        {/* Restaurant Image Section */}
        <View className="mt-6">
          <Text className="mb-4 text-lg font-bold text-[#475569]">Restaurant Image</Text>
          <View className="flex-row flex-wrap justify-between">
            {images.map((img, index) => (
              <View
                key={index}
                className="relative mb-4 aspect-[4/3] w-[48%] overflow-hidden rounded-2xl">
                <Image source={{ uri: img }} className="h-full w-full" />
                <TouchableOpacity className="absolute right-2 top-2 h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <X size={14} color="#64748B" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <TouchableOpacity className="mt-2 flex-row items-center justify-center rounded-xl border border-dashed border-[#CBD5E1] py-4">
            <Upload size={20} color="#64748B" className="mr-2" />
            <Text className="font-bold text-[#64748B]">Upload More Images</Text>
          </TouchableOpacity>
        </View>

        {/* Restaurant Info Section */}
        <View className="mt-10">
          <Text className="mb-6 text-lg font-bold text-[#475569]">Restaurant Info</Text>
          <FormInput label="Restaurant Name" placeholder="Enter here" />
          <FormInput label="Restaurant Location" placeholder="Enter here" />
          <FormInput label="Opening Time" placeholder="Enter here" />
          <FormInput label="Closing Time" placeholder="Enter here" />
          <FormInput label="About" placeholder="Describe here...." multiline numberOfLines={4} />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={() => router.push('/restaurant/profile-location')}
          className="mt-6 h-14 w-full flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20">
          <Text className="mr-2 text-lg font-bold text-white">Next</Text>
          <ArrowRight size={20} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
