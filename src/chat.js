import React from 'react';
import './list.css';
import './App.css';
import store from './store.js';

function Chat(props) {
    const id = props.id;
    const participate = store.participants.find(person => person.id === id);
    const avatar = participate.avatar;
    const name = participate.name;
    const alt = `The avatar of ${name}`;
    const type = props.type;

    if (props.message) {
        const message = props.message;
        let stamp = `${new Date(props.time).getHours()}:${new Date(props.time).getMinutes()}`;

        return (
            <li className='msg'>
                <img className='chatAvatar' src={avatar} alt={alt} />
                <div> <b>{name}</b> <span className='emote'>{stamp}</span>
                    <br />{message}</div>
            </li>
        );
    } else {
        switch (type) {
            case 'clap':
                return (<li>{name} clapped</li>);
            case 'join':
                return (<li>{name} joined</li>);
            case 'thumbs-down':
                return (<li>{name} gave a thumbs down</li>);
            case 'thumbs-up':
                return (<li>{name} gave a thumbs up</li>);
            case 'raise-hand':
                return (<li>{name} raised their hand</li>);
            case 'join-stage':
                return (<li>{name} joined the stage</li>);
            case 'leave-stage':
                return (<li>{name} left the stage</li>);
            case 'leave':
                return (<li>{name} left</li>);
            default:
                throw new Error();
        }
    }
}

export default Chat;
