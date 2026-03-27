import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, ChevronDown, MapPin } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateOrder() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Form State
  const [addressType, setAddressType] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [roadName, setRoadName] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [floorNo, setFloorNo] = useState('');
  const [area, setArea] = useState('');

  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [contact, setContact] = useState('');

  const InputField = ({
    label,
    placeholder,
    value,
    setValue,
    hasDropdown = false,
  }: {
    label: string;
    placeholder: string;
    value: string;
    setValue: (val: string) => void;
    hasDropdown?: boolean;
  }) => (
    <View className="mb-5">
      <Text className="mb-2 text-[15px] font-medium text-[#475569]">{label}</Text>
      <View className="flex-row items-center justify-between rounded-xl border border-[#F1F5F9] bg-white px-4 py-3.5">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          value={value}
          onChangeText={setValue}
          className="flex-1 text-[15px] text-[#1E293B]"
        />
        {hasDropdown && <ChevronDown size={20} color="#64748B" />}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text
          className="mr-8 flex-1 text-center text-[19px] font-bold text-[#6D7437]"
          style={{ fontFamily: 'Inter' }}>
          Edit Order
        </Text>
      </View>

      {/* Progress Bar */}
      <View className="mb-6 mt-4 flex-row justify-center gap-x-2 px-16">
        <View
          className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-[#FF8C00]' : 'bg-[#E2E8F0]'}`}
        />
        <View
          className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-[#FF8C00]' : 'bg-[#E2E8F0]'}`}
        />
        <View
          className={`h-1 flex-1 rounded-full ${step >= 3 ? 'bg-[#FF8C00]' : 'bg-[#E2E8F0]'}`}
        />
      </View>

      {/* Scrollable Form Content */}
      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        {step === 1 && (
          <View className="mt-2 pb-8">
            <InputField
              label="Address type"
              placeholder="Choose one"
              value={addressType}
              setValue={setAddressType}
            />
            <InputField
              label="Reciver name"
              placeholder="Enter here"
              value={receiverName}
              setValue={setReceiverName}
            />
            <InputField
              label="Road/ Street Name"
              placeholder="Enter here"
              value={roadName}
              setValue={setRoadName}
            />
            <InputField
              label="House No"
              placeholder="Enter here"
              value={houseNo}
              setValue={setHouseNo}
              hasDropdown
            />
            <InputField
              label="Floor No"
              placeholder="Enter here"
              value={floorNo}
              setValue={setFloorNo}
            />
            <InputField
              label="Area or locality"
              placeholder="Enter here"
              value={area}
              setValue={setArea}
            />
          </View>
        )}

        {step === 2 && (
          <View className="mt-2 pb-8">
            <InputField label="City" placeholder="Enter here" value={city} setValue={setCity} />
            <InputField
              label="District"
              placeholder="Enter here"
              value={district}
              setValue={setDistrict}
            />
            <InputField
              label="Postal Code"
              placeholder="Enter here"
              value={postalCode}
              setValue={setPostalCode}
            />
            <InputField
              label="Contact number"
              placeholder="Enter here"
              value={contact}
              setValue={setContact}
            />
          </View>
        )}

        {step === 3 && (
          <View className="relative -mx-6 -mt-8 h-[600px] w-[600px]" style={{ width: '150%' }}>
            {/* Extended width to fill screen edges, ScrollView has px-6 which we offset */}
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop',
              }}
              className="absolute h-full w-full"
              resizeMode="cover"
            />

            {/* Floating Search Bar */}
            <View className="absolute left-10 right-28 top-6 z-10 w-11/12 max-w-[360px] rounded-xl bg-white p-4 shadow-md">
              <View className="flex-row items-center border-b border-[#F1F5F9] pb-3">
                <TextInput
                  placeholder="Street, road."
                  placeholderTextColor="#94A3B8"
                  className="flex-1 text-[15px] text-[#1E293B]"
                />
                <TouchableOpacity>
                  <Text className="mr-3 text-[14px] font-medium text-[#FF8C00]">Locate me</Text>
                </TouchableOpacity>
                <TouchableOpacity className="rounded-lg bg-[#FF8C00] p-2">
                  <ArrowRight size={20} color="white" />
                </TouchableOpacity>
              </View>

              <View className="pt-3">
                <Text className="mb-2 text-[15px] font-bold text-[#1E293B]">Suggestions</Text>
                <Text className="border-b border-[#F1F5F9] pb-2 text-[13px] text-[#64748B]">
                  Dalas, TX.
                </Text>
                <Text className="pt-2 text-[13px] text-[#64748B]">Dalas, TX.</Text>
              </View>
            </View>

            {/* Map Marker Pin */}
            <View className="absolute left-1/4 top-1/2 -ml-8 -mt-12 items-center">
              <MapPin size={40} color="#EF4444" fill="#EF4444" />
              <View className="mt-1 rounded border border-red-200 bg-white/90 px-2 py-0.5">
                <Text className="text-[10px] font-bold text-red-500">Hybrid GPS</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bottom Sticky Button Area */}
      <View
        className="bg-white px-6 py-5"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 10,
        }}>
        {step === 1 ? (
          <TouchableOpacity
            onPress={() => setStep(2)}
            className="items-center justify-center rounded-xl bg-[#FF8C00] py-4 shadow-md shadow-orange-200">
            <Text className="text-[16px] font-bold text-white">Next</Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-row gap-x-4">
            <TouchableOpacity
              onPress={() => setStep(step - 1)}
              className="flex-1 items-center justify-center rounded-xl border border-[#FF8C00] bg-white py-4">
              <View className="flex-row items-center">
                <ArrowLeft size={18} color="#94A3B8" className="mr-2" />
                <Text className="text-[16px] font-bold text-[#94A3B8]">Previous</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (step === 2 ? setStep(3) : router.back())}
              className="flex-1 items-center justify-center rounded-xl bg-[#FF8C00] py-4 shadow-md shadow-orange-200">
              <View className="flex-row items-center">
                <Text className="mr-2 text-[16px] font-bold text-white">
                  {step === 2 ? 'Next' : 'Create'}
                </Text>
                <ArrowRight size={18} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
