import { useRouter } from 'expo-router';
import { CreditCard, Calendar, TrendingUp, TrendingDown, X, DollarSign } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function Index() {
  const [activeTab, setActiveTab] = useState<'Transactions' | 'Withdrawal'>('Transactions');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const transactions = [
    {
      id: 1,
      amount: 50,
      type: 'Purchased',
      date: 'Product name will be added here',
      isPositive: true,
    },
    {
      id: 2,
      amount: 50,
      type: 'Refunded',
      date: 'Product name will be added here',
      isPositive: false,
    },
    {
      id: 3,
      amount: 50,
      type: 'Purchased',
      date: 'Product name will be added here',
      isPositive: true,
    },
    {
      id: 4,
      amount: 50,
      type: 'Refunded',
      date: 'Product name will be added here',
      isPositive: false,
    },
    {
      id: 5,
      amount: 50,
      type: 'Purchased',
      date: 'Product name will be added here',
      isPositive: true,
    },
    {
      id: 6,
      amount: 50,
      type: 'Refunded',
      date: 'Product name will be added here',
      isPositive: false,
    },
    {
      id: 7,
      amount: 50,
      type: 'Purchased',
      date: 'Product name will be added here',
      isPositive: true,
    },
    {
      id: 8,
      amount: 50,
      type: 'Refunded',
      date: 'Product name will be added here',
      isPositive: false,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header */}
        <View className="items-center py-5">
          <Text className="text-2xl font-bold text-[#848F4B]" style={{ fontFamily: 'Inter' }}>
            Revenue
          </Text>
        </View>

        {/* Balance Card Section */}
        <View className="mb-2 px-6">
          <View className="relative w-full overflow-hidden rounded-xl bg-[#B45309] shadow-xl shadow-orange-900/20">
            <Image
              source={require('../../../assets/images/revenue-banner.png')}
              className="absolute inset-0 h-full w-full"
              resizeMode="cover"
            />
            <View className="p-8">
              <Text className="text-base text-white">Current Balance</Text>
              <Text className="mt-2 text-[42px] font-bold text-white">$4,570,80</Text>
            </View>
          </View>
          <Text className="mt-2 text-sm text-[#94A3B8]">
            Your amount will be transferred on Every Monday
          </Text>
        </View>

        {/* Switcher Tabs */}
        <View className="mt-8 px-6">
          <View className="flex-row rounded-3xl bg-[#F1F5F9] p-1.5">
            <TouchableOpacity
              onPress={() => setActiveTab('Transactions')}
              className={`flex-1 flex-row items-center justify-center rounded-2xl py-3 ${activeTab === 'Transactions' ? 'bg-white shadow-sm' : ''}`}>
              <CreditCard size={18} color={activeTab === 'Transactions' ? '#334155' : '#94A3B8'} />
              <Text
                className={`ml-3 text-base font-bold ${activeTab === 'Transactions' ? 'text-[#334155]' : 'text-[#94A3B8]'}`}>
                Transactions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab('Withdrawal')}
              className={`flex-1 flex-row items-center justify-center rounded-2xl py-3 ${activeTab === 'Withdrawal' ? 'bg-white shadow-sm' : ''}`}>
              <Calendar size={18} color={activeTab === 'Withdrawal' ? '#334155' : '#94A3B8'} />
              <Text
                className={`ml-3 text-base font-bold ${activeTab === 'Withdrawal' ? 'text-[#334155]' : 'text-[#94A3B8]'}`}>
                Withdrawal
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeTab === 'Transactions' ? (
          <View className="mt-4 px-6">
            <Text className="mb-6 text-lg font-bold text-[#475569]">Transactions</Text>
            {transactions.length > 0 ? (
              transactions.map((item) => (
                <View
                  key={item.id}
                  className="mb-4 flex-row items-start rounded-xl border border-[#F1F5F9] bg-white p-4">
                  <View
                    className={`h-12 w-12 items-center justify-center rounded-full ${item.isPositive ? 'bg-[#DBFCE7]' : 'bg-[#FFE2E2]'}`}>
                    {item.isPositive ? (
                      <TrendingUp size={22} color="#22C55E" />
                    ) : (
                      <TrendingDown size={22} color="#EF4444" />
                    )}
                  </View>
                  <View className="ml-5 flex-1">
                    <Text className="text-xl font-bold text-[#334155]">
                      {item.isPositive ? `+$${item.amount}` : `-$${item.amount}`}
                    </Text>
                    <Text className="text-sm text-[#94A3B8]">{item.date}</Text>
                  </View>
                  <Text
                    className={`text-xs font-medium ${item.isPositive ? 'text-[#64748B]' : 'text-[#64748B]'}`}>
                    {item.type}
                  </Text>
                </View>
              ))
            ) : (
              <View className="mt-20 items-center justify-center">
                <Text className="text-2xl font-bold text-[#848F4B]">
                  No transactions found yet.
                </Text>
                <Text className="mt-4 px-10 text-center text-base font-medium leading-6 text-[#94A3B8]">
                  You haven't received any payments yet. Your earnings will appear here once
                  customer complete orderings.
                </Text>
              </View>
            )}
          </View>
        ) : (
          <View className="mt-6 px-6">
            <View className="mb-6">
              <Text className="mb-3 text-base font-bold text-[#475569]">Card Holder Name</Text>
              <TextInput
                placeholder="Prabal Pratap Singh"
                placeholderTextColor="#94A3B8"
                className="rounded-xl border border-[#F1F5F9] bg-white p-4 text-base font-medium text-[#334155]"
              />
            </View>
            <View className="mb-6">
              <Text className="mb-3 text-base font-bold text-[#475569]">Card Number</Text>
              <TextInput
                placeholder="5296 7820 4820 9637"
                placeholderTextColor="#94A3B8"
                className="rounded-xl border border-[#F1F5F9] bg-white p-4 text-base font-medium text-[#334155]"
              />
            </View>
            <View className="mb-10 flex-row space-x-6">
              <View className="flex-1">
                <Text className="mb-3 text-base font-bold text-[#475569]">MM/YY</Text>
                <TextInput
                  placeholder="12/24"
                  placeholderTextColor="#94A3B8"
                  className="rounded-xl border border-[#F1F5F9] bg-white p-4 text-base font-medium text-[#334155]"
                />
              </View>
              <View className="flex-1">
                <Text className="mb-3 text-base font-bold text-[#475569]">CVC</Text>
                <TextInput
                  placeholder="****"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry
                  className="rounded-xl border border-[#F1F5F9] bg-white p-4 text-base font-medium text-[#334155]"
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setShowSuccessModal(true)}
              activeOpacity={0.8}
              className="w-full rounded-2xl bg-[#FF8C00] py-5 shadow-xl shadow-orange-200">
              <Text className="text-center text-2xl font-bold text-white">Request withdrawal</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <Modal visible={showSuccessModal} transparent animationType="fade">
        <View className="flex-1 items-center justify-center bg-white px-8">
          <TouchableOpacity
            onPress={() => setShowSuccessModal(false)}
            className="absolute right-10 top-20 p-2">
            <X size={32} color="#000" />
          </TouchableOpacity>

          <View className="items-center">
            <View className="mb-10 h-32 w-32 items-center justify-center rounded-full bg-[#FFB347]/40">
              <View className="h-24 w-24 items-center justify-center rounded-full bg-[#FFB347]/60">
                <DollarSign size={48} color="white" strokeWidth={3} />
              </View>
            </View>
            <Text className="text-center text-[38px] font-bold leading-[50px] text-[#FF8C00]">
              Withdrawal requested{'\n'}succesfully
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
