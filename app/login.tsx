import LogoFull from 'assets/images/logo-full.png';
import LoginBanner from 'assets/images/login-page-banner.svg';
import Layout from 'components/layout';
import { useRouter, Link } from 'expo-router';
import { Eye, Lock } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <View className="flex-1 bg-white">
        {/* Header Illustration & Logo */}
        <View className="px-6 pt-12">
          <View className="py-2">
            <Image source={LogoFull} style={{ width: 120, height: 40 }} resizeMode="contain" />
          </View>

          <View className="items-center justify-center py-6">
            <LoginBanner width="100%" height={200} />
          </View>
        </View>

        {/* Login Form Card */}
        <View className="flex-1 rounded-t-[40px] bg-[#F9FAFB] px-8 pt-10 shadow-2xl">
          <View className="gap-6">
            {/* Email Field */}
            <View>
              <Text className="mb-2 text-sm font-semibold text-[#667085]">Email</Text>
              <View className="h-14 flex-row items-center rounded-xl border border-[#E5E7EB] bg-white px-4">
                <TextInput
                  placeholder="Enter here"
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 text-base text-[#111827]"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password Field */}
            <View>
              <Text className="mb-2 text-sm font-semibold text-[#667085]">Password</Text>
              <View className="h-14 flex-row items-center rounded-xl border border-[#E5E7EB] bg-white px-4">
                <Lock size={20} color="#9CA3AF" />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  className="ml-2 flex-1 text-base text-[#111827]"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Eye size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity className="items-end">
              <Text className="text-sm font-semibold text-[#FF8C00]">Forget password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.replace('/home')}
              className="h-14 items-center justify-center rounded-xl bg-[#FF8C00]">
              <Text className="text-lg font-bold text-white">Login</Text>
            </TouchableOpacity>

            <View className="mt-2 flex-row justify-center pb-10">
              <Text className="text-sm text-[#6B7280]">Don't have an account? </Text>
              <Link href="/signup" asChild>
                <TouchableOpacity>
                  <Text className="text-sm font-bold text-[#FF8C00]">Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
}
