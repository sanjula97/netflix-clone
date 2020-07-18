const API_KEY = "d96af03820bcdddd2df2f9950f53d03f";

const requests = {
    fetchTrending:`/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=10749`,
    fetchDocumentories:`/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=99`,
}

export default requests;