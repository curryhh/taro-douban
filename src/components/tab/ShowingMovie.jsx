import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect} from '@tarojs/redux'
import { getShowingList} from '../../actions/movieList'
import MovieList from './MovieList'


@connect((movieList) => ({
  movieList: movieList.movieList.showingList
  
}), (dispatch) => ({
  getShowingList () {
    dispatch(getShowingList())
  }
}))

export default class ShowingMovie extends Component {

  componentDidMount() {
    this.props.getShowingList(); 
    console.log("pppp", this.props.data)
  }
  


  render () {
    return (
      <View className="showing" id="showing">
        
        <MovieList showingList={this.props.movieList}  type="showing"></MovieList>
        {/* <View onClick={this.hind.bind(this)}>123</View> */}
      </View>
    )
  }
}
