import {
    GET_MOVIE_DETAIL,
    GET_MOVIE_DETAIL_MOBILE,
    CLEAR_MOVIE_DETAIL
} from '../constants/counter'
import API from '../api/index'


//import Taro from '@tarojs/taro'  //不需要 用taro请求就要


// 获取电影详情
export const getMovieDetail = id => {
    console.log('getMovieDetail id:', id)
    return async dispatch => {
        let result = await API.get(`/v2/movie/subject/${id}`)
        
        dispatch({
            type: GET_MOVIE_DETAIL,
            movieDetail: result
        })
    }
}

// 获取电影详情 移动端API
export const getMovieDetailMobie = id => {
    console.log('getMovieDetailMobie id:', id)
    return async dispatch => {
        let result = await API.getMobile(`/rexxar/api/v2/elessar/subject/${id}`)
        dispatch({
            type: GET_MOVIE_DETAIL_MOBILE,
            movieDetailMobile: result
        })
    }
}

// 清除电影详情
export const clearMovieDetail = () => {
    return dispatch => {
        dispatch({
            type:CLEAR_MOVIE_DETAIL
        })
    }
}