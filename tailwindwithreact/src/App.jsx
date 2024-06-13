// import { useState } from 'react'
import './App.css'
import BlueBtn from './components/BlueBtn'
import GreenBtn from './components/GreenBtn'
import PurpleBtn from './components/PurpleBtn'

function App() {
  return (
    <div className='app'>
      <h1>Changing BackGround With React </h1>
      <BlueBtn/>
      <GreenBtn/>
      <PurpleBtn/>
    </div>
  )
}

export default App
