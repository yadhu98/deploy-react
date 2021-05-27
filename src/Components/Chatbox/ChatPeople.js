import React from 'react'
import '../Styles/ChatPeople.css'
import Avatar from '@material-ui/core/Avatar';
function ChatPeople({avatar,name}) {
    return (
        <div className="chatboxpeoplecontainer">
            {avatar && <Avatar className="navbarmaterial-icon" src={avatar}/>}
            <h5 className="navbarmaterial-title">{name}</h5>
        </div>
    )
}

export default ChatPeople
