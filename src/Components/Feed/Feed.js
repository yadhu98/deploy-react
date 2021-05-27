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
        <div className="post_container">
            <Posts  
            name='yadhu' 
            avatar='https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635'
            designation='Game Developer' 
            description='I am excited to announce that today I have joined Flipkart as a Software Development Engineer-1.
            Thank you Heenal Thakrar, Sneha Thomas for the support throughout the recruiting process.
            Looking forward to this wonderful experience of my life as a Flipster!' 
            img='https://media-exp1.licdn.com/dms/image/C4E22AQH57RbdiRIXDw/feedshare-shrink_800/0/1622124369064?e=1625097600&v=beta&t=jr2r30T46RpDk0RtufdF-pzQwwC_ZcopfLN_HorT8Hk' 
            />
            <Posts  
            name='PREETI TAMRKAR' 
            avatar='https://media-exp1.licdn.com/dms/image/C5603AQFpG-7rQYSHjg/profile-displayphoto-shrink_100_100/0/1619697093003?e=1627516800&v=beta&t=L7Npi8LScg6qeGo4WhQVA9OePG2Ie_WYQUnkRIXZJ5o'
            designation='Associate (Data Science) at Cognizant' 
            description='Hello Everyone!

            I am extremely delighted to share that I have joined #Cognizant as Associate-Projects (Data Science). I am really excited to start the new phase of my life.
            
            The #transition from academia to industry was one of the toughest task, but I am happy that my #dedication, #patience, and #perseverance have finally paid off.
            
            I am so grateful for this opportunity and I would like to thank Jyoti Ranjan Panda for seeing potential in me; special thanks to manastha garg for helping me; As well as my family, friends, mentors, and #linkedinconnections for their continued support and guidance.
            
            Looking forward to a great learning experience and contributing my best!
            
            Thanks to Ayon Roy, Rakesh Kumar Mallik, Madhu Babu Cherukuri, Rahul Vashistha, Saurabh Bhagvatula, Ekta Shah, Robins Yadav, Azad Khan, Saiteja Nalla, Prathibha Reddy
            
            #newjob #firstday #dayone #datascience #machinelearning #datascientist #artificialintelligence #ai #cognizant #newbeginings #vit #vitchennai #phd #phdfresher #opportunity #careergoals #firstjob #referral #friends #grateful #womenintech' 
            img='https://media-exp1.licdn.com/dms/image/C5622AQGx4xCy8NER0A/feedshare-shrink_800/0/1622038924589?e=1625097600&v=beta&t=Dfzgbrscw3Nx5k7Can-Yot8chrsNW3_PM-a5zzsKZx0' 
            />
            <Posts  
            name=' Cyril Mathew panamkoodan ' 
            avatar='https://qph.fs.https://media-exp1.licdn.com/dms/image/C5603AQHBRVvytzXS8Q/profile-displayphoto-shrink_100_100/0/1621923778663?e=1627516800&v=beta&t=iWKr6VrepCYN7Cdw8-fpKN_nELo-KDTEZMYRqAMDNKY.net/main-qimg-20df28f3b31895e56cba6dbc0515c635'
            designation='LEAD GENERATOR AND MACHINERY AUTOMATION ENGINEER AT SARAHS TECHNO..  ' 
             
            img='https://media-exp1.licdn.com/dms/image/C5622AQHtTI-IbghbEQ/feedshare-shrink_800/0/1621822314529?e=1625097600&v=beta&t=cg3pb6QAlhlUK_iBUGWGRr8bUaLnAXF9TO7ySlYeqW0' 
            />
          
        </div>
        </div>
    )
}

export default Feed
