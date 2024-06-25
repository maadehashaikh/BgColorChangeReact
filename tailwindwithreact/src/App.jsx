import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("olive");
  return (
    <>
    {color}
     <div className='w-full h-screen' style={{backgroundColor:color}}>
     <h1 className='w-full p-20'>Welcome to BackGround Changer !! </h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
         <button className='outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('red')} style={{backgroundColor:'red'}}>Red</button>
         <button className='outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('purple')} style={{backgroundColor:'purple'}}>purple</button>
         <button className='outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('orange')} style={{backgroundColor:'orange'}}>orange</button>
         <button className='outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('green')}  style={{backgroundColor:'green'}} >green</button>
         <button className='outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('blue')} style={{backgroundColor:'orange'}}>orange</button>
        </div>
      </div>
     </div>
    </>
     
  )
}

export default App
