import { Component, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Components from './comp/comp'
import { Container } from './components/container'
import Login from './components/Login/login'
import SignUp from './components/signup/signup'

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
  }
])
function App(){
 

  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  ) 
}
 
export default App

