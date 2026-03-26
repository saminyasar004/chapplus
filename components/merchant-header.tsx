import LogoFull from 'assets/images/logo-full.png';
import { Bell, Wallet } from 'lucide-react-native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

export default function MerchantHeader() {
  return (
    <View className="flex-row items-center justify-between bg-white px-6 pb-0 pt-8">
      <View className="flex-row items-center">
        <Image source={LogoFull} style={{ width: 120, height: 40 }} resizeMode="contain" />
      </View>
      <View className="flex-row items-center gap-x-4">
        <TouchableOpacity className="relative">
          <Wallet size={24} color="#FF8C00" />
        </TouchableOpacity>
        <TouchableOpacity className="relative">
          <Bell size={24} color="#FF8C00" />
          <View className="absolute -top-0.5 right-1 h-2.5 w-2.5 rounded-full border border-white bg-[#F9416F]" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
