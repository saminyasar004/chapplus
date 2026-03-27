import Layout from 'components/layout';
import Switch from 'components/ui/switch';
import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronDown, Image as ImageIcon, Plus, Upload, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const hsvToRgb = (h: number, s: number, v: number) => {
  let r = 0,
    g = 0,
    b = 0;
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      ((r = v), (g = t), (b = p));
      break;
    case 1:
      ((r = q), (g = v), (b = p));
      break;
    case 2:
      ((r = p), (g = v), (b = t));
      break;
    case 3:
      ((r = p), (g = q), (b = v));
      break;
    case 4:
      ((r = t), (g = p), (b = v));
      break;
    case 5:
      ((r = v), (g = p), (b = q));
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

const rgbToHex = (r: number, g: number, b: number) => {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
};

const ColorPickerModal = ({
  visible,
  onClose,
  onSelect,
  initialColor = '#364694',
}: {
  visible: boolean;
  onClose: () => void;
  onSelect: (color: string) => void;
  initialColor?: string;
}) => {
  const [h, setH] = useState(0);
  const [s, setS] = useState(1);
  const [v, setV] = useState(1);
  const [hex, setHex] = useState(initialColor);

  const updateColor = (newH: number, newS: number, newV: number) => {
    setH(newH);
    setS(newS);
    setV(newV);
    const rgbData = hsvToRgb(newH, newS, newV);
    setHex(rgbToHex(rgbData.r, rgbData.g, rgbData.b));
  };

  const handleSaturationTouch = (e: any) => {
    const { locationX, locationY } = e.nativeEvent;
    const newS = Math.max(0, Math.min(1, locationX / 300));
    const newV = Math.max(0, Math.min(1, 1 - locationY / 250));
    updateColor(h, newS, newV);
  };

  const handleHueTouch = (e: any) => {
    const { locationX } = e.nativeEvent;
    const newH = Math.max(0, Math.min(1, locationX / 300));
    updateColor(newH, s, v);
  };

  const hueRgb = hsvToRgb(h, 1, 1);
  const hueHex = rgbToHex(hueRgb.r, hueRgb.g, hueRgb.b);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 items-center justify-center bg-black/50 px-6">
        <View className="w-full rounded-2xl bg-[#E2E8F0] p-5">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-[#475569]">Combobox</Text>
            <TouchableOpacity onPress={onClose}>
              <X size={20} color="#475569" />
            </TouchableOpacity>
          </View>

          {/* Color Area */}
          <View
            onStartShouldSetResponder={() => true}
            onResponderMove={handleSaturationTouch}
            onResponderRelease={handleSaturationTouch}
            className="shadow-inner mb-4 h-56 w-full overflow-hidden rounded-xl bg-white">
            <LinearGradient
              colors={['#FFFFFF', hueHex]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              className="h-full w-full">
              <LinearGradient colors={['transparent', '#000000']} className="h-full w-full">
                {/* Pointer */}
                <View
                  style={{ left: `${s * 100}%`, top: `${(1 - v) * 100}%` }}
                  className="absolute -ml-[7px] -mt-[7px] h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm"
                />
              </LinearGradient>
            </LinearGradient>
          </View>

          {/* Hue Slider */}
          <View
            onStartShouldSetResponder={() => true}
            onResponderMove={handleHueTouch}
            onResponderRelease={handleHueTouch}
            className="mb-4 h-5 w-full overflow-hidden rounded-full">
            <LinearGradient
              colors={['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#FF0000']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              className="h-full w-full">
              <View
                style={{ left: `${h * 100}%` }}
                className="absolute -ml-[7px] h-full w-3.5 rounded-full border-2 border-white shadow-sm"
              />
            </LinearGradient>
          </View>

          {/* Hex Input */}
          <View className="mb-4 h-12 w-full items-center justify-center rounded-lg bg-[#F1F5F9]">
            <TextInput
              value={hex}
              onChangeText={setHex}
              className="text-base font-bold text-[#475569]"
              placeholder="#000000"
            />
          </View>

          <TouchableOpacity
            onPress={() => onSelect(hex)}
            className="h-12 w-full items-center justify-center rounded-lg bg-[#0EA5E9]">
            <Text className="text-base font-bold text-white">Select colour</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const FormField = ({
  label,
  placeholder,
  multiline = false,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
}) => (
  <View className="mb-4">
    <Text className="mb-1.5 text-base font-semibold text-[#334155]">{label}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#CBD5E1"
      multiline={multiline}
      className={`w-full rounded-xl border border-[#F1F5F9] px-4 py-3 text-base text-[#334155] ${multiline ? 'text-top h-24' : 'h-12'}`}
      textAlignVertical={multiline ? 'top' : 'center'}
    />
  </View>
);

export default function AddProductStep1() {
  const router = useRouter();
  const [criteria1Enabled, setCriteria1Enabled] = useState(true);
  const [criteria2Enabled, setCriteria2Enabled] = useState(true);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#34D399');
  const [colorChips, setColorChips] = useState(['#163466', '#163466', '#163466']);

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

        <ScrollView className="flex-1 px-6 pt-5" showsVerticalScrollIndicator={false}>
          <FormField label="Name" placeholder="Enter Product name" />

          <View className="mb-4">
            <Text className="mb-1.5 text-base font-semibold text-[#334155]">Price in USD</Text>
            <View className="w-full rounded-xl border border-[#F1F5F9] p-3">
              <Text className="mb-1 text-2xl font-bold text-[#334155]">100</Text>
              <Text className="text-sm text-[#CBD5E1]">Price without discount</Text>
            </View>
          </View>

          <FormField label="Description" placeholder="Describe your product..." multiline />

          <View className="mb-6">
            <Text className="mb-1.5 text-base font-semibold text-[#334155]">Categories</Text>
            <TouchableOpacity className="h-12 w-full flex-row items-center justify-between rounded-xl border border-[#F1F5F9] px-4">
              <Text className="text-base text-[#94A3B8]">Select one or multiple</Text>
              <ChevronDown size={20} color="#CBD5E1" />
            </TouchableOpacity>
          </View>

          <View className="mb-6 h-[1px] bg-[#F1F5F9]" />

          {/* Thumbnail section */}
          <View className="mb-6">
            <Text className="mb-1 text-base font-semibold text-[#334155]">
              Product Thumbnail picture
            </Text>
            <Text className="mb-3 text-sm text-[#94A3B8]">
              Upload a main image for your service (recommended: 400x400px)
            </Text>
            <View className="flex-row items-center gap-x-5">
              <View className="h-20 w-20 items-center justify-center rounded-xl border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC]">
                <ImageIcon size={28} color="#94A3B8" />
              </View>
              <TouchableOpacity className="flex-row items-center rounded-xl border border-[#F1F5F9] bg-white px-5 py-2.5 shadow-sm">
                <Upload size={18} color="#334155" />
                <Text className="ml-2 text-base font-semibold text-[#334155]">Upload Image</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-6 h-[1px] bg-[#F1F5F9]" />

          {/* Criteria 1 */}
          <View className="mb-4 rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-lg font-bold text-[#334155]">Criteria</Text>
              <Switch scale={0.8} value={criteria1Enabled} onValueChange={setCriteria1Enabled} />
            </View>
            <Text className="mb-3 text-base font-semibold text-[#334155]">
              Type all color codes or select colors
            </Text>
            <View className="mb-3 h-12 w-full flex-row items-center justify-between rounded-xl bg-[#F8FAFC] px-4">
              <TextInput
                placeholder="Eg. #364694"
                placeholderTextColor="#94A3B8"
                className="flex-1 text-base text-[#334155]"
                value={selectedColor}
                onChangeText={setSelectedColor}
              />
              <TouchableOpacity
                onPress={() => setIsColorPickerVisible(true)}
                style={{ backgroundColor: selectedColor }}
                className="h-6 w-6 rounded-full border border-black/10"
              />
            </View>
            <View className="flex-row flex-wrap gap-2">
              {colorChips.map((color, i) => (
                <View
                  key={i}
                  className="flex-row items-center rounded-lg border border-[#F1F5F9] px-2.5 py-1">
                  <Text className="text-sm font-medium text-[#991B1B]">{color}</Text>
                  <TouchableOpacity
                    onPress={() => setColorChips(colorChips.filter((_, idx) => idx !== i))}
                    className="ml-1.5">
                    <X size={12} color="#94A3B8" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <ColorPickerModal
              visible={isColorPickerVisible}
              onClose={() => setIsColorPickerVisible(false)}
              onSelect={(color) => {
                setSelectedColor(color);
                if (!colorChips.includes(color)) {
                  setColorChips([...colorChips, color]);
                }
                setIsColorPickerVisible(false);
              }}
              initialColor={selectedColor}
            />
          </View>

          {/* Criteria 2 */}
          <View className="mb-6 rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-lg font-bold text-[#334155]">Criteria</Text>
              <Switch scale={0.8} value={criteria2Enabled} onValueChange={setCriteria2Enabled} />
            </View>
            <View className="mb-4">
              <Text className="mb-2 text-base font-semibold text-[#334155]">
                Categorizing Attribute Name
              </Text>
              <TextInput
                placeholder="Eg. - Size, Origin"
                placeholderTextColor="#94A3B8"
                className="h-12 w-full rounded-xl bg-[#F8FAFC] px-4 text-base text-[#334155]"
              />
            </View>
            <View className="mb-4">
              <Text className="mb-2 text-base font-semibold text-[#334155]">
                Variations in Attribute
              </Text>
              <TextInput
                placeholder="Eg. XL, L, XXL"
                placeholderTextColor="#94A3B8"
                className="h-12 w-full rounded-xl bg-[#F8FAFC] px-4 text-base text-[#334155]"
              />
            </View>
            <View className="flex-row gap-2">
              {['XL', 'L', 'XXL'].map((s, i) => (
                <View key={i} className="rounded-lg border border-[#F1F5F9] bg-[#F8FAFC] px-3 py-1">
                  <Text className="text-sm font-medium text-[#991B1B]">{s}</Text>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/ecommerce/add-product-2')}
            className="mb-10 h-14 w-full items-center justify-center rounded-xl bg-[#FF8C00]">
            <Text className="text-xl font-bold text-white">Continue</Text>
          </TouchableOpacity>
          <View className="h-10" />
        </ScrollView>
      </View>
    </Layout>
  );
}
