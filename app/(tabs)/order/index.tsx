import { useRouter } from 'expo-router';
import {
  Search,
  MapPin,
  MoreVertical,
  TrendingUp,
  X,
  ArrowLeft,
  ChevronLeft,
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function OrderManagement() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Active' | 'Delivered' | 'Cancellation'>('Active');
  const [subTab, setSubTab] = useState<'Ready to handoff' | 'Returns and Cancells'>(
    'Ready to handoff'
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Modal states
  const [showHandoffModal, setShowHandoffModal] = useState(false);
  const [showCancellationModal, setShowCancellationModal] = useState(false);
  const [showReturningModal, setShowReturningModal] = useState(false);
  const [showMenu, setShowMenu] = useState<number | null>(null);

  const activeOrders = [
    {
      id: 1,
      title: 'Gradient Graphic T-shirt',
      size: 'Medium',
      color: 'White',
      otp: '664564',
      distance: '28km',
      time: '10Min',
      price: 145,
    },
    {
      id: 2,
      title: 'Gradient Graphic T-shirt',
      size: 'Medium',
      color: 'White',
      otp: '664564',
      distance: '28km',
      time: '10Min',
      price: 145,
    },
    {
      id: 3,
      title: 'Gradient Graphic T-shirt',
      size: 'Medium',
      color: 'White',
      otp: '664564',
      distance: '28km',
      time: '10Min',
      price: 145,
    },
    {
      id: 4,
      title: 'Gradient Graphic T-shirt',
      size: 'Medium',
      color: 'White',
      otp: '664564',
      distance: '28km',
      time: '10Min',
      price: 145,
    },
  ];

  const returnRequests = [
    {
      id: 1,
      title: 'Gradient Graphic T-shirt',
      color: 'White',
      orderId: '12123',
      price: 145,
      image:
        'https://img.freepik.com/free-photo/white-t-shirt-with-colorful-paint-it_1340-23847.jpg',
    },
    {
      id: 2,
      title: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 145,
      image: 'https://img.freepik.com/free-photo/checkered-shirt-isolated_1253-334.jpg',
    },
    {
      id: 3,
      title: 'Gradient Graphic T-shirt',
      color: 'White',
      orderId: '12123',
      price: 145,
      image:
        'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 145,
      image: 'https://img.freepik.com/free-photo/checkered-shirt-isolated_1253-334.jpg',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="flex-1">
        {/* Header */}
        <View className="items-center py-5">
          <Text className="text-2xl font-bold text-[#848F4B]" style={{ fontFamily: 'Inter' }}>
            Order Management
          </Text>
        </View>

        {/* Top Tabs */}
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

        {/* Search Bar */}
        <View className="mb-6 px-6">
          <View className="flex-row items-center rounded-3xl border border-[#F1F5F9] bg-white px-5 drop-shadow-lg">
            <Search size={22} color="#CBD5E1" />
            <TextInput
              placeholder="Search Current order"
              placeholderTextColor="#CBD5E1"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="ml-3 flex-1 text-base text-[#334155]"
            />
          </View>
        </View>

        {/* Sub Tabs */}
        <View className="flex-row border-b border-[#F1F5F9] px-6 py-0">
          <TouchableOpacity
            onPress={() => setSubTab('Ready to handoff')}
            activeOpacity={0.7}
            className={`pb-2 ${subTab === 'Ready to handoff' ? 'border-b-2 border-[#FF8C00]' : ''}`}>
            <Text
              className={`text-sm font-bold ${subTab === 'Ready to handoff' ? 'text-[#FF8C00]' : 'text-[#475569]'}`}>
              Ready to handoff
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSubTab('Returns and Cancells')}
            activeOpacity={0.7}
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
          {subTab === 'Ready to handoff' ? (
            <View>
              <Text className="mb-5 px-6 text-sm font-medium text-[#94A3B8]">Upcoming Handoff</Text>
              {activeOrders.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.9}
                  onPress={() => router.push('/product-details')}
                  className="mx-6 mb-6 flex-row items-start border-b border-[#F1F5F9] pb-6">
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1543132220-3ce99c5ae93b?q=80&w=400&auto=format&fit=crop',
                    }}
                    className="h-28 w-28 rounded-2xl"
                  />
                  <View className="ml-5 flex-1">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-base font-bold text-[#334155]" style={{ flex: 1 }}>
                        {item.title}
                      </Text>
                      <TouchableOpacity onPress={() => setShowMenu(item.id)} className="p-1">
                        <MoreVertical size={20} color="#CBD5E1" />
                      </TouchableOpacity>
                    </View>
                    <Text className="mt-0.5 text-sm text-[#94A3B8]">
                      Size: {item.size}, Color: {item.color}
                    </Text>
                    <Text className="text-sm text-[#94A3B8]">OTP: {item.otp}</Text>
                    <View className="mt-1.5 flex-row items-center">
                      <MapPin size={16} color="#22C55E" />
                      <Text className="ml-1.5 text-sm font-bold text-[#22C55E]">
                        {item.distance}{' '}
                        <Text className="font-normal text-[#94A3B8]">({item.time})</Text>
                      </Text>
                    </View>
                    <View className="mt-3 flex-row items-center justify-between">
                      <Text className="text-xl font-bold text-[#334155]">${item.price}</Text>
                      <TouchableOpacity
                        onPress={() => setShowHandoffModal(true)}
                        className="rounded-full bg-[#FF8C00] px-6 py-2">
                        <Text className="text-sm font-bold text-white">Handoff</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View>
              <Text className="mb-5 px-6 text-sm font-medium text-[#94A3B8]">
                Active return requests
              </Text>
              {returnRequests.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.9}
                  onPress={() => router.push('/product-details')}
                  className="mx-6 mb-6 flex-row items-center space-x-5 border-b border-[#F1F5F9] pb-6">
                  <View className="h-32 w-32 rounded-3xl bg-[#F8FAFC] p-3">
                    <Image
                      source={{ uri: item.image }}
                      className="h-full w-full rounded-2xl"
                      resizeMode="contain"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-bold text-[#334155]">{item.title}</Text>
                    {item.size && (
                      <Text className="mt-0.5 text-sm text-[#94A3B8]">Size: {item.size}</Text>
                    )}
                    <Text className="text-sm text-[#94A3B8]">Color: {item.color}</Text>
                    {item.orderId && (
                      <Text className="text-sm text-[#94A3B8]">Order#{item.orderId}</Text>
                    )}
                    <View className="mt-3 flex-row items-center justify-between">
                      <Text className="text-sm font-bold text-[#334155]">${item.price}</Text>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setShowReturningModal(true)}
                        className="rounded-full bg-[#FF8C00] px-5 py-2">
                        <Text className="text-sm font-bold text-white">Review request</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
      </View>

      {/* Popover Menu Overlay */}
      {showMenu !== null && (
        <Pressable
          onPress={() => setShowMenu(null)}
          className="absolute bottom-0 left-0 right-0 top-0 z-20">
          <View
            className="absolute rounded-2xl border border-[#F1F5F9] bg-white p-2 shadow-2xl"
            style={{
              top: 380 + (showMenu - 1) * 150, // Calculated position based on item index (rough)
              right: 25,
              width: 200,
              elevation: 15,
              zIndex: 30,
            }}>
            {/* Popover Arrow */}
            <View
              style={{
                position: 'absolute',
                top: -12,
                right: 20,
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
                borderStyle: 'solid',
                borderLeftWidth: 12,
                borderRightWidth: 12,
                borderBottomWidth: 12,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: 'white',
              }}
            />
            <TouchableOpacity
              onPress={() => setShowMenu(null)}
              className="flex-row items-center rounded-t-xl border-b border-[#F1F5F9] px-5 py-4 active:bg-gray-50">
              <TrendingUp size={16} color="#475569" />
              <Text className="ml-4 text-sm font-medium text-[#475569]">Order Summery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowMenu(null);
                setShowCancellationModal(true);
              }}
              className="flex-row items-center rounded-b-xl px-5 py-4 active:bg-gray-50">
              <X size={16} color="#475569" />
              <Text className="ml-4 text-sm font-medium text-[#475569]">Cancel order</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      )}

      {/* Handoff Confirmation Modal */}
      <Modal visible={showHandoffModal} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-black/40 px-8">
          <View className="relative w-full rounded-3xl bg-white p-7 shadow-2xl">
            <TouchableOpacity
              onPress={() => setShowHandoffModal(false)}
              className="absolute right-5 top-5 p-1">
              <X size={22} color="#CBD5E1" />
            </TouchableOpacity>
            <Text className="mb-10 mt-6 text-center text-lg font-semibold leading-8 text-[#475569]">
              Are you sure about marking order Handoff?
            </Text>
            <View className="flex-row items-center justify-between">
              <TouchableOpacity
                onPress={() => setShowHandoffModal(false)}
                className="mr-4 flex-1 rounded-xl border-2 border-[#FF8C00] py-2">
                <Text className="text-center text-lg font-bold text-[#FF8C00]">No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowHandoffModal(false)}
                className="flex-1 rounded-xl border-2 border-[#FF8C00] bg-[#FF8C00] py-2">
                <Text className="text-center text-lg font-bold text-white">Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Cancellation Modal */}
      <Modal visible={showCancellationModal} transparent animationType="slide">
        <View className="flex-1 items-center justify-center bg-black/40 px-6">
          <View className="w-full rounded-[40px] bg-white p-8 shadow-2xl">
            <View className="mb-8 flex-row items-center justify-between">
              <TouchableOpacity onPress={() => setShowCancellationModal(false)} className="p-1">
                <ArrowLeft size={20} color="#94A3B8" />
              </TouchableOpacity>
              <Text className="text-xl font-bold text-[#475569]">Cancellation</Text>
              <TouchableOpacity onPress={() => setShowCancellationModal(false)} className="p-1">
                <X size={20} color="#CBD5E1" />
              </TouchableOpacity>
            </View>

            <View className="mb-10">
              <Text className="mb-3 text-lg font-bold text-[#475569]">Reason</Text>
              <View className="shadow-inner h-44 rounded-3xl border border-[#F1F5F9] bg-white p-5">
                <TextInput
                  placeholder="Enter here"
                  placeholderTextColor="#CBD5E1"
                  multiline
                  className="flex-1 text-base text-[#334155]"
                  textAlignVertical="top"
                />
              </View>
              <Text className="mt-3 text-sm font-medium text-[#94A3B8]">
                Tell reason in details.
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setShowCancellationModal(false)}
              className="w-full rounded-xl bg-[#FF8C00] py-3 shadow-xl shadow-orange-200 active:opacity-90">
              <Text className="text-center text-xl font-bold text-white">Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Returning Request Modal */}
      <Modal visible={showReturningModal} transparent animationType="slide">
        <View className="flex-1 items-center justify-center bg-black/40 px-6">
          <View className="w-full rounded-3xl bg-white p-8 shadow-2xl">
            <View className="mb-8 flex-row items-center justify-between">
              <TouchableOpacity onPress={() => setShowReturningModal(false)} className="p-1">
                <ArrowLeft size={20} color="#94A3B8" />
              </TouchableOpacity>
              <Text className="text-lg font-bold text-[#1F2937]">Returning request</Text>
              <TouchableOpacity onPress={() => setShowReturningModal(false)} className="p-1">
                <X size={20} color="#CBD5E1" />
              </TouchableOpacity>
            </View>

            <Text className="mb-12 text-sm leading-7 text-[#4B5563]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley
            </Text>

            <View className="mt-5 flex-row items-center justify-between space-x-8">
              <TouchableOpacity
                onPress={() => setShowReturningModal(false)}
                className="flex-1 rounded-xl border-2 border-[#FF8C00] py-2">
                <Text className="text-center text-base font-semibold text-[#FF8C00]">Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowReturningModal(false)}
                className="ml-5 flex-1 rounded-xl border-2 border-[#FF8C00] bg-[#FF8C00] py-2 active:opacity-90">
                <Text className="text-center text-base font-semibold text-white">Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
