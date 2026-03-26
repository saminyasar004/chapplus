import Layout from 'components/layout';
import Switch from 'components/ui/switch';
import { useRouter } from 'expo-router';
import { ArrowLeft, Calendar, ChevronDown, Filter, Search, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ProductItem = ({
  name,
  image,
  isAvailable,
  onToggle,
}: {
  name: string;
  image: string;
  isAvailable: boolean;
  onToggle: (val: boolean) => void;
}) => (
  <View className="mb-4 w-[48%] overflow-hidden rounded-3xl border border-[#F1F5F9] bg-white shadow-sm">
    <View className="h-36 w-full items-center justify-center bg-[#F8FAFC] p-4">
      <Image source={{ uri: image }} className="h-28 w-28" resizeMode="contain" />
    </View>
    <View className="bg-white p-3">
      <Text className="text-base font-bold text-[#475569]">{name}</Text>
      <View className="mt-2 flex-row items-center justify-between">
        <Text className="text-sm font-medium text-[#94A3B8]">Unavailable</Text>
        <Switch value={isAvailable} onValueChange={onToggle} />
      </View>
    </View>
  </View>
);

const OrderItem = ({ name, count, image }: { name: string; count: number; image: string }) => (
  <View className="mb-4 w-[48%] overflow-hidden rounded-3xl border border-[#F1F5F9] bg-white shadow-sm">
    <View className="h-36 w-full items-center justify-center bg-[#F8FAFC] p-4">
      <Image source={{ uri: image }} className="h-28 w-28" resizeMode="contain" />
    </View>
    <View className="border-t border-[#F1F5F9] bg-[#F8FAFC] p-3">
      <Text className="text-center text-base font-medium text-[#475569]">
        {name} ({count})
      </Text>
    </View>
  </View>
);

export default function ProductManagement() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'list' | 'orders'>('list');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Sneaker',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop',
      available: false,
    },
    {
      id: 2,
      name: 'Sneaker',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop',
      available: true,
    },
    {
      id: 3,
      name: 'Sneaker',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop',
      available: false,
    },
    {
      id: 4,
      name: 'Sneaker',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop',
      available: false,
    },
  ]);

  return (
    <Layout>
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pb-2 pt-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-xl border border-[#F1F5F9]">
            <ArrowLeft size={24} color="#475569" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#475569]">Product Management</Text>
          <View className="w-10" />
        </View>

        {/* Tab Selection */}
        <View className="flex-row items-center justify-between border-b border-[#F1F5F9] px-6 py-4">
          <View className="flex-row gap-x-6">
            <TouchableOpacity onPress={() => setActiveTab('list')}>
              <Text
                className={`text-base font-bold ${activeTab === 'list' ? 'text-[#FF8C00]' : 'text-[#94A3B8]'}`}>
                Products List
              </Text>
              {activeTab === 'list' && <View className="mt-1 h-0.5 w-full bg-[#FF8C00]" />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab('orders')}>
              <Text
                className={`text-base font-bold ${activeTab === 'orders' ? 'text-[#FF8C00]' : 'text-[#94A3B8]'}`}>
                Current Orders
              </Text>
              {activeTab === 'orders' && <View className="mt-1 h-0.5 w-full bg-[#FF8C00]" />}
            </TouchableOpacity>
          </View>

          {activeTab === 'orders' && (
            <TouchableOpacity
              onPress={() => setIsFilterVisible(true)}
              className="flex-row items-center rounded-full border border-[#FFDBA1] px-3 py-1.5">
              <Filter size={16} color="#FF8C00" />
              <Text className="ml-1 text-sm font-bold text-[#FF8C00]">Filters</Text>
              <ChevronDown size={16} color="#FF8C00" className="ml-1" />
            </TouchableOpacity>
          )}

          {activeTab === 'list' && (
            <TouchableOpacity>
              <Text className="text-base font-bold text-[#FF8C00]">Add product</Text>
            </TouchableOpacity>
          )}
        </View>

        <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
          {activeTab === 'list' ? (
            <View className="flex-row flex-wrap justify-between pb-10">
              {products.map((p) => (
                <ProductItem
                  key={p.id}
                  name={p.name}
                  image={p.image}
                  isAvailable={p.available}
                  onToggle={(val) => {
                    const newProducts = products.map((item) =>
                      item.id === p.id ? { ...item, available: val } : item
                    );
                    setProducts(newProducts);
                  }}
                />
              ))}
            </View>
          ) : (
            <View className="pb-10">
              <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-sm font-bold text-[#334155]">(20/12/2025 - 12/08/25)</Text>
                <TouchableOpacity>
                  <Text className="text-sm font-medium text-[#FF8C00]">Clear filter</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row flex-wrap justify-between">
                <OrderItem
                  name="Sneaker"
                  count={100}
                  image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop"
                />
                <OrderItem
                  name="Fitbit Smartwatch"
                  count={100}
                  image="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=200&auto=format&fit=crop"
                />
                <OrderItem
                  name="Smartphone"
                  count={40}
                  image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200&auto=format&fit=crop"
                />
                <OrderItem
                  name="Headphone"
                  count={20}
                  image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop"
                />
              </View>
            </View>
          )}
        </ScrollView>

        {/* Filter Modal */}
        <Modal visible={isFilterVisible} transparent animationType="slide">
          <View className="flex-1 justify-end bg-black/50">
            <View className="rounded-t-3xl bg-white p-6">
              <View className="mb-6 flex-row items-center justify-between">
                <Text className="text-3xl font-bold text-[#334155]">Filter by</Text>
                <TouchableOpacity onPress={() => setIsFilterVisible(false)}>
                  <X size={24} color="#CBD5E1" />
                </TouchableOpacity>
              </View>

              <View className="mb-6">
                <Text className="mb-3 text-xl font-medium text-[#475569]">Date or date range</Text>
                <View className="relative">
                  <TextInput
                    placeholder="Select a date"
                    placeholderTextColor="#CBD5E1"
                    className="h-14 w-full rounded-xl border border-[#F1F5F9] px-4 text-base"
                  />
                  <View className="absolute right-4 top-4">
                    <Calendar size={24} color="#CBD5E1" />
                  </View>
                </View>
              </View>

              <View className="mb-6">
                <Text className="mb-3 text-xl font-medium text-[#475569]">Product name</Text>
                <View className="relative">
                  <View className="h-14 w-full flex-row items-center justify-between rounded-xl border border-[#F1F5F9] px-4">
                    <Text className="text-base text-[#CBD5E1]">Select</Text>
                    <ChevronDown size={24} color="#CBD5E1" />
                  </View>
                </View>
              </View>

              <View className="mb-10 flex-row flex-wrap gap-3">
                {['Sneakers', 'Watch'].map((tag) => (
                  <View
                    key={tag}
                    className="flex-row items-center rounded-full border border-[#F1F5F9] px-4 py-2">
                    <Text className="mr-2 text-base font-medium text-[#334155]">{tag}</Text>
                    <X size={16} color="#94A3B8" />
                  </View>
                ))}
              </View>

              <TouchableOpacity
                onPress={() => setIsFilterVisible(false)}
                className="mb-6 h-16 w-full items-center justify-center rounded-xl bg-[#FF8C00]">
                <Text className="text-2xl font-bold text-white">Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </Layout>
  );
}
