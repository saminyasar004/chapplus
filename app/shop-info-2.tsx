import Layout from 'components/layout';
import ShopHeader from 'components/shop-header';
import CustomInput from 'components/custom-input';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ShopInfo2() {
  const router = useRouter();

  return (
    <Layout>
      <View className="flex-1 bg-white">
        <ShopHeader title="Shop information's" activeSteps={2} />

        <View className="px-6 py-6">
          <CustomInput label="Road/ Street Name" placeholder="Enter here" />

          <View className="mb-4 flex-row gap-x-4">
            <View className="flex-1">
              <CustomInput label="House No" placeholder="Enter here" />
            </View>
            <View className="flex-1">
              <CustomInput label="Floor No" placeholder="Enter here" />
            </View>
          </View>

          <CustomInput label="Area or locality" placeholder="Enter here" />
          <CustomInput label="City" placeholder="Enter here" />
          <CustomInput label="District" placeholder="Enter here" />
          <CustomInput label="Postal Code" placeholder="Enter here" />

          <TouchableOpacity
            onPress={() => router.push('/shop-info-3')}
            className="mt-12 h-14 items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
            <Text className="text-lg font-bold text-white">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
