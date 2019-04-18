
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './SubTitle.scss'

export default class SubTitle extends Component {

  constructor(){
    super(...arguments);
  }
  
  
  render() {
    return (
        <View className="sub-title">
            <View className="title">{this.props.title}</View>
            {this.props.children}
        </View>
    )
  }
} 