const API_KEY="678f5b5d3ac10d92188bf24bb302a269";
//process.env.REACT_APP_API_KEY
const requests={
        fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=678f5b5d3ac10d92188bf24bb302a269&language=en-US