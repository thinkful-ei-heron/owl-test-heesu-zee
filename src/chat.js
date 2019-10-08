import React from 'react';
import Store from './list-store';


function Chat(props) {
    const defaultContent = (
        <span>{props.name} {props.type}</span>
    )

    const messageContent = (
        <div className="message-content">
            <img src={Store.participants.find(item => item.id === props.participantID)} alt="avatar" />
            <span>{props.name} {new Date(props.time)}</span>
            <p>{props.message}</p>
        </div>
    )
    
    return (
        <div className="chat-item">
            {(props.type === 'message') ? props.messageContent : props.defaultContent}
        </div>
    )
}

export default Chat;