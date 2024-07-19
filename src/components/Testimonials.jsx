import { useState } from "react"
import TestimonialBox from "./TestimonialBox"

const Testimonials = () => {
    const [testimonialData , setTestimonialData] = useState([
        {
            id:1,
            desc :"Fylo has improved our tram productivity by an ordred of magnitude. Since making the switch our team has become a well-olled collaboration machine .",
            img : "profile-1.jpg",
            nameTest : "Satish Patel",
            position :"Fonder & CEO , Huddle"

        },
        {
            id:2,
            desc :"Fylo has improved our tram productivity by an ordred of magnitude. Since making the switch our team has become a well-olled collaboration machine .",
            img : "profile-2.jpg",
            nameTest : "Bruce Mckenzle",
            position :"Fonder & CEO , Huddle"

        },
        {
            id:3,
            desc :"Fylo has improved our tram productivity by an ordred of magnitude. Since making the switch our team has become a well-olled collaboration machine .",
            img : "profile-3.jpg",
            nameTest : "Iva Boyd",
            position :"Fonder & CEO , Huddle"

        },
    ])
  return (
    <section className='mb-[350px]'>
        <div className="container relative ">
            <div className="absolute left-[53px] top-[-36px]">
                <img src="/src/assets/images/bg-quotes.png" alt="quotes-image" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
                {testimonialData.map((teste)=>(
                    <TestimonialBox key={teste.id} desc = {teste.desc} img = {teste.img} nameTest = {teste.nameTest} position = {teste.position}/>
                ))}
            </div>
        </div>
        
    </section>
  )
}

export default Testimonials
