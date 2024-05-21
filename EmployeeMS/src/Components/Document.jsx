import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Document = () => {
    const [employee, setEmployee] = useState([]);
    const [records, setRecords]= useState([]);

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
  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/auth/delete_employee/' + id)
      .then(result => {
        if (result.data.Status) {
          window.location.reload()
        } else {
          alert(result.data.Error)
        }
      })
  }
  
  const handleFilter = (event) => {
    console.log(event);
        setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }

    return (
        <div className='document-bg'>
            <div className='document-bg-2 fs-5 bg-head'>
                Documents
            </div>
            <div className='document-bg-3'>
                <div className='document-bg-4 input-group '>
                    <div className='rounded-2 d-flex document-search-input'>
                        <i className="bi bi-search text-center pt-1 ps-2"></i>
                        <input type="text" className='border-0 ps-2 input-d w-100' placeholder='Search Name of employee' onChange={handleFilter} />
                        <button type="button" className="btn btn-primary btn-sm rounded-2">Search</button>
                    </div>
                    <div className='document-bg-5'>
                        <div className="table px-5 mt-3">
                                <div>
                                    <Link to="/dashboard/add_employee" className="btn btn-success mx-2">
                                        Add Employee
                                    </Link>
                                </div>
                            <div className="">
                                <table className="table-content">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records.map((e) => (
                                            <tr>
                                                <td>{e.name}</td>
                                                <td>
                                                    <img
                                                        src={`http://localhost:3000/Images/` + e.image}
                                                        className="employee_image"
                                                    />
                                                </td>
                                                <td>{e.email}</td>
                                                <td>{e.address}</td>
                                                <td>{e.salary}</td>
                                                <td>
                                                    <Link
                                                        to={`/dashboard/edit_employee/` + e.id}
                                                        className="btn btn-info btn-sm me-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-warning btn-sm"
                                                        onClick={() => handleDelete(e.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Document