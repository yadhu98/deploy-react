import React from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Avatar from '@material-ui/core/Avatar';
import '../Styles/Chatbox.css'

function InitialChatbox() {
    return (
        <div>
            <div className="initchatbox">
                <Avatar/>
                <h4>Messaging</h4>
                <ExpandLessIcon/>
            </div>
        </div>
    )
}

export default InitialChatbox
