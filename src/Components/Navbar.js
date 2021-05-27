import React,{useState} from 'react'
import './Styles/Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import NavbarMaterials from './NavBar/NavbarMaterials';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GridOnIcon from '@material-ui/icons/GridOn';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Slider from 'react-slide-out';
import 'react-slide-out/lib/index.css';
export default function Navbar(handleMouseDown) {
    const [isOpen, setIsopen] = useState(false)
    const togglePopup =()=>{
        setIsopen(!isOpen)
      }
    return (
       
        <div className="navbar">
            <div className="navbar-left">
                <img src='https://brandeps.com/icon-download/L/Linkedin-icon-vector-13.svg' 
                alt =""
                />
            </div>
            <div className="navbar-search">
                <SearchIcon/>
                <input type="text" className="search-box"/>
            </div>   
            <div className="navbar-right">
                <div className="navbar-right-icons">
                <div className="home-container"><NavbarMaterials Icon={HomeIcon} title={"Home"}/></div>
                <div className="network-container"><NavbarMaterials Icon={SupervisorAccountIcon} title={"My Network"}/></div>
                <div className="Jobs-container"><NavbarMaterials Icon={BusinessCenterIcon} title={"Jobs"}/></div>
                <div className="AddPost-container"><NavbarMaterials Icon={AddBoxIcon} title={"Post"}/></div>
                <div className="Messaging-container"><NavbarMaterials Icon={MessageIcon} title={"Messaging"}/></div>
                <div className="notifications-container"><NavbarMaterials Icon={NotificationsIcon} title={"Notifications"}/></div>
                </div>
                {/* <NavbarMaterials Icon={MessageIcon} title={"Messaging"}/>}
                <NavbarMaterials Icon={GridOnIcon} title={"Work"}/> */}
                <div className="avatar-container"><NavbarMaterials avatar="https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png" title="me"/></div>
                <div className = "work-container"><NavbarMaterials onClick={togglePopup} Icon={GridOnIcon} title={"Work"}/></div>
            
            </div>
        </div>
        
    )
}

