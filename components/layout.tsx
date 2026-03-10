import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        className="flex-1 w-full h-full" 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
