
import { Link } from "react-scroll";
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai";
import { useRef, useState , useEffect} from "react";

// import images :
import Logo from '../assets/images/logo.svg';

const Headre = () => {
    const [isOpen , setIsOpen] = useState(false);
    const header = useRef();
    
    const handleChange = ()=>{
        setIsOpen(!isOpen);
    }
    const MenuClose = ()=>{
      setIsOpen(false)
    }
    useEffect(()=>{
         window.addEventListener("scroll" , ()=>{
           if(window.scrollY > 100){
            header.current.style.background = "#0c1534";
            header.current.style.padding = "20px 0";
           }
           else{
            header.current.style.background = "transparent";
            header.current.style.padding = "60px 0";
           }
         })
    } , [])

    window.addEventListener("scroll" , ()=>{
        if(window.scrollY > 100){
         header.current.style.background = "#0c1534";
         header.current.style.padding = "20px 0";
        }
        else{
         header.current.style.background = "transparent";
         header.current.style.padding = "60px 0";
        }
    } );
     
   
  return (
    <header ref={header} className="fixed z-[20] w-full h-[120px] lg:h-fit">
        <div className="container  lg:flex flex-row justify-between msx-w-full">
            <div className="hidden lg:flex">
                <Link to="about">
                   <img src={Logo} alt="Logo" className="text-white cursor-pointer" />
                </Link>
            </div>
            <nav className="hidden lg:flex flex-row items-center  gap-10 ">
              <Link to="home" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >Home</Link>
              <Link to="featchers" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >Featchers</Link>
              <Link to="stayproductive" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >Stayproductive</Link>
              <Link to="testimonials" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >Testimonials</Link>
              <Link to="getStarted" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >GetStarted</Link>
              
            </nav>
            <div  className="lg:hidden flex  text-white font-bold cursor-pointer absolute top-16 right-2 z-10 ">
                  {isOpen ? (<AiOutlineClose size={35} onClick={handleChange}/>)
                  :(<AiOutlineMenu size={35} onClick={handleChange}/>)}
            </div>
            {/* navebare movile */}
            <div className="lg:hidden flex-col z-10">
                <Link to="about">
                   <img src={Logo} alt="Logo" className="text-white cursor-pointer" />
                </Link>
            </div>
            <div className={`${isOpen ? "translate-x-0" : "-translate-x-full ml-[-100px]"} lg:hidden  flex flex-col w-[500px]  text-center pt-8 pb-4 h-screen space-y-4  text-xl font-semibold transition-transform duration-700 ease-in-out bg-[#0c1534] `}>
              <Link to="home" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" onClick={MenuClose}>Home</Link>
              <Link to="featchers" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" onClick={MenuClose}>Featchers</Link>
              <Link to="stayproductive" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" onClick={MenuClose}>Stayproductive</Link>
              <Link to="testimonials" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" onClick={MenuClose}>Testimonials</Link>
              <Link to="getStarted" className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" onClick={MenuClose}>GetStarted</Link>
            </div>
            {console.log(isOpen)}
        </div>
    </header>
  )
}

export default Headre
