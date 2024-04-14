export type TTrendingMovie = {
  poster_path: string;
  id: string;
};

export type TApiResponse<TData> = {
  results: TData;
};

export type TTrendingMovieResponse = TApiResponse<TTrendingMovie[]>;
