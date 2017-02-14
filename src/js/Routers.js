
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute,Link, hashHistory, browserHistory } from 'react-router'

//引入路由子文件
import AppContainer from '../components/AppContainer/AppContainer'
import HomeContainer from '../components/HomeContainer/HomeContainer'
import InformationContainer from '../components/InformationContainer/InformationContainer'
import DetailsContainer from '../components/DetailsContainer/DetailsContainer'

export default class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    //渲染界面 设置默认主页面
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path='/' component={AppContainer}>
                        <IndexRoute component={HomeContainer}></IndexRoute>
                        <Route path='home' component={HomeContainer}></Route>
                        <Route path='information' component={InformationContainer}></Route>
                        <Route path='details' component={DetailsContainer}></Route>
                    </Route>
                </Router>
            </div>
        )
    }
}