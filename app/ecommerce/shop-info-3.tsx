import Layout from 'components/layout';
import ShopHeader from 'components/shop-header';
import CustomInput from 'components/custom-input';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ShopInfo3() {
  const router = useRouter();
  const [banner, setBanner] = useState<string | null>(null);

  return (
    <Layout>
      <View className="flex-1 bg-white">
        <ShopHeader title="Shop information's" activeSteps={3} />

        <View className="px-6 py-6">
          <View className="mb-6">
            <Text className="mb-2 text-sm font-semibold text-[#667085]">Banner</Text>
            <View className="flex-row items-center rounded-xl border border-[#E5E7EB] bg-white p-2">
              <TouchableOpacity className="rounded-lg bg-[#DBEAFE] px-4 py-2">
                <Text className="font-medium text-[#1E40AF]">Choose file</Text>
              </TouchableOpacity>
              <Text className="ml-4 text-base text-[#9CA3AF]">{banner || 'Select a file'}</Text>
            </View>
          </View>

          <CustomInput label="Opening time" placeholder="Enter here" />
          <CustomInput label="Closing time" placeholder="Enter here" />

          <View className="mb-6">
            <Text className="mb-2 text-sm font-semibold text-[#667085]">Set Up location</Text>
            <TouchableOpacity
              onPress={() => router.push('/ecommerce/location-picker')}
              className="h-14 flex-row items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-4 shadow-sm">
              <Text className="text-base text-[#9CA3AF]">Click here</Text>
              <ChevronRight size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/ecommerce/shop-info-4')}
            className="mt-24 h-14 items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
            <Text className="text-lg font-bold text-white">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
