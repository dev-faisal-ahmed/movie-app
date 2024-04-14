import { PageContainer } from '@/components/ui/page-container';
import { colors } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { TrendingMovies } from './_components/trending-movies/trending-movies';

export default function HomeScreen() {
  return (
    <PageContainer>
      <StatusBar style="light" />
      <View className="flex-row items-center justify-between">
        <Bars3CenterLeftIcon size={30} color={'white'} />
        <Text className="text-white text-2xl font-bold tracking-widest">
          <Text style={{ color: colors.text }}>E</Text>
          mojiFy
        </Text>
        <MagnifyingGlassIcon size={30} color={'white'} />
      </View>
      <TrendingMovies />
    </PageContainer>
  );
}
