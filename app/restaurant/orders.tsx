import { useRouter } from 'expo-router';
import {
  ChevronDown,
  Clock,
  Image as ImageIcon,
  MoreHorizontal,
  Search,
  Package,
  Receipt,
  FileText,
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
  StyleSheet,
} from 'react-native';

const EmptyState = () => (
  <View className="flex-1 items-center pt-20">
    <View className="mb-6 h-48 w-48 items-center justify-center rounded-full bg-[#F8FAFC]">
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=400&auto=format&fit=crop', // Temporary placeholder for illustration
        }}
        className="h-32 w-40 rounded-xl"
        resizeMode="contain"
      />
    </View>
    <Text className="text-xl font-bold text-[#6D7437]">No Orders Yet</Text>
    <Text className="mt-3 px-12 text-center text-sm leading-5 text-[#64748B]">
      No orders have been received yet. Once users make a order, it will appear here for you to
      manage.
    </Text>
  </View>
);

const RestaurantOrderCard = ({
  name,
  status,
  statusColor,
  statusBg,
  items,
  orderId,
  date,
  showMenu = true,
}: {
  name: string;
  status: string;
  statusColor: string;
  statusBg: string;
  items: number;
  orderId: string;
  date: string;
  showMenu?: boolean;
}) => {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);
  const [menuLayout, setMenuLayout] = useState({ x: 0, y: 0, w: 0, h: 0 });

  return (
    <View className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm">
      <View className="mb-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-lg font-medium text-[#1E293B]">{name}</Text>
          <View className="ml-3 rounded-full px-3 py-1" style={{ backgroundColor: statusBg }}>
            <Text className="text-[10px] font-bold" style={{ color: statusColor }}>
              {status}
            </Text>
          </View>
        </View>
        {showMenu && (
          <TouchableOpacity
            onPress={(e) => {
              (e.target as any).measure?.(
                (_x: number, _y: number, w: number, h: number, px: number, py: number) => {
                  setMenuLayout({ x: px, y: py, w, h });
                  setShowOptions(true);
                }
              );
              setShowOptions(true);
            }}>
            <MoreHorizontal size={20} color="#94A3B8" />
          </TouchableOpacity>
        )}
      </View>

      <View className="mb-1 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Package size={14} color="#94A3B8" />
          <Text className="ml-1.5 text-[13px] text-[#64748B]">Items: {items}</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="mr-1.5 text-[13px] text-[#64748B]">{date}</Text>
          <Clock size={12} color="#94A3B8" />
        </View>
      </View>

      <View className="flex-row items-center">
        <Receipt size={14} color="#94A3B8" />
        <Text className="ml-1.5 text-[13px] text-[#64748B]">Order {orderId}</Text>
      </View>

      {/* 3-Dot Options Modal */}
      <Modal visible={showOptions} transparent animationType="fade">
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setShowOptions(false)}>
          <View
            style={{
              position: 'absolute',
              top: menuLayout.y + menuLayout.h + 8,
              left: menuLayout.x - 120 + menuLayout.w, // Align right side of modal with right side of button
              backgroundColor: '#fff',
              borderRadius: 14,
              width: 130, // Fixed width to ensure right-alignment works predictably
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
            }}>
            {/* White up-pointing arrow on the right side */}
            <View
              style={{
                position: 'absolute',
                top: -8,
                right: 12,
                width: 0,
                height: 0,
                borderLeftWidth: 8,
                borderRightWidth: 8,
                borderBottomWidth: 8,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#fff',
              }}
            />
            {['Edit', 'Cancell', 'Order details'].map((opt, i) => (
              <TouchableOpacity
                key={opt}
                onPress={() => {
                  setShowOptions(false);
                  if (opt === 'Edit') {
                    router.push('/restaurant/create-order');
                  }
                }}
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  borderBottomWidth: i === 2 ? 0 : 1,
                  borderBottomColor: '#F1F5F9',
                }}>
                <Text className="text-[15px] font-medium text-[#94A3B8]">{opt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const RequestCard = ({ imageFull = false }: { imageFull?: boolean }) => (
  <View className="mb-6 overflow-hidden rounded-2xl border border-[#F1F5F9] bg-white shadow-sm">
    <View className={`flex-row ${imageFull ? 'flex-col' : ''} p-4 pb-0`}>
      <View className="relative">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop',
          }}
          className={`${imageFull ? 'h-40 w-full' : 'h-24 w-28'} rounded-xl`}
        />
        <Text className="absolute left-2 top-2 rounded bg-white/80 px-1 py-0.5 text-[10px] font-bold text-red-500">
          Cancellation Request
        </Text>
      </View>
      <View className={`${imageFull ? 'mt-4' : 'ml-4 flex-1'}`}>
        <Text className="mb-2 text-[15px] font-bold leading-5 text-[#1E293B]">
          Four-Cheese Margherita Pizza with Sun-Dried Tomatoes
        </Text>
        <View className="flex-row items-center">
          <Receipt size={14} color="#94A3B8" />
          <Text className="ml-1.5 text-[13px] text-[#64748B]">Order #2043</Text>
        </View>
        <View className="mt-1.5 flex-row items-center">
          <Clock size={14} color="#94A3B8" />
          <Text className="ml-1.5 text-[13px] text-[#64748B]">12 Feb · 8:30 PM</Text>
        </View>
      </View>
    </View>

    <View className="p-5">
      <View className="flex-row items-center justify-between border-b border-[#F1F5F9] pb-4">
        <View>
          <Text className="text-[13px] font-bold text-[#475569]">Note</Text>
          <Text className="mt-2 text-[13px] leading-5 text-[#64748B]">
            This pizza features a rich blend of four cheeses—mozzarella, parmesan, fontina, and
            gorgonzola—topped with sun-dried tomatoes and fresh basil, all on a classic margherita
            base. It offers a perfect balance of creamy, tangy.
          </Text>
        </View>
        {/* Quantity floating to top right of note section conceptually */}
      </View>
      <View className="absolute right-5 top-5 flex-row items-center">
        <Text className="mr-1 text-[12px] text-[#94A3B8]">Quantity: 2</Text>
        <Package size={12} color="#94A3B8" />
      </View>

      <View className="mb-6 mt-4">
        <Text className="text-[13px] font-bold text-[#475569]">Reason:</Text>
        <Text className="mt-2 text-[13px] leading-5 text-[#64748B]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </Text>
      </View>

      <View className="mt-2 flex-row gap-x-3">
        <TouchableOpacity className="flex-1 items-center justify-center rounded-xl border border-[#F1F5F9] py-3.5">
          <Text className="text-sm font-semibold text-red-500">Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 items-center justify-center rounded-xl bg-[#FF8C00] py-3.5 shadow-md shadow-orange-200">
          <Text className="text-sm font-semibold text-white">Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function RestaurantOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Request' | 'Current Orders' | 'Cancelled'>(
    'Current Orders'
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Modal State
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterLayout, setFilterLayout] = useState({ x: 0, y: 0, w: 0, h: 0 });

  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="items-center py-5">
          <Text className="text-xl font-bold text-[#6D7437]" style={{ fontFamily: 'Inter' }}>
            All Orders
          </Text>
        </View>

        {/* Search Bar */}
        <View className="mb-6 mt-2 px-6">
          <View className="flex-row items-center rounded-full border border-[#F1F5F9] bg-white px-5 py-3 shadow-sm">
            <Search size={20} color="#CBD5E1" />
            <TextInput
              placeholder="Search by name"
              placeholderTextColor="#CBD5E1"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="ml-3 flex-1 text-base text-[#334155]"
            />
          </View>
        </View>

        {/* Orders List & Create Button */}
        <View className="mb-5 flex-row items-center justify-between px-6">
          <Text className="text-[17px] font-bold text-[#64748B]">Orders List</Text>
          <TouchableOpacity
            onPress={() => router.push('/restaurant/create-order')}
            className="flex-row items-center rounded-lg bg-[#FF8C00] px-3.5 py-2 shadow-md shadow-orange-200">
            <Text className="mr-1.5 text-base font-medium text-white">+</Text>
            <Text className="text-[13px] font-semibold text-white">Create Order</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View className="mb-6 flex-row border-b border-[#F1F5F9] px-6">
          {(['Request', 'Current Orders', 'Cancelled'] as const).map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`mr-8 pb-3 ${activeTab === tab ? 'border-b-2 border-[#FF8C00]' : ''}`}>
              <Text
                className={`text-sm font-medium ${
                  activeTab === tab ? 'text-[#FF8C00]' : 'text-[#64748B]'
                }`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        <View className="px-6 pb-32">
          {activeTab === 'Request' && (
            <View>
              <RequestCard imageFull={false} />
              <RequestCard imageFull={true} />
            </View>
          )}

          {activeTab === 'Current Orders' && (
            <View>
              <View className="mb-4 self-start">
                <TouchableOpacity
                  onPress={(e) => {
                    (e.target as any).measure?.(
                      (_x: number, _y: number, w: number, h: number, px: number, py: number) => {
                        setFilterLayout({ x: px, y: py, w, h });
                        setShowFilterModal(true);
                      }
                    );
                    // Fallback to true if measure fails
                    setShowFilterModal(true);
                  }}
                  className="flex-row items-center rounded-full border border-[#FF8C00] bg-white px-4 py-1.5 shadow-sm shadow-orange-100">
                  <Text className="mr-1 text-[13px] font-semibold text-[#FF8C00]">
                    {filterStatus}
                  </Text>
                  <ChevronDown size={14} color="#FF8C00" />
                </TouchableOpacity>
              </View>

              {/* Order Cards with correct status colors based on UI */}
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Preparing"
                statusColor="#3A82F6"
                statusBg="#EFF6FF"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Complete"
                statusColor="#22C55E"
                statusBg="#F0FDF4"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Complete"
                statusColor="#22C55E"
                statusBg="#F0FDF4"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Ready"
                statusColor="#FF8C00"
                statusBg="#FFF7ED"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Preparing"
                statusColor="#3A82F6"
                statusBg="#EFF6FF"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Ready"
                statusColor="#FF8C00"
                statusBg="#FFF7ED"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Complete"
                statusColor="#22C55E"
                statusBg="#F0FDF4"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Preparing"
                statusColor="#3A82F6"
                statusBg="#EFF6FF"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
              />
            </View>
          )}

          {activeTab === 'Cancelled' && (
            <View>
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Cancelled"
                statusColor="#EF4444"
                statusBg="#FEF2F2"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
                showMenu={false}
              />
              <RestaurantOrderCard
                name="Devon Lane"
                status="Cancelled"
                statusColor="#EF4444"
                statusBg="#FEF2F2"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
                showMenu={false}
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Cancelled"
                statusColor="#EF4444"
                statusBg="#FEF2F2"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
                showMenu={false}
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Cancelled"
                statusColor="#EF4444"
                statusBg="#FEF2F2"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
                showMenu={false}
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Cancelled"
                statusColor="#EF4444"
                statusBg="#FEF2F2"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
                showMenu={false}
              />
              <RestaurantOrderCard
                name="Sarah Jonson"
                status="Cancelled"
                statusColor="#EF4444"
                statusBg="#FEF2F2"
                items={2}
                orderId="#2043"
                date="12 Feb · 8:30 PM"
                showMenu={false}
              />
            </View>
          )}
        </View>
      </ScrollView>

      {/* Filter Modal */}
      <Modal visible={showFilterModal} transparent animationType="fade">
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: filterLayout.y + filterLayout.h + 8,
              left: filterLayout.x,
              backgroundColor: '#fff',
              borderRadius: 14,
              paddingVertical: 10,
              paddingHorizontal: 16,
              minWidth: 140,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
            }}>
            {/* White up-pointing arrow perfectly matching the dropdown box color */}
            <View
              style={{
                position: 'absolute',
                top: -8,
                left: 20, // Positioned on the left side to align under the button
                width: 0,
                height: 0,
                borderLeftWidth: 8,
                borderRightWidth: 8,
                borderBottomWidth: 8,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#fff',
                // Slight shadow hack for the triangle if needed, but the main box shadow usually covers it nicely
              }}
            />
            {['All', 'Preparing', 'Ready', 'Complete'].map((status) => (
              <TouchableOpacity
                key={status}
                onPress={() => {
                  setFilterStatus(status);
                  setShowFilterModal(false);
                }}
                className="py-2.5">
                <Text
                  className="text-[15px] font-medium"
                  style={{ color: filterStatus === status ? '#FF8C00' : '#94A3B8' }}>
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
