import Layout from 'components/layout';
import ShopHeader from 'components/shop-header';
import CustomInput from 'components/custom-input';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ShopInfo1() {
  const router = useRouter();
  const [shopName, setShopName] = useState('');
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [logo, setLogo] = useState<string | null>(null);

  return (
    <Layout>
      <View className="flex-1 bg-white">
        <ShopHeader title="Shop information's" activeSteps={1} />

        <View className="px-6 py-6">
          <CustomInput
            label="Shop name"
            placeholder="Enter here"
            value={shopName}
            onChangeText={setShopName}
          />

          <View className="mb-6">
            <Text className="mb-2 text-sm font-semibold text-[#667085]">Logo</Text>
            <View className="flex-row items-center rounded-xl border border-[#E5E7EB] bg-white p-2">
              <TouchableOpacity
                className="rounded-lg bg-[#DBEAFE] px-4 py-2"
                onPress={() => {
                  /* Image picker logic */
                }}>
                <Text className="font-medium text-[#1E40AF]">Choose file</Text>
              </TouchableOpacity>
              <Text className="ml-4 text-base text-[#9CA3AF]">{logo || 'Select a file'}</Text>
            </View>
          </View>

          <CustomInput
            label="About"
            placeholder="Enter here"
            isTextArea
            value={about}
            onChangeText={setAbout}
          />

          <CustomInput
            label="Phone number"
            placeholder="E.g. 02344104164246"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <TouchableOpacity
            onPress={() => router.push('/ecommerce/shop-info-2')}
            className="mt-12 h-14 items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
            <Text className="text-lg font-bold text-white">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
