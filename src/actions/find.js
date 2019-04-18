import { HOT_MOVIES}from '../constants/counter'
// import API from '@/api/jsonp'
import mock from '../api/mock'


export const getHotMovies = () => {
    return async dispatch => {
        dispatch({
            type: HOT_MOVIES,
            hotMoviesList: mock.subjects
        })
    }
}