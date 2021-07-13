import React, { useState } from 'react'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';
import { rows } from '../../data/TableData'

import './userList.css'

const UserList = () => {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter(user => user.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (p) => {
                return (
                    <div className='userListUser'>
                        <img className='userListImg' src={p.row.avatar} alt='' />
                        {p.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'E-mail', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'trasnaction', headerName: 'Trasnaction', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 200, renderCell: (p) => {
                return (
                    <>
                        <Link to={'/user/' + p.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={()=> handleDelete(p.row.id)} />
                    </>
                )
            }
        },
    ];
    return (
        <div className='userList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}


export default UserList
