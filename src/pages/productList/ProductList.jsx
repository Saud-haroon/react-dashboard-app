import React, { useState } from 'react'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';
import { productRows } from '../../data/TableData'
import './productList.css'

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(user => user.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (p) => {
                return (
                    <div className='prodcutListProduct'>
                        <img className='productListImg' src={p.row.img} alt='' />
                        {p.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 200, renderCell: (p) => {
                return (
                    <>
                        <Link to={'/product/' + p.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={()=> handleDelete(p.row.id)} />
                    </>
                )
            }
        },
    ];

    return (
        <div className='productList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />

        </div>
    )
}

export default ProductList
