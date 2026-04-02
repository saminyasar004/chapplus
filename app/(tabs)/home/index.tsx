import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeDeliveryItem from 'components/home-delivery-item';
import HomeOrderItem from 'components/home-order-item';
import HomeProfileCard from 'components/home-profile-card';
import Layout from 'components/layout';
import MerchantHeader from 'components/merchant-header';
import { useRouter } from 'expo-router';
import {
  ChevronRight,
  Clock,
  DollarSign,
  MoreHorizontal,
  Star,
  UtensilsCrossed,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Bus,
  Ticket,
  Bell,
  TrendingUp,
} from 'lucide-react-native';
import React, { useEffect, useState, useRef } from 'react';
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SectionHeader = ({ title, showViewAll = true }: { title: string; showViewAll?: boolean }) => (
  <View className="mb-4 flex-row items-center justify-between px-6">
    <Text className="text-lg font-bold text-[#334155]">{title}</Text>
    {showViewAll && (
      <TouchableOpacity className="flex-row items-center">
        <Text className="text-sm font-medium text-[#FF8C00]">View All</Text>
        <ChevronRight size={16} color="#FF8C00" />
      </TouchableOpacity>
    )}
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
  const anchorRef = useRef<View>(null);

  const handleStatusSelect = (label: string, color: string) => {
    setCurrentStatus(label);
    setCurrentColor(color);
    setShowDropdown(false);
  };

  return (
    <View className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white px-5 py-4 shadow-sm shadow-slate-100">
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
          ref={anchorRef}
          onPress={() => {
            anchorRef.current?.measure((_x, _y, _w, _h, px, py) => {
              setMenuPos({ x: px, y: py });
              setShowDropdown(true);
            });
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

      <Modal visible={showDropdown} transparent animationType="fade">
        <Pressable className="flex-1 bg-black/30" onPress={() => setShowDropdown(false)}>
          <View
            style={{
              position: 'absolute',
              top: menuPos.y - 10,
              right: 24,
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                width: 0,
                height: 0,
                borderLeftWidth: 10,
                borderRightWidth: 10,
                borderBottomWidth: 10,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#FF8C00',
                marginRight: 12,
              }}
            />
            <View className="w-40 overflow-hidden rounded-xl border-2 border-[#FF8C00] bg-white">
              {STATUS_OPTIONS.map((opt, i) => (
                <TouchableOpacity
                  key={opt.label}
                  onPress={() => handleStatusSelect(opt.label, opt.color)}
                  className={`px-4 py-[14px] ${i < STATUS_OPTIONS.length - 1 ? 'border-b border-[#F1F5F9]' : ''} ${currentStatus === opt.label ? 'bg-[#FFF7ED]' : ''}`}>
                  <Text
                    className={`text-[15px] font-medium ${currentStatus === opt.label ? 'font-bold text-[#FF8C00]' : 'text-[#94A3B8]'}`}>
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

// ─── Restaurant Home Page ────────────────────────────────────────
const RestaurantHome = () => (
  <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View className="px-6 pb-6 pt-4">
        <Text className="text-sm text-[#94A3B8]">Good Morning</Text>
        <Text className="text-xl font-bold text-[#334155]">The Food Room Restaurant</Text>
      </View>

      {/* Stats Row */}
      <View className="mb-4 flex-row gap-x-4 px-6">
        <View className="flex-1 rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
          <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-[#FFF7ED]">
            <UtensilsCrossed size={20} color="#FF8C00" />
          </View>
          <Text className="text-2xl font-bold text-[#FF8C00]">12</Text>
          <Text className="text-sm text-[#94A3B8]">Today's Orders</Text>
        </View>
        <View className="flex-1 rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
          <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-[#F0FDF4]">
            <UtensilsCrossed size={20} color="#6D7437" />
          </View>
          <Text className="text-2xl font-bold text-[#334155]">14</Text>
          <Text className="text-sm text-[#94A3B8]">Active Orders</Text>
        </View>
      </View>

      {/* Revenue Card */}
      <View className="mx-6 mb-6 rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
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

      <SectionHeader title="Recent Orders" />
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
      </View>
    </ScrollView>
  </SafeAreaView>
);

// ─── Hotel Home Page ──────────────────────────────────────────
const BookingCard = ({ name, status, statusColor, guests, room, date }: any) => (
  <View className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white px-5 py-4 shadow-sm shadow-slate-100">
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center">
        <Text className="text-lg font-bold text-[#1E293B]">{name}</Text>
        <View
          className="ml-3 rounded-full px-3 py-1"
          style={{ backgroundColor: statusColor + '15' }}>
          <Text className="text-[10px] font-bold" style={{ color: statusColor }}>
            {status}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <MoreHorizontal size={20} color="#94A3B8" />
      </TouchableOpacity>
    </View>
    <View className="mt-4 flex-row items-start">
      <View className="mr-3 mt-1">
        <Users size={16} color="#94A3B8" />
      </View>
      <View className="flex-1">
        <Text className="text-sm font-medium text-[#64748B]">{guests} Guests</Text>
        <View className="mt-1 flex-row items-center">
          <MapPin size={14} color="#94A3B8" />
          <Text className="ml-1 text-xs text-[#94A3B8]">{room}</Text>
        </View>
      </View>
      <View className="items-end">
        <View className="flex-row items-center">
          <Text className="text-xs font-medium text-[#64748B]">{date}</Text>
          <Calendar size={14} color="#94A3B8" className="ml-2" />
        </View>
      </View>
    </View>
  </View>
);

const HotelHome = () => {
  const router = useRouter();
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-between px-6 pb-6 pt-4">
          <View>
            <Text className="text-sm text-[#94A3B8]">Good Morning</Text>
            <Text className="text-xl font-bold text-[#334155]">The Grand Meridian</Text>
          </View>
          {isProfileComplete && (
            <View className="flex-row items-center">
              <Star size={18} color="#FBBF24" fill="#FBBF24" />
              <Text className="ml-1 text-sm font-bold text-[#334155]">4.2</Text>
            </View>
          )}
        </View>
        <View className="mb-4 flex-row flex-wrap gap-4 px-6">
          {[
            {
              label: 'Booked',
              val: isProfileComplete ? '12' : '0',
              icon: Calendar,
              bg: '#FFF7ED',
              color: '#FF8C00',
            },
            {
              label: 'Current Guests',
              val: isProfileComplete ? '14' : '0',
              icon: Users,
              bg: '#F0FDF4',
              color: '#848F4B',
            },
            {
              label: 'Available Room',
              val: isProfileComplete ? '05' : '0',
              icon: CheckCircle2,
              bg: '#DCFCE7',
              color: '#22C55E',
            },
            {
              label: 'Revenue Today',
              val: isProfileComplete ? '$2,450' : '0',
              icon: DollarSign,
              bg: '#EFF6FF',
              color: '#006FFF',
            },
          ].map((stat, i) => (
            <View
              key={i}
              className="h-40 flex-[1_0_46%] justify-between rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
              <View
                className="h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: stat.bg }}>
                <stat.icon size={20} color={stat.color} />
              </View>
              <View>
                <Text className="text-2xl font-bold" style={{ color: stat.color }}>
                  {stat.val}
                </Text>
                <Text className="text-xs font-medium text-[#94A3B8]">{stat.label}</Text>
              </View>
            </View>
          ))}
        </View>
        {!isProfileComplete ? (
          <View className="mt-6 px-6">
            <Text className="text-lg font-bold text-[#848F4B]">Complete Your Hotel Profile</Text>
            <Text className="mt-4 text-[13px] leading-5 text-[#94A3B8]">
              Welcome! To start receiving bookings, please complete your hotel profile. Add your
              hotel details, rooms, photos, and policies so guests can view and book your hotel.
            </Text>
            <View className="mt-10 items-center">
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-vector/hotel-staff-concept-illustration_114360-14309.jpg',
                }}
                className="h-64 w-64"
                resizeMode="contain"
              />
              <TouchableOpacity
                onPress={() => router.push('/hotel/create-profile')}
                className="mt-8 flex-row items-center rounded-2xl bg-[#F4F4F5] px-10 py-4 active:bg-gray-200">
                <Text className="text-[17px] font-bold text-[#334155]">Create Profile</Text>
                <ArrowRight size={20} color="#334155" className="ml-2" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="mt-6 pb-32">
            <SectionHeader title="Recent Booking" />
            <View className="px-6">
              <BookingCard
                name="Sarah Jonson"
                status="Upcoming"
                statusColor="#22C55E"
                guests={2}
                room="Regular Room (301)"
                date="12 Feb-18 Feb"
              />
              <BookingCard
                name="Devon Lane"
                status="Check Out"
                statusColor="#CBD5E1"
                guests={2}
                room="Regular Room (301)"
                date="10 Feb"
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

// ─── Bus Home Page ──────────────────────────────────────────
const BusHome = () => {
  const router = useRouter();
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {!isProfileComplete ? (
          <View className="px-6 pb-6 pt-4">
            <Text className="text-sm text-[#94A3B8]">Good Morning</Text>
            <Text className="text-xl font-bold text-[#334155]">The Grand Meridian</Text>
          </View>
        ) : (
          <View className="flex-row items-center justify-between px-6 pb-6 pt-4">
            <View className="flex-row items-center">
              <View className="mr-3 h-10 w-10 items-center justify-center rounded-xl bg-[#FFF7ED]">
                <Image
                  source={{ uri: 'https://chapplus.com/logo.png' }}
                  className="h-8 w-8"
                  style={{ resizeMode: 'contain' }}
                />
              </View>
              <Text className="text-2xl font-bold text-[#848F4B]">
                Chap<Text className="text-[#FF8C00]">Plus</Text>
              </Text>
            </View>
            <View className="flex-row items-center gap-x-4">
              <TouchableOpacity className="relative p-2">
                <Bell size={24} color="#334155" />
                <View className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
              </TouchableOpacity>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
                }}
                className="h-10 w-10 rounded-full"
              />
            </View>
          </View>
        )}

        <View className="mb-4 flex-row flex-wrap gap-4 px-6">
          <View className="h-32 flex-[1_0_46%] justify-between rounded-3xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#FFF7ED]">
              <Bus size={20} color="#FF8C00" />
            </View>
            <View>
              <Text className="text-2xl font-bold text-[#6D7437]">
                {isProfileComplete ? '20' : '0'}
              </Text>
              <Text className="text-xs font-medium text-[#94A3B8]">Total Buses</Text>
            </View>
          </View>
          <View className="h-32 flex-[1_0_46%] justify-between rounded-3xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#F0FDF4]">
              <Ticket size={20} color="#6D7437" />
            </View>
            <View>
              <Text className="text-2xl font-bold text-[#6D7437]">
                {isProfileComplete ? '76' : '0'}
              </Text>
              <Text className="text-xs font-medium text-[#94A3B8]">Published Trip</Text>
            </View>
          </View>
          <View className="w-full rounded-3xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
            <View className="mb-3 flex-row items-center justify-between">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF]">
                <DollarSign size={20} color="#006FFF" />
              </View>
              <View className="flex-row items-center">
                <Star size={16} color="#FBBF24" fill="#FBBF24" />
                <Text className="ml-1 text-sm font-bold text-[#334155]">4.2</Text>
              </View>
            </View>
            <Text className="text-2xl font-bold text-[#006FFF]">
              {isProfileComplete ? '$12,450' : '$0'}
            </Text>
            <View className="mt-1 flex-row items-center justify-between">
              <Text className="text-sm font-medium text-[#94A3B8]">Total</Text>
              <View className="flex-row items-center">
                <TrendingUp size={14} color="#94A3B8" />
                <Text className="ml-1 text-xs text-[#94A3B8]">
                  +{isProfileComplete ? '15' : '0'}% from yesterday
                </Text>
              </View>
            </View>
          </View>
        </View>

        {!isProfileComplete ? (
          <View className="mt-6 px-6">
            <Text className="text-lg font-bold text-[#848F4B]">Complete Your Company Profile</Text>
            <Text className="mt-4 text-[13px] leading-5 text-[#94A3B8]">
              Welcome! To start receiving bookings, please complete your company profile. Add your
              bus details, seats, photos, and policies so passengers can view and book your bus.
            </Text>
            <View className="mt-10 items-center">
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-vector/hotel-staff-concept-illustration_114360-14309.jpg',
                }}
                className="h-64 w-64"
                resizeMode="contain"
              />
              <TouchableOpacity
                onPress={() => router.push('/bus/create-profile')}
                className="mt-8 flex-row items-center rounded-2xl bg-[#F4F4F5] px-10 py-4 active:bg-gray-200">
                <Text className="text-[17px] font-bold text-[#334155]">Create Profile</Text>
                <ArrowRight size={20} color="#334155" className="ml-2" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="mt-8 pb-32">
            <View className="mb-4 flex-row items-center justify-between px-6">
              <Text className="text-lg font-bold text-[#334155]">Recent Booking</Text>
              <TouchableOpacity className="flex-row items-center">
                <Text className="text-sm font-medium text-[#94A3B8]">View All</Text>
                <ChevronRight size={16} color="#94A3B8" />
              </TouchableOpacity>
            </View>
            <View className="gap-y-4 px-6">
              {[1236, 1235, 1234].map((id) => (
                <View
                  key={id}
                  className="flex-row items-start rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-50">
                  <View className="mr-3 mt-2 h-2 w-2 rounded-full bg-[#94A3B8]" />
                  <View>
                    <Text className="text-[15px] font-medium text-[#64748B]">
                      New booking #{id} for NY-Boston route
                    </Text>
                    <Text className="mt-1 text-xs text-[#94A3B8]">5 min ago</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

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

  if (role === 'hotel') return <HotelHome />;
  if (role === 'restaurant') return <RestaurantHome />;
  if (role === 'bus') return <BusHome />;

  if (role === 'ecommerce') {
    return (
      <View className="flex-1 bg-white">
        <MerchantHeader />
        <Layout>
          <HomeProfileCard />
          <View className="mb-0 px-6">
            <TouchableOpacity
              onPress={() => router.push('/ecommerce/product-management')}
              className="flex-row items-center justify-between rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
              <Text className="text-xl font-bold text-[#475569]">Product management</Text>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          <View className="mb-8 mt-4">
            <SectionHeader title="New Orders" showViewAll={false} />
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
            <SectionHeader title="Upcoming Delivery person" showViewAll={false} />
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
