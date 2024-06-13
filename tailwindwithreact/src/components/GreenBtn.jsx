import React from 'react'

const GreenBtn = () => {
  const handleBtn = () => {
    document.body.style.backgroundColor = 'green';
  } 
  return (
    <>
      <button onClick={handleBtn} className='green'>Green</button>
    </>
  )
}

export default GreenBtn
