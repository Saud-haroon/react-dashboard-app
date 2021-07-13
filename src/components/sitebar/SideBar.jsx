import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, BarChart, WorkOutline, Report, MailOutline, DynamicFeed, Message } from '@material-ui/icons'

const SideBar = () => {
    return (
        <div className='sideBar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <NavLink to='/' className='Link'>
                        <li className="sidebarListaItem">
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        </NavLink>
                        <li className="sidebarListaItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListaItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <NavLink exact activeClassName='active' to='/users' className='Link'>
                            <li className="sidebarListaItem ">
                                <PersonOutline className='sidebarIcon' />
                                Users
                            </li>
                        </NavLink>
                        <Link to='/products' className='Link'>
                        <li className="sidebarListaItem">
                            <Storefront className='sidebarIcon' />
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListaItem">
                            <AttachMoney className='sidebarIcon' />
                            Transations
                        </li>
                        <li className="sidebarListaItem">
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListaItem ">
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListaItem">
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListaItem">
                            <Message className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListaItem ">
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListaItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListaItem">
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
