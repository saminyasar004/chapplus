import Layout from 'components/layout';
import LogoFull from 'assets/images/logo-full.png';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import OnboardingBanner from 'assets/images/onboarding-page-banner.svg';

export default function Onboarding() {
  const router = useRouter();

  return (
    <Layout>
      <View className="flex-1 bg-white px-6">
        {/* Header Logo */}
        <View className="py-2 pt-12">
          <Image source={LogoFull} style={{ width: 120, height: 40 }} resizeMode="contain" />
        </View>

        {/* Illustration */}
        <View className="flex-1 items-center justify-center">
          <OnboardingBanner width="100%" height={200} />
        </View>

        {/* Text Content */}
        <View className="items-center py-10">
          <Text className="text-center text-3xl font-bold text-[#6D7437]">
            Get Product{'\n'}What You Want
          </Text>
          <Text className="mt-4 px-4 text-center text-base text-[#9A9DAE]">
            Trendy outfits, stunning accessories,{'\n'}and beauty essentials
          </Text>
        </View>

        {/* Buttons */}
        <View className="gap-4 pb-10">
          <TouchableOpacity
            onPress={() => router.push('/role-selection')}
            className="h-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
            <Text className="text-lg font-bold text-white">Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/login')}
            className="h-14 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white">
            <Text className="text-lg font-bold text-[#6B7280]">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
