import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllTours from './components/AllTours/AllTours';
import About from './components/About/About';
import MyBookings from './components/MyBookings/MyBookings';
import Success from './components/Book/Success';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/tours">
            <AllTours></AllTours>     
          </Route>
          <Route path="/bookings">
            <MyBookings></MyBookings>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/book/:id">
            <Book></Book>
          </Route>
          <Route path="/success">
            <Success></Success>
          </Route>
          <Route path="*">
            <h2>404 Not Found</h2>
          </Route>
        </Switch>
      <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;



// git repository: https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-Aal-Emraan