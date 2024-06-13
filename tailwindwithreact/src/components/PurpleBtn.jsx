import React from 'react'

const PurpleBtn = () => {
  const handleClick = () => {
    document.body.style.backgroundColor = 'purple';
  }
  return (
    <button onClick={handleClick} className='purple'>Purple</button>
  )
}

export default PurpleBtn
