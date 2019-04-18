import {
  SHOWING_LIST,
  WILL_SHOW_LIST
} from '../constants/counter'
import API from'../api/index'


//import Taro from '@tarojs/taro'  //不需要 用taro请求就要



//获取热映列表
export const getShowingList = () => {
  return async dispatch => {
    let result = await API.get('/v2/movie/in_theaters')
    dispatch({
      type: SHOWING_LIST,
      showingList: result.subjects
    })
  }
}


// 获取即将上映列表
export const getWillShowList = () => {
  return async dispatch => {
    
    let result = await API.get('/v2/movie/coming_soon?count=20')
    dispatch({
      type: WILL_SHOW_LIST,
      willShowList: result.subjects
    })
  }
}

// //todo taro jsonp
// export const getShowingList = () => {
//   return dispatch => {
    
//     let result = Taro.request(
//       {
//         url: 'https://api.douban.com/v2/movie/in_theaters',
//         jsonp: 'cd' //不进入cd then解析就行
//       }).then(result => {
//         console.log(result.data)
//           dispatch({
//             type: SHOWING_LIST,
//             showingList: result.data
//           })
//       })

//   }
// }

