import { combineReducers } from 'redux'
import movieDetail from './movieDetail'
import movieList from'./movieList'
import findData from'./find'

export default combineReducers({
  movieList,
  movieDetail,
  findData
})
