import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { ArrowLeft, Clock, MapPin, PencilLine, ShoppingCart, Star } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ProductCard = ({ name, price, image }: { name: string; price: string; image: string }) => (
  <View className="mb-4 w-[48%] rounded-2xl border border-[#F1F5F9] bg-white p-3 shadow-sm">
    <View className="h-32 w-full items-center justify-center rounded-xl bg-[#F8FAFC]">
      <Image source={{ uri: image }} className="h-24 w-24" resizeMode="contain" />
    </View>
    <Text className="mt-3 text-sm font-medium text-[#64748B]">{name}</Text>
    <View className="mt-1 flex-row items-center justify-between">
      <Text className="text-base font-bold text-[#FF8C00]">{price}</Text>
      <TouchableOpacity className="h-8 w-8 items-center justify-center rounded-lg bg-[#FFF7ED]">
        <ShoppingCart size={16} color="#FF8C00" />
      </TouchableOpacity>
    </View>
  </View>
);

export default function ShopDetails() {
  const router = useRouter();

  return (
    <Layout>
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pb-4 pt-8">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-xl border border-[#F1F5F9]">
            <ArrowLeft size={24} color="#475569" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#475569]">Shop details</Text>
          <TouchableOpacity
            onPress={() => router.push('/ecommerce/shop-info-1')}
            className="flex-row items-center gap-x-1">
            <PencilLine size={20} color="#94A3B8" />
            <Text className="text-base font-medium text-[#94A3B8]">Edit</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Shop Information */}
          <View className="px-6 py-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl font-bold text-[#334155]">Biffco Enterprises</Text>
              <View className="flex-row items-center rounded-full bg-[#FFF7ED] px-3 py-1">
                <MapPin size={14} color="#FF8C00" fill="#FF8C00" />
                <Text className="ml-1 text-sm font-bold text-[#FF8C00]">Shop</Text>
              </View>
            </View>
            <View className="mt-2 flex-row items-center">
              <MapPin size={16} color="#94A3B8" />
              <Text className="ml-1 text-sm text-[#94A3B8]">
                kazi Deiry, Taiger Pass,Chittagong
              </Text>
            </View>
          </View>

          {/* Banner with Timing */}
          <View className="mx-6 mt-4 overflow-hidden rounded-3xl">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
              }}
              className="h-56 w-full"
            />
            <View className="absolute bottom-0 left-0 right-0 h-12 flex-row items-center justify-center bg-black/40 px-4">
              <Clock size={16} color="white" />
              <Text className="ml-2 text-sm font-bold uppercase tracking-wider text-white">
                Active 10:00 AM - 12:00 PM
              </Text>
            </View>
          </View>

          {/* About Section */}
          <View className="px-6 py-6">
            <Text className="text-lg font-bold text-[#334155]">About</Text>
            <Text className="mt-2 text-sm leading-5 text-[#94A3B8]">
              Biffco Enterprises offers whimsical fusion comfort food, like Cloud Burgers and
              Electric Soup. With a rotating mystery menu, flying nachos, and glowing decor, it's a
              fun, interactive dining experience where food surprises and delights in every bite.
            </Text>
          </View>

          {/* Rating Section */}
          <View className="px-6 pb-6">
            <View className="flex-row items-center">
              <Text className="text-base font-bold text-[#334155]">Overall Rating:</Text>
              <Text className="ml-2 text-base font-medium text-[#64748B]">4.2</Text>
              <View className="ml-2 flex-row gap-x-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} color="#FBBF24" fill="#FBBF24" />
                ))}
                <Star size={16} color="#E2E8F0" fill="#E2E8F0" />
              </View>
            </View>
          </View>

          {/* Featured Products */}
          <View className="px-6 pb-12">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-lg font-bold text-[#334155]">Featured products</Text>
              <TouchableOpacity>
                <Text className="text-sm font-medium text-[#FF8C00]">See all</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row flex-wrap justify-between">
              <ProductCard
                name="Sneaker"
                price="$100"
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop"
              />
              <ProductCard
                name="Fitbit Smartwatch"
                price="$150"
                image="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=200&auto=format&fit=crop"
              />
              <ProductCard
                name="Headphones"
                price="$80"
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop"
              />
              <ProductCard
                name="Smartphone"
                price="$999"
                image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200&auto=format&fit=crop"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
