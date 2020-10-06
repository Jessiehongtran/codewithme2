import React from 'react';
import './Q&A.scss';
import { feeds } from '../data/feeds';

export default class QA extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="qna_container">
                <div className="qna">
                    <div className="question">
                        <h3>Your question</h3>
                        <textarea
                            placeholder="I am curious about..."
                            className="text"
                        />
                        <h3>How should I call you?</h3>
                        <input
                            placeholder="John Smith"
                            className="name"
                        />
                        <button className="send_btn">Send</button>
                    </div>
                    <div className="feeds">
                        {feeds.map(feed => 
                            <div className="each_feed">
                                <p className="asker">@{feed.name}</p>
                                <div className="ask_content">
                                    <p className="content">{feed.question}</p>
                                    <a href="#" className="reply_btn">Reply</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}