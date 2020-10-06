import React from 'react';
import './about.scss';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="about">
                <div className="introduction">
                    <h2>
                        Hey there 
                        <span 
                            role="img" 
                            aria-label="hand_wave"
                            className="hand_wave_emoji"
                    >👋</span>
                    </h2>
                    <p
                        className="intro"
                    >I am Hong, I love programming and enjoy working on projects. My background is actually in business and I got late exposure to programming, therefore I always think of how I can help more people to know about this stuff as soon as possible. That's where I started this, so join me, #codewithme, there'll be more fun projects coming!!!</p>
                    <Link to="/qna" className="ask">Ask me anything</Link>
                </div>
            </div>
        )
    }
}