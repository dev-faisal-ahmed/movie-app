const baseUrl = 'https://api.themoviedb.org/3';

const imageUrl = `https://image.tmdb.org/t/p`;

export const apiUrl = {
  trending: `${baseUrl}/trending/movie/day`,
  upcoming: `${baseUrl}/movie/upcoming`,
  top_rated: `${baseUrl}/movie/top_rated`,
  movieDetails: (movieId: string) => `${baseUrl}/movie/${movieId}`,
  movieCredits: (movieId: string) => `${baseUrl}/movie/${movieId}/credits`,
  personDetails: (personId: string) => `${baseUrl}/person/${personId}`,
  similarMovies: (movieId: string) => `${baseUrl}/movie/${movieId}/similar`,
};

export const getPoster = (path: string, width: number) => {
  return `${imageUrl}/w${width}${path}`;
};

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
};
