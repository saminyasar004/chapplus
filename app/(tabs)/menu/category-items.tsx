import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, MoreHorizontal, Plus } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const columnWidth = (width - 60) / 2; // Subtracting padding and gap

const FoodItemCard = ({ image, title, price, description }: any) => (
  <View
    style={{ width: columnWidth }}
    className="mb-6 overflow-hidden rounded-2xl border border-[#F1F5F9] bg-white shadow-sm shadow-slate-200">
    <Image source={{ uri: image }} className="h-32 w-full" resizeMode="cover" />
    <View className="p-3">
      <View className="mb-1 flex-row items-center justify-between">
        <Text className="mr-1 flex-1 text-[15px] font-bold text-[#334155]" numberOfLines={1}>
          {title}
        </Text>
        <TouchableOpacity>
          <MoreHorizontal size={14} color="#94A3B8" />
        </TouchableOpacity>
      </View>
      <Text className="mb-2 text-[13px] font-bold text-[#FF8C00]">{price}</Text>
      <Text className="text-[11px] leading-4 text-[#94A3B8]" numberOfLines={2}>
        {description}
      </Text>
    </View>
  </View>
);

export default function CategoryItems() {
  const router = useRouter();
  const { title } = useLocalSearchParams();

  const items = [
    {
      id: 1,
      title: 'Jagung',
      price: '$104.56',
      description: 'Small plates, salads & sandwiches in an intima...',
      image:
        'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Kacang Polong',
      price: '$104.56',
      description: 'Small plates, salads & sandwiches in an intima...',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Daun Pakcoy',
      price: '$104.56',
      description: 'Small plates, salads & sandwiches in an intima...',
      image:
        'https://images.unsplash.com/photo-1540189567436-0208c6d2999e?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Seledri',
      price: '$104.56',
      description: 'Small plates, salads & sandwiches in an intima...',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Jagung',
      price: '$104.56',
      description: 'Small plates, salads & sandwiches in an intima...',
      image:
        'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Kacang Polong',
      price: '$104.56',
      description: 'Small plates, salads & sandwiches in an intima...',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 7,
      title: 'Daun Pakcoy',
      price: '$104.56',
      description: 'Small plates, salads & sandwiches in an intima...',
      image:
        'https://images.unsplash.com/photo-1540189567436-0208c6d2999e?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 8,
      title: 'Seledri',
      price: '$104.56',
      description: 'Small plates, salads & sandwiches in an intima...',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&auto=format&fit=crop',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text
          className="flex-1 text-center text-[20px] font-bold text-[#6D7437]"
          style={{ fontFamily: 'Inter' }}>
          {title || 'Vegetables'} Items
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/menu/add-item')}
          className="flex-row items-center rounded-lg border border-[#F1EEE9] bg-[#F8F6F2] px-3 py-1.5">
          <Plus size={14} color="#64748B" />
          <Text className="ml-1 text-[11px] font-bold text-[#64748B]">Add Items</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <Text className="mb-6 mt-4 text-[15px] font-bold text-[#6D7437]">
          Available {title || 'Vegetables'}
        </Text>

        <View className="flex-row flex-wrap justify-between">
          {items.map((item, index) => (
            <FoodItemCard
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
