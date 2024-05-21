import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
            .then(result => {
                if (result.data.loginStatus) {
                    // localStorage.setItem("valid", true)
                    navigate('/dashboard')
                } else {
                    setError(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='text-center loginPage'>
                <div className="row">
                    <div className="col mx-2 text-white d-flex justify-content-between loginHead shadow">
                    <img src="Images/EMS.png" alt="LOGO" className="logo_image m-2" />
                    <h1 className='mt-2 text-dark sm-text-hidden'>Employee Managenment System</h1>
                    <Link
                    to="/adminregistration"
                    >
                    <button className='btn btn-secondary btn-outline-light rounded-2 m-2 p-3'>Registration</button>
                    </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center vh-100 ">
                        <div className='p-3 rounded w-35 border loginForm'>
                            <div className='text-warning'>
                                {error && error}
                            </div>
                            <h2>Login Page</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="email"><strong>Email:</strong></label>
                                    <input
                                        type="email"
                                        name='email'
                                        autoComplete='off'
                                        placeholder='Enter Email'
                                        className='form-control rounded-0'
                                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="password"><strong>Password:</strong></label>
                                    <input
                                        type="password"
                                        name='password'
                                        autoComplete='off'
                                        placeholder='Enter Password'
                                        className='form-control rounded-0'
                                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                                    />
                                </div>
                                <button className='btn btn-success w-100 rounded-0 mb-2'>Login</button>
                                <div className='mb-1'>
                                    <input type="checkbox" name="tick" id="tick" className='me-2' />
                                    <label htmlFor="tick">You are agree with our terms and conditions</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>

                <div className='p-3 rounded w-35 border loginForm'>
                    <div className='text-warning'>
                        {error && error}
                    </div>
                    <h2>Login Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email:</strong></label>
                            <input
                                type="email"
                                name='email'
                                autoComplete='off'
                                placeholder='Enter Email'
                                className='form-control rounded-0'
                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Password:</strong></label>
                            <input
                                type="password"
                                name='password'
                                autoComplete='off'
                                placeholder='Enter Password'
                                className='form-control rounded-0'
                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                            />
                        </div>
                        <button className='btn btn-success w-100 rounded-0 mb-2'>Login</button>
                        <div className='mb-1'>
                            <input type="checkbox" name="tick" id="tick" className='me-2' />
                            <label htmlFor="tick">You are agree with our terms and conditions</label>
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    )
}

export default Login