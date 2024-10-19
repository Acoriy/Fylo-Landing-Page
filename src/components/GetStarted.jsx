import { useRef } from "react"

const GetStarted = () => {
    const inputRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputRef.current.value === ""){
            inputRef.current.focus()
            inputRef.current.style.border = "2px solid red"
        } 
        else if(!inputRef.current.match(/^\S+@\S+\.\S+$/)){
            inputRef.current.style.border = "2px solid red"
        }
        else{
            inputRef.current.value = null;
            inputRef.current.style.border = "none"
        }
    }
  return <section className="pt-[300px] ">
      <div className="container relative">
           <div className="bg-[#1c2230] text-white text-center p-[30px] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] centre-element flex-col w-[856px] max-w-full min-h-[276px]">
                <h3 className='text-[25px] md:text-[35px] font-semibold mb-[15px]'>Get early access today</h3>
                <p className='w-[656px] max-w-full mx-auto mb-[30px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo aliquid officia ducimus ipsa eveniet tenetur tempore necessitatibus esse beatae ab!
                </p>
                <form className='w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]'>
                    <input type="email" ref={inputRef} placeholder='email@exemple.com'className='w-full md:flex-1 h-[50px] pl-[30px] rounded-[30px] outline-none border-none text-sm font-medium text-black'/>
                    <button type='submit' onClick={handleSubmit} className='w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px]'>Get Started For Free</button>
                </form>
           </div>
      </div>
  </section>
}

export default GetStarted
