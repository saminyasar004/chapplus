import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from './progress-bar';

interface ShopHeaderProps {
  title: string;
  activeSteps: number;
  totalSteps?: number;
  onBack?: () => void;
}

export default function ShopHeader({ title, activeSteps, totalSteps, onBack }: ShopHeaderProps) {
  const router = useRouter();

  return (
    <View className="bg-white pt-12">
      <View className="mb-4 flex-row items-center px-6">
        <TouchableOpacity onPress={onBack || (() => router.back())} className="mr-4">
          <ArrowLeft size={24} color="#64748B" />
        </TouchableOpacity>
        <View className="mr-8 flex-1 items-center">
          <Text className="text-xl font-bold text-[#334155]">{title}</Text>
        </View>
      </View>
      <ProgressBar activeSteps={activeSteps} totalSteps={totalSteps} />
    </View>
  );
}
