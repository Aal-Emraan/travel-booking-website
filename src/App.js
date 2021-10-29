import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/plans">
            
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;



// git repository: https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-Aal-Emraan