import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BookingSuccess() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <View className="mr-8 flex-1 items-center">
          <Text className="text-[20px] font-bold text-[#848F4B]">Booking Successful</Text>
        </View>
      </View>

      <View className="flex-1 items-center justify-center px-10">
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-1486.jpg',
          }}
          className="mb-10 h-80 w-80"
          resizeMode="contain"
        />

        <Text className="mb-4 text-center text-3xl font-bold text-[#475569]">
          Payment Successful
        </Text>
        <Text className="mb-2 text-center text-xl font-bold text-[#64748B]">
          Your Order Is Being Processed
        </Text>
        <Text className="text-center text-[15px] leading-6 text-[#94A3B8]">
          Please Check Your Notification, We Just Sent You A Message.
        </Text>
      </View>

      <View className="px-10 pb-12">
        <TouchableOpacity
          onPress={() => router.replace('/(tabs)/order')}
          className="h-16 w-full flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-lg shadow-orange-200">
          <ArrowLeft size={20} color="white" className="mr-2" />
          <Text className="text-[18px] font-bold text-white">Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
