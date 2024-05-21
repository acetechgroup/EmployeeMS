import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CSVLink, CSVDownload } from "react-csv";

const Report = () => {

    const [date, setDate] = useState()
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

    const [toggle, setToggle] = useState(1)
    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className='report_bg'>
            <div className='row'>
                <div className='col'>
                    <h3 className='ms-5 pt-3'><strong>Company Reports</strong></h3>
                </div>
            </div>
            <div className='ms-5 me-3 mb-4'>
                <div className="container report_menu_bg rounded-0 row">
                    <div className='col border-bottom'>
                        <ul className="nav nav-underline d-flex justify-content-start flex-nowrap  mt-1">
                            <li className="nav-item" onClick={() => updateToggle(1)}>
                                <div className={toggle === 1 ? "color-y" : "color-n"}>
                                    <p className="nav-link text-dark fw-semibold " role='button'>Attendance</p>
                                </div>
                            </li>
                            <li className="nav-item" onClick={() => updateToggle(2)}>
                                <div className={toggle === 2 ? "color-y" : "color-n"}>
                                <p className="nav-link text-dark fw-semibold " role='button'>Payment</p>
                                </div>
                            </li>
                            <li className="nav-item" onClick={() => updateToggle(3)}>
                                <div className={toggle === 3 ? "color-y" : "color-n"}>
                                <p className="nav-link text-dark fw-semibold " role='button'>Notes</p>
                                </div>
                            </li>
                            <li className="nav-item" onClick={() => updateToggle(4)}>
                                <div className={toggle === 4 ? "color-y" : "color-n"}>
                                <p className="nav-link text-dark fw-semibold " role='button'>Employee List</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Attendance container start */}
                <div className={toggle === 1 ? "show-tab-container" : "tab-container"}>
                    <div className='container report_menu_bg rounded-0 row pt-3'>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2 '>Report Type</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option value="">Select Report Type</option>
                                    {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}

                                    {/* <option selected>Attendance Summary Report</option>
                                    <option value="1">Deatailed Attendance Report</option>
                                    <option value="2">Late Arrival Report</option>
                                    <option value="3">Leave Report</option>
                                    <option value="3">Over Time Report</option> */}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Branch</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Branches</option>
                                    {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Department</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Deapartment</option>
                                    {category.map((c) => {
                                            return <option value={c.id}>{c.name}</option>;
                                        })}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span>
                                <label className='me-2'>Date</label><br />
                                <input type="date" className='rounded-1 border-1' onChange={e => setDate(e.target.value)} />
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Format</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>XLSX</option>
                                </select>
                            </span>
                        </div>
                        <div className='mt-5'>
                            <CSVLink data={employee} filename='GemeratedReports'>
                            <button type="button" class="btn btn-primary btn rounded-1">Generate Report</button>
                            </CSVLink>
                        </div>
                        <div className='row text-secondary fs-6'>
                            <p className='fs-6 fw-lighter'>
                                Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Attendance Ends */}

                {/* Payment container start */}
                <div className={toggle === 2 ? "show-tab-container" : "tab-container"}>
                    <div className=' container w-full report_menu_bg rounded-0 row pt-3'>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2 '>Report Type</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                <option value="">Select Report Type</option>
                                    {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}
                                    {/* <option selected>Salary Summary Report</option>
                                    <option value="1">Salary Deatailed Report</option>
                                    <option value="2">PF Chalan Report</option>
                                    <option value="3">Loan Report</option>
                                    <option value="3">TDS Summary Report</option>
                                    <option value="3">Consolidated Report</option> */}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Branch</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Branches</option>
                                    {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Department</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Deapartment</option>
                                    {category.map((c) => {
                                            return <option value={c.id}>{c.name}</option>;
                                        })}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span>
                                <label className='me-2'>Date</label><br />
                                <input type="date" className='rounded-1 border-1' onChange={e => setDate(e.target.value)} />
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Format</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>XLSX</option>
                                </select>
                            </span>
                        </div>
                        <div className='mt-5'>
                        <CSVLink data={employee} filename='GemeratedReports'>
                            <button type="button" class="btn btn-primary btn rounded-1">Generate Report</button>
                            </CSVLink>
                        </div>
                        <div className='row text-secondary'>
                            <p className='fs-6 fw-lighter'>
                                Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Payment Ends */}

                {/* Notes container start */}
                <div className={toggle === 3 ? "show-tab-container" : "tab-container"}>
                    <div className=' container w-full report_menu_bg rounded-0 row pt-3'>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2 '>Report Type</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option value="">Select Reports</option>
                                {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}
                                    {/* <option selected>Notes Report</option>
                                    <option value="1">Report</option> */}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Branch</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Branches</option>
                                    {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Department</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Deapartment</option>
                                    {category.map((c) => {
                                            return <option value={c.id}>{c.name}</option>;
                                        })}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span>
                                <label className='me-2'>Date</label><br />
                                <input type="date" className='rounded-1 border-1' onChange={e => setDate(e.target.value)} />
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Format</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>XLSX</option>
                                </select>
                            </span>
                        </div>
                        <div className='mt-5'>
                        <CSVLink data={employee} filename='GemeratedReports'>
                            <button type="button" class="btn btn-primary btn rounded-1">Generate Report</button>
                            </CSVLink>
                        </div>
                        <div className='row text-secondary'>
                            <p className='fs-6 fw-lighter'>
                                Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Notes Ends */}

                {/* EmployeeList container start */}
                <div className={toggle === 4 ? "show-tab-container" : "tab-container"}>
                    <div className=' container w-full report_menu_bg rounded-0 row pt-3'>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2 '>Report Type</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option value="">Select Summary Report</option>
                                {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}
                                    {/* <option selected>Attendance Summary Report</option>
                                    <option value="1">Deatailed Attendance Report</option>
                                    <option value="2">Late Arrival Report</option>
                                    <option value="3">Leave Report</option>
                                    <option value="3">Over Time Report</option> */}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Branch</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Branches</option>
                                    {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}
                                </select>
                            </span>
                        </div>
                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Select Department</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>All Deapartment</option>
                                    {category.map((c) => {
                                            return <option value={c.id}>{c.name}</option>;
                                        })}
                                </select>
                            </span>
                        </div>

                        <div className='col'>
                            <span className='me-2'>
                                <label className='me-2'>Format</label><br />
                                <select className="bg-white rounded-1 border-1" >
                                    <option selected>CSV</option>
                                </select>
                            </span>
                        </div>
                        <div className='mt-5'>
                        <CSVLink data={employee} filename='GemeratedReports'>
                            <button type="button" class="btn btn-primary btn rounded-1">Generate Report</button>
                            </CSVLink>
                        </div>
                        <div className='row text-secondary'>
                            <p className='fs-6 fw-lighter'>
                                Some reports might take time to generate. Once these are done, you can download all the reports generated from the list below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* EmployeeList Ends */}

            </div>
            <div className='ms-5 me-3'>
                <div className="container w-full report_menu_bg rounded-0 row border-bottom">
                    <div className='col d-flex justify-content-between align-content-center mt-2'>
                        <div >
                            <p className='pt-1'>Recent Reports</p>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary btn rounded-1"><i class="bi bi-arrow-repeat"></i> Refersh</button>
                        </div>
                    </div>
                </div>
                <div className='container w-full report_menu_bg rounded-0 row'>
                    <div className='col mt-3 align-content-center'>
                        <table className="table-content">
                            <thead >
                                <tr>
                                    <th class="fw-medium">REPORT TYPE</th>
                                    <th class="fw-medium">Branch</th>
                                    <th class="fw-medium">MONTH</th>
                                    <th class="fw-medium">FORMAT</th>
                                    <th class="fw-medium">GENERATED ON</th>
                                    <th class="fw-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {records.map((e) => (
                                <tr>
                                    <td class="fw-light">
                                        {e.name} Daily Attendance Report
                                    </td>
                                    <td class="fw-light">
                                        {admins.map((a) => {
                                            return <option value={a.id}>{a.name}</option>;
                                        })}
                                    </td>
                                    <td class="fw-light">Jan 2024</td>
                                    <td class="fw-light">XLSX</td>
                                    <td class="fw-light">02-01-2024</td>
                                    <td>
                                        <CSVLink data={employee} filename='GemeratedReports'>
                                        {/* <Link to='#' className='link-underline-light fw-light'> */}
                                            Download
                                        {/* </Link> */}
                                        </CSVLink>
                                        
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report