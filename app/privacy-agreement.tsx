import Layout from 'components/layout';
import ShopHeader from 'components/shop-header';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function PrivacyAgreement() {
  const router = useRouter();

  return (
    <Layout>
      <View className="flex-1 bg-white">
        <ShopHeader title="Privacy & agreement" activeSteps={7} />

        <View className="px-6 py-6">
          <Text className="mb-8 text-sm leading-5 text-[#64748B]">
            The Food Room Restaurant offers whimsical fusion comfort food, like Cloud Burgers and
            Electric Soup. With a rotating mystery menu, flying nachos, and glowing decor, it's a
            fun, interactive dining experience where food surprises and delights in every bite.
          </Text>

          <View className="mb-20 gap-y-4">
            {[
              'Without a motorbike bike we may not work together.',
              'Identity document (CNI or passport).',
              'Proof of residence.',
              "Driver's license (if the delivery person uses a vehicle)",
              'Professional bank account (RIB) for receiving payments',
              'SIRET number (mandatory for any declared activity).',
            ].map((rule, index) => (
              <View key={index} className="flex-row">
                <Text className="mr-2 text-sm text-[#64748B]">•</Text>
                <Text className="flex-1 text-sm font-medium leading-5 text-[#64748B]">{rule}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => router.push('/signup-success')}
            className="h-14 items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
            <Text className="text-lg font-bold text-white">Confirm and Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
