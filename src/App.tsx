import { Component, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Components from './comp/comp'
import { Container } from './components/container'
import Login from './components/Login/login'

import { ResetPassword } from './routes/reset-password'
import { Button } from '@mui/material'

import { HomePage } from './routes/home/home'


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
  path:'/login',
    element:<Login/>
 }

])
function App(){
 

  return (
    <RouterProvider router={router}/>
  ) 
}
 
export default App

