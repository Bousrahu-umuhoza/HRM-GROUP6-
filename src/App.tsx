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
 }

])

function App(){
 

  return (
    <RouterProvider router={router}/>
  ) 
}

export default App;

