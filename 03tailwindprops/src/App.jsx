import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'

function App() {

  return (
    <>
      <h1 className='text-yellow-600 text-4xl'>vite with tailwind</h1>
      <Cards />
      <Cards username="fahim" />
    </>
  )
}

export default App
