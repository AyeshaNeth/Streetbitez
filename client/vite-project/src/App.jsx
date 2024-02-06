import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../contex/userContex';
import Dashbord from './pages/dashbord';
import Edit from './pages/edit';
import Profile from './pages/profile';
import Itemlist from '../src/pages/itemlist';
import AddNew from '../src/pages/addNew';
import Feedback from './pages/feedbacks';
import Admindashbord from './pages/admin-dashbord'
import CustomerAdminPage from './pages/customerAdmin'
import SupportMessage from './pages/support';
import InvList from './pages/invList'
import UserEdit from './pages/UserEdit';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
import SeeFeedbacksPage from './pages/seefeedbacks';
import InvEdit from '../src/pages/invEdit';
import DriverRegister from '../src/pages/driverRegister';
import DriverLogin from '../src/pages/driverLogin';
import { DriverContextProvider } from '../contex/driverContex';
import DriverDashboard from '../src/pages/driverDashboard';
import DriverProfile from '../src/pages/driverProfile';
import UpdateDriverProfile from '../src/pages/driverUpdate';
import DriverFeedback from './pages/driverFeedback';
import DriverCompletedOrders from './pages/driverCompletedOrders'



axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true

function App() {
  return (
   <UserContextProvider>
      <DriverContextProvider>
    <NavBar/>
    <Toaster position='top-center' toastOptions={{duration:3000}}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashbord' element={<Dashbord/>} />
      <Route path='/edit/:userId' element={<Edit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/itemlist" element={<Itemlist />} />
      <Route path="/addNew" element={<AddNew />} />
      <Route path="/invEdit/:itemId" element={<InvEdit />} />

      <Route path='/profile' element={<Profile />} />
      <Route path='/feedbacks' element={<Feedback/>} />
      <Route path='/submitsupport' element={<SupportMessage/>}/>
      <Route path='/admin-dashbord' element={<Admindashbord/>}/>
      <Route path='/customerAdmin' element={<CustomerAdminPage/>}/>
      <Route path='/invList' element={<InvList/>}/>
      <Route path='/CustomerDetailsPage' element={<CustomerDetailsPage/>}/>
      <Route path='/UserEdit' element={<UserEdit/>}/>
      <Route path='/Seefeedbacks' element={<SeeFeedbacksPage/>}/>
      <Route path='/driver-register' element={<DriverRegister/>}/>
      <Route path='/driver-login' element={<DriverLogin/>}/>
      <Route path='/driver-dashboard' element={<DriverDashboard/>}/>
      <Route path='/driver-profile' element={<DriverProfile/>}/>
      <Route path='/driver-update' element={<UpdateDriverProfile/>}/>
      <Route path='/driver-feedback' element={<DriverFeedback/>}/>
      <Route path='/driver-compOrds' element={<DriverCompletedOrders/>}/>

    <Route path="/UserEdit/:userId" element={<UserEdit />} />
    </Routes>
    </DriverContextProvider>
    </UserContextProvider>
    
  )
}

export default App
