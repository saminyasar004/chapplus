import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { Star, ChevronLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProductDetails() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(1); // Gray selected by default
  const [selectedSize, setSelectedSize] = useState('M');

  const colors = [
    { name: 'Beige', code: '#FFE4E1' },
    { name: 'Gray', code: '#8E8E93' },
    { name: 'Peach', code: '#FFE5B4' },
    { name: 'Light Blue', code: '#D1D5DB' },
  ];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  return (
    <Layout>
      <View className="flex-1 bg-white">
        {/* Header & Image Section */}
        <View className="relative h-[440px] w-full items-center justify-center bg-[#F1F5F9]">
          <View className="absolute left-6 top-12 z-10">
            <TouchableOpacity
              onPress={() => router.back()}
              className="h-10 w-10 items-center justify-center rounded-full border border-[#94A3B8]/20 bg-transparent">
              <ChevronLeft size={24} color="#475569" />
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1544117518-33902b449b61?q=80&w=800&auto=format&fit=crop',
            }}
            className="mt-8 h-72 w-72"
            resizeMode="contain"
          />

          {/* Pagination Dots */}
          <View className="absolute bottom-10 flex-row items-center space-x-2">
            <View className="h-2 w-6 rounded-full bg-[#334155]" />
            <View className="h-2 w-2 rounded-full border border-[#94A3B8]" />
            <View className="h-2 w-2 rounded-full border border-[#94A3B8]" />
            <View className="h-2 w-2 rounded-full border border-[#94A3B8]" />
          </View>
        </View>

        <ScrollView
          className="flex-1 px-8 pt-8"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}>
          {/* Title & Stock */}
          <View className="mb-3 flex-row items-baseline justify-between">
            <Text className="text-3xl font-semibold text-[#475569]">Headphone</Text>
            <Text className="text-sm text-[#475569]/80">Stock: 200</Text>
          </View>

          {/* Price */}
          <View className="mb-8">
            <Text className="text-3xl font-semibold text-[#475569]">$155 / $300</Text>
          </View>

          {/* Rating */}
          <View className="mb-8 flex-row items-center">
            <View className="mr-5 flex-row items-center rounded-full border border-[#FEF08A] bg-[#FEF9C3] px-4 py-1.5">
              <Star size={16} color="#EAB308" fill="#EAB308" />
              <Text className="ml-2 text-base font-semibold text-[#334155]">4.2</Text>
            </View>
            <Text className="text-base text-[#94A3B8]">132 Reviews</Text>
          </View>

          {/* Color Selection */}
          <View className="mb-8">
            <Text className="mb-4 text-base text-[#94A3B8]">Color</Text>
            <View className="w-full flex-row space-x-4">
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedColor(index)}
                  style={{ backgroundColor: color.code }}
                  className={`mr-5 h-8 w-8 rounded-full ${selectedColor === index ? 'border-2 border-[#334155]' : ''}`}
                />
              ))}
            </View>
          </View>

          {/* Size Selection */}
          <View className="mb-8">
            <Text className="mb-6 text-2xl font-bold text-[#334155]">Size</Text>
            <View className="flex-row flex-wrap gap-4">
              {sizes.map((size) => {
                const isDisabled = size === 'XXL' || size === 'XXXL';
                const isSelected = selectedSize === size;
                return (
                  <TouchableOpacity
                    key={size}
                    disabled={isDisabled}
                    onPress={() => setSelectedSize(size)}
                    className={`h-8 w-12 items-center justify-center rounded-xl ${isSelected ? 'border border-[#FF8C00] bg-white' : isDisabled ? 'bg-[#EFF6FF]' : 'border border-transparent bg-transparent'}`}>
                    <Text
                      className={`text-sm font-medium ${isSelected ? 'text-[#334155]' : isDisabled ? 'text-[#BFDBFE]' : 'text-[#475569]'}`}>
                      {size}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Description */}
          <View className="mt-4">
            <Text className="mb-4 text-lg font-semibold text-[#475569]">Product description</Text>
            <Text className="text-sm leading-6 text-[#94A3B8]">
              Our compact and foldable Bluetooth earbuds are renowned for their lightweight build,
              offering a convenient and portable solution for audiophiles on the go
            </Text>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
