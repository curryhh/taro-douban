import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

import ShowingMovie from './ShowingMovie'
import WillShowMovie from './WillShowMovie'

export default class Tab extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            current: 0,
        }
    }
    handleClick(value) {
        this.setState({
            current: value
        })
    }
    render() {
        const tabList = [{ title: '正在热映' }, { title: '即将上映' }]
        return (
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={this.state.current} index={0} >
                    <View >
                        <ShowingMovie type="showing"/>
                    </View>
                </AtTabsPane>
                <AtTabsPane current={this.state.current} index={1}>
                    <View >
                         <View id="movie-list-wrap">
                            <WillShowMovie type="willShow" />
                        </View>
                    </View>
                </AtTabsPane>
            </AtTabs>
        )
    }
}