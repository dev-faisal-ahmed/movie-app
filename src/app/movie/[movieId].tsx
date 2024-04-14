import { Loader } from '@/components/ui/loader';
import { useFetch } from '@/hooks/use-fetch';
import { apiUrl, getPoster } from '@/utils/helper/api.helper';
import { getDimension } from '@/utils/helper/dimension.helper';
import { TMovieDetails } from '@/utils/types';
import { useGlobalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GoBack } from '@/components/ui/go-back';
import { TopCasts } from './_components/top-casts';
import { SimilarMovies } from './_components/similar-movies';
import { useEffect } from 'react';

const { height, width } = getDimension();

export default function MoviesScreen() {
  const { movieId } = useGlobalSearchParams();

  const { data, loading, fetchData } = useFetch<TMovieDetails>(
    apiUrl.movieDetails(movieId as string)
  );

  useEffect(() => {
    fetchData();
  }, [movieId]);

  const formateGenres = () => {
    const length = data?.genres?.length || 0;
    if (!length) return '';

    return data?.genres.reduce((formattedGenre, genre, index) => {
      formattedGenre += genre.name;
      formattedGenre += index !== length - 1 ? '  •  ' : '';
      return formattedGenre;
    }, '');
  };

  return (
    <View
      style={{ position: 'relative' }}
      className="relative bg-neutral-800 flex-1"
    >
      <GoBack />

      <View>
        <Image
          style={{ height: height * 0.4, width }}
          source={{ uri: getPoster(data?.poster_path as string, 500) }}
        />
        <LinearGradient
          colors={[
            'transparent',
            'rgba(23,23,23,0.2)',
            'rgba(23,23,23,0.5)',
            'rgba(23,23,23,0.8)',
            'rgba(23,23,23,1)',
          ]}
          style={{ height: height * 0.4, width }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute top-0"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="px-5 mb-5 mt-2"
      >
        <Text className="text-white text-center mt-3 font-bold text-xl">
          {data?.original_title}
        </Text>
        <Text className="text-neutral-400 mt-2 font-bold text-base text-center">
          Released • {data?.release_date?.slice(0, 4)} | {data?.runtime} • min
        </Text>
        <Text className="text-neutral-400 font-bold text-center mt-2">
          {formateGenres()}
        </Text>

        <Text
          style={{ lineHeight: 22 }}
          className="text-neutral-400 mt-7 font-semibold text-justify"
        >
          {data?.overview}
        </Text>
        <TopCasts movieId={movieId as string} />
        <SimilarMovies movieId={movieId as string} />
      </ScrollView>
      {loading && <Loader />}
    </View>
  );
}
