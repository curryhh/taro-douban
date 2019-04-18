import {HOT_MOVIES} from '../constants/counter'

const INITIAL_STATE = {
  hotMoviesList: [],//推荐电影
}

export default function findData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOT_MOVIES:
      return { 
        ...state, 
        hotMoviesList: action.hotMoviesList 
      }
     default:
       return state
  }
}
