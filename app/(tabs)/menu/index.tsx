import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { MoreHorizontal, Plus, ChevronRight, Pencil } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef } from 'react';

const ShadcnSwitch = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: (v: boolean) => void;
}) => {
  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(value ? 16 : 2, { damping: 15, stiffness: 120 }) }],
  }));

  const trackStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(value ? '#FF8C00' : '#E2E8F0', { duration: 200 }),
  }));

  return (
    <Pressable onPress={() => onValueChange(!value)}>
      <Animated.View style={trackStyle} className="h-6 w-10 justify-center rounded-full">
        <Animated.View
          style={thumbStyle}
          className="h-[18px] w-[18px] rounded-full bg-white shadow-sm"
        />
      </Animated.View>
    </Pressable>
  );
};

// ─── Restaurant Components ───────────────────────────────────────
const CategoryCard = ({
  image,
  title,
  available,
  isActive,
  onToggle,
  onPress,
  onMorePress,
}: any) => {
  const moreIconRef = useRef<View>(null);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="mb-4 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm shadow-slate-200">
      <Image source={{ uri: image }} className="h-16 w-16 rounded-xl" />
      <View className="ml-4 flex-1">
        <Text className="text-[17px] font-bold text-[#6D7437]">{title}</Text>
        <Text className="mt-1 text-[13px] text-[#94A3B8]">Available: {available}</Text>
        <View className="mt-2 flex-row items-center">
          <Text className="mr-2 text-[13px] text-[#64748B]">Active</Text>
          <ShadcnSwitch value={isActive} onValueChange={onToggle} />
        </View>
      </View>
      <TouchableOpacity
        ref={moreIconRef}
        onPress={() => {
          moreIconRef.current?.measure((x, y, width, height, pageX, pageY) => {
            onMorePress(pageX, pageY + height);
          });
        }}
        className="p-2">
        <MoreHorizontal size={20} color="#CBD5E1" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// ─── Hotel Components ──────────────────────────────────────────
const RoomCategoryCard = ({
  image,
  title,
  available,
  price,
  onPress,
  onEditPress,
}: {
  image: string;
  title: string;
  available: number;
  price: string;
  onPress: () => void;
  onEditPress: () => void;
}) => (
  <View className="mb-4 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm shadow-slate-50">
    <Image source={{ uri: image }} className="h-24 w-24 rounded-2xl" />
    <View className="ml-4 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-[17px] font-bold text-[#64748B]">{title}</Text>
        <TouchableOpacity onPress={onEditPress} p-1>
          <Pencil size={18} color="#94A3B8" />
        </TouchableOpacity>
      </View>
      <View className="mt-1 flex-row">
        <View className="rounded-full bg-[#F0FDF4] px-3 py-1">
          <Text className="text-[10px] font-bold text-[#22C55E]">Available: {available}</Text>
        </View>
      </View>
      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-sm font-bold text-[#64748B]">{price}</Text>
        <TouchableOpacity onPress={onPress} className="flex-row items-center">
          <Text className="mr-1 text-[13px] font-bold text-[#FF8C00]">Room List</Text>
          <ChevronRight size={16} color="#FF8C00" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const HotelRooms = () => {
  const router = useRouter();
  const [hasCategories, setHasCategories] = useState(true);
  const categories = [
    {
      id: 1,
      title: 'General Room',
      available: 3,
      price: '$80/Day',
      image:
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Standard Room',
      available: 3,
      price: '$80/Day',
      image:
        'https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Premium Room',
      available: 3,
      price: '$80/Day',
      image:
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="items-center py-6">
          <Text className="text-[20px] font-bold text-[#6D7437]">Room Categories</Text>
        </View>

        {!hasCategories ? (
          /* Empty State */
          <View className="flex-1 items-center px-10 pt-10">
            <Image
              source={{
                uri: 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg',
              }}
              className="mb-8 h-64 w-64"
              resizeMode="contain"
            />
            <Text className="mb-4 text-center text-[24px] font-bold text-[#6D7437]">
              No Room Categories Yet
            </Text>
            <Text className="mb-10 text-center text-[14px] leading-5 text-[#94A3B8]">
              You haven't added any room categories yet. Create room categories so customers can
              view and book available rooms.
            </Text>
            <TouchableOpacity
              onPress={() => router.push('/hotel/room-category')}
              className="flex-row items-center rounded-2xl bg-[#FF8C00] px-8 py-4">
              <Plus size={20} color="white" />
              <Text className="ml-2 text-[16px] font-bold text-white">Add Category</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* List State */
          <View className="px-6">
            <View className="mb-6 flex-row items-center justify-between">
              <Text className="text-[18px] font-bold text-[#475569]">Categories list</Text>
              <TouchableOpacity
                onPress={() => router.push('/hotel/room-category')}
                className="flex-row items-center rounded-lg bg-[#FF8C00] px-4 py-2 shadow-md shadow-orange-100">
                <Plus size={16} color="white" strokeWidth={3} />
                <Text className="ml-2 text-[13px] font-bold text-white">Add Category</Text>
              </TouchableOpacity>
            </View>

            {categories.map((cat) => (
              <RoomCategoryCard
                key={cat.id}
                title={cat.title}
                image={cat.image}
                available={cat.available}
                price={cat.price}
                onEditPress={() => router.push('/hotel/room-category')}
                onPress={() => router.push('/hotel/total-rooms')}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

// ─── Main Component ───────────────────────────────────────────────
export default function MenuIndex() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const savedRole = await AsyncStorage.getItem('userRole');
      setRole(savedRole);
    };
    getRole();
  }, []);

  const [hasCategories, setHasCategories] = useState(true);
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: 'Vegetables',
      available: 5,
      active: true,
      image:
        'https://images.unsplash.com/photo-1566385101042-1a000c1268c4?q=80&w=200&auto=format&fit=crop',
    },
  ]);

  if (role === 'hotel') {
    return <HotelRooms />;
  }

  // Restaurant role (Default for original implementation)
  const toggleCategory = (id: number) => {
    setCategories(categories.map((cat) => (cat.id === id ? { ...cat, active: !cat.active } : cat)));
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="items-center py-6">
          <Text className="text-[20px] font-bold text-[#6D7437]">Food Categories</Text>
        </View>
        <View className="px-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} onToggle={() => toggleCategory(cat.id)} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
