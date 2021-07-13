import React from 'react'
import { Link } from 'react-router-dom'
import { Publish } from '@material-ui/icons'
import './product.css'

import Chart from '../../components/chart/Chart'
import { productData } from '../../data/dummyData'
const Product = () => {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h3 className="productTitle">Products</h3>
                <Link to='/newproduct'>
                    <button className="productAddBtn">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='Sales' title='Sales Performance' grid />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://i5.walmartimages.com/asr/12b1f605-48a4-4f5f-9896-ab48e5788296_1.6c8b2f3ba94366ddaf4a7e0be358b1bc.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="" className="productinfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoStock">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoStock">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoStock">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoStock">no</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFromLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple AirPod' />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFromRight">
                        <div className="productUpload">
                            <img src="https://i5.walmartimages.com/asr/12b1f605-48a4-4f5f-9896-ab48e5788296_1.6c8b2f3ba94366ddaf4a7e0be358b1bc.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="" className="productUploadImage" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input hidden type="file" name="file" id="file" />
                        </div>
                        <button className='productBtn'>Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Product
