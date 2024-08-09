/* eslint-disable no-unused-vars */
import { useState } from "react"
import TestimonialBox from "./TestimonialBox"
// import images testimonial :
import portfulio1 from '../assets/images/profile-1.jpg';
import portfulio2 from '../assets/images/profile-2.jpg';
import portfulio3 from '../assets/images/profile-3.jpg';

const Testimonials = () => {
    const [testimonialData , setTestimonialData] = useState([
        {
            id:1,
            desc :"Fylo has improved our tram productivity by an ordred of magnitude. Since making the switch our team has become a well-olled collaboration machine .",
            img : portfulio1,
            nameTest : "Satish Patel",
            position :"Fonder & CEO , Huddle"

        },
        {
            id:2,
            desc :"Fylo has improved our tram productivity by an ordred of magnitude. Since making the switch our team has become a well-olled collaboration machine .",
            img : portfulio2,
            nameTest : "Bruce Mckenzle",
            position :"Fonder & CEO , Huddle"

        },
        {
            id:3,
            desc :"Fylo has improved our tram productivity by an ordred of magnitude. Since making the switch our team has become a well-olled collaboration machine .",
            img : portfulio3,
            nameTest : "Iva Boyd",
            position :"Fonder & CEO , Huddle"

        },
    ])
  return (
    <section className='mb-[350px] lg:pt-32 pt-5'>
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
