
import Taro, { Component } from '@tarojs/taro'
import {View, Text, Image, ScrollView} from '@tarojs/components'
import { AtRate } from 'taro-ui'
import './HotMovies.scss'

import { connect } from '@tarojs/redux'
import { getHotMovies } from '../../actions/find'



@connect((findData) => ({
    findData: findData.findData.hotMoviesList
}), (dispatch) => ({
    getHotMovies() {
        dispatch(getHotMovies())
    }
}))

export default class HotMovies extends Component {

    constructor() {
        super(...arguments);
    }

componentDidMount(){
    this.props.getHotMovies();
}

    // 展示电影详情
    showMovieDetail = id => {
        Taro.navigateTo({
            url: `/pages/movieDetail/movieDetail?id=${id}`
        })

    }
    render() {
        const data = this.props.findData;
        console.log(data)
        return (
            <View className="hot-box">
                <View className="movies-board">
                    <View className="movies-board-inner">
                        <ScrollView>
                        {
                            this.props.findData && this.props.findData.map((movie, index) => {
                                return (
                                    <View className={`movie ${(index + 1) % 8 === 0 ? 'no-margin-right' : ''}`} key={index} onClick={this.showMovieDetail.bind(this, movie.id)}>
                                        {/* <View  style={{ backgroundImage: `url(${movie.images.small})` }}></View> */}
                                        <Image className="bg-movie" src={movie.images.small}></Image>
                                        <View className="title">{movie.title}</View>
                                        <AtRate value={movie.rating.average / 2} ></AtRate>
                                    </View>
                                )
                            }) 
                        } 
                        </ScrollView>
                    </View>
                </View>
            </View>
            
        )
    }
} 