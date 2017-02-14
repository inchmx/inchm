
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PersonalInformation from './PersonalInformation'
import ContactMe from './ContactMe'

import './InformationContainer.css'

export default class InformationContainer extends Component {
    render() {
        return (
            <div>
                <div className='info'>
                    <PersonalInformation />
                    <ContactMe />
                    <div className='crossed_top'></div>
                    <div className='crossed_right'></div>
                    <div className='crossed_bottom'></div>
                    <div className='crossed_left'></div>
                </div>
            </div>
        )
    }
}
