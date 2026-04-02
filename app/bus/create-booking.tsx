import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronRight, Calendar } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateBooking() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <View className="mr-8 flex-1 items-center">
          <Text className="text-[20px] font-bold text-[#848F4B]">Seat booking flow</Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}>
        <View className="px-6">
          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Full name</Text>
            <TouchableOpacity className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-5">
              <Text className="flex-1 text-base text-[#CBD5E1]">Choose one</Text>
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Email Address</Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              className="h-14 rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-5 text-base text-[#334155]"
            />
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Phone Number</Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              keyboardType="phone-pad"
              className="h-14 rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-5 text-base text-[#334155]"
            />
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Select travel date</Text>
            <TouchableOpacity className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-5">
              <Calendar size={20} color="#CBD5E1" className="mr-3" />
              <Text className="flex-1 text-base text-[#CBD5E1]">Select Date</Text>
              <ChevronRight size={20} color="#CBD5E1" />
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Select Trip</Text>
            <TouchableOpacity className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-5">
              <Text className="flex-1 text-base text-[#CBD5E1]">Select Trip</Text>
              <ChevronRight size={20} color="#CBD5E1" />
            </TouchableOpacity>
          </View>

          <View className="mb-10">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Seats needed</Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              keyboardType="numeric"
              className="h-14 rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-5 text-base text-[#334155]"
            />
          </View>

          <TouchableOpacity
            onPress={() => router.push('/bus/seat-selection')}
            className="h-16 w-full flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-md shadow-orange-200">
            <Text className="text-[18px] font-bold text-white">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
