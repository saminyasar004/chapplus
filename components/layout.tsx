import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1 bg-[#FBFEFE]" edges={['left', 'right', 'bottom']}>
      <ScrollView
        className="h-full w-full flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
