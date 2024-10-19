import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";

// import images :
import Logo from "../assets/images/logo.svg";

const Headre = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  const MenuClose = () => {
    setIsOpen(false);
  };
  // Stiky Header :
  const headerRef = useRef();


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1534";
        headerRef.current.style.padding = "20px 0";
        
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 z-20 w-full">
      <div  className="container  flex flex-row justify-between h-fit">
        <Link to="about">
          <img src={Logo} alt="Logo" className="text-white cursor-pointer" />
        </Link>
        <nav className="hidden lg:flex flex-row items-center  gap-10 ">
          <Link to="home" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >Home</Link>
          <Link to="featchers" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >Featchers</Link>
          <Link to="stayproductive" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >Stayproductive</Link>
          <Link to="testimonials" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >Testimonials</Link>
          <Link to="getStarted" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer" >GetStarted</Link>
        </nav>
        <div className="lg:hidden  flex  text-white font-bold cursor-pointer absolute top-10 lg:top-16  right-2 z-10 ">
            {isOpen ? (<AiOutlineClose size={35} onClick={handleChange}/>)
            :(<AiOutlineMenu size={35} onClick={handleChange}/>)}
        </div>
      </div>
       {/* navebare movile */}
         {/* <div className="lg:hidden flex-col z-10">
             <Link to="about">
                 <img src={Logo} alt="Logo" className="text-white cursor-pointer" />
             </Link>
          </div> */}
         <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"} bg-[#0c1534] min-h-screen lg:hidden absolute lg:top-20  left-0 flex flex-col w-full  text-center pt-24 gap-12 transition-transform duration-300 ease-in-out`}>
           <Link to="home" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer text-2xl font-semibold leading-tight" onClick={MenuClose}>Home</Link>
           <Link to="featchers" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer text-2xl font-semibold leading-tight" onClick={MenuClose}>Featchers</Link>
           <Link to="stayproductive" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer text-2xl font-semibold leading-tight" onClick={MenuClose}>Stayproductive</Link>
           <Link to="testimonials" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer text-2xl font-semibold leading-tight" onClick={MenuClose}>Testimonials</Link>
           <Link to="getStarted" spy={true} smooth={true} duration={500} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ease-in-out cursor-pointer text-2xl font-semibold leading-tight" onClick={MenuClose}>GetStarted</Link>
         </div>
    </header>
  );
};

export default Headre;
