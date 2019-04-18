import { GET_MOVIE_DETAIL,GET_MOVIE_DETAIL_MOBILE,CLEAR_MOVIE_DETAIL} from '../constants/counter'

let defaultState = {
    movieDetail: {},
    movieDetailMobile: {}
}

export default function movieDetail  (state = defaultState, action){
    switch (action.type) {
        case GET_MOVIE_DETAIL:
            return { ...state, movieDetail: action.movieDetail }
        case GET_MOVIE_DETAIL_MOBILE:
            return { ...state, movieDetailMobile: action.movieDetailMobile }
        case CLEAR_MOVIE_DETAIL:
            return { ...state, movieDetail: {},}
        default:
            return state
    }
}
