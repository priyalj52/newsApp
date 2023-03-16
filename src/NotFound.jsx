import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/");
    },[2000])
  },[]);
    return (
    <div>
      <h1 className='font-bold text-7xl  m-12 text-center'>Page Not Found</h1>    
    </div>
  )
}

export default NotFound
