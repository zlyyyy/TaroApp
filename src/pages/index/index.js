import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { search } from '../../api/index'
import './index.scss'
import Search from '../../components/search/search'

import { add, minus, asyncAdd } from '../../actions/counter'

@connect(({ counter }) => ({
    counter
}), (dispatch) => ({
    add () {
        dispatch(add())
    },
    dec () {
        dispatch(minus())
    },
    asyncAdd () {
        dispatch(asyncAdd())
    }
}))
export default class Index extends Component {
    config = {
        navigationBarTitleText: '首页'
    }
    componentWillMount () { 
        search({
                keywords: '海阔天空' 
            }).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
     }
    render () {
        return (
        <View>
            <Search></Search>
        </View>
        )
    }
}


