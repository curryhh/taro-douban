import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import { AtForm, AtInput, AtButton, AtNavBar} from 'taro-ui'

import './login.scss'

export default class Login extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      password:''
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  config = {
    navigationBarTitleText: '登录'
  }

  backForward = () => {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  onSubmit(){
    
  }
  render() {
    return (
      <View className="login-box">
        
        <AtNavBar
          className="top"
          onClickLeftIcon={this.backForward.bind(this)}
          fixed
          title='登录'
          leftIconType='chevron-left'
        />
        
        <View className="login-title">欢迎来到豆瓣</View>
        
        <AtForm
          className="login-form"
          onSubmit={this.onSubmit.bind(this)}
          
        >
          <AtInput
            name='value'
            type='text'
            placeholder='手机号/邮箱'
            value={this.state.value}
          />
          <AtInput
            name='password'
            type='password'
            placeholder='密码'
            value={this.state.password}
          />
          <AtButton className="btn-login" formType='submit'>登录</AtButton>
        </AtForm>
        <View className="btn-other">
          <Text className="left">注册豆瓣</Text>
          <Text className="right">忘记密码</Text>
        </View>
      </View>
    )
  }
}
