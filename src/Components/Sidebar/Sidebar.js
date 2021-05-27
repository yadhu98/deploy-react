import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import RecentItems from './RecentItems'
import PeopleIcon from '@material-ui/icons/People';
import CodeIcon from '@material-ui/icons/Code';
import AddIcon from '@material-ui/icons/Add';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import '../Styles/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarTop">
            <img src ="https://static.vecteezy.com/system/resources/thumbnails/002/244/174/small/artistic-rainbow-colors-splash-watercolor-background-vector.jpg" alt=""/> 
            <div className="AvatarContainer"><Avatar className="sidebarAvatar" alt="Tommy Vercitty" src="https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png"/> </div>
            <h3>Tommy Vercitti</h3>
            <h5>Gtand Theft Auto Charecter </h5>
            </div>
            <div className="sidebarStats">
                <div className="sidebarStat">
                    <p className="sidebarStateP">Who viewed your profile </p>
                    <p className="sideBarStatsNUmber">61</p>
                </div>
                <div className="sidebarStat">
                    <p className="sidebarStateP">Views of your Post</p>
                    <p className="sideBarStatsNUmber">462</p>
                </div>
               
            </div>
             <div className="sidebarmyItems">
                    <BookmarkIcon/>
                    <p>My items</p>
            </div>
            <div className="sidebarBottom">
                <div className="recenttextcontainer"><p className="recenttext">Recent</p></div>
                <div className="recentsection">
                <div className="itemlist"><RecentItems Icon={PeopleIcon} title={"Unity Virtual Reality"}/></div>
                <div className="itemlist"><RecentItems Icon={CodeIcon} title={"Python Programming"}/></div>
                <div className="itemlist"><RecentItems Icon={CodeIcon} title={"React js Programming"}/></div>
            </div>
            <div className="Groupstextcontainer"><p className="grouplink">Groups</p></div>
            <div className="Groupsection">
                <div className="itemlist"><RecentItems Icon={PeopleIcon} title={"Unity Virtual Reality"}/></div>
                <div className="itemlist"><RecentItems Icon={PeopleIcon} title={"Programmers"}/></div>
                <div className="itemlist"><RecentItems Icon={PeopleIcon} title={"Designers Hub"}/></div>
            </div>
            <div className="Eventssection">
                <div className="Eventtextcontainer"><p>Events</p><div className="addbtn"><AddIcon/></div></div>
                <div className="itemlist"><RecentItems Icon={AddToQueueIcon} title={"FOSSMEET"}/></div>
                <div className="itemlist"><RecentItems Icon={AddToQueueIcon} title={"The Indian Bootcamp"}/></div>
                <div className="itemlist"><RecentItems Icon={AddToQueueIcon} title={"Google I/O"}/></div>
                <div className="itemlist"><RecentItems Icon={AddToQueueIcon} title={"Code Jam"}/></div>
                <div className="itemlist"><RecentItems Icon={AddToQueueIcon} title={"Smart India Hackathon"}/></div>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
