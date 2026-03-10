import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { useState, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Verification() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef<any[]>([]);

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
          <Text className="text-[#6B7280] text-lg">←</Text>
        </TouchableOpacity>

        <View className="items-center mb-10">
          <Text className="text-3xl font-bold text-[#808000] mb-8">Activation Code</Text>
          <Text className="text-xl font-bold text-[#374151] text-center mb-2">
            We have sent you an activation code.
          </Text>
          <Text className="text-sm text-[#6B7280] text-center">
            A code has been sent to your number containing a code to reset your password.
          </Text>
        </View>

        <View className="items-center gap-6">
          <Text className="text-base font-semibold text-[#667085]">Enter verification code</Text>
          
          <View className="flex-row gap-4 mb-8">
            {code.map((digit, index) => (
              <View key={index} className="w-16 h-16 bg-[#F9FAFB] rounded-full items-center justify-center border border-[#E5E7EB] shadow-sm">
                <TextInput
                  ref={(ref) => {
                    inputs.current[index] = ref;
                  }}
                  className="text-2xl font-bold text-[#111827] text-center w-full"
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

          <View className="flex-row items-center mb-6">
            <Text className="text-[#6B7280] text-sm">if you didn't receive a code! </Text>
            <TouchableOpacity>
              <Text className="text-[#F86241] font-bold text-sm">Click Here..</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => router.replace('/home')}
            className="w-full h-14 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/30">
            <Text className="text-lg font-bold text-white">Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
