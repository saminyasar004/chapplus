import { useRouter } from 'expo-router';
import { ChevronLeft, Mail, ArrowRight } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HelpScreen() {
  const router = useRouter();

  const sections = [
    {
      id: 1,
      text: 'Welcome to Ai. By using our services, you agree to abide by the terms and conditions outlined below. These terms govern your access to and',
    },
    {
      id: 2,
      text: 'use of Ai tools and services, so please review them carefully before proceeding.',
    },
    {
      id: 3,
      text: 'Ai provides innovative tools designed to enhance how you capture and manage voice recordings. Our services include voice-to-text transcription and AI-driven summarization, which are intended',
    },
    {
      id: 4,
      text: 'for lawful, ethical purposes only. You must ensure compliance with applicable laws, including obtaining consent from all participants when recording conversations. CleverTalk disclaims liability for any misuse of its tools.',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="-ml-2 p-2">
          <ChevronLeft size={28} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        <Text className="mb-8 mt-2 text-3xl font-bold text-[#848F4B]">Help and Support</Text>

        <View className="mb-10 space-y-6">
          {sections.map((section) => (
            <View key={section.id} className="mb-6 flex-row">
              <Text className="mr-2 text-lg leading-7 text-[#64748B]">{section.id}.</Text>
              <Text className="flex-1 text-lg leading-7 text-[#64748B]">{section.text}</Text>
            </View>
          ))}
        </View>

        <View className="mb-10">
          <Text className="mb-3 text-lg font-bold text-[#475569]">Admin Number for support</Text>
          <Text className="text-lg font-medium text-[#64748B]">+8801775551325</Text>
        </View>

        <View className="mb-10">
          <Text className="mb-3 text-lg font-bold text-[#475569]">Admin Email for support</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row items-center justify-center rounded-2xl border border-[#F1F5F9] bg-white py-5 shadow-sm shadow-slate-100">
            <Mail size={24} color="#FF8C00" />
            <Text className="mx-3 text-xl font-bold text-[#FF8C00]">Email Us</Text>
            <ArrowRight size={20} color="#FF8C00" strokeWidth={3} />
          </TouchableOpacity>
        </View>

        {/* Spacer for bottom tab bar */}
        <View className="h-32" />
      </ScrollView>
    </SafeAreaView>
  );
}
