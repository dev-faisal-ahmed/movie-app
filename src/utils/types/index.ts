export type TTrendingMovie = {
  poster_path: string;
  id: string;
};

export type TMovieList = {
  poster_path: string;
  id: string;
  original_title: string;
  vote_average: number;
};

export type TApiResponse<TData> = {
  results: TData;
};

export type TTrendingMovieResponse = TApiResponse<TTrendingMovie[]>;
export type TMovieListResponse = TApiResponse<TMovieList[]>;
