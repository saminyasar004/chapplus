import ConfirmationModal from 'components/confirmation-modal';
import { useRouter } from 'expo-router';
import { Star } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Switch from './ui/switch';

export default function HomeProfileCard() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggle = (value: boolean) => {
    if (!value) {
      // Trying to turn off
      setIsModalVisible(true);
    } else {
      setIsEnabled(true);
    }
  };

  const confirmToggleOff = () => {
    setIsEnabled(false);
    setIsModalVisible(false);
  };

  const cancelToggleOff = () => {
    setIsEnabled(true);
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => router.push('/shop-details')}
        className="mx-6 mb-6 mt-5 rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm">
        <View className="flex-row">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
            }}
            className="h-14 w-14 rounded-full"
          />
          <View className="ml-4 flex-1">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold text-[#475569]">Bankok tea Ltd.</Text>
              <View className="flex-row items-center rounded-full bg-[#FFF7ED] px-2 py-0.5">
                <Star size={16} color="#FBBF24" fill="#FBBF24" />
                <Text className="ml-1 text-sm font-bold text-[#475569]">4.2</Text>
              </View>
            </View>
            <Text className="mb-2 text-sm font-medium text-[#94A3B8]">
              Merchant, Chittagong, BD
            </Text>

            <View className="flex-row items-center">
              <Text className="mr-3 text-lg font-semibold text-[#475569]">Available</Text>
              <Switch onValueChange={handleToggle} value={isEnabled} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <ConfirmationModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmToggleOff}
        onCancel={cancelToggleOff}
      />
    </>
  );
}
