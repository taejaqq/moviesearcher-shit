import * as axios from 'axios';

const API_KEY = '?api_key=5c5041a494dd5979a0862411cf7a6e02';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export const API = {
    getPopular: () => {
        return instance.get(`movie/popular${API_KEY}&language=en-US&page=1`)
    },
    getMovieDetails: (userId) => {
        return instance.get(`movie/${userId}${API_KEY}&language=en-US`)
            .then(({data}) => {
                return data;
            });
    },
    searchMovies: (query = '', page = 1) => {
        return instance.get(`search/movie${API_KEY}&query=${query}&page=${page}`)
    }
};
