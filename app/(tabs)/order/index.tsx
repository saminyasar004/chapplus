import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import {
  Plus,
  Bus,
  ArrowRight,
  MapPinOff,
  MoreHorizontal,
  Calendar,
  ArrowLeft,
  X,
  ChevronDown,
  Info,
  Clock,
  RotateCcw,
  Search,
  MapPin,
  MoreVertical,
} from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import RestaurantOrders from '../../restaurant/orders';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ─── Hotel Booking Card ──────────────────────────────────────────
const HotelBookingCard = ({
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
        <View />
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
  const [searchQuery, setSearchQuery] = useState('');

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

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
            <HotelBookingCard key={index} {...booking} onPress={() => {}} />
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
const BusCard = ({ plate, seats, active, image, onEdit, onDelete }: any) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <View className="mb-4 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm shadow-slate-100">
      <View className="h-20 w-24 overflow-hidden rounded-xl bg-gray-100">
        <Image source={{ uri: image }} className="h-full w-full" />
      </View>
      <View className="ml-4 flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-bold text-[#334155]">{plate}</Text>
          <View className="relative">
            <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
              <MoreHorizontal size={20} color="#94A3B8" />
            </TouchableOpacity>
            {showOptions && (
              <View
                className="absolute right-0 top-8 z-50 w-32 rounded-2xl border border-slate-50 bg-white p-2 shadow-xl shadow-slate-200"
                style={{ elevation: 5 }}>
                <View
                  className="absolute -top-2 right-2 h-4 w-4 rotate-45 border-l border-t border-slate-50 bg-white"
                  style={{ backgroundColor: 'white' }}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShowOptions(false);
                    onDelete();
                  }}
                  className="p-3">
                  <Text className="text-sm font-medium text-[#94A3B8]">Delete</Text>
                </TouchableOpacity>
                <View className="mx-2 h-[1px] bg-[#F1F5F9]" />
                <TouchableOpacity
                  onPress={() => {
                    setShowOptions(false);
                    onEdit();
                  }}
                  className="p-3">
                  <Text className="text-sm font-medium text-[#94A3B8]">Edit</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
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
            <View
              className={`h-3 w-3 rounded-full bg-white ${active ? 'self-end' : 'self-start'}`}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const TripCard = ({ service, from, to, seats, date, onEdit, onDelete }: any) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <View className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm shadow-slate-100">
      <View className="flex-row">
        <View className="h-20 w-24 overflow-hidden rounded-xl bg-gray-100">
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400' }}
            className="h-full w-full"
          />
        </View>
        <View className="ml-4 flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="text-[17px] font-bold text-[#334155]">{service}</Text>
            <View className="relative">
              <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
                <MoreHorizontal size={20} color="#94A3B8" />
              </TouchableOpacity>
              {showOptions && (
                <View
                  className="absolute right-0 top-8 z-50 w-32 rounded-2xl border border-slate-50 bg-white p-2 shadow-xl shadow-slate-200"
                  style={{ elevation: 5 }}>
                  <View className="absolute -top-2 right-2 h-4 w-4 rotate-45 border-l border-t border-slate-50 bg-white" />
                  <TouchableOpacity onPress={() => setShowOptions(false)} className="p-3">
                    <Text className="text-sm font-medium text-[#94A3B8]">Delete</Text>
                  </TouchableOpacity>
                  <View className="mx-2 h-[1px] bg-[#F1F5F9]" />
                  <TouchableOpacity onPress={() => setShowOptions(false)} className="p-3">
                    <Text className="text-sm font-medium text-[#94A3B8]">Edit</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          <View className="mt-2 flex-row items-center">
            <MapPin size={14} color="#94A3B8" />
            <Text className="ml-1 text-sm text-[#94A3B8]">{from}</Text>
            <ArrowRight size={14} color="#94A3B8" className="mx-2" />
            <Text className="text-sm text-[#94A3B8]">{to}</Text>
          </View>

          <View className="mt-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Bus size={14} color="#94A3B8" />
              <Text className="ml-1 text-sm text-[#94A3B8]">{seats} (Available)</Text>
            </View>
            <View className="flex-row items-center">
              <Calendar size={14} color="#94A3B8" />
              <Text className="ml-1 text-sm text-[#94A3B8]">{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const BusBookingCard = ({
  customer,
  plate,
  id,
  from,
  to,
  date,
  status,
  onReview,
  onCancel,
  onStatusChange,
}: any) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusStyle = () => {
    switch (status) {
      case 'Confirmed':
        return { bg: 'bg-[#F0FDF4]', text: 'text-[#22C55E]', label: 'Confirmed' };
      case 'Cancellation Request':
        return { bg: 'bg-[#FFF7ED]', text: 'text-[#FF8C00]', label: 'Cancellation Request' };
      case 'Cancelled':
        return { bg: 'bg-[#FEF2F2]', text: 'text-[#EF4444]', label: 'Cancelled' };
      case 'Cancellation Request sent':
        return { bg: 'bg-[#FFF7ED]', text: 'text-[#FF8C00]', label: 'Cancellation Request sent' };
      default:
        return { bg: 'bg-[#F1F5F9]', text: 'text-[#64748B]', label: status };
    }
  };

  const style = getStatusStyle();

  return (
    <View className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm shadow-slate-100">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-[17px] font-bold text-[#334155]">{customer}</Text>
          <View className="relative">
            <TouchableOpacity
              onPress={() => setShowStatusMenu(!showStatusMenu)}
              className={`ml-3 rounded-lg px-2 py-1 ${style.bg}`}>
              <Text className={`text-[10px] font-bold ${style.text}`}>{style.label}</Text>
            </TouchableOpacity>
            {showStatusMenu && (
              <View
                className="absolute left-3 top-8 z-50 w-40 rounded-2xl border border-slate-50 bg-white p-2 shadow-xl shadow-slate-200"
                style={{ elevation: 5 }}>
                <View className="absolute -top-2 left-4 h-4 w-4 rotate-45 border-l border-t border-slate-50 bg-white" />
                {['Confirmed', 'Cancelled', 'Cancel requested', 'request cancelation'].map((s) => (
                  <TouchableOpacity
                    key={s}
                    onPress={() => {
                      setShowStatusMenu(false);
                      onStatusChange(s);
                    }}
                    className="p-3">
                    <Text className="text-sm font-medium text-[#94A3B8]">{s}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
        <View className="relative">
          <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
            <MoreHorizontal size={20} color="#94A3B8" />
          </TouchableOpacity>
          {showOptions && (
            <View
              className="absolute right-0 top-8 z-50 w-48 rounded-2xl border border-slate-50 bg-white p-2 shadow-xl shadow-slate-200"
              style={{ elevation: 5 }}>
              <View className="absolute -top-2 right-2 h-4 w-4 rotate-45 border-l border-t border-slate-50 bg-white" />
              <TouchableOpacity onPress={() => setShowOptions(false)} className="p-3">
                <Text className="text-sm font-medium text-[#94A3B8]">Withdraw cancelation</Text>
              </TouchableOpacity>
              <View className="mx-2 h-[1px] bg-[#F1F5F9]" />
              <TouchableOpacity
                onPress={() => {
                  setShowOptions(false);
                  onCancel();
                }}
                className="p-3">
                <Text className="text-sm font-medium text-[#94A3B8]">Cancel Booking</Text>
              </TouchableOpacity>
              <View className="mx-2 h-[1px] bg-[#F1F5F9]" />
              <TouchableOpacity onPress={() => setShowOptions(false)} className="p-3">
                <Text className="text-sm font-medium text-[#94A3B8]">Edit</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View className="mt-2">
        <Text className="text-sm text-[#94A3B8]">{plate}</Text>
        <Text className="text-sm text-[#94A3B8]">{id}</Text>
      </View>

      <View className="mt-4 flex-row items-center">
        <MapPin size={14} color="#94A3B8" />
        <Text className="ml-2 text-sm text-[#94A3B8]">
          {from} - {to}
        </Text>
      </View>

      <View className="mt-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Calendar size={14} color="#94A3B8" />
          <Text className="ml-2 text-sm text-[#94A3B8]">{date}</Text>
        </View>

        <View className="flex-row items-center">
          {status === 'Cancellation Request' && (
            <TouchableOpacity onPress={onReview} className="mr-4">
              <Text className="text-sm font-bold text-[#FF8C00] underline">Review</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => setIsExpanded(!isExpanded)}
            className="flex-row items-center">
            <Text className="text-sm font-bold text-[#FF8C00]">Booked</Text>
            <ChevronDown
              size={14}
              color="#FF8C00"
              className={`ml-1 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </TouchableOpacity>
        </View>
      </View>

      {isExpanded && (
        <View className="mt-4 border-t border-[#F1F5F9] pt-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm text-[#94A3B8]">A1, B1, C1, A2, B2</Text>
            <Text className="text-sm text-[#94A3B8]">10 seat</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const BusManagement = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Buses' | 'Trip' | 'Bookings'>('Bookings');
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);
  const [showCancelReasonModal, setShowCancelReasonModal] = useState(false);

  const [activeFilters, setActiveFilters] = useState([
    { id: '1', label: 'CD-02-AB-1234' },
    { id: '2', label: 'Dhaka to chittagong' },
    { id: '3', label: 'Confirmed' },
  ]);

  const bookings = [
    {
      customer: 'Mike Eriksen',
      status: 'Confirmed',
      plate: 'CD-02-AB-1234',
      id: '#1234',
      from: 'Dhaka',
      to: 'Chittagong',
      date: '2026-02-15',
    },
    {
      customer: 'Mike Eriksen',
      status: 'Cancellation Request',
      plate: 'CD-02-AB-1234',
      id: '#1234',
      from: 'Dhaka',
      to: 'Chittagong',
      date: '2026-02-15',
    },
    {
      customer: 'Mike Eriksen',
      status: 'Cancelled',
      plate: 'CD-02-AB-1234',
      id: '#1234',
      from: 'Dhaka',
      to: 'Chittagong',
      date: '2026-02-15',
    },
    {
      customer: 'Mike Eriksen',
      status: 'Confirmed',
      plate: 'CD-02-AB-1234',
      id: '#1234',
      from: 'Dhaka',
      to: 'Chittagong',
      date: '2026-02-15',
    },
    {
      customer: 'Mike Eriksen',
      status: 'Cancellation Request sent',
      plate: 'CD-02-AB-1234',
      id: '#1234',
      from: 'Dhaka',
      to: 'Chittagong',
      date: '2026-02-15',
    },
  ];

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
    {
      service: 'Nirala Bus Service',
      from: 'Dhaka',
      to: 'Chittagong',
      seats: '04',
      date: '2026-02-15',
    },
    {
      service: 'Nirala Bus Service',
      from: 'Dhaka',
      to: 'Chittagong',
      seats: '04',
      date: '2026-02-15',
    },
    {
      service: 'Nirala Bus Service',
      from: 'Dhaka',
      to: 'Chittagong',
      seats: '04',
      date: '2026-02-15',
    },
    {
      service: 'Nirala Bus Service',
      from: 'Dhaka',
      to: 'Chittagong',
      seats: '04',
      date: '2026-02-15',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-[#848F4B]">{activeTab}</Text>
        <TouchableOpacity
          onPress={() => {
            if (activeTab === 'Bookings') router.push('/bus/create-booking');
            else router.push('/bus/add-new');
          }}
          className="flex-row items-center rounded-lg border border-[#F1F5F9] bg-white px-3 py-1.5 shadow-sm">
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
                <BusCard
                  key={idx}
                  {...bus}
                  onEdit={() => router.push('/bus/edit')}
                  onDelete={() => {}}
                />
              ))}
              <TouchableOpacity onPress={() => setIsEmpty(true)} className="mt-4 items-center">
                <Text className="text-xs text-slate-300">Show empty state (demo)</Text>
              </TouchableOpacity>
            </View>
          ))}
        {activeTab === 'Trip' && (
          <View className="px-6 pb-32">
            {trips.length === 0 ? (
              <View className="flex-1 items-center justify-center px-4 pt-10">
                <Image
                  source={{
                    uri: 'https://img.freepik.com/free-vector/empty-concept-illustration_114360-1253.jpg',
                  }}
                  className="mb-6 h-64 w-64"
                  resizeMode="contain"
                />
                <Text className="mb-4 text-center text-2xl font-bold text-[#848F4B]">
                  No Bus trips Yet
                </Text>
                <Text className="mb-8 text-center text-[15px] leading-5 text-[#94A3B8]">
                  You haven't added any trip in the list yet. Add trips so passengers can view and
                  book available seats.
                </Text>
                <TouchableOpacity
                  onPress={() => router.push('/bus/add-trip')}
                  className="flex-row items-center rounded-2xl bg-[#F8F8F8] px-10 py-4">
                  <Text className="text-[17px] font-bold text-[#334155]">Add Trips</Text>
                  <ArrowRight size={20} color="#334155" className="ml-2" />
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <View className="mb-4 flex-row items-center self-start rounded-full bg-[#F1F5F9] px-4 py-2">
                  <Text className="text-sm font-medium text-[#475569]">All Trips</Text>
                  <ArrowRight size={14} color="#475569" className="ml-1 rotate-90" />
                </View>
                {trips.map((trip, idx) => (
                  <TouchableOpacity key={idx} onPress={() => router.push('/bus/trip-details')}>
                    <TripCard {...trip} />
                  </TouchableOpacity>
                ))}
              </>
            )}
          </View>
        )}
        {activeTab === 'Bookings' && (
          <View className="px-6 pb-32">
            {bookings.length === 0 ? (
              <View className="flex-1 items-center justify-center px-4 pt-10">
                <Image
                  source={{
                    uri: 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg',
                  }}
                  className="mb-6 h-64 w-64"
                  resizeMode="contain"
                />
                <Text className="mb-4 text-center text-2xl font-bold text-[#848F4B]">
                  No Bookings Yet
                </Text>
                <Text className="mb-8 text-center text-[15px] leading-5 text-[#94A3B8]">
                  No seat bookings have been received yet. Once users make a booking, it will appear
                  here for you to manage.
                </Text>
              </View>
            ) : (
              <>
                <View className="mb-2 flex-row flex-wrap">
                  {activeFilters.map((filter) => (
                    <View
                      key={filter.id}
                      className="mb-2 mr-2 flex-row items-center rounded-full bg-[#F1F5F9] px-4 py-1.5">
                      <Text className="text-xs text-[#475569]">{filter.label}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          setActiveFilters((prev) => prev.filter((f) => f.id !== filter.id))
                        }
                        className="ml-2">
                        <X size={12} color="#475569" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>

                <View className="mb-6 flex-row space-x-2">
                  <TouchableOpacity className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] px-4 py-2">
                    <Text className="text-xs font-bold text-[#475569]">Bus wise</Text>
                    <ChevronDown size={14} color="#475569" className="ml-1" />
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] px-4 py-2">
                    <Text className="text-xs font-bold text-[#475569]">Trip wise</Text>
                    <ChevronDown size={14} color="#475569" className="ml-1" />
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] px-4 py-2">
                    <Text className="text-xs font-bold text-[#475569]">status</Text>
                    <ChevronDown size={14} color="#475569" className="ml-1" />
                  </TouchableOpacity>
                </View>
                {bookings.map((booking, idx) => (
                  <BusBookingCard
                    key={idx}
                    {...booking}
                    onReview={() => setShowReviewModal(true)}
                    onCancel={() => setShowCancelConfirmModal(true)}
                    onStatusChange={(s: string) => {
                      if (s === 'request cancelation') setShowCancelReasonModal(true);
                    }}
                  />
                ))}
              </>
            )}
          </View>
        )}

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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has
                been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley
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

        {/* Cancellation Confirmation Modal (Bus) */}
        <Modal visible={showCancelConfirmModal} transparent animationType="fade">
          <View className="flex-1 items-center justify-center bg-black/40 px-6">
            <View className="w-full rounded-3xl bg-white p-8">
              <TouchableOpacity
                onPress={() => setShowCancelConfirmModal(false)}
                className="absolute right-6 top-6 p-1">
                <X size={20} color="#CBD5E1" />
              </TouchableOpacity>
              <Text className="mb-8 mt-4 text-center text-lg font-bold text-[#1E293B]">
                Are you sure to about cancelling the booking?
              </Text>
              <View className="flex-row gap-x-4">
                <TouchableOpacity
                  onPress={() => setShowCancelConfirmModal(false)}
                  className="flex-1 items-center justify-center rounded-xl border border-[#F1F5F9] py-3">
                  <Text className="text-sm font-bold text-[#94A3B8]">No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowCancelConfirmModal(false)}
                  className="flex-1 items-center justify-center rounded-xl bg-[#FF8C00] py-4">
                  <Text className="text-sm font-bold text-white">Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Cancellation Reason Modal (Bus) */}
        <Modal visible={showCancelReasonModal} transparent animationType="fade">
          <View className="flex-1 items-center justify-center bg-black/40 px-6">
            <View className="w-full rounded-3xl bg-white p-8">
              <View className="mb-8 flex-row items-center justify-between">
                <TouchableOpacity onPress={() => setShowCancelReasonModal(false)} className="p-1">
                  <ArrowLeft size={20} color="#94A3B8" />
                </TouchableOpacity>
                <Text className="text-lg font-bold text-[#475569]">Cancellation</Text>
                <TouchableOpacity onPress={() => setShowCancelReasonModal(false)} className="p-1">
                  <X size={20} color="#CBD5E1" />
                </TouchableOpacity>
              </View>

              <View className="mb-6">
                <Text className="mb-2 text-sm font-bold text-[#1E293B]">Reason</Text>
                <TextInput
                  placeholder="Enter here"
                  placeholderTextColor="#CBD5E1"
                  multiline
                  className="min-h-[120px] rounded-2xl border border-[#F1F5F9] bg-white p-4 text-base text-[#334155] shadow-sm shadow-slate-50"
                  style={{ textAlignVertical: 'top' }}
                />
                <Text className="mt-2 text-xs text-[#94A3B8]">Tell reason in details.</Text>
              </View>

              <TouchableOpacity
                onPress={() => setShowCancelReasonModal(false)}
                className="h-14 items-center justify-center rounded-2xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
                <Text className="text-[17px] font-bold text-white">Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

// ─── Main Order Management ─────────────────────────────────────
export default function OrderManagement() {
  const router = useRouter();
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
