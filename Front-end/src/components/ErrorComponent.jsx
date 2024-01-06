import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorComponent = ({redirect}) => {

    const navigate = useNavigate()
    useEffect(()=>{
        navigate(redirect)
    },[])
  return (
    <div>
      
    </div>
  )
}

export default ErrorComponent
