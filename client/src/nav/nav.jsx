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
                    <a href="#">
                        Do you know?
                    </a>
                    <a href="#">
                        Computer Science
                    </a>
                    <a href="/games">
                        Games
                    </a>
                    <a href="/arts">
                        Arts
                    </a>
                    <a href="/webapps">
                        Web Apps
                    </a>
                    <a href="#">
                        Contact
                    </a>
                </ul>
            </div>
        )
    }
}