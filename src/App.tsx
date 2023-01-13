import { Component, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Components from './comp/comp'
import { Container } from './components/container'
import Login from './components/Login/login'
import SignUp from './components/signup/signup'
import { ResetPassword } from './routes/reset-password'

const router = createBrowserRouter([
 {
    path:'/',
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

])
function App(){
 

  return (
    <RouterProvider router={router}/>
  ) 
}
 
export default App

