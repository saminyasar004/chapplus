import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { ArrowLeft, Edit3 } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProductNotes() {
  const router = useRouter();
  const colors = ['#FFEDD5', '#64748B', '#FFEDD5', '#CBD5E1'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  const notes = [
    {
      id: 1,
      orderId: '#14641',
      text: 'Our compact and foldable Bluetooth earbuds are renowned for their lightweight build, offering a convenient and portable solution for audiophiles on the go',
    },
    {
      id: 2,
      orderId: '#14641',
      text: 'Our compact and foldable Bluetooth earbuds are renowned for their lightweight build, offering a convenient and portable solution for audiophiles on the go',
    },
    {
      id: 3,
      orderId: '#14641',
      text: 'Our compact and foldable Bluetooth earbuds are renowned for their lightweight build, offering a convenient and portable solution for audiophiles on the go',
    },
    { id: 4, orderId: '#14641', text: '---' },
    { id: 5, orderId: '#14641', text: '---' },
    {
      id: 6,
      orderId: '#14641',
      text: 'Our compact and foldable Bluetooth earbuds are renowned for their lightweight build, offering a convenient and portable solution for audiophiles on the go',
    },
    { id: 7, orderId: '#14641', text: '---' },
  ];

  return (
    <Layout>
      <View className="flex-1 bg-white pt-4">
        {/* Header */}
        <View className="flex-row items-center justify-between border-b border-[#F1F5F9] px-6 pb-4 pt-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-xl border border-[#F1F5F9]">
            <ArrowLeft size={24} color="#475569" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#334155]">Notes</Text>
          <Text className="text-base font-normal text-[#94A3B8]">Product Required: 25</Text>
        </View>

        <ScrollView className="flex-1 px-6 pt-8" showsVerticalScrollIndicator={false}>
          {/* Color Selection (Contextual) */}
          <View className="mb-8">
            <Text className="mb-4 text-base font-medium text-[#94A3B8]">Color</Text>
            <View className="flex-row gap-x-5">
              {colors.map((color, index) => (
                <View
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`h-6 w-6 rounded-full ${index === 1 ? 'border-[1px] border-[#334155]' : ''}`}
                />
              ))}
            </View>
          </View>

          {/* Size Selection (Contextual) */}
          <View className="mb-10">
            <Text className="mb-5 text-base font-bold text-[#334155]">Size</Text>
            <View className="flex-row flex-wrap gap-4">
              {sizes.map((size) => {
                const isSelected = size === 'M';
                const isDisabled = size === 'XXL' || size === 'XXXL';
                return (
                  <View
                    key={size}
                    className={`h-8 w-10 items-center justify-center rounded-md border ${isSelected ? 'border-[#FF8C00] bg-white' : isDisabled ? 'border-[#F0F7FF] bg-[#F0F7FF]' : 'border-[#F1F5F9] bg-white'}`}>
                    <Text
                      className={`text-base font-semibold ${isSelected ? 'text-[#FF8C00]' : isDisabled ? 'text-[#D0E7FF]' : 'text-[#475569]'}`}>
                      {size}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Detailed Notes List */}
          <View className="pb-10">
            {notes.map((note) => (
              <View key={note.id} className="mb-8 border-b border-[#F1F5F9] pb-6 last:border-0">
                <View className="mb-3 flex-row items-center justify-between">
                  <Text className="text-lg font-medium text-[#475569]">Order{note.orderId}</Text>
                  <TouchableOpacity>
                    <Edit3 size={18} color="#94A3B8" />
                  </TouchableOpacity>
                </View>
                <Text className="text-base leading-[26px] text-[#64748B]">{note.text}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
