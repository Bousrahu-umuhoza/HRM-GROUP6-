import { Component, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Components from './comp/comp'
import { Container } from './components/container'
import Login from './components/Login/login'


// import SignUp from './components/signup/signup'
import CodeVerify from './routes/codeverfy/verfy'
import { ResetPassword } from './routes/reset-password'




import { Button } from '@mui/material'

import { HomePage } from './routes/home/home'
import SignUp from './routes/signup/signup'
import ForgotPassword from './routes/forgot-password/forgot'
import Links from './components/Dashboard/Dashboard'
import SideNav from './components/Dashboard/links'
import Awards from './routes/Dash/award'
import Calender from './routes/Dash/calender'
import Department from './routes/Dash/department'
import Employees from './routes/Dash/employees'
import Report from './routes/Dash/report'
import PaySlip from './routes/Dash/slips'




const router = createBrowserRouter([
 {
    path:"/",
  element:<HomePage/>
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
    path: "/verify", 
  element:<CodeVerify/>
}, 
 {
  path:'/login',
    element:<Login/>
 },
 {
  path:'/signup',
  element:<SignUp/>
 },
 {
  path:'/forgot-password',
  element:<ForgotPassword/>
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

export default App;

