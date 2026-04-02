import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function SeatSelection() {
  const router = useRouter();
  const [selectedSeats, setSelectedSeats] = useState(['A3', 'A4']); // Mocked selected

  const totalRows = 6;
  const seatsPerRow = 4;

  const renderSeat = (id: string, isBooked: boolean, isAvailable: boolean) => {
    const isSelected = selectedSeats.includes(id);

    return (
      <TouchableOpacity
        key={id}
        onPress={() => {
          if (!isBooked) {
            if (isSelected) setSelectedSeats((prev) => prev.filter((s) => s !== id));
            else setSelectedSeats((prev) => [...prev, id]);
          }
        }}
        className={`mb-6 h-16 w-16 items-center justify-center rounded-xl border ${
          isSelected
            ? 'border-[#FF8C00] bg-[#FF8C00]'
            : isBooked
              ? 'border-[#E0E7FF] bg-[#E0E7FF]'
              : 'border-[#E2E8F0] bg-white'
        }`}>
        {isSelected ? (
          <View className="h-6 w-6 items-center justify-center rounded-md border-2 border-white">
            <View className="h-3 w-3 rounded-sm bg-white" />
          </View>
        ) : (
          <Text
            className={`text-[15px] font-bold ${isAvailable ? 'text-[#22C55E]' : isBooked ? 'text-[#6366F1]' : 'text-[#94A3B8]'}`}>
            A3
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <View className="mr-8 flex-1 items-center">
          <Text className="text-[20px] font-bold text-[#848F4B]">Bus Seat Details</Text>
        </View>
      </View>

      <View className="flex-1">
        {/* Legend */}
        <View className="mb-10 flex-row items-center justify-between px-6">
          <View>
            <Text className="text-xl font-bold text-[#475569]">Select</Text>
            <Text className="text-xl font-bold text-[#475569]">total Seats You needed</Text>
          </View>
          <View className="items-end space-y-2">
            <View className="flex-row items-center">
              <Text className="mr-2 text-sm font-bold text-[#805AD5]">Booked</Text>
              <View className="h-3 w-3 rounded-full bg-[#805AD5]" />
            </View>
            <View className="flex-row items-center">
              <Text className="mr-2 text-sm font-bold text-[#22C55E]">Available</Text>
              <View className="h-3 w-3 rounded-full bg-[#22C55E]" />
            </View>
          </View>
        </View>

        {/* Seat Grid */}
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between px-10">
            {/* Mocking the specific layout from screenshot */}
            {renderSeat('1', false, true)}
            {renderSeat('2', false, true)}
            <View className="w-16" />
            <View className="w-16" />
            {renderSeat('3', true, false)}
            {renderSeat('4', true, false)}
            {renderSeat('5', false, true)}
            {renderSeat('6', false, true)}
            {renderSeat('7', false, false)} // Selected in mock
            {renderSeat('8', false, false)} // Selected in mock
            {renderSeat('9', true, false)}
            {renderSeat('10', true, false)}
            {renderSeat('11', false, true)}
            {renderSeat('12', false, true)}
            {renderSeat('13', false, true)}
            {renderSeat('14', false, true)}
            {renderSeat('15', true, false)}
            {renderSeat('16', true, false)}
            {renderSeat('17', true, false)}
            {renderSeat('18', true, false)}
            {renderSeat('19', false, true)}
            {renderSeat('20', false, true)}
            {renderSeat('21', false, true)}
            {renderSeat('22', false, true)}
          </View>
        </ScrollView>

        {/* Action */}
        <View className="px-6 pb-10 pt-4">
          <TouchableOpacity
            onPress={() => router.push('/bus/booking-success')}
            className="h-16 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-lg shadow-orange-200">
            <Text className="text-[18px] font-bold text-white">Confirm and pay now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
