import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(main)/index" options={{ headerShown: false }} />
      <Stack.Screen name="movie/[movieId]" options={{ headerShown: false }} />
      <Stack.Screen name="movie/category/[categoryId]" />
    </Stack>
  );
}
