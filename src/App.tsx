import { Component, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Components from './comp/comp'
import { Container } from './components/container'

import Login from './components/Login/login'
import SignUp from './components/signup/signup'
import Awards from './routes/Dash/award'

import Department from './routes/Dash/department'
import Employees from './routes/Dash/employees'
import PaySlip from './routes/Dash/slips'
import { ResetPassword } from './routes/reset-password'
import SideNav from './components/Dashboard/links'
import Links from './components/Dashboard/Dashboard'
import Calender from './routes/Dash/calender'
import Report from './routes/Dash/report'


const router = createBrowserRouter([
 {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path: "/test-inputs",
    element: <Components />
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>
  },
  {
    path:"/Dashboard",
    element:<Links/>
  },
  {
    path:"/award",
    element:<Awards/>
  },
  {
    path:"/department",
    element:<Department/>
  },
  {
    path:"/employees",
    element:<Employees/>
  },
  {
    path:"/slips",
    element:<PaySlip/>
  },
 {
  path:"/links",
  element:<SideNav visible/>
 },
 {
  path:"/calender",
  element:<Calender/>
},
{
path:"/report",
element:<Report/>
},

  
])
function App(){
 

  return (
    <RouterProvider router={router}/>
  ) 
}
 
export default App

