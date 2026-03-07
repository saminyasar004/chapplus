import LogoFull from 'assets/images/logo-full.svg';
import LoginBanner from 'assets/images/login-page-banner.svg';
import Layout from 'components/layout';
import { useRouter, Link } from 'expo-router';
import { Eye, Lock } from 'lucide-react-native';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <View className="flex-1 bg-white">
        {/* Header Illustration & Logo */}
        <View className="px-6 pt-4">
          <View className="py-2">
            <LogoFull width={160} height={43} />
          </View>

          <View className="items-center justify-center py-6">
            <LoginBanner width="100%" height={200} />
          </View>
        </View>

        {/* Login Form Card */}
        <View className="flex-1 bg-[#F9FAFB] rounded-t-[40px] px-8 pt-10 shadow-2xl">
          <View className="gap-6">
            {/* Email Field */}
            <View>
              <Text className="text-sm font-semibold text-[#667085] mb-2">Email</Text>
              <View className="h-14 flex-row items-center bg-white rounded-xl px-4 border border-[#E5E7EB]">
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
              <Text className="text-sm font-semibold text-[#667085] mb-2">Password</Text>
              <View className="h-14 flex-row items-center bg-white rounded-xl px-4 border border-[#E5E7EB]">
                <Lock size={20} color="#9CA3AF" />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  className="flex-1 text-base text-[#111827] ml-2"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Eye size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity className="items-end">
              <Text className="text-sm font-semibold text-[#F86241]">Forget password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.replace('/home')}
              className="h-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
              <Text className="text-lg font-bold text-white">Login</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-2 pb-10">
              <Text className="text-[#6B7280] text-sm">Don't have an account? </Text>
              <Link href="/(tabs)/profile" asChild>
                <TouchableOpacity>
                  <Text className="text-[#F86241] font-bold text-sm">Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
}
