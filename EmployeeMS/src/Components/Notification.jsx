import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CSVLink, CSVDownload } from "react-csv";


const Notification = () => {

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

  return (
    <>
      <div className='container h-100' id='attendence-bg'>
        <div className='row mt-3' id='notification-bg'>
          <div className='mt-2 ms-4'>
            <h3 className='fw-semibold'>Notifications</h3>
          </div>
          <div className='container d-flex justify-content-around flex-nowrap me-2  mt-5  '>

            <select className="bg-white rounded-1 border-1 select-w text-dark">
              <option >All Notifications</option>
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
              {/* <option value="1">Attendance</option>
              <option value="2">Announcement</option>
              <option value="3">Notes</option>
              <option value="3">Leave Request</option>
              <option value="3">Payment</option>
              <option value="3">Live Track</option> */}
            </select>


            <select className="bg-white rounded-1 border-1 select-w" >
              <option >All Branches</option>
              {admins.map((a) => {
                return <option value={a.id}>{a.name}</option>;
              })}
            </select>

            <select className="bg-white rounded-1 border-1 select-w" >
              <option >All Departments</option>
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>

            <input type='text' className="bg-white rounded-1 border-1 select-w border-1 ps-2 input-t" placeholder='All Employees' onChange={handleFilter}></input>

          </div>
          <div className='col mt-3 align-content-center'>
            <table className="table-content">
              <thead >
                <tr>
                  <th class="fw-medium">EMPLOYEE NAME</th>
                  <th class="fw-medium">BRANCH</th>
                  <th class="fw-medium">DEPARTMENT</th>
                  <th class="fw-medium">APP USING STATUS</th>
                  <th class="fw-medium">LAST STATUS</th>
                  {/* <th class="fw-medium">Status</th> */}
                </tr>
              </thead>
              <tbody>
                {records.map((e) => (
                  <tr>
                    <td class="fw-light">
                      {e.name}
                    </td>
                    <td class="fw-light">
                      {admins.map((a) => {
                        return <option value={a.id}>{a.name}</option>;
                      })}
                    </td>
                    <td class="fw-light">
                      {e.category_id}
                      
                    </td>
                    <td class="fw-light">Not Loged In</td>
                    <td class="fw-light">{e.address}</td>
                    {/* <td>
                      <CSVLink data={employee} filename='GemeratedReports'>
                        
                        Download
                        
                      </CSVLink>

                    </td> */}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
          {/* <div className='border-top mt-5 mx-3'>
            <div className='d-flex justify-content-center fs-5 fw-semibold notification-detail'>
              <p className='text-center'>Your Employee isn’t using the Employee App?</p>
            </div>
            <div className='d-flex justify-content-center fw-lighter fs-6'>
              <p className='text-center'>Get real-time updates when Employee marks attendance on Employee App</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Notification