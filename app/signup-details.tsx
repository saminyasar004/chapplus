import LogoFull from 'assets/images/logo-full.svg';
import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SignupDetails() {
  const router = useRouter();

  return (
    <Layout>
      <View className="flex-1 bg-white">
        {/* Header Logo */}
        <View className="px-6 pt-12 pb-8">
          <TouchableOpacity onPress={() => router.back()} className="mb-4">
            <Text className="text-[#6B7280] text-lg">←</Text>
          </TouchableOpacity>
          <View className="items-center">
            <LogoFull width={160} height={43} />
          </View>
        </View>

        {/* Content Card */}
        <View className="flex-1 bg-[#F9FAFB] rounded-t-[40px] px-8 pt-10 shadow-2xl">
          <View className="gap-8">
            <View>
              <Text className="text-lg font-bold text-[#1F2937] mb-2">Note</Text>
              <Text className="text-sm text-[#6B7280] leading-5">
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </Text>
            </View>

            <View>
              <Text className="text-sm font-semibold text-[#667085] mb-2">Country</Text>
              <TouchableOpacity className="h-14 flex-row items-center justify-between bg-white rounded-xl px-4 border border-[#E5E7EB]">
                <Text className="text-[#9CA3AF] text-base">Select Country</Text>
                <ChevronRight size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => router.push('/verification')}
              className="h-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 mt-20">
              <Text className="text-lg font-bold text-white">Confirm and Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
}
