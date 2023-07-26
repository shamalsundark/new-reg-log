
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Registration() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };
  return (
    <div>
      <h1>REGISTRATION FORM</h1>
      <input placeholder='NAME' />
      <input placeholder='ADDRESS' />
      <input placeholder='PHONE NUMBER' />
      <input placeholder='EMAIL' />
      <button onClick={handleClick}>SUBMIT</button>
     
    </div>
  )
}

export default Registration