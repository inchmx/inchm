import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ContactMe extends Component {
    render() {
        return (
            <div className='infoRight'>
                <div className='info_lineColumn'></div>
                <div className='info_right_main'>
                    <span><i className='iconfont icon-wangzhan'></i>www.inchm.com</span>
                    <span><i className='iconfont icon-youxiang'></i>inchmx@gmail.com</span>
                    <span><i className='iconfont icon-github'></i><a target='_blank' href='https://github.com/inchm'>github.com/inchm</a></span>
                    <span><i className='iconfont icon-dianhua'></i>153-1137-0851</span>
                    <span><i className='iconfont icon-weizhi'></i>北京</span>
                </div>
                <div className='info_right_lineRow'></div>
            </div>
        )
    }
}