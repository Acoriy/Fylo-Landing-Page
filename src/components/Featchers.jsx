import { useState } from "react"
import FeatchersItems from "./FeatchersItems"

const Featchers = () => {
  const [items , setItems] = useState([
    {
      img : "icon-access-anywhere.svg",
      title:"Access your files,anywhere",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut reiciendis neque deleniti quasi voluptatum!"
    },
    {
      img : "icon-security.svg",
      title:"Securuty you can trust",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut reiciendis neque deleniti quasi voluptatum!"
    },
    {
      img : "icon-collaboration.svg",
      title:"Real-time collaboration",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut reiciendis neque deleniti quasi voluptatum!"
    },
    {
      img : "icon-any-file.svg",
      title:"Store any type of file",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut reiciendis neque deleniti quasi voluptatum!"
    }
  ])
  return (
    <section className="pb-[150px]">
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
