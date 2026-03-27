import ShopHeader from 'components/shop-header';
import { useRouter } from 'expo-router';
import { ArrowRight, MapPin } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LocationPicker() {
  const router = useRouter();
  const [address, setAddress] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ShopHeader title="Point out location" activeSteps={5} />

      <View className="flex-1">
        {/* Placeholder for Map - In a real app we'd use react-native-maps */}
        <View className="flex-1 items-center justify-center bg-[#E2E8F0]">
          {/* Map Placeholder Image/Background */}
          <View className="absolute inset-0 items-center justify-center bg-[#F1F5F9]">
            <Text className="text-[#94A3B8]">Map View Placeholder</Text>
          </View>

          {/* Selection UI */}
          <View className="absolute left-4 right-4 top-4 z-10">
            <View className="flex-row items-center rounded-xl border border-[#E2E8F0] bg-white p-1 shadow-xl">
              <TextInput
                className="flex-1 px-4 py-3 text-base"
                placeholder="Street, road."
                value={address}
                onChangeText={setAddress}
              />
              <TouchableOpacity className="mr-1 px-4 py-2">
                <Text className="font-bold text-[#FF8C00] underline">Locate me</Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-lg bg-[#FF8C00]">
                <ArrowRight size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Suggestions */}
            <View className="mt-2 rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xl">
              <Text className="mb-2 text-sm font-bold text-[#334155]">Suggestions</Text>
              <View className="border-b border-[#F1F5F9] py-2">
                <Text className="text-[#64748B]">Dalas, TX.</Text>
              </View>
              <View className="py-2">
                <Text className="text-[#64748B]">Dalas, TX.</Text>
              </View>
            </View>
          </View>

          {/* Pin and Tooltip */}
          <View className="items-center">
            <View className="mb-2 w-64 rounded-xl bg-[#475569] p-4 shadow-xl">
              <Text className="text-sm font-medium leading-5 text-white">
                Hybrid GPS, Banasree, Dhaka, Bangladesh.
              </Text>
            </View>
            <View className="-mt-2 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#475569]" />
            <MapPin size={48} color="#EF4444" fill="#EF4444" />
            <Text className="mt-1 text-center font-bold text-[#EF4444]">
              Hybrid GPS{'\n'}
              <Text className="font-normal">হাইব্রিড জিপিএস</Text>
            </Text>
          </View>
        </View>

        <View className="absolute bottom-0 left-0 right-0 bg-transparent p-6">
          <TouchableOpacity
            onPress={() => router.push('/ecommerce/privacy-agreement')}
            className="h-14 items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
            <Text className="text-lg font-bold text-white">Confirm location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
