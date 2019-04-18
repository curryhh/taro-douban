import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// app.js
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
  require('nerv-devtools')
}

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/movieDetail/movieDetail',
      'pages/login/login',
      'pages/find/find'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }, 
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '热映',
        iconPath: './assets/images/icons/dianying.png',
        selectedIconPath: './assets/images/icons/dianying-o.png'
      }, {
          pagePath: 'pages/find/find',
        text: '找片',
          iconPath: './assets/images/icons/icon-test.png',
          selectedIconPath: './assets/images/icons/icon-test-o.png'
      }, {
        pagePath: 'pages/login/login',
        text: '我的',
          iconPath: './assets/images/icons/wo.png',
          selectedIconPath: './assets/images/icons/wo-o.png'
      }],
      color: '#8a8a8a',
      selectedColor: '#2d8cf0',
      backgroundColor: '#ffffff',
      borderStyle: 'white'
    },
    
  }
  

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
