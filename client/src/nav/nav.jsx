import React from 'react';
import './nav.scss'

export default class Nav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="nav">
                <h1>#Codewithme</h1>
                <ul>
                    <a href="/">
                        Games
                    </a>
                    <a href="/webapps">
                        Web Apps
                    </a>
                    <a href="/arts">
                        Arts
                    </a>
                    <a href="/about">
                        About
                    </a>
                </ul>
            </div>
        )
    }
}