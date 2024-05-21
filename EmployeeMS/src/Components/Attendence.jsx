import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CSVLink, CSVDownload } from "react-csv";

const Attendence = () => {

    const [date, setDate] = useState(Date)
    const [admins, setAdmins] = useState([])
    const [category, setCategory] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [records, setRecords] = useState([]);

    

    useEffect(() => {
        AdminRecords();
    }, [])

    const AdminRecords = () => {
        axios.get('http://localhost:3000/auth/admin_records')
            .then(result => {
                if (result.data.Status) {
                    setAdmins(result.data.Result)
                } else {
                    alert(result.data.Error)
                }
            })
    }

    useEffect(() => {
        axios
            .get("http://localhost:3000/auth/category")
            .then((result) => {
                if (result.data.Status) {
                    setCategory(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3000/auth/employee")
            .then((result) => {
                if (result.data.Status) {
                    setEmployee(result.data.Result);
                    setRecords(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const handleFilter = (event) => {
        console.log(event);
        setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }

    const [punchIn, setPunchIn] = useState(Date)
    const [punchOut, setPunchOut] = useState(Date)
    const [status, setStatus] = useState('status_1')
    

    const status_1 = [
        {
            option1: 'Select'
        },
        {
            option1: 'Present'
        },
        {
            option1: 'Absent'
        },
        {
            option1: 'Late'
        },
        {
            option1: 'Half Day'
        },
        {
            option1: 'Paid Leave'
        }
    ]

    const handlepunchIn = (e) => {
        setPunchIn(e.target.value)
        console.log(`Punch In Time: ${punchIn}`);
    }
    const handlepunchOut = (e) => {
        setPunchOut(e.target.value)
        console.log(`Punch Out Time: ${punchOut}`);
    }
    const handleStatus = (e) => {
        setStatus({...status_1, option1: e.target.value})
        console.log({...status_1, option1: e.target.value});
    }
    const handleDate = (e)=>{
        setDate(e.target.value)
        console.log(date);
    }

    return (
        <>
            <div className=" container text-center" id='attendence-bg'>
                <div className="row">
                    <div className="col mt-3">
                        <div className='d-flex justify-content-between'>
                            <div className=''>
                                <span className='me-2'>
                                    <label className='me-2 '>Branch</label>
                                    <select className="bg-white rounded-1 border-1" >
                                        <option >All Branches</option>
                                        {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}

                                    </select>
                                </span>
                                <span className='me-2'>
                                    <label className='me-2'>Department</label>
                                    <select className="bg-white rounded-1 border-1" >
                                        <option selected>All Departments</option>
                                        {category.map((c) => {
                                            return <option value={c.id}>{c.name}</option>;
                                        })}
                                    </select>
                                </span>
                                <span>
                                    <label className='me-2'>Date</label>
                                    <input type="date" className='rounded-1 border-1' onChange={handleDate} />
                                </span>
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-primary btn-sm rounded-0 me-2">Mark All Absent As Present</button>
                                <CSVLink data={employee} filename='DailyReports'>
                                <button type="button" className="btn btn-primary btn-sm rounded-0"> <i className="bi bi-download me-2"></i>Daily Repoart</button>
                                </CSVLink>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-4 ms-0 me-0 bgcolor">
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-success me-2"></i>Present</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-danger me-2"></i>Absent</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-success me-2"></i>Late</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 border-end present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-warning me-2"></i>Half Day</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='rounded-0 present-bg'>
                            <h1>0</h1>
                            <p><i className="bi bi-circle-fill text-info me-2"></i>Paid Leave</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col mb-3'>
                        <div className='d-flex justify-content-between'>
                            <div className='rounded-0 d-flex salary-search-input'>
                                <i className="bi bi-search text-center pt-2 ps-2"></i>
                                <input type="text" className='border-0 ps-2 input-t w-100' placeholder='Search Name of employee' onChange={handleFilter} />
                                <button type="button" className="btn btn-primary btn-sm rounded-0">Search</button>
                            </div>
                            <div>
                                <CSVLink data={records} filename='RegisterEmployeeData'>
                                <button type="button" className="btn btn-outline-primary  rounded-0 me-0">Export Attendance</button>
                                </CSVLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div>
                        {/* table table-bordered */}
                            <table className="table-content">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Punch-In</th>
                                        <th scope="col">Punch-Out</th>
                                        <th scope="col">Status</th>
                                        {/* <th scope="col">Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.map((e) => (
                                        <tr>
                                            <td>
                                                <img
                                                    src={`http://localhost:3000/Images/` + e.image}
                                                    className="employee_image"
                                                />
                                            </td>
                                            <td>{e.name}</td>
                                            <td>
                                                <input
                                                    type="time"
                                                    placeholder='Punch In'
                                                    onChange={handlepunchIn}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="time"
                                                    placeholder='Punch Out'
                                                    onChange={handlepunchOut}
                                                />
                                            </td>
                                            <td>
                                                <select name="" id="" className='rounded-4'
                                                    onChange={handleStatus}>
                                                        {/* <option value="">Select</option> */}
                                                    {status_1.map((s) => {
                                                        return <option >{s.option1}</option>;
                                                    })}
                                                </select>
                                            </td>
                                            {/* <td><button className='btn bg-info-subtle rounded-5'>Update</button></td> */}
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Attendence