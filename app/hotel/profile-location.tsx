import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, MapPin, Search } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileLocation() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <View className="mr-6 flex-1 items-center">
            <Text className="text-xl font-bold text-[#848F4B]">Create Hotel Profile</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View className="mt-8 flex-row gap-x-3">
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
        </View>
      </View>

      <View className="flex-1">
        {/* Map Placeholder */}
        <View className="flex-1 bg-slate-100">
          <Image
            source={{
              uri: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/23.7947,90.4043,14,0/800x1200?access_token=pk.eyJ1Ijoic2FtaW55YXNhcjAwNCIsImEiOiJjbTFseGZ6ZG0wZzZ6MmpxeGZ6ZG0wZzZ6In0.X',
            }}
            className="h-full w-full"
            resizeMode="cover"
          />
          <View className="absolute left-1/2 top-1/2 -ml-6 -mt-12">
            <MapPin size={48} color="#EF4444" fill="#EF4444" fillOpacity={0.2} />
          </View>
        </View>

        {/* Search Overlay */}
        <View className="absolute left-6 right-6 top-6">
          <View className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <View className="flex-row items-center border-b border-[#F1F5F9] px-4 py-3">
              <TextInput
                placeholder="Street, road."
                placeholderTextColor="#94A3B8"
                className="flex-1 text-base text-[#1E293B]"
              />
              <TouchableOpacity className="mx-2">
                <Text className="text-sm font-bold text-[#FF8C00]">Locate me</Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-xl bg-[#FF8C00]">
                <ArrowRight size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View className="px-4 py-4">
              <Text className="mb-4 text-sm font-bold text-[#475569]">Suggestions</Text>
              <TouchableOpacity className="mb-4 border-b border-[#F1F5F9] pb-4">
                <Text className="text-sm text-[#64748B]">Dalas, TX.</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-sm text-[#64748B]">Dalas, TX.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Navigation Buttons */}
        <View className="absolute bottom-10 left-6 right-6 flex-row gap-x-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-14 flex-1 flex-row items-center justify-center rounded-2xl border border-[#FF8C00] bg-white">
            <ArrowLeft size={20} color="#64748B" className="mr-2" />
            <Text className="text-lg font-bold text-[#64748B]">Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/hotel/profile-contacts')}
            className="h-14 flex-1 flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20">
            <Text className="mr-2 text-lg font-bold text-white">Next</Text>
            <ArrowRight size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
