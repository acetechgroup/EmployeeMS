import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal, setemployeeTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])
  const [category, setCategory] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [calDate, setCalDate] = useState(new Date())

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
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
  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
      .then(result => {
        if (result.data.Status) {
          setAdminTotal(result.data.Result[0].admin)
        }
      })
  }
  const employeeCount = () => {
    axios.get('http://localhost:3000/auth/employee_count')
      .then(result => {
        if (result.data.Status) {
          setemployeeTotal(result.data.Result[0].employee)
        }
      })
  }
  const salaryCount = () => {
    axios.get('http://localhost:3000/auth/salary_count')
      .then(result => {
        if (result.data.Status) {
          setSalaryTotal(result.data.Result[0].salaryOFEmp)
        } else {
          alert(result.data.Error)
        }
      })
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
          // setRecords(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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

  const [date, setDate] = useState(new Date())
  const handleDate = (dt) => {
    setDate(dt)
  }
  // function CustomInput({ value, onClick }) {
  //   return (
  //     <div className='input-group flex-nowrap lab'>
  //       <input type="text" className='form-control' value={value} onClick={onClick} readOnly />
  //       <div className='input-group-append'>
  //         <span className='input-group-text rounded-1' id='dat'>
  //           <i className="bi bi-calendar-check" />
  //         </span>
  //       </div>
  //     </div>
  //   )
  // }

  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(updateTime, 1000);


  return (
    <>
      <div className='row ms-2 home_bg'>
        <div className="p-2 d-flex justify-content-center shadow bg-head">
          <h4>Dashboard</h4>
        </div>
        <div className='row row-cols-1 row-cols-md-4 g-0 pe-3'>
          <div className='col '>
            <Link
              to='/dashboard/currentemployee'
              className='nav-link'>
              <div className='dash-1'>
                <div className='d-flex justify-content-between dash-2 p-2'>
                  <div className='d-flex'>
                    <div className='me-2 icon-home'>
                      <i className="bi bi-people-fill icon-home-1"></i>
                    </div>
                    <div className='dash-font'>
                      Current Employees
                    </div>
                  </div>
                  <div className='dash-font-1'>
                    {employeeTotal}
                  </div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Male :</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Female :</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Trans :</div>
                  <div>{employeeTotal}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className='col '>
            <Link
              to='/dashboard/dailyReport'
              className='nav-link'>
              <div className='dash-1'>
                <div className='d-flex justify-content-between dash-3 p-2'>
                  <div className='d-flex'>
                    <div className='me-2 icon-pre'>
                      <i className="bi bi-bar-chart-fill icon-pre-1"></i>
                    </div>
                    <div className='dash-font'>
                      Present
                    </div>
                  </div>
                  <div className='dash-font-1'>
                    {employeeTotal}
                  </div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>OD :</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Leave :</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Absent :</div>
                  <div>{employeeTotal}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className='col '>
            <Link
            to='/dashboard/leaveList'
            className='nav-link'
            >
              <div className='dash-1'>
                <div className='d-flex justify-content-between dash-2 p-2'>
                  <div className='d-flex'>
                    <div className='me-2 icon-leav'>
                      <i className="bi bi-piggy-bank-fill icon-leav-1"></i>
                    </div>
                    <div className='dash-font'>
                      Leaves
                    </div>
                  </div>
                  <div className='dash-font-1'>
                    {employeeTotal}
                  </div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Approved :</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Pending :</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Rejected :</div>
                  <div>{employeeTotal}</div>
                </div>
              </div>
            </Link>
          </div>
          <div className='col '>
            <div className='dash-1'>
              <div className='d-flex justify-content-between dash-3 p-2'>
                <div className='d-flex'>
                  <div className='me-2 icon-pay'>
                    <i className="bi bi-wallet-fill icon-pay-1"></i>
                  </div>
                  <div className='dash-font'>
                    Payments
                  </div>
                </div>
                <div className='dash-font-1'>
                  INR {salaryTotal} Crore
                </div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Salaries :</div>
                <div>INR {salaryTotal} Crore</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Expenses :</div>
                <div>INR {salaryTotal}</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>In Hand :</div>
                <div>INR {salaryTotal}</div>
              </div>
            </div>
          </div>
          <div className='col '>
            <div className='dash-1'>
              <div className='d-flex justify-content-between dash-2 p-2'>
                <div className='d-flex'>
                  <div className='me-2 icon-rei'>
                    <i className="bi bi-currency-rupee icon-rei-1"></i>
                  </div>
                  <div className='dash-font'>
                    Reimbursements
                  </div>
                </div>
                <div className='dash-font-1'>
                  INR {employeeTotal} K
                </div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Aproved :</div>
                <div>INR {employeeTotal} Lac</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Pending :</div>
                <div>INR {employeeTotal} K</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>In Salary :</div>
                <div>INR {employeeTotal} K</div>
              </div>
            </div>
          </div>
          <div className='col '>
            <div className='dash-1'>
              <div className='d-flex justify-content-between dash-3 p-2'>
                <div className='d-flex'>
                  <div className='me-2 icon-home'>
                    <i className="bi bi-calendar icon-home-1"></i>
                  </div>
                  <div className='dash-font'>
                    AR
                  </div>
                </div>
                <div className='dash-font-1'>
                  {employeeTotal}
                </div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Approved :</div>
                <div>{employeeTotal}</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Pending :</div>
                <div>{employeeTotal}</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Rejected :</div>
                <div>{employeeTotal}</div>
              </div>
            </div>
          </div>
          <div className='col '>
            <div className='dash-1'>
              <div className='d-flex justify-content-between dash-2 p-2'>
                <div className='d-flex'>
                  <div className='me-2 icon-od'>
                    <i className="bi bi-person-walking icon-od-1"></i>
                  </div>
                  <div className='dash-font'>
                    OD
                  </div>
                </div>
                <div className='dash-font-1'>
                  {employeeTotal}
                </div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Approved :</div>
                <div>{employeeTotal}</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Pending :</div>
                <div>{employeeTotal}</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Rejected :</div>
                <div>{employeeTotal}</div>
              </div>
            </div>
          </div>
          <div className='col '>
            <div className='dash-1'>
              <div className='d-flex justify-content-between dash-3 p-2'>
                <div className='d-flex'>
                  <div className='me-2 icon-task'>
                    <i className="bi bi-clipboard-check-fill icon-task-1"></i>
                  </div>
                  <div className='dash-font'>
                    Task
                  </div>
                </div>
                <div className='dash-font-1'>
                  {employeeTotal}
                </div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Overdue :</div>
                <div>{employeeTotal}</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>Today's Due :</div>
                <div>{employeeTotal}</div>
              </div>
              <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                <div>This week's Due :</div>
                <div>{employeeTotal}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='dash-contan'>
          <div className="row">
            <div className="col-sm-5">
              <div className='dash-4'>
                <div className='d-flex justify-content-between dash-6 p-2'>
                  <div className='d-flex'>
                    <div className='dash-font'>
                      Monthly Manpower Status ({date.getMonth() + 1} {date.getFullYear()})
                    </div>
                  </div>
                  <div className='dash-font-1'>
                    <label>
                      <div className='DateContainer'>
                        <span className='dateInput'>
                          <DatePicker
                            selected={date}
                            dateFormat="MM/yyyy"
                            onChange={(date) => handleDate(date)}
                            showMonthYearPicker
                            maxDate={new Date()}
                          // customInput={<CustomInput />}
                          />
                        </span>
                        <span className='icon'>
                          <i className="bi bi-calendar3"></i>
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Opening Employees</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Transferred In Employees</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>New Joined Employees</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Transferred Out Employees</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Exited Employees</div>
                  <div>{employeeTotal}</div>
                </div>
                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                  <div>Closing Employees</div>
                  <div>{employeeTotal}</div>
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <div className='dash-5'>
                <div className='d-flex justify-content-between dash-6 p-2'>
                  <div className='d-flex'>
                    <div className='dash-font'>
                      Leave Request
                    </div>
                  </div>
                  <div className='dash-font-1'>
                    <select name="" id="" className='me-2 dash-font-2'>
                      <option value="">Status</option>
                      {category.map((c) => {
                        return <option value={c.id}>{c.name}</option>;
                      })}
                    </select>
                    <select name="" id="" className='dash-font-2'>
                      <option value="">Department</option>
                      {category.map((c) => {
                        return <option value={c.id}>{c.name}</option>;
                      })}
                    </select>
                  </div>
                </div>

                <div className=' table-size-args'>
                  <table className="home-leave-table">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>Full Name</th>
                        <th>Reason</th>
                        <th>Applied From</th>
                        <th>Applied To</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody >
                      {employee.map((e) => (
                        <tr>
                          <td>
                            {e.id}
                          </td>
                          <td>
                            <div className='d-flex'>
                              <div>
                                <img
                                  src={`http://localhost:3000/Images/` + e.image}
                                  className="home_leave_image"
                                />
                              </div>
                              <div className='ms-2 d-inline'>
                                <div>
                                  {e.name}
                                </div>
                                <div>
                                  {e.designation}General Manager
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {e.reason}
                          </td>
                          <td>
                            {e.from_date}
                          </td>
                          <td>
                            {e.to_date}
                          </td>
                          <td>
                            {e.status}
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
                <div className='dash-font border-top text-center pt-1'>
                  <Link
                    to='#'
                    className='nav-link'>
                    View Leave Requests
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='dash-contan mb-3'>
          <div className="row">
            <div className="col-sm-4">
              <div className='dash-7'>
                <div className='dash-6 p-2'>
                  <div className='d-flex justify-content-between'>
                    <div className='dash-font'>
                      Calendar
                    </div>
                    <div className='dash-font-1'>
                      <span>{calDate.toDateString()},</span>
                      <span className='ms-2'>{time}</span>
                    </div>
                  </div>
                </div>
                <div className='calendr'>
                  <Calendar className='calendr-1 border-0 rounded-4'
                    onChange={setCalDate}
                    value={calDate} />
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className='dash-7'>
                <div className='dash-6 p-2'>
                  <div className='d-flex'>
                    <div className='dash-font'>
                      Task List
                    </div>
                  </div>
                </div>

                <div className=' table-size-args-1'>
                  <table className="home-leave-table">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Assigned By</th>
                        <th>Duration</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody >
                      {employee.map((e) => (
                        <tr>
                          <td>
                            {e.id}
                          </td>
                          <td>
                            <div className='d-flex'>

                              <div className='ms-2 d-inline'>
                                <div>
                                  {e.name}
                                </div>
                                <div>
                                  {e.task_name}Task : Testing
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {e.assigned_by}
                          </td>
                          <td>
                            {e.duration}
                          </td>
                          <td>
                            {e.status}
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
                <div className='dash-font border-top text-center pt-1'>
                  <Link
                    to='#'
                    className='nav-link'>
                    View Leave Requests
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div className='col p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Salary</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between flex-wrap'>
            <h5>Total:</h5>
            <h5>${salaryTotal}</h5>
          </div>
        </div>
      </div> */}
        {/* <div className='row mt-4 px-5 pt-3 mb-4'>
          <h3>List of Admins</h3>
          <table className='table-content'>
            <thead>
              <tr>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                admins.map(a => (
                  <tr>
                    <td>{a.email}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm me-2">
                        Edit
                      </button>
                      <button
                        className="btn btn-warning btn-sm" >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  )
}

export default Home