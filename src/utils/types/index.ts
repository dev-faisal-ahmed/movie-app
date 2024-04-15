export type TTrendingMovie = {
  poster_path: string;
  id: string;
};

export type TMovieList = {
  id: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
};

export type TMovieDetails = TMovieList & {
  release_date: string;
  runtime: number;
  overview: string;
  spoken_languages: { name: string }[];
  genres: { name: string }[];
};

export type TCast = {
  id: number;
  name: string;
  gender: 1 | 2;
  known_for_department: string;
  profile_path: string;
  cast_id: string;
  character: string;
  credit_id: string;
};

export type TPerson = {
  name: string;
  place_of_birth: string;
  profile_path: string;
  birthday: string;
  biography: string;
  gender: number;
  known_for_department: string;
};

export type TApiResponse<TData> = {
  results: TData;
};

export type TTrendingMovieResponse = TApiResponse<TTrendingMovie[]>;
export type TMovieListResponse = TApiResponse<TMovieList[]>;

export type TCastResponse = {
  cast: TCast[];
};

// export type TMovieCreditResponse = TApiResponse<TMovieCredit[]>;
// export type TPersonResponse = TApiResponse<TPerson>;
