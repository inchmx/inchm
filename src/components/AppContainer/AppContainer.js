
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import Contact from './Contact'

import './AppContainer.css'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messageType: "home"
        }
    }

changeMsgHandle(msgType) {
    this.setState({
        messageType: msgType
    })
}

    render() {
        return (
            <div className='app'>
                <div className="bg1"></div>
                <canvas id="canvas" className="canvas" width="100%" height="100%"></canvas>
                <div className='app_header'>
                    <Link onClick={()=> {this.changeMsgHandle('home')}} className={this.state.messageType=='home'? "current linkHandle": "linkHandle"} to="home">首页</Link>
                    <Link onClick={()=> {this.changeMsgHandle('information')}} className={this.state.messageType=='information'? "current linkHandle": "linkHandle"} to="information">信息</Link>
                    <Link onClick={()=> {this.changeMsgHandle('details')}} className={this.state.messageType=='details'? "current linkHandle": "linkHandle"} to="details">评价</Link>
                </div>
                <Contact />
                <div className='app_content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
    componentDidMount() {
        /**
         * canvas画布绘制动态星空代码
         */
    }
}
