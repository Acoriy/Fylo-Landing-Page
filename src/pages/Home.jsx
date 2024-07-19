import { Fragment } from "react"
import Landing from "../components/Landing"
import Featchers from "../components/Featchers"
import StayProductive from "../components/StayProductive"
import Testimonials from "../components/Testimonials"
import GetStarted from "../components/GetStarted"
// import {BrowserRouter , Routes , Route} from "react-router-dom"

const Home = () => {
  return (
  
    <Fragment>
         <Landing/>
         <Featchers/>
         <StayProductive/>
         <Testimonials/>
         <GetStarted/>
    </Fragment>
  )
}

export default Home
