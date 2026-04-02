import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import {
  Search,
  MapPin,
  MoreVertical,
  TrendingUp,
  X,
  ArrowLeft,
  Calendar,
  Users,
  ChevronDown,
  ChevronRight,
  Plus,
  Bus,
  ArrowRight,
  MapPinOff,
} from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import RestaurantOrders from '../../restaurant/orders';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ─── Hotel Booking Card ──────────────────────────────────────────
const BookingCard = ({
  name,
  status,
  statusColor,
  guests,
  room,
  date,
  onPress,
}: {
  name: string;
  status: string;
  statusColor: string;
  guests: number;
  room: string;
  date: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white px-5 py-5 shadow-sm shadow-slate-100"
    onPress={onPress}>
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
      <TouchableOpacity className="p-1">
        <MoreVertical size={20} color="#94A3B8" />
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
  </TouchableOpacity>
);

// ─── Hotel Booking List ──────────────────────────────────────────
const HotelBookings = () => {
  const router = useRouter();
  const [isDataEmpty, setIsDataEmpty] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showReachModal, setShowReachModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const bookings = [
    {
      name: 'Sarah Jonson',
      status: 'Upcoming',
      statusColor: '#22C55E',
      guests: 2,
      room: 'Regular Room (301)',
      date: '12 Feb-18 Feb',
    },
    {
      name: 'Devon Lane',
      status: 'Cancellation requested',
      statusColor: '#EF4444',
      guests: 2,
      room: 'Regular Room (301)',
      date: '10 Feb',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <View className="items-center py-5">
        <Text className="text-xl font-bold text-[#848F4B]">All Bookings</Text>
      </View>

      <View className="mb-6 px-6">
        <View className="flex-row items-center rounded-3xl bg-white px-5 shadow-sm shadow-slate-100">
          <Search size={22} color="#CBD5E1" />
          <TextInput
            placeholder="Search by name"
            placeholderTextColor="#CBD5E1"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="ml-3 h-14 flex-1 text-base text-[#334155]"
          />
        </View>
      </View>

      <View className="mb-6 flex-row items-center justify-between px-6">
        <Text className="text-lg font-bold text-[#475569]">Booking List</Text>
        <TouchableOpacity
          onPress={() => router.push('/hotel/create-booking')}
          className="flex-row items-center rounded-lg bg-[#FF8C00] px-4 py-2 shadow-lg shadow-orange-500/20">
          <Plus size={16} color="white" strokeWidth={3} />
          <Text className="ml-1 text-sm font-bold text-white">Create Booking</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 pb-32">
          {bookings.map((booking, index) => (
            <BookingCard key={index} {...booking} onPress={() => {}} />
          ))}
        </View>
      </ScrollView>

      {/* Review Request Modal */}
      <Modal visible={showReviewModal} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black/40 px-6">
          <View className="w-full rounded-3xl bg-white p-8">
            <View className="mb-6 flex-row items-center justify-between">
              <TouchableOpacity onPress={() => setShowReviewModal(false)} className="p-1">
                <ArrowLeft size={20} color="#94A3B8" />
              </TouchableOpacity>
              <Text className="text-lg font-bold text-[#1E293B]">Review Request</Text>
              <TouchableOpacity onPress={() => setShowReviewModal(false)} className="p-1">
                <X size={20} color="#CBD5E1" />
              </TouchableOpacity>
            </View>
            <Text className="mb-8 text-sm leading-6 text-[#94A3B8]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley
            </Text>
            <View className="flex-row gap-x-4">
              <TouchableOpacity
                onPress={() => setShowReviewModal(false)}
                className="flex-1 items-center justify-center rounded-xl border border-[#FF8C00] py-3">
                <Text className="text-sm font-bold text-[#FF8C00]">Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowReviewModal(false)}
                className="flex-1 items-center justify-center rounded-xl bg-[#FF8C00] py-3">
                <Text className="text-sm font-bold text-white">Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Cancellation Modal */}
      <Modal visible={showCancelModal} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black/40 px-6">
          <View className="w-full rounded-3xl bg-white p-8">
            <View className="mb-6 flex-row items-center justify-between">
              <TouchableOpacity onPress={() => setShowCancelModal(false)} className="p-1">
                <ArrowLeft size={20} color="#94A3B8" />
              </TouchableOpacity>
              <Text className="text-lg font-bold text-[#1E293B]">Cancellation</Text>
              <TouchableOpacity onPress={() => setShowCancelModal(false)} className="p-1">
                <X size={20} color="#CBD5E1" />
              </TouchableOpacity>
            </View>
            <Text className="mb-2 text-sm font-bold text-[#1E293B]">Reason</Text>
            <TextInput
              placeholder="Enter here"
              placeholderTextColor="#CBD5E1"
              multiline
              className="mb-1 h-32 rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] p-4 text-sm text-[#334155]"
              textAlignVertical="top"
            />
            <Text className="mb-8 text-[11px] text-[#94A3B8]">Tell reason in details.</Text>
            <TouchableOpacity
              onPress={() => setShowCancelModal(false)}
              className="h-14 items-center justify-center rounded-2xl bg-[#FF8C00] shadow-lg shadow-orange-500/20">
              <Text className="text-[17px] font-bold text-white">Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// ─── Bus Management ─────────────────────────────────────────────
const BusCard = ({ plate, seats, active, image }: any) => (
  <View className="mb-4 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm shadow-slate-100">
    <View className="h-20 w-24 overflow-hidden rounded-xl bg-gray-100">
      <Image source={{ uri: image }} className="h-full w-full" />
    </View>
    <View className="ml-4 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-base font-bold text-[#334155]">{plate}</Text>
        <TouchableOpacity>
          <MoreVertical size={20} color="#94A3B8" />
        </TouchableOpacity>
      </View>
      <Text className="mt-1 text-sm text-[#94A3B8]">{seats} Seats</Text>
      <View className="mt-2 flex-row items-center justify-between">
        <View className="rounded-full bg-[#F0FDF4] px-3 py-1">
          <Text className="text-[10px] font-bold uppercase text-[#22C55E]">
            {active ? 'Active' : 'Inactive'}
          </Text>
        </View>
        <View
          className={`h-5 w-10 justify-center rounded-full px-1 ${active ? 'bg-[#FF8C00]' : 'bg-[#E2E8F0]'}`}>
          <View className={`h-3 w-3 rounded-full bg-white ${active ? 'self-end' : 'self-start'}`} />
        </View>
      </View>
    </View>
  </View>
);

const TripCard = ({ from, to, seats, date }: any) => (
  <View className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm shadow-slate-100">
    <View className="mb-4 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <MapPin size={16} color="#64748B" />
        <Text className="ml-2 text-[15px] font-bold text-[#334155]">{from}</Text>
        <Text className="mx-2 text-[#94A3B8]">→</Text>
        <Text className="text-[15px] font-bold text-[#334155]">{to}</Text>
      </View>
      <TouchableOpacity>
        <MoreVertical size={20} color="#94A3B8" />
      </TouchableOpacity>
    </View>
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center">
        <Bus size={16} color="#94A3B8" />
        <Text className="ml-2 text-xs font-medium text-[#64748B]">{seats} (Available)</Text>
      </View>
      <View className="flex-row items-center">
        <Calendar size={16} color="#94A3B8" />
        <Text className="ml-2 text-xs font-medium text-[#64748B]">{date}</Text>
      </View>
    </View>
  </View>
);

const BusManagement = () => {
  const [activeTab, setActiveTab] = useState<'Buses' | 'Trip' | 'Bookings'>('Buses');
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const buses = [
    {
      plate: 'MH-02-AB-1234',
      seats: 24,
      active: true,
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=200&auto=format&fit=crop',
    },
    {
      plate: 'MH-02-AB-1234',
      seats: 24,
      active: true,
      image:
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=200&auto=format&fit=crop',
    },
    {
      plate: 'MH-02-AB-1234',
      seats: 24,
      active: false,
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=200&auto=format&fit=crop',
    },
  ];

  const trips = [
    { from: 'Dhaka', to: 'Chittagong', seats: '04', date: '2026-02-15' },
    { from: 'Dhaka', to: 'Chittagong', seats: '06', date: '2026-02-15' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-[#848F4B]">{activeTab}</Text>
        <TouchableOpacity className="flex-row items-center rounded-lg border border-[#F1F5F9] bg-white px-3 py-1.5 shadow-sm">
          <Text className="text-xs font-bold text-[#64748B]">Add New</Text>
          <Plus size={14} color="#64748B" className="ml-1" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="mb-6 px-6">
        <View className="flex-row items-center rounded-full border border-[#F1F5F9] bg-white px-5 shadow-sm shadow-slate-100">
          <Search size={20} color="#CBD5E1" />
          <TextInput
            placeholder={
              activeTab === 'Buses' ? 'Search buses' : 'Search by route, date, bus number'
            }
            placeholderTextColor="#CBD5E1"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="ml-3 h-12 flex-1 text-base text-[#334155]"
          />
        </View>
      </View>

      {/* Sub Tabs */}
      <View className="mb-6 flex-row border-b border-[#F1F5F9] px-6">
        {(['Buses', 'Trip', 'Bookings'] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`mr-10 pb-3 ${activeTab === tab ? 'border-b-2 border-[#FF8C00]' : ''}`}>
            <Text
              className={`text-sm font-bold ${activeTab === tab ? 'text-[#FF8C00]' : 'text-[#94A3B8]'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {activeTab === 'Buses' &&
          (isEmpty ? (
            <View className="items-center px-10 pt-10">
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg',
                }}
                className="h-64 w-64"
                resizeMode="contain"
              />
              <Text className="mt-6 text-center text-xl font-bold text-[#848F4B]">
                No Bus lists Yet
              </Text>
              <Text className="mt-4 text-center text-sm leading-6 text-[#94A3B8]">
                You haven't added any bus in the list yet. Add bus so passengers can view and book
                available seats.
              </Text>
              <TouchableOpacity
                onPress={() => setIsEmpty(false)}
                className="mt-8 h-14 w-full flex-row items-center justify-center rounded-2xl bg-[#F8F5F2] active:bg-orange-50">
                <Text className="mr-2 text-[17px] font-bold text-[#334155]">Add Buses</Text>
                <ArrowRight size={20} color="#334155" />
              </TouchableOpacity>
            </View>
          ) : (
            <View className="px-6 pb-32">
              {buses.map((bus, idx) => (
                <BusCard key={idx} {...bus} />
              ))}
              <TouchableOpacity onPress={() => setIsEmpty(true)} className="mt-4 items-center">
                <Text className="text-xs text-slate-300">Show empty state (demo)</Text>
              </TouchableOpacity>
            </View>
          ))}
        {activeTab === 'Trip' && (
          <View className="px-6 pb-32">
            {trips.map((trip, idx) => (
              <TripCard key={idx} {...trip} />
            ))}
          </View>
        )}
        {activeTab === 'Bookings' && (
          <View className="items-center px-10 pt-20">
            <MapPinOff size={48} color="#CBD5E1" />
            <Text className="mt-4 text-lg font-bold text-[#94A3B8]">No Bookings Yet</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

// ─── Main Order Management ─────────────────────────────────────
export default function OrderManagement() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const savedRole = await AsyncStorage.getItem('userRole');
      setRole(savedRole);
    };
    getRole();
  }, []);

  const [activeTab, setActiveTab] = useState<'Active' | 'Delivered' | 'Cancellation'>('Active');
  const [subTab, setSubTab] = useState<'Ready to handoff' | 'Returns and Cancells'>(
    'Ready to handoff'
  );
  const [searchQuery, setSearchQuery] = useState('');

  if (role === 'hotel') return <HotelBookings />;
  if (role === 'restaurant') return <RestaurantOrders />;
  if (role === 'bus') return <BusManagement />;

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="flex-1">
        <View className="items-center py-5">
          <Text className="text-2xl font-bold text-[#848F4B]">Order Management</Text>
        </View>
        <View className="flex-row justify-center space-x-3 px-6 pb-6">
          {(['Active', 'Delivered', 'Cancellation'] as const).map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.7}
              className={`rounded-full px-7 py-2 ${activeTab === tab ? 'bg-[#FF8C00]' : 'border border-[#F1F5F9] bg-white'}`}>
              <Text
                className={`text-sm font-semibold ${activeTab === tab ? 'text-white' : 'text-[#94A3B8]'}`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mb-6 px-6">
          <View className="flex-row items-center rounded-3xl border border-[#F1F5F9] bg-white px-5">
            <Search size={22} color="#CBD5E1" />
            <TextInput
              placeholder="Search Current order"
              placeholderTextColor="#CBD5E1"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="ml-3 h-14 flex-1 text-base text-[#334155]"
            />
          </View>
        </View>

        <View className="flex-row border-b border-[#F1F5F9] px-6 py-0">
          <TouchableOpacity
            onPress={() => setSubTab('Ready to handoff')}
            className={`pb-2 ${subTab === 'Ready to handoff' ? 'border-b-2 border-[#FF8C00]' : ''}`}>
            <Text
              className={`text-sm font-bold ${subTab === 'Ready to handoff' ? 'text-[#FF8C00]' : 'text-[#475569]'}`}>
              Ready to handoff
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSubTab('Returns and Cancells')}
            className={`ml-8 pb-2 ${subTab === 'Returns and Cancells' ? 'border-b-2 border-[#FF8C00]' : ''}`}>
            <Text
              className={`text-sm font-bold ${subTab === 'Returns and Cancells' ? 'text-[#FF8C00]' : 'text-[#475569]'}`}>
              Returns and Cancells
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          className="flex-1 pt-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}>
          <View className="px-6">
            <Text className="text-base text-[#94A3B8]">Select a role to see orders.</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
