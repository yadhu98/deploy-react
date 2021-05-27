import React from 'react'
import '../Styles/RecenItems.css'
function RecentItems({Icon,title}) {
    return (
        
            <div className="recentitems">
                {Icon && <Icon className="recentitems-icon"/> }
                <p className="recentitems-title">{title}</p>
            </div>
        )
    
}

export default RecentItems
