import Logo from 'assets/images/logo.svg';
import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SignupDetails() {
  const router = useRouter();

  return (
    <Layout>
      <View className="flex-1 bg-white">
        {/* Header Logo */}
        <View className="px-6 pb-8 pt-12">
          <TouchableOpacity onPress={() => router.back()} className="mb-4">
            {/* back icon */}
            <ArrowLeft size={24} color="#111827" />
          </TouchableOpacity>
          <View className="items-center">
            <Logo width={160} height={120} />
          </View>
        </View>

        {/* Content Card */}
        <View className="flex-1 rounded-t-[40px] bg-[#F9FAFB] px-8 pt-10 shadow-2xl">
          <View className="gap-8">
            <View>
              <Text className="mb-2 text-lg font-bold text-[#1F2937]">Note</Text>
              <Text className="text-sm leading-5 text-[#6B7280]">
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </Text>
            </View>

            <View>
              <Text className="mb-2 text-sm font-semibold text-[#667085]">Country</Text>
              <TouchableOpacity className="h-14 flex-row items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-4">
                <Text className="text-base text-[#9CA3AF]">Select Country</Text>
                <ChevronRight size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => router.push('/verification')}
              className="mt-20 h-14 items-center justify-center rounded-xl bg-[#FF8C00]">
              <Text className="text-lg font-bold text-white">Confirm and Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
}
