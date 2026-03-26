import Layout from 'components/layout';
import Switch from 'components/ui/switch';
import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronRight, Image as ImageIcon, Plus, Trash2, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddProductStep2() {
  const router = useRouter();
  const [discountEnabled, setDiscountEnabled] = useState(true);

  return (
    <Layout>
      <View className="flex-1 bg-white pt-4">
        {/* Header */}
        <View className="flex-row items-center justify-between border-b border-[#F1F5F9] px-6 pb-3 pt-4">
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={22} color="#475569" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#334155]">Add Product</Text>
          <TouchableOpacity onPress={() => router.dismissAll()}>
            <X size={22} color="#CBD5E1" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 pt-5" showsVerticalScrollIndicator={false}>
          {/* Add Option Header */}
          <View className="mb-4 flex-row items-center justify-between px-6">
            <Text className="text-xl font-bold text-[#334155]">Add Product</Text>
            <TouchableOpacity className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-white px-3 py-1.5 shadow-sm">
              <Plus size={18} color="#334155" />
              <Text className="ml-2 text-base font-semibold text-[#334155]">Add Option</Text>
            </TouchableOpacity>
          </View>

          {/* Option Card */}
          <View className="mx-6 mb-6 rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm">
            <View className="mb-5 flex-row items-center justify-between">
              <Text className="text-lg font-bold text-[#334155]">Option 1</Text>
              <TouchableOpacity className="rounded-lg bg-[#FEF2F2] p-1.5">
                <Trash2 size={20} color="#EF4444" />
              </TouchableOpacity>
            </View>

            <View className="mb-5">
              <Text className="mb-2 text-base font-semibold text-[#334155]">
                Total amount product
              </Text>
              <TextInput
                value="20"
                className="h-12 w-full rounded-xl bg-[#F8FAFC] px-4 text-base font-bold text-[#334155]"
              />
            </View>

            <View className="mb-5">
              <Text className="mb-2 text-base font-semibold text-[#334155]">Select color</Text>
              <TouchableOpacity className="h-12 w-full flex-row items-center justify-between rounded-xl bg-[#F8FAFC] px-4">
                <Text className="text-base text-[#94A3B8]">Select one</Text>
                <ChevronRight size={18} color="#CBD5E1" />
              </TouchableOpacity>
            </View>

            <View className="mb-5">
              <Text className="text-base font-semibold text-[#334155]">
                Select Type{' '}
                <Text className="text-sm font-normal text-[#94A3B8]">
                  (Select one categorizing base)
                </Text>
              </Text>
              <TouchableOpacity className="mt-2 h-12 w-full flex-row items-center justify-between rounded-xl bg-[#F8FAFC] px-4">
                <Text className="text-base text-[#94A3B8]">Enter here</Text>
                <ChevronRight size={18} color="#CBD5E1" />
              </TouchableOpacity>
            </View>

            <View className="mb-2">
              <Text className="mb-3 text-base font-semibold text-[#334155]">
                Upload images (Max 3)
              </Text>
              <View className="h-12 w-full flex-row items-center justify-between rounded-xl bg-[#F8FAFC] px-4">
                <TouchableOpacity className="rounded-lg border border-[#F1F5F9] bg-white px-4 py-1.5">
                  <Text className="text-sm font-bold text-[#475569]">Choose file</Text>
                </TouchableOpacity>
                <Text className="ml-4 flex-1 text-xs italic text-[#94A3B8]" numberOfLines={1}>
                  ‘akdjI;fjasdlsjfladsl. jpeg
                </Text>
              </View>
              <View className="mt-4 flex-row gap-x-3">
                {[1, 2, 3].map((i) => (
                  <View
                    key={i}
                    className="relative h-16 w-16 items-center justify-center rounded-xl bg-[#F1F5F9]">
                    <ImageIcon size={24} color="#CBD5E1" />
                    <TouchableOpacity className="absolute -right-1.5 -top-1.5 rounded-full border border-[#F1F5F9] bg-white p-1 shadow-sm">
                      <Trash2 size={10} color="#EF4444" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Additional Info */}
          <View className="mb-6 px-6">
            <Text className="mb-2 text-base font-semibold text-[#334155]">
              Product is returnable within
            </Text>
            <TextInput
              placeholder="E.g. 7 days"
              placeholderTextColor="#94A3B8"
              className="h-12 w-full rounded-xl border border-[#F1F5F9] px-4 text-base text-[#334155]"
            />
          </View>

          {/* Discount Section */}
          <View className="mx-6 mb-8 rounded-2xl border border-[#F1F5F9] bg-white p-5 shadow-sm">
            <View className="mb-1 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Text className="text-xl">%</Text>
                <Text className="ml-2 text-lg font-bold text-[#334155]">
                  Available for discount
                </Text>
              </View>
              <Switch scale={0.8} value={discountEnabled} onValueChange={setDiscountEnabled} />
            </View>
            <Text className="mb-5 text-sm text-[#94A3B8]">
              Discount Price and actual price will be shown
            </Text>

            <View className="mb-5">
              <Text className="mb-2 text-base font-semibold text-[#334155]">
                Discount Percentage
              </Text>
              <View className="h-16 w-full rounded-xl bg-[#F8FAFC] p-3">
                <Text className="text-lg font-bold text-[#334155]">10%</Text>
                <Text className="text-xs text-[#94A3B8]">
                  Set up promotional pricing for this service
                </Text>
              </View>
            </View>

            <View className="flex-row gap-x-3">
              <View className="flex-1">
                <Text className="mb-1.5 text-base font-semibold text-[#334155]">Start Date</Text>
                <View className="h-12 justify-center rounded-xl bg-[#F8FAFC] px-4">
                  <Text className="text-base font-bold text-[#334155]">19/10/2019</Text>
                </View>
              </View>
              <View className="flex-1">
                <Text className="mb-1.5 text-base font-semibold text-[#334155]">End Date</Text>
                <View className="h-12 justify-center rounded-xl bg-[#F8FAFC] px-4">
                  <Text className="text-base font-bold text-[#334155]">19/10/2019</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="mb-10 px-6">
            <TouchableOpacity
              onPress={() => router.replace('/product-management')}
              className="h-14 w-full items-center justify-center rounded-xl bg-[#FF8C00] shadow-md shadow-orange-500">
              <Text className="text-xl font-bold text-white">Create Product</Text>
            </TouchableOpacity>
          </View>
          <View className="h-10" />
        </ScrollView>
      </View>
    </Layout>
  );
}
