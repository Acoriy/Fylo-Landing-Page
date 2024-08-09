// eslint-disable-next-line react/prop-types
const TestimonialBox = ({desc , img , nameTest , position}) => {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
       <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">{desc}</p>
       <div className="flex items-center gap-[30px]">
         <img src={img} alt="profile-image" className="w-[50px] h-[50px] object-contain rounded-full" />
         <div>
           <strong className="block mb-[5px]">{nameTest}</strong>
           <p className="font-normal text-sm">{position}</p>
         </div>
       </div>
    </div>
  )
}

export default TestimonialBox
