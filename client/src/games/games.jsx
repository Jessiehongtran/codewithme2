import React from 'react';
import { games } from './gameData';
import '../projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'

export default class Games extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="projects">
               {games.map(game => 
                   <div className="each-project">
                        <img src={game.image}/>
                        <h3>{game.name}</h3>
                        <p>{game.description}</p>
                        <div className="icons">
                            <a href={game.link}><FontAwesomeIcon icon={faLink} className="icon"/></a>
                            <a href={game.code}><FontAwesomeIcon icon={faCode} className="icon"/></a>
                        </div>
                   </div>
               )}
            </div>
        )
    }
}

