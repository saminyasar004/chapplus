import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, CheckCircle, Plus, X } from 'lucide-react-native';
import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

type Seat = {
  id: string;
  label: string;
  isDeleted: boolean;
};

export default function AddNewBus() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Step 1 State
  const [regNumber, setRegNumber] = useState('');
  const [totalSeats, setTotalSeats] = useState('');
  const [rows, setRows] = useState('');
  const [cols, setCols] = useState('');

  // Step 2 State
  const [seats, setSeats] = useState<Seat[]>([]);

  const handleInitializeGrid = () => {
    const numRows = parseInt(rows) || 0;
    const numCols = parseInt(cols) || 0;
    const newSeats: Seat[] = [];

    for (let r = 0; r < numRows; r++) {
      const rowLabel = String.fromCharCode(65 + r); // A, B, C...
      for (let c = 1; c <= numCols; c++) {
        newSeats.push({
          id: `${rowLabel}${c}`,
          label: `${rowLabel}${c}`,
          isDeleted: false,
        });
      }
    }
    setSeats(newSeats);
    setStep(2);
  };

  const toggleSeat = (id: string) => {
    setSeats((prev) => prev.map((s) => (s.id === id ? { ...s, isDeleted: !s.isDeleted } : s)));
  };

  const renderProgressBar = () => (
    <View className="mb-8 flex-row items-center justify-between px-10">
      {[1, 2, 3].map((s, index) => (
        <View
          key={s}
          className={`h-1 flex-1 rounded-full ${
            step >= s ? 'bg-[#FF8C00]' : 'bg-[#E2E8F0]'
          } ${index > 0 ? 'ml-3' : ''}`}
        />
      ))}
    </View>
  );

  if (!mounted) return null;

  if (step === 4) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-10">
        <View className="w-full items-center rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <View className="mb-4 h-14 w-14 items-center justify-center rounded-full bg-[#10B981]">
            <CheckCircle size={28} color="white" />
          </View>
          <Text className="mb-1 text-center text-lg font-bold text-[#64748B]">Bus Added</Text>
          <Text className="mb-6 text-center text-lg font-bold text-[#64748B]">Successfully</Text>
          <TouchableOpacity
            onPress={() => router.replace('/(tabs)/order')}
            className="h-14 w-full flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-sm shadow-orange-200">
            <ArrowLeft size={18} color="white" className="mr-2" />
            <Text className="text-[17px] font-bold text-white">Back To Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const columnWidth = (width - 48 - 15 * (parseInt(cols) - 1)) / (parseInt(cols) || 4);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity
          onPress={() => (step > 1 ? setStep(step - 1) : router.back())}
          className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <View className="mr-8 flex-1 items-center">
          <Text className="text-[20px] font-bold text-[#848F4B]">
            {step === 1 ? 'Add New Bus' : 'Bus Seat Details'}
          </Text>
        </View>
      </View>

      {renderProgressBar()}

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}>
        {step === 1 && (
          <View className="px-6">
            <View className="mb-6">
              <Text className="mb-3 text-[15px] text-[#64748B]">Registration Number</Text>
              <TextInput
                placeholder="Enter here"
                placeholderTextColor="#CBD5E1"
                value={regNumber}
                onChangeText={setRegNumber}
                className="h-14 rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-5 text-base text-[#334155]"
              />
            </View>

            <View className="mb-6">
              <Text className="mb-3 text-[15px] text-[#64748B]">Image</Text>
              <View className="h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-2">
                <TouchableOpacity className="rounded-xl bg-[#D9E2EE] px-5 py-2.5">
                  <Text className="text-sm font-medium text-[#475569]">Choose file</Text>
                </TouchableOpacity>
                <Text className="ml-4 flex-1 text-base text-[#CBD5E1]">Select a file</Text>
              </View>
            </View>

            <View className="mb-6">
              <Text className="mb-3 text-[15px] text-[#64748B]">Total Seats</Text>
              <TextInput
                placeholder="Enter Here"
                placeholderTextColor="#CBD5E1"
                keyboardType="numeric"
                value={totalSeats}
                onChangeText={setTotalSeats}
                className="h-14 rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-5 text-base text-[#334155]"
              />
            </View>

            <View className="mb-6">
              <Text className="mb-3 text-[20px] text-[#64748B]">How many rows do you need?</Text>
              <TextInput
                placeholder="Enter here"
                placeholderTextColor="#CBD5E1"
                keyboardType="numeric"
                value={rows}
                onChangeText={setRows}
                className="h-14 rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-5 text-base text-[#334155]"
              />
            </View>

            <View className="mb-10">
              <Text className="mb-3 text-[20px] text-[#64748B]">
                How many columns do you need? (Max 4)
              </Text>
              <TextInput
                placeholder="Enter here"
                placeholderTextColor="#CBD5E1"
                keyboardType="numeric"
                value={cols}
                onChangeText={setCols}
                className="h-14 rounded-2xl border border-[#F1F5F9] bg-[#FAFAFA] px-5 text-base text-[#334155]"
              />
            </View>

            <TouchableOpacity
              onPress={handleInitializeGrid}
              className="mt-6 h-16 w-full flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-sm shadow-orange-200">
              <Text className="mr-2 text-[18px] font-bold text-white">Add Bus to Chap</Text>
              <ArrowRight size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}

        {step === 2 && (
          <View className="px-6">
            <Text className="mb-6 text-xl font-bold text-[#64748B]">Seats</Text>
            <Text className="mb-8 text-lg font-bold text-[#64748B]">
              Delete the seats that you don't need..
            </Text>

            <View className="flex-row flex-wrap">
              {seats.map((seat, index) => (
                <TouchableOpacity
                  key={seat.id}
                  onPress={() => toggleSeat(seat.id)}
                  style={{
                    width: columnWidth,
                    marginRight: (index + 1) % (parseInt(cols) || 4) === 0 ? 0 : 15,
                  }}
                  className={`mb-4 aspect-square items-center justify-center rounded-2xl border ${
                    seat.isDeleted
                      ? 'border-[#FF4D4D] bg-[#FF4D4D]'
                      : 'border-[#E2E8F0] bg-[#F8FAFC]'
                  }`}>
                  {seat.isDeleted ? (
                    <X size={28} color="white" strokeWidth={3} />
                  ) : (
                    <Text className="text-base font-bold text-[#22C55E]">{seat.label}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              onPress={() => setStep(3)}
              className="mt-10 h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-sm shadow-orange-200">
              <Text className="text-[18px] font-bold text-white">Next</Text>
            </TouchableOpacity>
          </View>
        )}

        {step === 3 && (
          <View className="px-6">
            <Text className="mb-8 text-xl font-bold text-[#64748B]">Final Seats positions</Text>

            <View className="flex-row flex-wrap">
              {seats.map((seat, index) => {
                const isVisible = !seat.isDeleted;
                return (
                  <View
                    key={seat.id}
                    style={{
                      width: columnWidth,
                      marginRight: (index + 1) % (parseInt(cols) || 4) === 0 ? 0 : 15,
                      opacity: isVisible ? 1 : 0,
                    }}
                    className="mb-4 aspect-square items-center justify-center rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC]">
                    <Text className="text-base font-bold text-[#22C55E]">{seat.label}</Text>
                  </View>
                );
              })}
            </View>

            <TouchableOpacity
              onPress={() => setStep(4)}
              className="mt-10 h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-sm shadow-orange-200">
              <Text className="text-[18px] font-bold text-white">Confirm and Set</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
