import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeDeliveryItem from 'components/home-delivery-item';
import HomeOrderItem from 'components/home-order-item';
import HomeProfileCard from 'components/home-profile-card';
import Layout from 'components/layout';
import MerchantHeader from 'components/merchant-header';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const SectionHeader = ({ title }: { title: string }) => (
  <View className="mb-4 flex-row items-center justify-between px-6">
    <Text className="text-lg font-bold text-[#334155]">{title}</Text>
    <TouchableOpacity>
      <Text className="text-sm font-medium text-[#FF8C00]">See all</Text>
    </TouchableOpacity>
  </View>
);

export default function Index() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const savedRole = await AsyncStorage.getItem('userRole');
      setRole(savedRole);
    };
    getRole();
  }, []);

  if (role === 'ecommerce') {
    return (
      <View className="flex-1 bg-white">
        <MerchantHeader />
        <Layout>
          <HomeProfileCard />

          <View className="mb-0 px-6">
            <TouchableOpacity
              onPress={() => router.push('/product-management')}
              className="flex-row items-center justify-between rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm">
              <Text className="text-xl font-bold text-[#475569]">Product management</Text>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          <View className="mb-8">
            <SectionHeader title="New Orders" />
            <View className="px-6">
              <HomeOrderItem
                title="Checkered Shirt"
                size="Medium, Q: 4"
                color="Red, Size: L"
                itemSize="L"
                quantity={4}
                image="https://images.unsplash.com/photo-1583743814966-8936f5b721fa?q=80&w=200&auto=format&fit=crop"
              />
              <HomeOrderItem
                title="Checkered Shirt"
                size="Medium, Q: 4"
                color="Red, Size: L"
                itemSize="L"
                quantity={4}
                image="https://images.unsplash.com/photo-1583743814966-8936f5b721fa?q=80&w=200&auto=format&fit=crop"
              />
            </View>
          </View>

          <View className="mb-8">
            <SectionHeader title="Upcoming Delivery person" />
            <View className="px-6">
              <HomeDeliveryItem
                name="Török Melinda"
                otp="664564"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                distance="28km"
                time="10Min"
              />
              <HomeDeliveryItem
                name="Török Melinda"
                otp="664564"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                dateTime="23th September, 4:30PM"
              />
            </View>
          </View>
          {/* Spacer for bottom navigation */}
          <View className="h-32" />
        </Layout>
      </View>
    );
  }

  return (
    <Layout>
      <View className="p-6">
        <Text className="text-xl font-bold">Hello index.</Text>
      </View>
    </Layout>
  );
}
