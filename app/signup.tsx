import Logo from 'assets/images/logo.svg';
import SignupBanner from 'assets/images/signup-page-banner.svg';
import Layout from 'components/layout';
import { useRouter, Link } from 'expo-router';
import { Eye, Lock } from 'lucide-react-native';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Layout>
      <View className="flex-1 bg-white">
        {/* Header Illustration & Logo */}
        <View className="flex-row items-center justify-between px-6 pt-4">
          <View className="flex-1 items-center justify-center py-6">
            <SignupBanner width="100%" height={220} />
          </View>
          <View className="ml-4">
            <Logo width={120} height={120} />
          </View>
        </View>

        {/* Signup Form Card */}
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

            {/* Confirm Password Field */}
            <View>
              <Text className="mb-2 text-sm font-semibold text-[#667085]">Confirm Password</Text>
              <View className="h-14 flex-row items-center rounded-xl border border-[#E5E7EB] bg-white px-4">
                <Lock size={20} color="#9CA3AF" />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showConfirmPassword}
                  className="ml-2 flex-1 text-base text-[#111827]"
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Eye size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => router.push('/signup-details')}
              className="mt-4 h-14 items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-primary/30">
              <Text className="text-lg font-bold text-white">Sign Up</Text>
            </TouchableOpacity>

            <View className="mt-2 flex-row justify-center pb-10">
              <Text className="text-sm text-[#6B7280]">Already have an account? </Text>
              <Link href="/login" asChild>
                <TouchableOpacity>
                  <Text className="text-sm font-bold text-[#FF8C00]">Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
}
