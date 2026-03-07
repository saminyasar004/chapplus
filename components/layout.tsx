import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 w-full h-[100vh]" contentContainerStyle={{ width: '100%', height: '100%' }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
