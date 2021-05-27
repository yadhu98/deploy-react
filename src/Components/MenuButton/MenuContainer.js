import React from 'react'
import '../Styles/MenuContainer.css'
import ProductList from './ProductList'
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import SubtitlesOutlinedIcon from '@material-ui/icons/SubtitlesOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
function MenuContainer() {
    return (
        <div className="MenuContainerpart">
            <div className="Menucontainerpart1">
            <h4>Visit More LinkedIn Products</h4>
            <div className="MenucontainerProductItems">
            <ProductList Icon={VideoLibraryOutlinedIcon} title='Learning'/> 
            <ProductList Icon= {AssessmentOutlinedIcon}  title='Insights'/>
            <ProductList Icon= {SubtitlesOutlinedIcon}  title='Post a Job'/>
            <ProductList Icon= {AttachMoneyOutlinedIcon}  title='Advertise'/>
            <ProductList Icon= {ExploreOutlinedIcon}  title='Find Leads'/>
            <ProductList Icon= {PeopleAltOutlinedIcon}  title='Groups'/>
            <ProductList Icon= {NaturePeopleOutlinedIcon}  title='ProFinder'/>
            <ProductList Icon= {LocalAtmOutlinedIcon}  title='Salary'/>
            </div>                
            </div>
        </div>
    )
}

export default MenuContainer
