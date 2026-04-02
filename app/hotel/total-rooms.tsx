import { useRouter } from 'expo-router';
import { ArrowLeft, Plus, Search, Trash2 } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShadcnSwitch = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: (v: boolean) => void;
}) => {
  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(value ? 16 : 2, { damping: 15, stiffness: 120 }) }],
  }));

  const trackStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(value ? '#FF8C00' : '#E2E8F0', { duration: 200 }),
  }));

  return (
    <Pressable onPress={() => onValueChange(!value)}>
      <Animated.View style={trackStyle} className="h-6 w-10 justify-center rounded-full">
        <Animated.View
          style={thumbStyle}
          className="h-[18px] w-[18px] rounded-full bg-white shadow-sm"
        />
      </Animated.View>
    </Pressable>
  );
};

const RoomEntryCard = ({ index }: { index: number }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <View className="mb-6 rounded-2xl border border-[#F1F5F9] bg-white p-6 shadow-sm shadow-slate-50">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-[15px] font-bold text-[#475569]">Room {index}</Text>
        <View className="flex-row items-center gap-x-4">
          <View className="flex-row items-center">
            <ShadcnSwitch value={isActive} onValueChange={setIsActive} />
            <Text className="ml-2 text-xs font-medium text-[#94A3B8]">Active</Text>
          </View>
          <TouchableOpacity p-1>
            <Trash2 size={18} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-5">
        <View className="h-14 rounded-xl border border-[#F1F5F9] bg-white px-5 py-4">
          <TextInput
            placeholder="Enter name or number here"
            placeholderTextColor="#CBD5E1"
            className="flex-1 text-[15px] font-medium text-[#334155]"
          />
        </View>
      </View>

      <View>
        <Text className="mb-3 text-[13px] font-bold text-[#64748B]">Person allowed (Maximum)</Text>
        <View className="h-14 rounded-xl border border-[#F1F5F9] bg-white px-5 py-4">
          <TextInput
            placeholder="Enter name or number here"
            placeholderTextColor="#CBD5E1"
            className="flex-1 text-[15px] font-medium text-[#334155]"
          />
        </View>
      </View>
    </View>
  );
};

export default function TotalRooms() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#848F4B]">Total Rooms</Text>
          <TouchableOpacity className="flex-row items-center rounded-lg border border-[#F1F5F9] bg-white px-3 py-1.5 active:bg-gray-50">
            <Plus size={14} color="#848F4B" strokeWidth={3} />
            <Text className="ml-1 text-[11px] font-bold text-[#848F4B]">Add Room</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View className="my-6">
          <View className="h-14 flex-row items-center rounded-3xl border border-[#F1F5F9] bg-white px-5">
            <Search size={22} color="#CBD5E1" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#CBD5E1"
              className="ml-3 flex-1 text-base text-[#334155]"
            />
          </View>
        </View>

        <Text className="mb-6 text-lg font-bold text-[#475569]">Total Rooms by Category</Text>

        <View>
          <RoomEntryCard index={1} />
          <RoomEntryCard index={2} />
        </View>

        {/* Action Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-8 h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20 active:opacity-90">
          <Text className="text-lg font-bold text-white">Update</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
