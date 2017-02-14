import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='qq'>
                    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1009790421&site=qq&menu=yes"><i className='iconfont icon-qq'></i></a>
                </div>
                <div className='weixin'>
                    <div className='weixin-icon'><i className='iconfont icon-weixin'></i></div>
                    <div className='weixin-img'></div>
                </div>
            </div>
        )
    }
}

