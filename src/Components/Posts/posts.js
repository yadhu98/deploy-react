import React from 'react'
import '../Styles/Posts.css'
import Avatar from '@material-ui/core/Avatar';
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
function Posts({name,avatar,designation,description,img}) {
    return (
        <div >
            <div className="post">
            <div className ="postHeader">
                <div className="img"><Avatar src={avatar}/></div>
                <div class="postHeaderinfo">
                    <span className="PostmansName">{name}</span>
                    <span className="designation">{designation}</span>
                    <div className="dateofpost"><span>1d<b>.</b>Edited<b>.</b></span><PublicIcon style={{fontSize : '15px'}}/></div>
                </div>
            </div>
            <div className ="postcontnt">
                <p className= "description">{description}</p>
<img src={img} alt =""/>
            </div>
            <div className="reach">

            </div>
            <div  className="UserInteractions">
                <div className="Reactioncontainer">
                <div className="Like"><ThumbUpAltIcon className='likeicon' style={{color : 'grey'}}/><p>Like</p></div>
                <div className="Comment"><CommentIcon style={{color : 'grey'}}/><p>Comment</p></div>
                <div className="Share"><ShareIcon style={{color : 'grey'}}/><p>Share</p></div>
                <div className="Send"><SendIcon style={{color : 'grey'}}/><p>Send</p></div>
                </div>
                <div className="commentSection">
                <Avatar/>
                <div className="commenttextbar">
                    <input type="text" placeHolder="Add a comment "className="commenttext"/>
                    <div><EmojiEmotionsIcon c style={{color : 'grey'}}/>
                    <ImageIcon style={{color : 'grey'}}/></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Posts
