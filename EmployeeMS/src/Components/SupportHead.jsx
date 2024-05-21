import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SupportHead = () => {
    return (
        <header>
            <div className='nav-div d-flex row g-0'>
                <div className='d-flex col'>
                    <span className='text-center'>
                        <Link
                            to="/"
                            className=''>
                            <img src="/Images/Acetech-logo-wide.png" alt="Logo" className='support-logo' />

                        </Link>
                    </span>
                    <span className='head-1'><h2>Support System</h2></span>
                </div>
                <div className='col'>
                    {/* <nav className='navbar navbar-expand-lg'>
                        <div className='collapse navbar-collapse'> */}
                            <ul className='nav-bar'>
                                <li className='li-bar'>
                                    <NavLink
                                    to='/support/home'
                                    className={({isActive}) => ` s-home px-0 align-middle ${isActive ? "text-white bg-color" : "text-black"}`}>
                                    <span className='s-home'>Home</span>
                                    </NavLink>
                                </li>
                                <li className='li-bar'>
                                    <NavLink
                                    to='/support/support-about'
                                    className={({isActive}) => ` s-home px-0 align-middle ${isActive ? "text-white bg-color" : "text-black"}`}>
                                    <span className='s-home'>About</span>
                                    </NavLink>
                                </li>
                                <li className='li-bar pointer-btn'>
                                    <div className='li-btn '>Ticket Submit</div>
                                </li>
                                <li className='li-bar'>
                                    <span className='me-2 p-1 rounded-2 pointer-btn'>Sign up</span>
                                    |
                                    <span className='ms-2 p-1 rounded-2 pointer-btn'>Login</span>
                                </li>
                            </ul>
                        {/* </div>
                    </nav> */}
                </div>
            </div>
        </header>
    )
}

export default SupportHead