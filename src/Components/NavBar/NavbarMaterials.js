import React from 'react'
import '../Styles/Navbarmaterials.css'
import Avatar from '@material-ui/core/Avatar';
function NavbarMaterials({Icon,title,avatar}) {
    return (
        <div className="navbarmaterial">
            {Icon && <Icon className="navbarmaterial-icon"/> }
            {avatar && <Avatar className="navbarmaterial-icon" src={avatar}/>}
            <h4 className="navbarmaterial-title">{title}</h4>
        </div>
    )
}

export default NavbarMaterials
