import React from 'react'
import './newproduct.css'

const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className="newProductTitle">New Product</h1>
            <from className="newProductForm">
                <div className="newProductItem">
                    <label >Image</label>
                    <input type="file" id='file' />
                </div>
                <div className="newProductItem">
                    <label >Name</label>
                    <input type="text" placeholder='Product Name' />
                </div>
                <div className="newProductItem">
                    <label >Stock</label>
                    <input type="Number" placeholder='Available Stock' />
                </div>                
                <div className="newProductItem">
                <label >Active</label>
                <select className='newUserActive' name='active' id='active'>
                    <option value=''>-----</option>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
                </div>
                <button className="newProductBtn">Create</button>
            </from>
        </div>
    )
}

export default NewProduct
