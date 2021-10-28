import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import FeaturedTours from './components/FeaturedTours/FeaturedTours';
import WeSpecial from './components/WeSpecial/WeSpecial';
import Reviews from './components/Reviews/Reviews';
import HappyTravelers from './components/HappyTravelers/HappyTravelers';
import AllCountdowns from './components/AllCountdowns/AllCountdowns';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar></NavBar>
      <Banner></Banner>
      <FeaturedTours></FeaturedTours>
      <HappyTravelers></HappyTravelers>
      <AllCountdowns></AllCountdowns>
      <WeSpecial></WeSpecial>
      <Reviews></Reviews>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;



// git repository: https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-Aal-Emraan