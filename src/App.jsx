import Featchers from "./components/Featchers";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Headre from "./components/Headre";
// import HeadrePro from "./components/HeadrePr";
import Landing from "./components/Landing";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
// import Home from './pages/Home'
function App() {
  return (
    <>
      {/* <HeadrePro /> */}
      <Headre/>
      {/* <Home/> */}
      <main>
        <div id="home">
          <Landing />
        </div>
        <div id="featchers">
          <Featchers />
        </div>
        <div id="stayproductive">
          <StayProductive />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="getStarted">
          <GetStarted />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
