const API_KEY='bb811913072f1a55af61babe80a9a040'
const api={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixoriginals:`/discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'`,
    fetchComedymovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanticmovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionmovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrormovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTopratedmovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1'`
}

export default api