import React from 'react';
import { webs } from './webAppData' 
import '../projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'

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
                        <div className="icons">
                            <a href={web.link}><FontAwesomeIcon icon={faLink} className="icon"/></a>
                            <a href={web.code}><FontAwesomeIcon icon={faCode} className="icon"/></a>
                        </div>
                   </div>
               )}
            </div>
        )
    }
}
