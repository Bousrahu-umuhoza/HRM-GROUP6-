
import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './components/input'
import Components from './comp/comp'

function App(){
  const onchange =()=>{
  }

  return (
    <div className="App">
    {/* <Input type="text"  label="string" helperText="text" error="text" onchange={onchange} /> */}
  
    <Components/>
    </div>
  ) 
}
 
export default App

