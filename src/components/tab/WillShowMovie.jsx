import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getWillShowList } from '../../actions/movieList'
import MovieList from './MovieList'


@connect((movieList) => ({
  movieList: movieList.movieList.willShowList

}), (dispatch) => ({
    getWillShowList() {
    dispatch(getWillShowList())
  }
}))

export default class WillShowMovie extends Component {

  componentDidMount() {
    this.props.getWillShowList();
    console.log("pppp", this.props.data)
  }


  render() {
    return (
      <View className="showing" id="showing">
        <MovieList showingList={this.props.movieList} type="willShow"></MovieList>   
      </View>
    )
  }
}
