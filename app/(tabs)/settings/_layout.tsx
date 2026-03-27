import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="terms" />
      <Stack.Screen name="policies" />
      <Stack.Screen name="help" />
      <Stack.Screen name="change-password" />
      <Stack.Screen name="notification" />
      <Stack.Screen name="delete-account" />
    </Stack>
  );
}
