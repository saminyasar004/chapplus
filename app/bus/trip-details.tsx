import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Calendar,
  MoreHorizontal,
  ChevronRight,
  Star,
  Trash2,
  Edit3,
} from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function TripDetails() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
  ];

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-row items-center px-6 py-4" edges={['top']}>
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <View className="mr-8 flex-1 items-center">
          <Text className="text-[20px] font-bold text-[#848F4B]">Trip Details</Text>
        </View>
      </SafeAreaView>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Profile Header */}
        <View className="mb-6 flex-row items-center justify-between px-6">
          <View className="flex-row items-center">
            <View className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
              <View className="h-full w-full bg-[#E2E8F0]" />
            </View>
            <Text className="ml-3 text-lg font-bold text-[#475569]">Nirala Bus Service</Text>
          </View>
          <TouchableOpacity className="flex-row items-center rounded-full border border-orange-200 bg-white px-3 py-1.5 shadow-sm">
            <MapPin size={16} color="#FF8C00" />
            <Text className="ml-1 text-sm font-bold text-[#FF8C00]">Location</Text>
          </TouchableOpacity>
        </View>

        {/* Carousel */}
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              const slide = Math.round(e.nativeEvent.contentOffset.x / width);
              setActiveSlide(slide);
            }}>
            {images.map((img, i) => (
              <View key={i} style={{ width }}>
                <Image source={{ uri: img }} className="h-64 w-full" />
                <View className="absolute bottom-4 left-6 rounded-lg bg-black/40 px-3 py-1.5">
                  <View className="flex-row items-center">
                    <Clock size={14} color="white" />
                    <Text className="ml-2 font-medium text-white">10:00 AM 21 Feb</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          <View className="mt-4 flex-row justify-center space-x-2">
            {images.map((_, i) => (
              <View
                key={i}
                className={`h-2 w-2 rounded-full ${activeSlide === i ? 'bg-[#FF8C00]' : 'bg-[#E2E8F0]'}`}
              />
            ))}
          </View>
        </View>

        <View className="mt-6 px-6">
          <Text className="text-xl font-bold text-[#475569]">Dhaka to Chattogram (120km)</Text>

          <View className="mt-6">
            <View className="mb-2 flex-row items-center justify-between">
              <Text className="text-sm font-bold text-[#848F4B]">About Tour</Text>
              <Text className="text-sm font-bold text-[#848F4B]">2 hour</Text>
            </View>
            <Text className="text-sm leading-6 text-[#94A3B8]">
              Biffco Enterprises offers whimsical fusion comfort food, like Cloud Burgers and
              Electric Soup. With a rotating mystery menu, flying nachos, and glowing decor, it's a
              fun, interactive dining experience where food surprises and delights in every bite.
            </Text>
          </View>

          <View className="mt-8 space-y-6">
            <View>
              <Text className="mb-4 text-sm font-bold text-[#475569]">Pick up Point</Text>
              <View className="flex-row items-center justify-between">
                <View className="flex-1 flex-row items-center pr-4">
                  <MapPin size={16} color="#94A3B8" />
                  <Text className="ml-2 text-sm text-[#94A3B8]">
                    Kazi Dairy, Tiger Pass, Chittagong
                  </Text>
                </View>
                <TouchableOpacity className="flex-row items-center">
                  <MapPin size={14} color="#FF8C00" />
                  <Text className="ml-1 text-sm font-bold text-[#FF8C00]">View</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text className="mb-4 text-sm font-bold text-[#475569]">Drop Out Point</Text>
              <View className="flex-row items-center justify-between">
                <View className="flex-1 flex-row items-center pr-4">
                  <MapPin size={16} color="#94A3B8" />
                  <Text className="ml-2 text-sm text-[#94A3B8]">
                    Kazi Dairy, Tiger Pass, Chittagong
                  </Text>
                </View>
                <TouchableOpacity className="flex-row items-center">
                  <MapPin size={14} color="#FF8C00" />
                  <Text className="ml-1 text-sm font-bold text-[#FF8C00]">View</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text className="mb-3 text-sm font-bold text-[#475569]">Seats</Text>
              <Text className="text-sm text-[#94A3B8]">4 (Available)</Text>
            </View>

            <View>
              <Text className="mb-3 text-sm font-bold text-[#475569]">Price</Text>
              <Text className="text-sm text-[#94A3B8]">1200$/Person</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer Actions */}
      <View className="flex-row space-x-4 border-t border-slate-100 px-6 pb-10 pt-6">
        <TouchableOpacity className="h-14 flex-1 flex-row items-center justify-center rounded-2xl border border-red-50 bg-[#FFF1F1]">
          <Trash2 size={20} color="#FF4D4D" className="mr-2" />
          <Text className="text-[17px] font-bold text-[#FF4D4D]">Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-14 flex-1 flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-sm shadow-orange-200">
          <Text className="mr-2 text-[17px] font-bold text-white">Edit</Text>
          <Edit3 size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
