import React from 'react'
import Modal from 'react-modal';


const Button = ({content,bgColor,textColor,fun}) => {

   
  return (
    <div>
      <button
          className={`bg-${bgColor} text-${textColor} px-4 py-2 mt-4 rounded-md`}
          onClick={fun}
        >
          {content} 
        </button>
    </div>
  )
}

export default Button
