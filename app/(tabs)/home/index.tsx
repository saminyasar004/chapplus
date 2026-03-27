import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeDeliveryItem from 'components/home-delivery-item';
import HomeOrderItem from 'components/home-order-item';
import HomeProfileCard from 'components/home-profile-card';
import Layout from 'components/layout';
import MerchantHeader from 'components/merchant-header';
import { router } from 'expo-router';
import {
  ChevronRight,
  Clock,
  DollarSign,
  MoreHorizontal,
  Star,
  UtensilsCrossed,
} from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SectionHeader = ({ title }: { title: string }) => (
  <View className="mb-4 flex-row items-center justify-between px-6">
    <Text className="text-lg font-bold text-[#334155]">{title}</Text>
    <TouchableOpacity>
      <Text className="text-sm font-medium text-[#FF8C00]">See all</Text>
    </TouchableOpacity>
  </View>
);

// ─── Status Dropdown Options ──────────────────────────────────────
const STATUS_OPTIONS = [
  { label: 'Preparing', color: '#FF8C00' },
  { label: 'Ready', color: '#22C55E' },
  { label: 'Completed', color: '#6D7437' },
];

// ─── Restaurant Order Card ────────────────────────────────────────
const RestaurantOrderCard = ({
  name,
  status: initialStatus,
  statusColor: initialColor,
  items,
  orderId,
  date,
}: {
  name: string;
  status: string;
  statusColor: string;
  items: number;
  orderId: string;
  date: string;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(initialStatus);
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

  const handleStatusSelect = (label: string, color: string) => {
    setCurrentStatus(label);
    setCurrentColor(color);
    setShowDropdown(false);
  };

  return (
    <View className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white px-5 py-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-base font-bold text-[#334155]">{name}</Text>
          <View
            className="ml-3 rounded-full px-3 py-1"
            style={{ backgroundColor: currentColor + '20' }}>
            <Text className="text-xs font-bold" style={{ color: currentColor }}>
              {currentStatus}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={(e) => {
            (e.target as any).measure?.(
              (_x: number, _y: number, _w: number, _h: number, px: number, py: number) => {
                setMenuPos({ x: px, y: py });
                setShowDropdown(true);
              }
            );
            setShowDropdown(true);
          }}>
          <MoreHorizontal size={20} color="#94A3B8" />
        </TouchableOpacity>
      </View>
      <View className="mt-3 flex-row items-center">
        <Text className="text-sm text-[#94A3B8]">⊗ Items: {items}</Text>
      </View>
      <View className="mt-1 flex-row items-center justify-between">
        <Text className="text-sm text-[#94A3B8]">☐ Order {orderId}</Text>
        <View className="flex-row items-center">
          <Text className="text-sm text-[#94A3B8]">{date}</Text>
          <Clock size={14} color="#94A3B8" style={{ marginLeft: 4 }} />
        </View>
      </View>

      {/* Status Dropdown Modal */}
      <Modal visible={showDropdown} transparent animationType="fade">
        <Pressable style={dropdownStyles.overlay} onPress={() => setShowDropdown(false)}>
          <View style={[dropdownStyles.container, { top: menuPos.y - 10, right: 24 }]}>
            {/* Triangle arrow */}
            <View style={dropdownStyles.arrow} />
            <View style={dropdownStyles.menu}>
              {STATUS_OPTIONS.map((opt, i) => (
                <TouchableOpacity
                  key={opt.label}
                  onPress={() => handleStatusSelect(opt.label, opt.color)}
                  style={[
                    dropdownStyles.option,
                    i < STATUS_OPTIONS.length - 1 && dropdownStyles.optionBorder,
                    currentStatus === opt.label && dropdownStyles.optionActive,
                  ]}>
                  <Text
                    style={[
                      dropdownStyles.optionText,
                      currentStatus === opt.label && { color: '#FF8C00', fontWeight: '700' },
                    ]}>
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const dropdownStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    position: 'absolute',
    alignItems: 'flex-end',
    paddingRight: 4,
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF8C00',
    alignSelf: 'flex-end',
    marginRight: 12,
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#FF8C00',
    width: 160,
    overflow: 'hidden',
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  optionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  optionActive: {
    backgroundColor: '#FFF7ED',
  },
  optionText: {
    fontSize: 15,
    color: '#94A3B8',
    fontWeight: '500',
  },
});

// ─── Restaurant Home Page ────────────────────────────────────────
const RestaurantHome = () => (
  <SafeAreaView className="flex-1 bg-white" edges={['top']}>
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View className="px-6 pb-6 pt-4">
        <Text className="text-sm text-[#94A3B8]">Good Morning</Text>
        <Text className="text-xl font-bold text-[#334155]">The Food Room Restaurant</Text>
      </View>

      {/* Stats Row */}
      <View className="mb-4 flex-row gap-x-4 px-6">
        <View className="flex-1 rounded-2xl border border-[#F1F5F9] bg-white p-5">
          <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-[#FFF7ED]">
            <UtensilsCrossed size={20} color="#FF8C00" />
          </View>
          <Text className="text-2xl font-bold text-[#FF8C00]">12</Text>
          <Text className="text-sm text-[#94A3B8]">Today's Orders</Text>
        </View>
        <View className="flex-1 rounded-2xl border border-[#F1F5F9] bg-white p-5">
          <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-[#F0FDF4]">
            <UtensilsCrossed size={20} color="#6D7437" />
          </View>
          <Text className="text-2xl font-bold text-[#334155]">14</Text>
          <Text className="text-sm text-[#94A3B8]">Active Orders</Text>
        </View>
      </View>

      {/* Revenue Card */}
      <View className="mx-6 mb-6 rounded-2xl border border-[#F1F5F9] bg-white p-5">
        <View className="mb-3 flex-row items-center justify-between">
          <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF]">
            <DollarSign size={20} color="#006FFF" />
          </View>
          <View className="flex-row items-center">
            <Star size={16} color="#FBBF24" fill="#FBBF24" />
            <Text className="ml-1 text-sm font-bold text-[#334155]">4.2</Text>
          </View>
        </View>
        <Text className="text-2xl font-bold text-[#006FFF]">$2,450</Text>
        <Text className="text-sm text-[#94A3B8]">Total Revenue</Text>
      </View>

      {/* Recent Orders */}
      <View className="mb-4 flex-row items-center justify-between px-6">
        <Text className="text-lg font-bold text-[#334155]">Recent Orders</Text>
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-sm font-medium text-[#FF8C00]">View All</Text>
          <ChevronRight size={16} color="#FF8C00" />
        </TouchableOpacity>
      </View>

      <View className="px-6 pb-32">
        <RestaurantOrderCard
          name="Sarah Jonson"
          status="Preparing"
          statusColor="#FF8C00"
          items={2}
          orderId="#2043"
          date="12 Feb · 8:30 PM"
        />
        <RestaurantOrderCard
          name="Devon Lane"
          status="Ready"
          statusColor="#22C55E"
          items={2}
          orderId="#2043"
          date="12 Feb · 8:30 PM"
        />
        <RestaurantOrderCard
          name="Sarah Jonson"
          status="Complete"
          statusColor="#6D7437"
          items={2}
          orderId="#2043"
          date="12 Feb · 8:30 PM"
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default function Index() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const savedRole = await AsyncStorage.getItem('userRole');
      setRole(savedRole);
    };
    getRole();
  }, []);

  if (role === 'restaurant') {
    return <RestaurantHome />;
  }

  if (role === 'ecommerce') {
    return (
      <View className="flex-1 bg-white">
        <MerchantHeader />
        <Layout>
          <HomeProfileCard />

          <View className="mb-0 px-6">
            <TouchableOpacity
              onPress={() => router.push('/ecommerce/product-management')}
              className="flex-row items-center justify-between rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm">
              <Text className="text-xl font-bold text-[#475569]">Product management</Text>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          <View className="mb-8 mt-4">
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
