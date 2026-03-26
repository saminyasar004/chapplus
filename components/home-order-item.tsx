import React from 'react';
import { Image, Text, View } from 'react-native';

interface HomeOrderItemProps {
  title: string;
  size: string;
  quantity: number;
  color: string;
  itemSize: string;
  image: string;
}

export default function HomeOrderItem({
  title,
  size,
  quantity,
  color,
  itemSize,
  image,
}: HomeOrderItemProps) {
  return (
    <View className="mb-3 flex-row rounded-2xl border border-[#F1F5F9] bg-white p-3 shadow-sm">
      <Image source={{ uri: image }} className="h-16 w-16 rounded-xl bg-[#F8FAFC]" />
      <View className="ml-4 flex-1 justify-center">
        <Text className="text-base font-bold text-[#334155]">{title}</Text>
        <Text className="mt-1 text-xs text-[#64748B]">
          Size: {size}, Q: {quantity}
        </Text>
        <Text className="text-xs text-[#64748B]">
          Color: {color}, Size: {itemSize}
        </Text>
      </View>
    </View>
  );
}
