import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BulletPoint = ({ text }: { text: string }) => (
  <View className="mb-4 flex-row">
    <Text className="mr-2 text-lg text-[#64748B]">•</Text>
    <Text className="flex-1 text-[15px] leading-6 text-[#64748B]">{text}</Text>
  </View>
);

export default function Agreement() {
  const router = useRouter();

  const requirements = [
    'Without a motorbike bike we may not work together.',
    'Identity document (CNI or passport).',
    'Proof of residence.',
    "Driver's license (if the delivery person uses a vehicle)",
    'Professional bank account (RIB) for receiving payments',
    'SIRET number (mandatory for any declared activity).',
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center border-b border-transparent">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <View className="mr-6 flex-1 items-center">
            <Text className="text-xl font-bold text-[#848F4B]">Privacy & agreement</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View className="mt-8 flex-row gap-x-3">
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
        </View>
      </View>

      <ScrollView
        className="flex-1 px-8 pt-10"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}>
        <Text className="mb-10 text-[15px] leading-6 text-[#64748B]">
          The Food Room Restaurant offers whimsical fusion comfort food, like Cloud Burgers and
          Electric Soup. With a rotating mystery menu, flying nachos, and glowing decor, it's a fun,
          interactive dining experience where food surprises and delights in every bite.
        </Text>

        {requirements.map((req, index) => (
          <BulletPoint key={index} text={req} />
        ))}

        {/* Submit Button */}
        <TouchableOpacity
          onPress={() => router.push('/hotel/success')}
          className="mt-16 h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20">
          <Text className="text-lg font-bold text-white">Confirm and Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
