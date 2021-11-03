import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Book from './components/Book/Book';
import AllTours from './components/AllTours/AllTours';
import About from './components/About/About';
import MyBookings from './components/MyBookings/MyBookings';
import Success from './components/Book/Success';
import AddNewPlan from './components/AddNewPlan/AddNewPlan';
import AuthProvider from './components/context/AuthProvider';
import ManageBookings from './components/ManageBookings/ManageBookings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {

  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/addnewplan">
              <AddNewPlan></AddNewPlan>
            </PrivateRoute>
            <PrivateRoute path="/manageallbookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            {/* <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/book/:id">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/success">
              <Success></Success>
            </PrivateRoute>
            <Route path="*">
              <h2>404 Not Found</h2>
            </Route>
          </Switch>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;



// git repository: https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-Aal-Emraan