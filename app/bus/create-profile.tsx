import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  X,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Search,
  Navigation,
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const StepIndicator = ({ currentStep }: { currentStep: number }) => (
  <View className="flex-row gap-x-2 px-6 py-4">
    {[1, 2, 3, 4].map((step) => (
      <View
        key={step}
        className={`h-1.5 flex-1 rounded-full ${step <= currentStep ? 'bg-[#FF8C00]' : 'bg-[#CBD5E1]'}`}
      />
    ))}
  </View>
);

const InputField = ({
  label,
  placeholder,
  multiline = false,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
}) => (
  <View className="mb-6">
    <Text className="mb-3 text-[15px] font-bold text-[#64748B]">{label}</Text>
    <View
      className={`rounded-xl border border-[#F1F5F9] bg-white px-5 py-4 ${multiline ? 'h-32' : 'h-14'}`}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#CBD5E1"
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        className="flex-1 text-[16px] font-medium text-[#334155]"
      />
    </View>
  </View>
);

export default function BusCreateProfile() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    else setIsSuccess(true);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isSuccess) {
    return (
      <SafeAreaView className="flex-1 bg-white" edges={['top']}>
        <View className="flex-1 items-center justify-center px-10">
          <View className="mb-8 rounded-full bg-[#F0FDF4] p-6">
            <View className="rounded-full bg-[#22C55E] p-4">
              <CheckCircle2 size={48} color="white" />
            </View>
          </View>
          <View className="rounded-3xl border border-[#F1F5F9] bg-[#FAFAFA] p-8 shadow-sm shadow-slate-100">
            <Text className="text-center text-xl font-bold text-[#1E293B]">
              Account has been created Successfully
            </Text>
            <Text className="mt-4 text-center text-sm leading-6 text-[#94A3B8]">
              Wait for the confirmation from the admin. The team will review your profile and
              documents before activation.
            </Text>
          </View>
        </View>
        <View className="px-6 pb-10">
          <TouchableOpacity
            onPress={() => router.replace('/(tabs)/home')}
            className="h-14 w-full items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20 active:opacity-90">
            <Text className="text-lg font-bold text-white">Let's Begin The Journey</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => (step === 1 ? router.back() : prevStep())}
            className="-ml-2 p-2">
            <ArrowLeft size={28} color="#1E293B" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-[#848F4B]">
            {step === 4 ? 'Privacy & agreement' : 'Create Profile'}
          </Text>
          <View className="w-10" />
        </View>
      </View>

      <StepIndicator currentStep={step} />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        {step === 1 && (
          <View className="px-6 pt-6">
            <Text className="mb-4 text-[15px] font-bold text-[#64748B]">Images</Text>
            <View className="mb-6 flex-row flex-wrap gap-4">
              {[1, 2, 3, 4].map((i) => (
                <View key={i} className="h-24 w-[47%] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    source={{
                      uri: `https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=200&auto=format&fit=crop`,
                    }}
                    className="h-full w-full"
                  />
                  <TouchableOpacity className="absolute right-1 top-1 rounded-full bg-black/40 p-1">
                    <X size={12} color="white" />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity className="mt-2 h-14 w-full flex-row items-center justify-center rounded-xl border border-[#F1F5F9] bg-[#FAFAFA]">
                <Upload size={20} color="#94A3B8" />
                <Text className="ml-2 text-sm font-bold text-[#94A3B8]">Upload More Images</Text>
              </TouchableOpacity>
            </View>

            <InputField label="Company Name" placeholder="Enter here" />
            <InputField label="Phone Number" placeholder="Enter here" />
            <InputField label="Office Location" placeholder="Enter here" />
            <InputField label="Operating Cities" placeholder="Enter here" />
            <InputField label="About" placeholder="Describe here...." multiline />
          </View>
        )}

        {step === 2 && (
          <View className="flex-1">
            <View className="px-6 py-6">
              <View className="mb-4 h-14 flex-row items-center rounded-2xl border border-[#F1F5F9] bg-white px-4 shadow-sm shadow-slate-100">
                <TextInput
                  placeholder="Street, road."
                  placeholderTextColor="#CBD5E1"
                  className="flex-1 text-base"
                />
                <TouchableOpacity className="mx-2">
                  <Text className="font-bold text-[#FF8C00]">Locate me</Text>
                </TouchableOpacity>
                <TouchableOpacity className="rounded-lg bg-[#FF8C00] p-2">
                  <ArrowRight size={20} color="white" />
                </TouchableOpacity>
              </View>
              <View className="rounded-2xl border border-[#F1F5F9] bg-white p-4 shadow-sm shadow-slate-100">
                <Text className="mb-2 text-xs font-bold text-[#64748B]">Suggestions</Text>
                <View className="border-b border-[#F1F5F9] py-3">
                  <Text className="text-sm text-[#475569]">Dalas, TX.</Text>
                </View>
                <View className="py-3">
                  <Text className="text-sm text-[#475569]">Dalas, TX.</Text>
                </View>
              </View>
            </View>
            <View className="h-[400px] w-full items-center justify-center bg-[#E2E8F0]">
              <MapPin size={48} color="#FF8C00" />
              <Text className="mt-4 font-bold text-[#64748B]">Map view goes here</Text>
            </View>
          </View>
        )}

        {step === 3 && (
          <View className="px-6 pt-6">
            <Text className="mb-6 text-lg font-bold text-[#475569]">Contacts</Text>
            <InputField label="E-mail" placeholder="Enter here" />
            <InputField label="Trade License Number" placeholder="Enter here" />

            <Text className="mb-4 text-[15px] font-bold text-[#64748B]">Add Documents</Text>
            <TouchableOpacity className="mb-8 h-14 w-full flex-row items-center justify-center rounded-xl border border-[#F1F5F9] bg-[#FAFAFA]">
              <Upload size={20} color="#94A3B8" />
              <Text className="ml-2 text-sm font-bold text-[#94A3B8]">Upload Document</Text>
            </TouchableOpacity>

            <InputField label="Website Link" placeholder="Enter here" />
            <InputField label="Facebook Link" placeholder="Enter here" />
          </View>
        )}

        {step === 4 && (
          <View className="px-6 pt-8">
            <Text className="mb-8 text-sm leading-6 text-[#64748B]">
              The Bus Service offers a reliable and efficient transport experience. We prioritize
              safety, timing, and customer satisfaction. By joining our platform, you agree to our
              terms and conditions and provide the necessary documentation for verification.
            </Text>
            <View className="gap-y-4">
              {[
                'Without a motorbike bike we may not work together.',
                'Identity document (CNI or passport).',
                'Proof of residence.',
                "Driver's license (if the delivery person uses a vehicle)",
                'Professional bank account (RIB) for receiving payments',
                'SIRET number (mandatory for any declared activity).',
              ].map((item, idx) => (
                <View key={idx} className="flex-row">
                  <Text className="mr-2 text-[#64748B]">•</Text>
                  <Text className="flex-1 text-sm font-medium text-[#64748B]">{item}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      {/* Action Buttons */}
      <View className="absolute bottom-10 left-0 right-0 px-6">
        {step === 1 || step === 4 ? (
          <TouchableOpacity
            onPress={nextStep}
            className="h-14 w-full flex-row items-center justify-center rounded-2xl bg-[#FF8C00] shadow-xl shadow-orange-500/20 active:opacity-90">
            <Text className="text-lg font-bold text-white">
              {step === 4 ? 'Confirm and Submit' : 'Next'}
            </Text>
            {step === 1 && <ArrowRight size={20} color="white" className="ml-2" />}
          </TouchableOpacity>
        ) : (
          <View className="flex-row gap-x-4">
            <TouchableOpacity
              onPress={prevStep}
              className="h-14 flex-1 items-center justify-center rounded-2xl border border-[#FF8C00]">
              <Text className="text-lg font-bold text-[#FF8C00]">Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={nextStep}
              className="flex-2 h-14 items-center justify-center rounded-2xl bg-[#FF8C00] px-10 shadow-xl shadow-orange-500/20 active:opacity-90">
              <View className="flex-row items-center">
                <Text className="text-lg font-bold text-white">Next</Text>
                <ArrowRight size={20} color="white" className="ml-2" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
