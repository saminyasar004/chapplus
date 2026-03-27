import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AgreementScreen() {
  const router = useRouter();

  const bulletPoints = [
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
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#94A3B8" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#848F4B]">Privacy & agreement</Text>
          <View className="w-8" />
        </View>

        {/* Progress Bar */}
        <View className="mt-8 flex-row gap-x-3 px-2">
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
          <View className="h-1.5 flex-1 rounded-full bg-[#FF8C00]" />
        </View>
      </View>

      <ScrollView className="flex-1 px-6 pt-12" showsVerticalScrollIndicator={false}>
        <Text className="mb-10 text-base leading-6 text-[#64748B]">
          The Food Room Restaurant offers whimsical fusion comfort food, like Cloud Burgers and
          Electric Soup. With a rotating mystery menu, flying nachos, and glowing decor, it's a fun,
          interactive dining experience where food surprises and delights in every bite.
        </Text>

        <View className="space-y-6">
          {bulletPoints.map((point, index) => (
            <View key={index} className="mb-6 flex-row">
              <Text className="mr-3 text-xl text-[#64748B]">•</Text>
              <Text className="flex-1 text-base font-medium leading-6 text-[#475569]">{point}</Text>
            </View>
          ))}
        </View>

        {/* Spacer for fixed button */}
        <View className="h-40" />
      </ScrollView>

      {/* Footer Button */}
      <View className="px-6 py-10">
        <TouchableOpacity
          onPress={() => router.push('/restaurant/success')}
          className="h-16 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-200">
          <Text className="text-xl font-bold text-white">Confirm and Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
