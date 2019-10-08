import React from 'react';
import './stage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faVolumeUp, faSearch } from '@fortawesome/free-solid-svg-icons'

function Stage(props) {
    return (
        <div className='stage-people'>
            <span className='person'>{props.name}</span>
            <div className='volume-bar'></div>
            <div className='icons'>
                <span className='volume'><FontAwesomeIcon icon={faVolumeUp}/></span>
                <span className='search'><FontAwesomeIcon icon={faSearch}/></span>
            </div>
            <img src={props.avatar} alt='avatar' className='avatar'/>
        </div>
    )
}


export default Stage;