import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import '../Styles/Chatbox.css'
import ChatPeople from './ChatPeople';
function Chatbox() {
    return (
        <div>
            <div className="chatbox-container">
                <div className="chatboxHeader">
                        <div className="chatboxHeaderone">
                        <Avatar/>
                        <h6>Messaging</h6>
                        </div>
                        <div className="chatboxHeadertwo">
                        <EditIcon/>
                        <MoreHorizIcon/>
                        <ExpandMoreIcon/>                            
                        </div>
                        
                </div>
                <div className="chatboxSearch">
                            <div className="chatboxSeachpartone"><SearchIcon/><input className="searchtextchat" type="text"/></div>
                            <FilterListIcon/>
                </div>
                <div className="chatpeople">
                    <div className="chatboxmember"><ChatPeople avatar="https://media-exp1.licdn.com/dms/image/C4D03AQEXpJGnbCwODA/profile-displayphoto-shrink_100_100/0/1597630278891?e=1627516800&v=beta&t=EJNI-KnXzDzCRQsL16w1VlC4dhs_nJyvu-NP5FewtKw" name="Abhilash"/></div>
                    <div className="chatboxmember"><ChatPeople avatar="https://media-exp1.licdn.com/dms/image/C5603AQFxSwg0W9diyg/profile-displayphoto-shrink_100_100/0/1612692556132?e=1627516800&v=beta&t=YWupS7qtkz0GpiK_NJ6ceidAMLWsIXZ0akCQn6OwIW8" name="James Baby"/></div>
                    <div className="chatboxmember"><ChatPeople avatar="https://media-exp1.licdn.com/dms/image/C5635AQFVFDZ6ol7SdA/profile-framedphoto-shrink_100_100/0/1601359197734?e=1622199600&v=beta&t=LiCN8j3fLGQbWTN1numL2GrT-IsViKu7zV5dotMVzJE" name="Rhythin"/></div>
                    <div className="chatboxmember"><ChatPeople avatar="https://media-exp1.licdn.com/dms/image/C5603AQEZ-4Npu_V-kQ/profile-displayphoto-shrink_100_100/0/1619161344459?e=1627516800&v=beta&t=8Nw8dmOs9Fx54s1YHB_0b3dEbbV3kLmSw0CvabDSAOs" name="Siddharth"/></div>
                    <div className="chatboxmember"><ChatPeople avatar="https://media-exp1.licdn.com/dms/image/C4E03AQGeR4Kf5dJTVA/profile-displayphoto-shrink_100_100/0/1545884319356?e=1627516800&v=beta&t=BSWwIkQCdOlfLfJ8KIQhm3so6j05oEMf33IhuJ22zwU" name="Yedhin"/></div>

                </div>
            </div>
        </div>
    )
}

export default Chatbox
