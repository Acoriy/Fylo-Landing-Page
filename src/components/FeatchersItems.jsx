import React from 'react'

const FeatchersItems = ({icon , title , desc}) => {
  return (
    
      <div className='centre-element flex-col text-center text-white'>
          <img src={`./src/assets/images/${icon}`} alt="icon-image"
            className='w-[80px] h-[80px] object-contain' />

          <h4 className='text-xl font-semibold  my-[15px]'>{title}</h4>

          <p className='font-normal text-sm '>{desc}</p>
      </div>
  
  )
}

export default FeatchersItems
