const baseUrl = 'https://api.themoviedb.org/3';

const imageUrl = `https://image.tmdb.org/t/p`;

export const apiUrl = {
  trending: `${baseUrl}/trending/movie/day`,
};

export const getPoster = (path: string, width: number) => {
  return `${imageUrl}/w${width}${path}`;
};

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTFmYmVlZjczNmQ5ZWRmOWNkMTlmMzVlNjYzOGQ3OCIsInN1YiI6IjY2MWJkMGRkNWUxNGU1MDE4NWJiOGZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JJzaHlsO9XGwBZ5g9pBRbCv-WTCCS9ea_HwcwIGnh04',
  },
};
