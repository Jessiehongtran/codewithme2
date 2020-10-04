import React from 'react';
import { games } from './gameData';
import '../projects.scss';

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
                        
                   </div>
               )}
            </div>
        )
    }
}

