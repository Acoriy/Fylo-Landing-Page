import bgCurveDesktop from '../assets/images/bg-curvy-desktop.svg';

const Landing = () => {
  return (
    <section className='bg-[#1c2230] lg:pt-0 pt-24'>
       <div className="container">
          <div className='centre-element flex-col pt-[200px]'>
            <div className='w-[750px] max-w-full' >
               <img src="/src/assets/images/landing-intro.png" alt="Langding-Image" className='w-full h-fit'/>
            </div>
            <div className='text-white text-center '>
                <h1 className='text-[30px] md:text-[40px] mb-[15px] font-semibold'>All yours files in one secure location, <br />
                    accessible anywhere.
                </h1>
                <p className='font-normal text-lg px-[15px] md:w-[600px] max-w-full md:mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis libero cumque, eius exercitationem ratione consequuntur minus, 
                    asperiores quisquam sit commodi, dolorem accusamus vitae veniam dolorum nulla 
                </p>
            </div>
            <a href="/" className='btn h-[60px] w-[280px] rounded-[30px] centre-element font-medium  text-white my-[30px]'>Get Started</a>
          </div>
       </div>
       <div className='w-full h-[200px]'>
          <img src={bgCurveDesktop} alt="svg-image" className='w-full' />
       </div>
    </section>
  )
}

export default Landing
