import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { clearMovieDetail,getMovieDetail, getMovieDetailMobie} from '../../actions/movieDetail'

import {AtNavBar} from 'taro-ui'

import './movieDetail.scss'


@connect(({ movieDetail }) => ({
  movieDetail
}),  (dispatch) => ({
    getMovieDetail(id) {
      dispatch(getMovieDetail(id))
    }, getMovieDetailMobie(id){
      dispatch(getMovieDetailMobie(id))
    }, clearMovieDetail(){
      dispatch(clearMovieDetail())
    }
  }))

export default class Index extends Component {

  constructor() {
    super(...arguments)
  }

  
  config = {
    navigationBarTitleText: '电影详情'
  }

  componentDidMount() {
    let movieId = this.$router.params.id
    console.log('movieId', movieId)
    this.props.getMovieDetail(movieId)
    this.props.getMovieDetailMobie(movieId)
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  // 展示简介详情
  showSummaryDetail = () => {
    this.setState({
      showSummary: false
    })
  }

  // 色值：十六进制转RGB
  colorHexToRGB = (hex) => {
    if (hex) {
      let rgbArr = []
      for (let i = 0; i < 6; i = i + 2) {
        rgbArr.push(parseInt(`0x${hex.slice(i, i + 2)}`, 16))
      }
      return `rgba(${rgbArr.join(',')}, .1)`
    } else {
      return 'rgba(0,0,0,.1)'
    }
  }

  // 返回
  backForward = () => {
    this.props.clearMovieDetail() //清空详情

    Taro.navigateBack({ delta:1 }) //返回上一步
  }
  render () {
    const movie = this.props.movieDetail.movieDetail
    const movieMobile = this.props.movieDetail.movieDetailMobile
    return (
      <View className="movie-detail-popup">
        <View className="popup-inner" style={{ backgroundColor: this.colorHexToRGB(movieMobile.header_bg_color) }}>
          <View  className="header" >
            <AtNavBar
              onClickLeftIcon={this.backForward.bind(this)}
              title='电影'
              leftIconType='chevron-left'
              rightFirstIconType='share'
            />
          </View>
          
          
          <View className="picture-wrap" style={{ backgroundColor: `#${movieMobile.header_bg_color}` }}>
            <Image id="movie-picture" src={movie.images && movie.images.small} alt={movie.alt} />
          </View>
          <View className="movie-info">
            <View className="left">
              <View className="title">{movie.title}</View>
              <View className="info">{movie.year}{movie.genres && movie.genres.map((item, index) => <Text key={index}> / {item}</Text>)}</View>
              <View className="info">上映时间：{movie.pubdates || '2018-02-08(中国大陆)'}</View>
              <View className="info">片长：{movie.durations || '117分钟'}</View>
            </View>
            <View className="right evalute">
              <View className="title">豆瓣评分</View>
              <View className="average">{movie.rating && movie.rating.average}</View>
              <View className="info">{movie.rating && movie.rating.comments_count || '234232人'}</View>
            </View>
          </View>
          <View className="introduce">
            <View className="title">简介</View>
            <View className="intro-content" >
              {
                this.state.showSummary && `${movie.summary && movie.summary.substr(0, 85)}...`
              }
              {
                this.state.showSummary && <Text className="show-more" onClick={this.showSummaryDetail}> 展开</Text>
              }
              {
                !this.state.showSummary && `${movie.summary}`
              }
            </View>
          </View>
          <View className="casts-wrap">
            <View className="title">影人</View>
            <ScrollView 
              className='scrollview'
              scrollY
              scrollWithAnimation
              scrollTop='0'
              lowerThreshold='20'
              upperThreshold='20'
              
            >
                <View className="casts">
                  <View className="casts-list">
                    {
                      movie.casts && movie.casts.map((cast, index) => {
                        return (
                          <View className="photo-wrap" key={index}>
                            <Image src={cast.avatars.medium} alt={cast.alt} />
                            <View className="info">{cast.name}</View>
                          </View>
                        )
                      })
                    }
                  </View>
                </View>
            </ScrollView>  
            
          </View>
        </View>
      </View>
    )
  }
}

