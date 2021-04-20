import React, { Component } from 'react';

export class FilterProduct extends Component {
    render() {
        return (
            <div className='filter-container'>
                <div className='product-count'>
                    <span></span>
                </div>
                <div className='product-sort'>
                    <span className='sort-by'>Sort By {":  "}</span>
                    <select className='select-box' value={this.props.sort} onChange={this.props.sortproducts}>
                        <option value='lowest'>Highest</option>
                        <option value='highest'>Lowest</option>
                    </select>
                </div> 
            </div>
        )
    }
}

export default FilterProduct;
