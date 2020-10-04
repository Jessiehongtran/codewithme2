import React from 'react';
import { webs } from './webAppData' 
import '../projects.scss';

export default class WebApps extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="projects">
                {webs.map(web => 
                   <div className="each-project">
                        <img src={web.image}/>
                        <h3>{web.name}</h3>
                        <p>{web.description}</p>
                        
                   </div>
               )}
            </div>
        )
    }
}
