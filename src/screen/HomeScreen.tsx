import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageContainer } from '../components/PageContainer';
import { colors } from '../style/theme';
import { TrendingMovies } from './TrendingMovies';
import { MovieList } from '@/components/shared/MovieList';

export const HomeScreen = () => {
  return (
    <PageContainer>
      <SafeAreaView>
        <View className="flex-row justify-between items-center">
          <Bars3CenterLeftIcon color={'white'} size={30} />
          <Text className="text-white text-2xl font-bold">
            <Text style={{ color: colors.text }}>E</Text>mojiFy
          </Text>
          <MagnifyingGlassIcon color={'white'} size={30} />
        </View>
      </SafeAreaView>
      <ScrollView>
        <TrendingMovies data={['1', '2', '3']} />
        <MovieList title="Upcoming Movies" customClassName="mt-10" />
        <MovieList title="Top Rated Movies" customClassName="mt-10" />
      </ScrollView>
    </PageContainer>
  );
};
