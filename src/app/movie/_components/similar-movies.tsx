import { MovieList } from '@/components/shared/movie-list/movie-list';
import { Loader } from '@/components/ui/loader';
import { useFetch } from '@/hooks/use-fetch';
import { apiUrl } from '@/utils/helper/api.helper';
import { TMovieListResponse } from '@/utils/types';
import { useEffect } from 'react';

type SimilarMoviesProps = {
  movieId: string;
};

export function SimilarMovies({ movieId }: SimilarMoviesProps) {
  const { data, loading, fetchData } = useFetch<TMovieListResponse>(
    apiUrl.similarMovies(movieId)
  );

  useEffect(() => {
    fetchData();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MovieList
          data={data?.results || []}
          title="Similar Movies"
          url={`movie/similar/${movieId}`}
          customClass="mt-6"
        />
      )}
    </>
  );
}
