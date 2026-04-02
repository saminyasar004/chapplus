import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, Search, MapPin, Maximize } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function LocationSelect() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-row items-center px-6 py-4" edges={['top']}>
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <View className="mr-8 flex-1 items-center">
          <Text className="text-[20px] font-bold text-[#475569]">Pick Up Point</Text>
        </View>
      </SafeAreaView>

      <View className="relative flex-1">
        {/* Mock Map Background */}
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:1400/1*qV9-BDvw3mB6Y7xUvC9H3w.png',
          }}
          className="w-full flex-1"
          resizeMode="cover"
        />

        {/* Search Overlay */}
        <View className="absolute left-6 right-6 top-6 z-50">
          <View className="w-full rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-300">
            <View className="flex-row items-center">
              <TextInput
                placeholder="Street, road."
                placeholderTextColor="#CBD5E1"
                value={search}
                onChangeText={setSearch}
                className="h-12 flex-1 px-4 text-base text-[#475569]"
              />
              <TouchableOpacity>
                <Text className="mr-4 text-base font-bold text-[#FF8C00]">Locate me</Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-xl bg-[#FF8C00]">
                <ArrowRight size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Suggestions */}
            <View className="mt-2 px-4 pb-4">
              <Text className="mb-3 text-sm font-bold text-[#334155]">Suggestions</Text>
              <View className="mb-3 h-[1px] bg-[#F1F5F9]" />
              <TouchableOpacity className="mb-4">
                <Text className="text-sm text-[#94A3B8]">Dalas, TX.</Text>
              </TouchableOpacity>
              <View className="mb-3 h-[1px] bg-[#F1F5F9]" />
              <TouchableOpacity>
                <Text className="text-sm text-[#94A3B8]">Dalas, TX.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Floating Controls/Marker Mockup */}
        <View className="absolute left-1/2 top-1/2 -ml-5 -mt-10">
          <MapPin size={40} color="#FF4D4D" fill="#FF4D4D" />
          <View className="absolute -left-20 -top-12 w-40 rounded-xl border border-slate-100 bg-white p-3 shadow-md">
            <Text className="text-[12px] font-bold text-[#475569]">Hybrid GPS</Text>
            <Text className="text-[10px] text-[#94A3B8]">হাইব্রিড জিপিএস</Text>
          </View>
        </View>

        {/* Action Button */}
        <View className="absolute bottom-10 left-6 right-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-16 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
            <Text className="text-[18px] font-bold text-white">Confirm location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
