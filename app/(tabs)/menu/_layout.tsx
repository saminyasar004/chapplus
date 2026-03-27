import { Stack } from 'expo-router';

export default function MenuLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="category-items" />
      <Stack.Screen name="add-category" />
      <Stack.Screen name="add-item" />
    </Stack>
  );
}
