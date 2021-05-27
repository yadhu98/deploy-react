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
function Posts() {
    return (
        <div >
            <div className="post">
            <div className ="postHeader">
                <div className="img"><Avatar/></div>
                <div class="postHeaderinfo">
                    <h4>Jyotirmoyee Chakraborty</h4>
                    <p className="designation">Assoicate of Cognizant</p>
                    <div className="dateofpost"><p>1d.Edited.</p><PublicIcon/></div>
                </div>
            </div>
            <div className ="postcontnt">
                <p className= "description">Pwned a new Hack The Box machine Pit after a break.
<span style= {{color : "blue"}}>#cybersecurity #security #hackthebox #centos #hacking #ethicalhacking #hacker</span></p>
<img src="https://media-exp1.licdn.com/dms/image/sync/C5627AQHCSrAHqBr1_Q/articleshare-shrink_1280_800/0/1621339448976?e=1622188800&v=beta&t=4HyTiNA5BqetnSfEq5J4Cs22GrpaSA0L2CjDKOiL9v0" alt =""/>
            </div>
            <div className="reach">

            </div>
            <div  className="UserInteractions">
                <div className="Reactioncontainer">
                <div className="Like"><ThumbUpAltIcon style={{color : 'grey'}}/><p>Like</p></div>
                <div className="Comment"><CommentIcon style={{color : 'grey'}}/><p>Comment</p></div>
                <div className="Share"><ShareIcon style={{color : 'grey'}}/><p>Share</p></div>
                <div className="Send"><SendIcon style={{color : 'grey'}}/><p>Send</p></div>
                </div>
                <div className="commentSection">
                <Avatar/>
                <div className="commenttextbar">
                    <input type="text" placeHolder="Add a comment "className="commenttext"/>
                    <div><EmojiEmotionsIcon style={{color : 'grey'}}/>
                    <ImageIcon style={{color : 'grey'}}/></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Posts
