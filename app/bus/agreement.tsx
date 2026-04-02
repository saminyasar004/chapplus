import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BusAgreement() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#848F4B]">Privacy & agreement</Text>
          <View className="w-10" />
        </View>
        {/* Progress Indicator */}
        <View className="mt-4 flex-row gap-x-2 py-4">
          {[1, 2, 3, 4].map((step) => (
            <View
              key={step}
              className={`h-1.5 flex-1 rounded-full ${step <= 4 ? 'bg-[#FF8C00]' : 'bg-[#CBD5E1]'}`}
            />
          ))}
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-8">
          <Text className="mb-8 text-sm leading-6 text-[#64748B]">
            The Bus Service offers a reliable and efficient transport experience. We prioritize
            safety, timing, and customer satisfaction. By joining our platform, you agree to our
            terms and conditions and provide the necessary documentation for verification.
          </Text>
          <View className="gap-y-4">
            {[
              'Without a motorbike bike we may not work together.',
              'Identity document (CNI or passport).',
              'Proof of residence.',
              "Driver's license (if the delivery person uses a vehicle)",
              'Professional bank account (RIB) for receiving payments',
              'SIRET number (mandatory for any declared activity).',
            ].map((item, idx) => (
              <View key={idx} className="flex-row">
                <Text className="mr-2 text-[#64748B]">•</Text>
                <Text className="flex-1 text-sm font-medium text-[#64748B]">{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Action Button */}
      <View className="absolute bottom-10 left-0 right-0 px-6">
        <TouchableOpacity
          onPress={() => router.push('/bus/success')}
          className="h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20 active:opacity-90">
          <Text className="text-lg font-bold text-white">Confirm and Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
