import iconArrow from '../assets/images/icon-arrow.svg';
import stayProductiveImg from '../assets/images/stay-productive.png';
const StayProductive = () => {
  return (
    <section className="pb-[150px] lg:pt-32 pt-5">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">

                {/* Images  */}
                <div>
                    <img src={stayProductiveImg} alt="stay-productive" />
                </div>
                {/* texte */}
                <div className="text-white ">
                    <h3 className="leading-[50px] text-[35px] font-medium">
                        Stay productive , <br />
                        wherever you are
                    </h3>
                    <div className="font-normal my-[15px] tracking-[0.8px]">
                        <p className="mb-[15px]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Provident sed, sint hic beatae delectus non eos amet aliquam odit repudiandae.
                        </p><br />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Provident sed, sint hic beatae delectus non eos amet aliquam odit repudiandae.
                        </p>
                    </div>
                    

                    <a href="/" className="text-primary hover:text-[#42b0d1] transition-colors duration-200 border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit">
                        See how Fyloworks 
                        <img src={iconArrow} alt="icon-arrow" className="animate-[moveRight_1s_ease-in-out_infinite]" />
                    </a>
                </div>
        
        </div>
    </section>
   
  )
}

export default StayProductive
