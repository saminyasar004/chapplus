import React from 'react';
import { Text, TextInput, View, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  label: string;
  isTextArea?: boolean;
}

export default function CustomInput({ label, isTextArea, ...props }: CustomInputProps) {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm font-semibold text-[#667085]">{label}</Text>
      <View
        className={`rounded-xl border border-[#E5E7EB] bg-white px-4 shadow-sm ${
          isTextArea ? 'h-32' : 'h-min'
        } justify-center`}>
        <TextInput
          className="text-base text-[#111827]"
          placeholderTextColor="#9CA3AF"
          multiline={isTextArea}
          textAlignVertical={isTextArea ? 'top' : 'center'}
          {...props}
        />
      </View>
    </View>
  );
}
