import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronDown, ChevronRight, MapPin, Clock, Calendar } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddTrip() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <View className="mr-8 flex-1 items-center">
          <Text className="text-[20px] font-bold text-[#848F4B]">Add New Trip</Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}>
        <View className="px-6">
          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Add a Bus</Text>
            <TouchableOpacity className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-5">
              <Text className="flex-1 text-base text-[#CBD5E1]">Select a Bus</Text>
              <ChevronDown size={20} color="#CBD5E1" />
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Trip Name</Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              className="h-14 rounded-2xl border border-[#F1F5F9] bg-white px-5 text-base text-[#334155]"
            />
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Price per Seat</Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              keyboardType="numeric"
              className="h-14 rounded-2xl border border-[#F1F5F9] bg-white px-5 text-base text-[#334155]"
            />
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Pickup Time</Text>
            <TouchableOpacity className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-5">
              <Text className="flex-1 text-base text-[#CBD5E1]">Select a time</Text>
              <ChevronDown size={20} color="#CBD5E1" />
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Trip Date</Text>
            <TouchableOpacity className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-5">
              <Text className="flex-1 text-base text-[#CBD5E1]">Select a time</Text>
              <ChevronRight size={20} color="#CBD5E1" />
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Pickup Point</Text>
            <TouchableOpacity
              onPress={() => router.push('/bus/location-select')}
              className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-5">
              <Text className="flex-1 text-base text-[#CBD5E1]">Select a location</Text>
              <ChevronRight size={20} color="#CBD5E1" />
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">Dropout Point</Text>
            <TouchableOpacity
              onPress={() => router.push('/bus/location-select')}
              className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-5">
              <Text className="flex-1 text-base text-[#CBD5E1]">Select a location</Text>
              <ChevronRight size={20} color="#CBD5E1" />
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">About Tour</Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              multiline
              numberOfLines={6}
              className="textAlignVertical-top min-h-[120px] rounded-2xl border border-[#F1F5F9] bg-white p-5 text-base text-[#334155]"
              style={{ textAlignVertical: 'top' }}
            />
          </View>

          <View className="mb-5">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">
              Approximate required time
            </Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              className="h-14 rounded-2xl border border-[#F1F5F9] bg-white px-5 text-base text-[#334155]"
            />
          </View>

          <View className="mb-10">
            <Text className="mb-3 text-[14px] font-medium text-[#64748B]">
              Approximate distance
            </Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              className="h-14 rounded-2xl border border-[#F1F5F9] bg-white px-5 text-base text-[#334155]"
            />
          </View>

          <TouchableOpacity className="h-16 w-full flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-sm shadow-orange-200">
            <Text className="mr-2 text-[18px] font-bold text-white">Add Trip</Text>
            <ChevronRight size={20} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
