import React from 'react'

const Settings = () => {
  return (
    <div className='setting-bg'>
      <div className='setting-bg-2 bg-head'>
        Settings
      </div>
      <div className='setting-bg-3'>
        <div className='ms-3 pt-2 fs-5 mb-2'>
          Company Details
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex mt-2'>
              <div className='logo-bg me-3 mt-2'>Add Logo</div>
              <div><span className='text-seting'>Company Name</span><br /><span className='text-seting-1'>Edit Company Details</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-diagram-2"></i>
              </div>
              <div><span className='text-seting'>My Branches</span><br /><span className='text-seting-1'>Add or remove branches</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-diagram-2"></i>
              </div>
              <div><span className='text-seting'>My Departments</span><br /><span className='text-seting-1'>Add or remove departments</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list-lb'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1 mt-1'>
                <i className="fs-3 bi bi-journal-check"></i>
              </div>
              <div><span className='text-seting'>My Company Reports</span><br /><span className='text-seting-1'>Generate diffrent type of report for whole company</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='setting-bg-3 mt-4'>
        <div className='ms-3 pt-2 fs-5 mb-2'>
          My Team
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex mt-2'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-person"></i>
              </div>
              <div><span className='text-seting'>Admins</span><br /><span className='text-seting-1'>Add or remove admins to your company</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list-lb'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-people"></i>
              </div>
              <div><span className='text-seting'>Employees and Managers</span><br /><span className='text-seting-1'>Manage your staff</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='setting-bg-3 mt-4'>
        <div className='ms-3 pt-2 fs-5 mb-2'>
          Attendance & Leaves
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex mt-2'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-qr-code"></i>
              </div>
              <div><span className='text-seting'>QR Code Attendance</span><br /><span className='text-seting-1'>Mark attendance using QR code</span></div>
            </div>
            <div className='me-4 mt-3'>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-geo-alt"></i>
              </div>
              <div><span className='text-seting'>Auto Live Track</span><br /><span className='text-seting-1'>Track employees live location</span></div>
            </div>
            <div className='me-4 mt-3'>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-calendar-check"></i>
              </div>
              <div><span className='text-seting'>Auto-Present</span><br /><span className='text-seting-1'>Employee will mark present automatically</span></div>
            </div>
            <div className='me-4 mt-3'>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-arrows-collapse"></i>
              </div>
              <div><span className='text-seting'>Multiple Punch In</span><br /><span className='text-seting-1'>Employee can punch in multiple times</span></div>
            </div>
            <div className='me-4 mt-3'>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-camera"></i>
              </div>
              <div><span className='text-seting'>Selfie Attendance</span><br /><span className='text-seting-1'>Mark attendance using selfie</span></div>
            </div>
            <div className='me-4 mt-3'>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-phone"></i>
              </div>
              <div><span className='text-seting'>Device Verification Request</span><br /><span className='text-seting-1'>Employees new device verification request will appear here</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-hr"></i>
              </div>
              <div><span className='text-seting'>Manage Biometric</span><br /><span className='text-seting-1'>Add biomatric device and manage employees</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-calendar2"></i>
              </div>
              <div><span className='text-seting'>Holiday List</span><br /><span className='text-seting-1'>Add or remove public holidays from your company</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-calendar2-check"></i>
              </div>
              <div><span className='text-seting'>Leave Requests</span><br /><span className='text-seting-1'>Leave request from employee appear here</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list-lb'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-calendar2"></i>
              </div>
              <div><span className='text-seting'>Manage Company Paid Leaves</span><br /><span className='text-seting-1'>Create custom company leave</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='setting-bg-3 mt-4'>
        <div className='ms-3 pt-2 fs-5 mb-2'>
          Salary Settings
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex mt-2'>
              <div className='d-flex'>
                <div>
                  <input type="checkbox" className='checkbox-size'/>
                </div>
                <div>
                  <span className='text-seting'>Calendar Month</span><br /><span className='text-seting-1'>eg. Jan - 31 days Feb - 28 days</span>
                </div>
              </div>
              <div className='d-flex ms-5'>
                <div>
                  <input type="checkbox" className='checkbox-size'/>
                </div>
                <div>
                  <span className='text-seting'>30 Day Month</span><br /><span className='text-seting-1'>eg. Jan - 30 days Feb - 30 days</span>
                </div>
              </div>
              <div className='d-flex ms-5'>
                <div>
                  <input type="checkbox" className='checkbox-size'/>
                </div>
                <div>
                  <span className='text-seting'>26 Day Month</span><br /><span className='text-seting-1'>eg. Jan - 26 days Feb - 26 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className=' pt-2 fs-5 mb-2'>
          <span>
          Attendance Cycle <i className="icon-info bi bi-info-circle"></i>
          </span>
          </div>
          <div className='setting-list-1 mt-4'>
            <div className='d-flex'>
              <div className='ms-2 me-5'>
                <span>
                  <select name="" id="month-select">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                    <option value="1">6</option>
                    <option value="1">7</option>
                    <option value="1">8</option>
                    <option value="1">9</option>
                    <option value="1">10</option>
                    <option value="1">11</option>
                    <option value="1">12</option>
                    <option value="1">13</option>
                    <option value="1">14</option>
                    <option value="1">15</option>
                    <option value="1">16</option>
                    <option value="1">17</option>
                    <option value="1">18</option>
                    <option value="1">19</option>
                    <option value="1">20</option>
                    <option value="1">21</option>
                    <option value="1">22</option>
                    <option value="1">23</option>
                    <option value="1">24</option>
                    <option value="1">25</option>
                    <option value="1">26</option>
                    <option value="1">27</option>
                    <option value="1">28</option>
                  </select>
                </span><br />
                <span className='text-seting-1'>
                  Start Date
                </span>
              </div>
              <div className='me-5'>
                to
              </div>
              <div className='end-month-1'>
                <span className='end-month'>End of Month</span>
              </div>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-file-earmark"></i>
              </div>
              <div><span className='text-seting'>Set Company Salary Heads</span><br /><span className='text-seting-1'>Use this to create allowance heads used throughout company for payroll processing </span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list-lb'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-journals"></i>
              </div>
              <div><span className='text-seting'>Create Salary Template</span><br /><span className='text-seting-1'>Define templates for splitting Employee CTC into different allowance heads</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='setting-bg-3 mt-4'>
        <div className='ms-3 pt-2 fs-5 mb-2'>
          Alert & Notification
        </div>
        <div className='setting-list-lb'>
          <div className='setting-list-1'>
            <div className='d-flex mt-2'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-bell"></i>
              </div>
              <div><span className='text-seting'>App Notifications</span><br /><span className='text-seting-1'>Get important alerts on App</span></div>
            </div>
            <div className='me-4 mt-3'>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='setting-bg-3 mt-4'>
        <div className='ms-3 pt-2 fs-5 mb-2'>
          Other Settings
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex mt-2'>
              <div className='me-3 ms-1 rotate-2'>
                <i className="fs-2 bi bi-arrow-clockwise"></i>
              </div>
              <div><span className='text-seting'>Change Company</span><br /><span className='text-seting-1'>Change current company</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1'>
                <i className="fs-2 bi bi-rocket"></i>
              </div>
              <div><span className='text-seting'>Request A Feature</span><br /><span className='text-seting-1'>Give your valuable feedback and feature request</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className='setting-list-lb'>
          <div className='setting-list-1'>
            <div className='d-flex'>
              <div className='me-3 ms-1 rotate-1'>
                <i className="fs-2 bi bi-escape"></i>
              </div>
              <div><span className='text-seting'>Logout</span><br /><span className='text-seting-1'>Logout from device</span></div>
            </div>
            <div className='me-4 mt-3'>
              <i className="fs-5 bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings