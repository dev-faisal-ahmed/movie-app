import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(main)/index" options={{ headerShown: false }} />
      <Stack.Screen name="movie/[movieId]" />
      <Stack.Screen name="movie/category/[categoryId]" />
    </Stack>
  );
}
