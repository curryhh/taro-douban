import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image,Text } from '@tarojs/components'
import { AtRate, AtButton } from 'taro-ui'

// import {MovieList} from '@tarojs/redux'
// import { getShowingList, getWillShowList} from '../../actions/counter'

import './movielist.scss'

/*
* title: String 标题
* rating: Object 评价
* genres: Array 标签
* images: Array 海报
* directors: Array 导演
* casts: Array 主演
* collect_count: Number 观看人数
*/

export default class movieList extends Component {

  // 展示电影详情
  showMovieDetail = id => {
    Taro.navigateTo({
      url: `/pages/movieDetail/movieDetail?id=${id}`
    })

  }

  // 购票
  buyTicket = (id, e) => {
    e.stopPropagation()
    Taro.navigateTo({
      url: `/pages/login/login`
    })
  }
  //想看
  wantWatch = (id, e) => {
    e.stopPropagation()
    Taro.navigateTo({
      url: `/pages/login/login`
    })
  }


  componentDidMount() {
    
  }

  render () {
    return (
      <View className="movie-list">
        {this.props.showingList.map((movie, index)=>{
          return(

            <View className="movie" key={index} onClick={this.showMovieDetail.bind(this, movie.id)}>
              
              <View className="left">
                <Image  src={movie.images.small} alt={movie.alt} className="img"/>

              </View>
              <View className="center">
                <View className="title">{movie.title}</View>
                <View className="rating-wrap">
                  <AtRate  value={movie.rating.average/2} />
                  <View>{movie.rating.average}</View>
                </View>
                <View className="directors">
                  {/* <View className="director">导演：{movie.directors[0].name}</View> */}
                </View>
                <View className="avatars">
                 主演：
                  {
                    movie.casts.map((cast, index) => {
                      return(
                        <Text className="cast"  key={index}>
                          {cast.name}
                          {index < movie.casts.length - 1 ? ' / ' : ''}                        
                        </Text>
                        )
                    })
                     
                  }
                </View>
              </View>
              {
                this.props.type === 'showing' ?
                  <View className="right saw">
                    <View className="collect-count">{movie.collect_count > 10000 ? `${movie.collect_count % 1000 / 10}万` : movie.collect_count}人看过</View>
                    <AtButton className="btn-buy" onClick={this.buyTicket.bind(this, movie.id)}>购票</AtButton>
                  </View> :
                  <View className="right want">
                    <View className="collect-count">{movie.collect_count > 10000 ? `${movie.collect_count % 1000 / 10}万` : movie.collect_count}人想看</View>
                    <AtButton className="btn-buy" onClick={this.wantWatch.bind(this, movie.id)}>想看</AtButton>
                  </View>
              }
            </View>
          )}
        )}
      </View>
    )
  }
}



