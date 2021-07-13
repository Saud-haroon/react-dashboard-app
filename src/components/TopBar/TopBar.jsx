import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const TopBar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'> Logo </span>
                </div>
                <div className='topRight'>
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className='topIconCount'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className='topIconCount'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://images.unsplash.com/photo-1599140782131-42b91c7e4266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" className="topAvatar" />
                </div>

            </div>

        </div>
    )
}

export default TopBar
