import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState, useRef, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Verification() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef<any[]>([]);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const role = await AsyncStorage.getItem('userRole');
      setUserRole(role);
    };
    getRole();
  }, []);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <Layout>
      <View className="flex-1 bg-white px-6 pt-12">
        <TouchableOpacity onPress={() => router.back()} className="mb-8">
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>

        <View className="mb-10 items-center">
          <Text className="mb-8 text-3xl font-bold text-[#808000]">Activation Code</Text>
          <Text className="mb-2 text-center text-xl font-bold text-[#374151]">
            We have sent you an activation code.
          </Text>
          <Text className="text-center text-sm text-[#6B7280]">
            A code has been sent to your number containing a code to reset your password.
          </Text>
        </View>

        <View className="items-center gap-6">
          <Text className="text-base font-semibold text-[#667085]">Enter verification code</Text>

          <View className="mb-8 flex-row gap-4">
            {code.map((digit, index) => (
              <View
                key={index}
                className="h-16 w-16 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-sm">
                <TextInput
                  ref={(ref) => {
                    inputs.current[index] = ref;
                  }}
                  className="w-full text-center text-2xl font-bold text-[#111827]"
                  maxLength={1}
                  keyboardType="number-pad"
                  value={digit}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  placeholder="*"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            ))}
          </View>

          <View className="mb-6 flex-row items-center">
            <Text className="text-sm text-[#6B7280]">if you didn't receive a code! </Text>
            <TouchableOpacity>
              <Text className="text-sm font-bold text-[#FF8C00]">Click Here..</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              if (userRole === 'ecommerce') {
                router.replace('/ecommerce/shop-info-1');
              } else if (userRole === 'restaurant') {
                router.replace('/restaurant/create-profile');
              } else {
                router.replace('/(tabs)');
              }
            }}
            className="h-14 w-full items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
            <Text className="text-lg font-bold text-white">Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
