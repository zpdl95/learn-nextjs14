const BASE_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const request = async (url: string) => {
  const res = await fetch(url);
  if (res.ok) return res.json();
};
export const getMovies = () => {
  return request(BASE_URL);
};
export const getMovie = (id: string) => {
  return request(`${BASE_URL}/${id}`);
};
export const getCredits = (id: string) => {
  return request(`${BASE_URL}/${id}/credits`);
};
export const getVideos = (id: string) => {
  return request(`${BASE_URL}/${id}/videos`);
};
export const getProviders = (id: string) => {
  return request(`${BASE_URL}/${id}/providers`);
};
export const getSimilar = (id: string) => {
  return request(`${BASE_URL}/${id}/similar`);
};
