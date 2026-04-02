import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronDown, ChevronRight, Clock } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FormField = ({
  label,
  placeholder,
  icon: Icon,
  chevron = false,
}: {
  label: string;
  placeholder: string;
  icon?: any;
  chevron?: boolean;
}) => (
  <View className="mb-5">
    <Text className="mb-2 text-[13px] font-bold text-[#64748B]">{label}</Text>
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-14 flex-row items-center rounded-xl border border-[#F1F5F9] bg-white px-4 py-3">
      {Icon && <Icon size={18} color="#94A3B8" className="mr-3" />}
      <Text className="flex-1 text-[15px] font-medium text-[#CBD5E1]">{placeholder}</Text>
      {chevron && <ChevronDown size={20} color="#CBD5E1" />}
      {label === 'Select type of room' && <ChevronRight size={20} color="#FF8C00" />}
    </TouchableOpacity>
  </View>
);

const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <View className="mb-5">
    <Text className="mb-2 text-[13px] font-bold text-[#64748B]">{label}</Text>
    <View className="h-14 rounded-xl border border-[#F1F5F9] bg-white px-4 py-3">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#CBD5E1"
        className="flex-1 text-[15px] font-medium text-[#334155]"
      />
    </View>
  </View>
);

export default function CreateBooking() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#848F4B]">Edit Booking</Text>
          <View className="w-10" />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <View className="mt-6">
          <FormField label="Full name" placeholder="Choose one" />
          <InputField label="Email Address" placeholder="Enter here" />
          <InputField label="Phone Number" placeholder="Enter here" />

          <View className="flex-row gap-x-4">
            <View className="flex-1">
              <FormField label="Check-in date" placeholder="Select time" icon={Clock} />
            </View>
          </View>

          <View className="flex-row gap-x-4">
            <View className="flex-1">
              <FormField label="Check- out date" placeholder="Select time" icon={Clock} />
            </View>
          </View>

          <InputField label="Number of Guests" placeholder="Enter here" />
          <FormField label="Select type of room" placeholder="Select Category" />
          <InputField label="Number of rooms" placeholder="Enter here" />
        </View>

        {/* Action Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-10 h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20">
          <Text className="text-lg font-bold text-white">Create Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
