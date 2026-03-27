import { useRouter } from 'expo-router';
import { MoreHorizontal, Plus, UtensilsCrossed } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
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

const MenuActionsModal = ({ visible, onClose, onEdit, onViewItems, onDelete, position }: any) => (
  <Modal visible={visible} transparent animationType="fade">
    <Pressable className="flex-1 bg-black/0" onPress={onClose}>
      <View
        style={{
          position: 'absolute',
          top: position?.y || 0,
          left: (position?.x || 0) - 160, // Adjust to align triangle with 3-dot
          zIndex: 1000,
        }}>
        <View className="items-end pr-4">
          {/* Triangle */}
          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderBottomWidth: 12,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: 'white',
              transform: [{ translateY: 1 }],
              zIndex: 1,
            }}
          />
          {/* Modal Content */}
          <View className="elevation-10 w-48 overflow-hidden rounded-2xl border border-[#F1F5F9] bg-white shadow-2xl">
            <TouchableOpacity
              onPress={() => {
                onEdit();
                onClose();
              }}
              className="border-b border-[#F1F5F9] px-6 py-4">
              <Text className="text-center text-[16px] font-bold text-[#FF8C00]">Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onViewItems();
                onClose();
              }}
              className="border-b border-[#F1F5F9] px-6 py-4">
              <Text className="text-center text-[16px] font-bold text-[#94A3B8]">View items</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onDelete();
                onClose();
              }}
              className="px-6 py-4">
              <Text className="text-center text-[16px] font-bold text-[#94A3B8]">Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  </Modal>
);

export default function MenuIndex() {
  const router = useRouter();
  const [hasCategories, setHasCategories] = useState(true); // Toggle this to see empty state
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: 'Vegetables',
      available: 5,
      active: true,
      image:
        'https://images.unsplash.com/photo-1566385101042-1a000c1268c4?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Vegetables',
      available: 5,
      active: true,
      image:
        'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Vegetables',
      available: 5,
      active: true,
      image:
        'https://images.unsplash.com/photo-1567533332467-14da7d6561bc?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Vegetables',
      available: 5,
      active: true,
      image:
        'https://images.unsplash.com/photo-1547592166-23ac45744abd?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Vegetables',
      available: 5,
      active: true,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Vegetables',
      available: 5,
      active: true,
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop',
    },
  ]);

  const toggleCategory = (id: number) => {
    setCategories(categories.map((cat) => (cat.id === id ? { ...cat, active: !cat.active } : cat)));
  };

  const [showActionModal, setShowActionModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="items-center py-6">
          <Text className="text-[20px] font-bold text-[#6D7437]" style={{ fontFamily: 'Inter' }}>
            Food Categories
          </Text>
        </View>

        {!hasCategories ? (
          /* Empty State */
          <View className="flex-1 items-center px-10 pt-10">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=400&auto=format&fit=crop',
              }} // Placeholder for the folder illustration
              className="mb-8 h-64 w-64"
              resizeMode="contain"
            />
            <Text className="mb-4 text-center text-[24px] font-bold text-[#6D7437]">
              No Food Categories Yet
            </Text>
            <Text className="mb-10 text-center text-[14px] leading-5 text-[#94A3B8]">
              You haven't added any food categories yet. Create food categories so customers can
              view and order available foods.
            </Text>
            <TouchableOpacity
              onPress={() => router.push('/menu/add-category')}
              className="flex-row items-center rounded-2xl border border-[#F1EEE9] bg-[#F8F6F2] px-8 py-4">
              <Text className="mr-2 text-[16px] font-bold text-[#64748B]">Create Categories</Text>
              <Plus size={20} color="#64748B" />
            </TouchableOpacity>
          </View>
        ) : (
          /* List State */
          <View className="px-6">
            <View className="mb-6 flex-row items-center justify-between">
              <Text className="text-[18px] font-bold text-[#475569]">Categories List</Text>
              <TouchableOpacity
                onPress={() => router.push('/menu/add-category')}
                className="flex-row items-center rounded-lg bg-[#FF8C00] px-4 py-2 shadow-md shadow-orange-100">
                <Plus size={16} color="white" />
                <Text className="ml-2 text-[13px] font-bold text-white">Add Category</Text>
              </TouchableOpacity>
            </View>

            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                image={cat.image}
                available={cat.available}
                isActive={cat.active}
                onToggle={() => toggleCategory(cat.id)}
                onMorePress={(x: number, y: number) => {
                  setModalPosition({ x, y });
                  setSelectedCategory(cat);
                  setShowActionModal(true);
                }}
                onPress={() =>
                  router.push({
                    pathname: '/menu/category-items',
                    params: { title: cat.title },
                  })
                }
              />
            ))}
          </View>
        )}
      </ScrollView>

      <MenuActionsModal
        visible={showActionModal}
        onClose={() => setShowActionModal(false)}
        position={modalPosition}
        onEdit={() => {
          // Navigate to edit category (reusing add for now or creating edit)
          router.push('/menu/add-category');
        }}
        onViewItems={() => {
          router.push({
            pathname: '/menu/category-items',
            params: { title: selectedCategory?.title },
          });
        }}
        onDelete={() => {
          setCategories(categories.filter((c) => c.id !== selectedCategory?.id));
        }}
      />
    </SafeAreaView>
  );
}
