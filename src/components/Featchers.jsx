/* eslint-disable no-unused-vars */
import { useState } from "react"
import FeatchersItems from "./FeatchersItems"
// import icon :
import iconAnywhere from '../assets/images/icon-access-anywhere.svg';
import iconSecurity from '../assets/images/icon-security.svg';
import iconCollaboration from '../assets/images/icon-collaboration.svg';
import iconAnyFil from '../assets/images/icon-any-file.svg';

const Featchers = () => {
  const [items , setItems] = useState([
    {
      img : iconAnywhere,
      title:"Access your files,anywhere",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut reiciendis neque deleniti quasi voluptatum!"
    },
    {
      img : iconSecurity,
      title:"Securuty you can trust",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut reiciendis neque deleniti quasi voluptatum!"
    },
    {
      img : iconCollaboration,
      title:"Real-time collaboration",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut reiciendis neque deleniti quasi voluptatum!"
    },
    {
      img : iconAnyFil,
      title:"Store any type of file",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut reiciendis neque deleniti quasi voluptatum!"
    }
  ])
  return (
    <section className=" pb-[150px] lg:pt-32 pt-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
            {items.map((item)=>(
              <FeatchersItems key={item.title} icon={item.img} title = {item.title} desc = {item.desc} />
            ))}
        </div>
      </div>
      
         
    </section>
  )
}

export default Featchers
