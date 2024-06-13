import React, { useEffect, useState } from 'react'

const BlueBtn = () => {
  const handleClick = () => {
    document.body.style.backgroundColor = 'blue';
  }
  return (
    <>
      <button onClick={handleClick} className='blue'>Blue</button>
    </>
  )
}

export default BlueBtn
