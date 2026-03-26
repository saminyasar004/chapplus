import React from 'react';
import { Pressable, View } from 'react-native';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  scale?: number;
}

export default function Switch({ value, onValueChange, scale = 1 }: SwitchProps) {
  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      style={{ transform: [{ scale }] }}
      className={`h-6 w-11 rounded-full p-1 ${value ? 'bg-[#FF8C00]' : 'bg-[#E2E8F0]'}`}>
      <View
        className={`h-4 w-4 rounded-full bg-white ${value ? 'self-end' : 'self-start'}`}
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 2,
        }}
      />
    </Pressable>
  );
}
