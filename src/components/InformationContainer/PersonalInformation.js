import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import infomation from '../../services/infomationService'

export default class PersonalInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        if (!this.state.infomationMsg) {
            return <div></div>
        } else {
            return this.renderInfo()
        }
    }

    componentDidMount() {
        const self = this
        infomation.getInfomationData()
            .then((result) => {
                self.setState({
                    infomationMsg: result
                })
            }, (err) => {
                throw err
            })
    }

    renderInfo() {
        return (
            <div className='infoLeft css8e0cc928117d5c'>
                <div className='info_left_top'>
                    <div className='info_name'>
                        <span>{this.state.infomationMsg.name}</span>
                        <span>{this.state.infomationMsg.intention}</span>
                        <span>{this.state.infomationMsg.web}</span>
                    </div>
                </div>
                <div className='info_left_lineRow'></div>
                <div className='info_left_bottom'>
                    <div>
                        <div>{this.state.infomationMsg.education}</div>
                        <div className='info_edu'>
                            <span>{this.state.infomationMsg.edu_date}</span>
                            <span>{this.state.infomationMsg.edu_name}</span>
                            <span>{this.state.infomationMsg.edu_major}</span>
                            <span>{this.state.infomationMsg.qualifications}</span>
                        </div>
                    </div>
                    <div>
                        <div>{this.state.infomationMsg.honor}</div>
                        <div className='info_honor'>
                            <span>{this.state.infomationMsg.hon_date[0]}</span>
                            <span>{this.state.infomationMsg.hon_name}</span>
                            <br />
                            <span>{this.state.infomationMsg.hon_date[1]}</span>
                            <span>{this.state.infomationMsg.hon_name}</span>
                        </div>
                    </div>
                    <div>
                        <div>{this.state.infomationMsg.experience}</div>
                        <div className='info_exp'>
                            <span>{this.state.infomationMsg.exp_date}</span>
                            <span>{this.state.infomationMsg.exp_name}</span>
                            <span>{this.state.infomationMsg.web}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
