import React from 'react'

function ProductList({Icon,title}) {
    return (
        <div>
            <div className="productitems">
                {Icon && <Icon className="productitemsicon"/> }
                <p className="recentitemstitle">{title}</p>
            </div>
        </div>
    )
}

export default ProductList
