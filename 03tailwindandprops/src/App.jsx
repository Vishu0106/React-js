import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {


  return (
    <>
    <h1 className="bg-green-400 p-4 rounded mb-4">TailwindCss</h1>
    <Card username='Vishnu Vardhan' btntext='Click me'/>
    <Card username='janu' />
    </>
  )
}

export default App
