import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import SubTitle from '../../components/find/SubTitle'

import { AtSearchBar } from 'taro-ui'
import HotMovies from'../../components/find/HotMovies'

import './find.scss'



export default class Find extends Component {
  constructor(){
    super(...arguments);
    this.state={
      searchValue: ''
    }
  }
  config = {
    navigationBarTitleText: '推荐'
  }
  onChange(value) {
    this.setState({
      searchValue: value
    })
  }
  render() {
    return (
        <View>
          <AtSearchBar
            className="search-wrap"
            value={this.state.searchValue}
            onChange={this.onChange.bind(this)}
          />
        
          <SubTitle title="豆瓣热门">
            <View className="total">全部 99+ ></View>
          </SubTitle>
          <HotMovies/>

        </View>
      
    )
  }
}