import React from 'react'
import "../index.css"
const Filter =( {count,sortProducts,sort,size,filterProducts}) => {
    return (
        <div className="filter">
            <div className="filter-result">{count} Products</div>
            <div className="filter-sort">Order{" "}
            <select value={sort} onChange={ sortProducts}>
            <option value="">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
            </select>
            </div>
            <div className="filter-size">Filter
            <select value={size} onChange={filterProducts}>
            <option value ="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XLL">XXL</option>
            </select>
            </div>
            
            
        </div>
    )
}

export default Filter
