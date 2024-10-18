
// eslint-disable-next-line react/prop-types
const FeatchersItems = ({icon , title , desc}) => {
  return (
    
      <div className='centre-element flex-col text-center p-3 text-white cursor-pointer shadow-[0_3px_8px_rgb(0,0,0,0.2)] hover:scale-105 hover:border border-gray rounded-xl'>
          <img src={icon} alt="icon-image"
            className='w-[80px] h-[80px] object-contain' />

          <h4 className='text-xl font-semibold  my-[15px]'>{title}</h4>

          <p className='font-normal text-sm '>{desc}</p>
      </div>
  
  )
}

export default FeatchersItems
