import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
// import PrivateRoute from './Components/PrivateRoute'
import AdminRegistration from './Components/AdminRegistration'
import EmployeeMenu from './Components/EmployeeMenu'
import Attendence from './Components/Attendence'
import Report from './Components/Report'
import Notification from './Components/Notification'
import CalculateSalary from './Components/CalculateSalary'
import AddPayment from './Components/AddPayment'
import PayEmployees from './Components/PayEmployees'
import LiveLocation from './Components/LiveLocation'
import Document from './Components/Document'
import Settings from './Components/Settings'
import Support from './Components/Support'
import SupportHome from './Components/SupportHome'
import SupportAbout from './Components/SupportAbout'
import CurrentEmployee from './Components/CurrentEmployee'
import DailyRepoart from './Components/DailyRepoart'
import LeaveList from './Components/LeaveList'
import EmployeeDetails from './Components/EmployeeDetails'
import EditEmployeeIndivisual from './Components/EditEmployeeIndivisual'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/adminregistration' element={<AdminRegistration />}></Route>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/employee_login' element={<EmployeeLogin />}></Route>
        <Route path='/employee_details/:id' element={<EmployeeDetail />}></Route>

        {/* Support Section Start*/}

        <Route path='/support' element={<Support />}>
          <Route path='/support/home' element={<SupportHome />}></Route>
          <Route path='/support/support-about' element={<SupportAbout />}></Route>
        </Route>
        
        {/* Support Section ends */}
        
        <Route path='/dashboard' element={
          // <PrivateRoute>
            <Dashboard />
          // </PrivateRoute>
        }>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/currentemployee' element={<CurrentEmployee />}></Route>
          <Route path='/dashboard/employeeDetails' element={<EmployeeDetails />}></Route>
          <Route path='/dashboard/editEmployeeIndivisual/:id' element={<EditEmployeeIndivisual />}
          ></Route>
          <Route path='/dashboard/dailyReport' element={<DailyRepoart />}></Route>
          <Route path='/dashboard/leaveList' element={<LeaveList />}></Route>
          <Route path='/dashboard/employeemenu' element={<EmployeeMenu />}>
          </Route>
          <Route path='/dashboard/employee' element={<Employee />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/attendence' element={<Attendence />}></Route>
          <Route path='/dashboard/report' element={<Report />}></Route>
          <Route path='/dashboard/notification' element={<Notification />}></Route>
          <Route path='/dashboard/calculate-salary' element={<CalculateSalary />}></Route>
          <Route path='/dashboard/add-payment' element={<AddPayment />}></Route>
          <Route path='/dashboard/pay-employees' element={<PayEmployees />}></Route>
          <Route path='/dashboard/live-location' element={<LiveLocation />}></Route>
          <Route path='/dashboard/document' element={<Document />}></Route>
          <Route path='/dashboard/settings' element={<Settings />}></Route>
          <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
          <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}
          ></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App