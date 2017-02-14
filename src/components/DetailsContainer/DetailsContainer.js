
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import detailListData from '../../services/detailService'

import './DetailsContainer.css'


export default class DetailsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: true,
            detailListMsg: {},
            detailIconMsg: []
        }
    }

    fetch() {
        var self = this
        const promise = detailListData.getDetailListData()
        promise.then(
            function (data) {
                self.setState({
                    isLoad: false,
                    detailListMsg: data.detailListMsg,
                    detailIconMsg: data.detailIconMsg
                })
            },
            function (err) {
            }
        ).catch(function (err) {

        })
    }

    renderItem(item, index) {
        return (
            <div className='detailIcon' key={Math.random()}>
                <div>
                    <i className={item.cls}></i>
                    <p ref={`listCell_${index + 1}`}>{item.name}</p>
                </div>
            </div>
        )
    }

    renderDetailsContainer() {
        return (
            <div className='detail'>
                <div className='detailIcon'>
                    <span className='detailMsg' ref='detailMsg'></span>
                </div>
                <div className='listCell'>
                    {this.state.detailIconMsg.map(this.renderItem)}
                </div>
            </div>
        )
    }

    render() {
        if (this.state.isLoad) {
            return <div></div>
        } else {
            return this.renderDetailsContainer()
        }
    }

    componentDidUpdate() {
        const self = this
        for (const key in this.refs) {
            if (key != 'detailMsg') {
                this.refs[key].addEventListener('click', function (e) {
                    self.refs.detailMsg.innerHTML = self.state.detailListMsg[e.target.innerHTML]
                })
            }
        }
    }

    componentDidMount() {
        this.fetch()
    }
}