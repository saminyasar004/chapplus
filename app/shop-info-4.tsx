import Layout from 'components/layout';
import ShopHeader from 'components/shop-header';
import { useRouter } from 'expo-router';
import { FileUp } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface DocumentBoxProps {
  label: string;
}

const DocumentBox = ({ label }: DocumentBoxProps) => (
  <TouchableOpacity className="mb-4 h-32 w-[31%] items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-2 shadow-sm">
    <FileUp size={24} color="#94A3B8" className="mb-2" />
    <Text className="text-center text-xs font-medium text-[#64748B]">{label}</Text>
  </TouchableOpacity>
);

export default function ShopInfo4() {
  const router = useRouter();

  return (
    <Layout>
      <View className="flex-1 bg-white">
        <ShopHeader title="Shop information's" activeSteps={4} />

        <View className="px-6 py-6">
          <Text className="mb-6 text-lg font-bold text-[#334155]">Upload required documents</Text>

          <View className="flex-row flex-wrap justify-between">
            <DocumentBox label="Extrait Kbiz" />
            <DocumentBox label="ID" />
            <DocumentBox label="Professional Address" />
            <DocumentBox label="Bank Details" />
            <DocumentBox label="SIRET Number" />
          </View>

          <View className="mt-8">
            <Text className="mb-4 text-lg font-bold text-[#334155]">Note</Text>
            <View className="gap-y-3">
              {[
                'Extrait Kbiz (or equivalent depending on the type of company: micro-entreprise, SARL, SAS, etc.) – proves registration with the Registre du Commerce et des Sociétés (RCS)',
                'Identity document (CNI or passport of the manager)',
                'Professional address proof (commercial lease, utility bill, etc.)',
                'Professional bank account (RIB) for payments',
                'SIRET / SIREN number (mandatory field)',
              ].map((note, index) => (
                <View key={index} className="flex-row">
                  <Text className="mr-2 text-sm text-[#64748B]">•</Text>
                  <Text className="flex-1 text-sm leading-5 text-[#64748B]">{note}</Text>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/location-picker')}
            className="mt-12 h-14 items-center justify-center rounded-xl bg-[#FF8C00] shadow-lg shadow-orange-500/30">
            <Text className="text-lg font-bold text-white">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
