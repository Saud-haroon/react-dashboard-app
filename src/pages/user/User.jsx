import React from 'react'
import { Link } from 'react-router-dom'
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'

import './user.css'

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newuser'>
                    <button className="userAddBtn">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1599140782131-42b91c7e4266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" className='userShowImg' />
                        <div className="userShowAccTitle">
                            <span className="userShowUsername">Saud Ganatra</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Title</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">Saud88</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">02-01-1988</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+92-324-2465500</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">saud_ganatra@live.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">Karachi | Pakistan</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userupdateItem">
                                <label>UserName</label>
                                <input type="text" placeholder='saud88' className='UserUpdateInput' />
                            </div>
                            <div className="userupdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder='Full Name' className='UserUpdateInput' />
                            </div>
                            <div className="userupdateItem">
                                <label>Email</label>
                                <input type="email" placeholder='E-mail' className='UserUpdateInput' />
                            </div>
                            <div className="userupdateItem">
                                <label>Phone</label>
                                <input type="number" placeholder='Enter your Phone #' className='UserUpdateInput' />
                            </div>
                            <div className="userupdateItem">
                                <label>Address</label>
                                <input type="text" placeholder='City | Country' className='UserUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className='UserUpdateImg' src="https://images.unsplash.com/photo-1599140782131-42b91c7e4266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" />
                                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                                <input hidden type="file" id='file' />
                            </div>
                            <button className='userUpdateBtn'>Update</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
