import React from 'react';
import { arts } from './arts';

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
                        
                </div>
            )}
            </div>
        )
    }
}