import React from 'react';
import './list.css';

function List (props) {
    const classes = {
        red: 'red-dot',
        green: 'green-dot'
    }
    return (
        <div className="people">
            <img src={props.avatar} alt="avatar" />
            <span>{props.name}</span>
            <div></div>
            <span className={classes[props.inSession === true ? 'green' : 'red']}>
            </span>
            <p>
                {props.onStage === true ? 'On stage' : ''}
            </p>
        </div>
    );
}

export default List;
