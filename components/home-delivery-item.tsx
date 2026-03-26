import { Clock, MapPin } from 'lucide-react-native';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface HomeDeliveryItemProps {
  name: string;
  otp: string;
  image: string;
  distance?: string;
  time?: string;
  dateTime?: string;
}

export default function HomeDeliveryItem({
  name,
  otp,
  image,
  distance,
  time,
  dateTime,
}: HomeDeliveryItemProps) {
  return (
    <View className="mb-3 flex-row rounded-2xl border border-[#F1F5F9] bg-white p-3 shadow-sm">
      <Image source={{ uri: image }} className="h-16 w-16 rounded-xl bg-[#F8FAFC]" />
      <View className="ml-4 flex-1 justify-center">
        <Text className="text-base font-bold text-[#334155]">{name}</Text>
        <Text className="mt-1 text-xs text-[#64748B]">OTP: {otp}</Text>

        <View className="mt-2 flex-row items-center">
          {distance ? (
            <>
              <MapPin size={14} color="#22C55E" />
              <Text className="ml-1 text-xs font-bold text-[#22C55E]">{distance}</Text>
              <Text className="ml-1 text-xs text-[#64748B]">({time})</Text>
            </>
          ) : (
            <>
              <Clock size={14} color="#94A3B8" />
              <Text className="ml-1 text-xs text-[#64748B]">{dateTime}</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
}
