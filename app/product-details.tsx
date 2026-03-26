import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { ArrowLeft, Edit3 } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProductDetails() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');

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
  ];

  return (
    <Layout>
      <View className="flex-1 bg-white pt-4">
        {/* Header & Image Section */}
        <View className="relative h-96 w-full items-center justify-center bg-[#F8FAFC]">
          <View className="absolute left-6 top-6 z-10 w-[88%] flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="h-10 w-10 items-center justify-center rounded-xl bg-white/80">
              <ArrowLeft size={24} color="#475569" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Text className="mr-1 text-lg font-medium text-[#94A3B8]">Edit</Text>
              <Edit3 size={18} color="#94A3B8" />
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop',
            }}
            className="h-80 w-80"
            resizeMode="contain"
          />
        </View>

        <ScrollView className="flex-1 px-6 pt-8" showsVerticalScrollIndicator={false}>
          {/* Time & Total */}
          <View className="mb-8 flex-row items-end justify-between">
            <Text className="text-xl font-semibold text-[#475569]">
              Time : (20/12/25 - 12/08/25 )
            </Text>
            <Text className="text-base font-normal text-[#94A3B8]">Total 100</Text>
          </View>

          {/* Color Selection */}
          <View className="mb-8">
            <Text className="mb-4 text-base font-medium text-[#475569]">Color</Text>
            <View className="flex-row gap-x-5">
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedColor(index)}
                  style={{ backgroundColor: color }}
                  className={`h-11 w-11 rounded-full ${selectedColor === index ? 'border-[3px] border-[#334155]' : ''}`}
                />
              ))}
            </View>
          </View>

          {/* Size Selection */}
          <View className="mb-8">
            <Text className="mb-5 text-xl font-bold text-[#334155]">Size</Text>
            <View className="flex-row flex-wrap gap-4">
              {sizes.map((size) => {
                const isDisabled = size === 'XXL' || size === 'XXXL';
                const isSelected = selectedSize === size;
                return (
                  <TouchableOpacity
                    key={size}
                    disabled={isDisabled}
                    onPress={() => setSelectedSize(size)}
                    className={`h-12 w-16 items-center justify-center rounded-xl border ${isSelected ? 'border-[#FF8C00] bg-white' : isDisabled ? 'border-[#F0F7FF] bg-[#F0F7FF]' : 'border-[#F1F5F9] bg-white'}`}>
                    <Text
                      className={`text-lg font-bold ${isSelected ? 'text-[#FF8C00]' : isDisabled ? 'text-[#D0E7FF]' : 'text-[#475569]'}`}>
                      {size}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View className="mb-8">
            <Text className="text-lg font-medium text-[#475569]">
              Product Required: <Text className="text-[#94A3B8]">20</Text>
            </Text>
          </View>

          {/* Notes Section */}
          <View className="mb-10">
            <View className="mb-6 flex-row items-center justify-between">
              <Text className="text-2xl font-bold text-[#334155]">Notes</Text>
              <TouchableOpacity onPress={() => router.push('/product-notes')}>
                <Text className="text-lg font-semibold text-[#6366F1]">View all</Text>
              </TouchableOpacity>
            </View>

            {notes.map((note) => (
              <View key={note.id} className="mb-8 border-b border-[#F1F5F9] pb-6 last:border-0">
                <Text className="mb-3 text-lg font-medium text-[#475569]">Order{note.orderId}</Text>
                <Text className="text-base leading-[26px] text-[#64748B]">{note.text}</Text>
              </View>
            ))}
          </View>
          <View className="h-10" />
        </ScrollView>
      </View>
    </Layout>
  );
}
