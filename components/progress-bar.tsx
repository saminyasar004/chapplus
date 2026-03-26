import React from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
  activeSteps: number; // 1 to 8
}

export default function ProgressBar({ activeSteps }: ProgressBarProps) {
  const totalSteps = 8;

  return (
    <View className="flex-row gap-x-1.5 px-6 py-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          className={`h-1.5 flex-1 rounded-full ${
            index < activeSteps ? 'bg-[#FF8C00]' : 'bg-[#94A3B8]'
          }`}
        />
      ))}
    </View>
  );
}
