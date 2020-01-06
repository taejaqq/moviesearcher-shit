import {API} from "../api/api";

const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
const UPDATE_FILTER_NEW_VALUE = 'UPDATE_FILTER_NEW_VALUE';

const initialState = {
    results: null,
    movieCardInfo: null,
    movieDetailsInfo: null,
    filter: '',
    total_pages: 0,
    page: 1
};

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                results: action.movieCardInfo
            };
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetailsInfo: action.details
            };
        case UPDATE_FILTER_NEW_VALUE:
            return {
                ...state,
                results: action.query,
            };
        default:
            return state;
    }
};

// action creators

export const getPopularAction = (movieCardInfo) => ({type: GET_POPULAR_MOVIES, movieCardInfo});
export const getMovieDetailsAction = (details) => ({type: GET_MOVIE_DETAILS, details});

export const updateFilterNewValueAction = (query) => ({type: UPDATE_FILTER_NEW_VALUE, query});

// redux-thunks

export const getPopularThunk = () => (dispatch) => {
    API.getPopular().then(response => {
        dispatch(getPopularAction(response.data.results));
    });
};

export const getMovieDetailsThunk = (userId) => (dispatch) => {
    API.getMovieDetails(userId).then(response => {
        dispatch(getMovieDetailsAction(response))
    })
};

export const searchMoviesThunk = (query) => async (dispatch) => {
    API.searchMovies(query).then(response => {
        dispatch(updateFilterNewValueAction(response.data.results));
    })
};

export default mainPageReducer;
