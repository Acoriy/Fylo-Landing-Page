import { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll"
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai"


const HeadrePro = () => {
  const [isOpen , setIsOpen] = useState(false);


  const handleChange = ()=>{
    setIsOpen(!isOpen);
  }
    // eslint-disable-next-line no-unused-vars
    // const [links , setLinks] = useState(["Feautres" , "Team" , "SignIn"])
    const headerRef = useRef()
    useEffect(()=>{
      window.addEventListener("scroll" , ()=>{
        if(window.scrollY > 100){
          headerRef.current.style.background = "#0c1534";
          headerRef.current.style.padding = "20px 0";
        }else{
          headerRef.current.style.background = "transparent";
          headerRef.current.style.padding = "60px 0";
        }
      })
    } , [])
  return (
    <>
     <header ref={headerRef} className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200 ">

       <div className="container flex items-center justify-between  gap-[30px] sm:gap-0 flex-col sm:flex-row">
          <Link to="about" >
          <img src="/src/assets/images/logo.svg" alt="Logo" className="text-white cursor-pointer" />
        </Link>
        
        
            <nav className="hidden lg:flex items-center gap-[50px]  ">
              {/* {links.map((link)=>(
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out">{link}</a>
                </li>
              ))} */}
              <Link to="about" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">About</Link>
              <Link to="featchers" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">Featchers</Link>
              <Link to="stayproductive" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">Stayproductive</Link>
              <Link to="testimonials" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">Testimonials</Link>
              <Link to="getStarted" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">GetStarted</Link>
            </nav>
              <div className="text-white font-bold cursor-pointer ">
                  {isOpen ? (<AiOutlineClose size={35} onClick={handleChange}/>)
                  :(<AiOutlineMenu size={35} onClick={handleChange}/>)}
              </div>

              {/* navebare mobile : */}

              <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col `}>
                <Link to="about" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">About</Link>
                <Link to="featchers" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">Featchers</Link>
                <Link to="stayproductive" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">Stayproductive</Link>
                <Link to="testimonials" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">Testimonials</Link>
                <Link to="getStarted" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer">GetStarted</Link>
              </div>
       </div>
    
     </header>
      
    </>
  )
}

export default HeadrePro
