import React from 'react'
import './newUser.css'

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserU">New User</h1>
            <from className="newUserForm">
                <div className="newUserItem">
                    <label >Username</label>
                    <input type="text" placeholder='Username' />
                </div>
                <div className="newUserItem">
                    <label >Full Name</label>
                    <input type="text" placeholder='Full Name' />
                </div>
                <div className="newUserItem">
                    <label >E-mail</label>
                    <input type="e-mail" placeholder='Enter your E-mail' />
                </div>
                <div className="newUserItem">
                    <label >Password</label>
                    <input type="password" placeholder='Enter your password' />
                </div>
                <div className="newUserItem">
                    <label >Phone</label>
                    <input type="tel" placeholder='324-2465500' />
                </div>
                <div className="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder='City | Country' />
                </div>
                <div className="newUserItem">
                    <label >Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male' />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name='gender' id='other' value='other' />
                        <label htmlFor="other">Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                <label >Active</label>
                <select className='newUserActive' name='active' id='active'>
                    <option value=''>-----</option>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
                </div>
                <button className="newUserBtn">Create</button>
            </from>
        </div>
    )
}

export default NewUser
