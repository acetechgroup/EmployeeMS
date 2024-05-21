import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const AdminRegistration = () => {
    const [registration, setRegistration] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', registration.name);
        formData.append('mobile', registration.mobile);
        formData.append('email', registration.email);
        formData.append('password', registration.password);

        axios.post('http://localhost:3000/registration/admin_registration', formData)
            .then(result => {
                if (result.data.Status) {
                    navigate('/adminlogin')
                    // console.log(result);
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='text-center loginPage'>
                <div className="col d-flex justify-content-center align-items-center vh-100 ">
                    <div className='p-3 rounded w-35 border loginForm'>
                        <div className='text-warning'>
                            {/* {error && error} */}
                        </div>
                        <h2>Registration Page</h2>
                        <form onSubmit={handleSubmit}>
                            <table>
                                <tbody>
                                    <tr >
                                        <td>
                                            <label htmlFor="name"><strong>Name:</strong></label>
                                        </td>
                                        <td>
                                            <input
                                                type="name"
                                                name='name'
                                                id='name'
                                                autoComplete='off'
                                                placeholder='Enter Name'
                                                className='form-control rounded-0'
                                                onChange={(e) => setRegistration({ ...registration, name: e.target.value })}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="mobile"><strong>Mobile:</strong></label>
                                        </td>
                                        <td>
                                            <input
                                                type="mobile"
                                                name='mobile'
                                                id='mobile'
                                                autoComplete='off'
                                                placeholder='Enter Mobile'
                                                className='form-control rounded-0'
                                                onChange={(e) => setRegistration({ ...registration, mobile: e.target.value })}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="email"><strong>Email:</strong></label>
                                        </td>
                                        <td>
                                            <input
                                                type="email"
                                                name='email'
                                                id='email'
                                                autoComplete='off'
                                                placeholder='Enter Email'
                                                className='form-control rounded-0'
                                                onChange={(e) => setRegistration({ ...registration, email: e.target.value })}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="password"><strong>Password:</strong></label>
                                        </td>
                                        <td>
                                            <input
                                                type="password"
                                                name='password'
                                                id='password'
                                                autoComplete='off'
                                                placeholder='Enter Password'
                                                className='form-control rounded-0'
                                                onChange={(e) => setRegistration({ ...registration, password: e.target.value })}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type='submit' className='btn btn-success rounded-0 m-2'>Submit</button>
                            <div className='mb-1'>
                                <input type="checkbox" name="tick" id="tick" className='me-2' />
                                <label htmlFor="tick">You are agree with our terms and conditions</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminRegistration