import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'

import { AtTabBar } from 'taro-ui'

import './index.scss'
// page.js
import Tab from '../../components/tab/tab'


// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))



export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  // handleClick(value) {
  //   this.setState({
  //     current: value
  //   })
  //   let current = current;
  //   if (value != current && value==0){
  //     Taro.navigateTo({
  //       url: `/pages/index/index`
  //     })
  //   } else if (value != current && value == 1){
  //     Taro.navigateTo({
  //       url: `/pages/find/find`
  //     })
  //   }else{
  //     Taro.navigateTo({
  //       url: `/pages/login/login`
  //     })
  //   }
  // }
    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { 

  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      // <View className='index'>
      //   <Button className='add_btn' onClick={this.props.add}>+</Button>
      //   <Button className='dec_btn' onClick={this.props.dec}>-</Button>
      //   <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
      //   <View><Text>{this.props.counter.num}</Text></View>
      //   <View><Text>Hello, World</Text></View>
      // </View>
      <View className='index'>
        <Tab></Tab>
        
        {/* <AtTabBar
          fixed
          tabList={[
            { title: '热映', iconType: 'home'},
            { title: '找片', iconType: 'search' },
            { title: '文件夹', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        /> */}
      </View>
    )
  }
}


