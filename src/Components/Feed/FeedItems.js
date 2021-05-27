import React from 'react'
import '../Styles/FeedItem.css'
function FeedItems({Icon,title,color}) {
    return (
        <div className="Feeditemstyle">
             {Icon && <Icon  style={{color : color}} className="recentitems-icon"/> }
                <h6>{title}</h6>
        </div>
    )
}

export default FeedItems
