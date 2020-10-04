import React from 'react';
import { arts } from './arts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'

export default class Arts extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <div className="projects">
                {arts.map(art => 
                <div className="each-project">
                        <img src={art.image}/>
                        <h3>{art.name}</h3>
                        <p>{art.description}</p>
                        <div className="icons">
                            <a href={art.link}><FontAwesomeIcon icon={faLink} className="icon"/></a>
                            <a href={art.code}><FontAwesomeIcon icon={faCode} className="icon"/></a>
                        </div>
                </div>
            )}
            </div>
        )
    }
}