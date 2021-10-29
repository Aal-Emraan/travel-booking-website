import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;



// git repository: https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-Aal-Emraan