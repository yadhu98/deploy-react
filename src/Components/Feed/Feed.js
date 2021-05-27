import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import EventIcon from '@material-ui/icons/Event';
import '../Styles/Feed.css'
import FeedItems from './FeedItems'
import Posts from '../Posts/posts'
function Feed() {
    return (
        <div>
        <div className="startpost"><button className="startpostbtnres">Start a Post</button></div>
        <div className="feed">
            
            <div className="feedinputcontainer">
                <div className="feedinput">
                    <Avatar/>
                    <button className="startapostbtn">Start a Post</button>
                </div>
                <div className="feedTypes">
                    
                <FeedItems Icon={PhotoIcon} title="Photo" color= "#70B5F9"/>
                <FeedItems Icon={VideocamIcon} title="Video" color= "#7FC15E"/>
                <FeedItems Icon={EventIcon} title="Event" color= "#7FC15E"/>
                <FeedItems Icon={ArtTrackIcon} title="Write article" color= "#F5987E"/>
               
                </div> 
            </div>
        </div>
        <div className="post container">
            <Posts/>
            <Posts/>
            <Posts/>
        </div>
        </div>
    )
}

export default Feed
