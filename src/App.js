import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Navbar/Header'
import AuthProvider from './Context/AuthProvider';
import Home from "./Components/Home/Home";
import Specialists from "./Components/Specialists/Specialists";
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import PrivetRoute from "./PrivetRoute/PrivetRoute";


function App() {
  return (
    <div className="App">
      <AuthProvider >
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRoute path="/specialists">
              <Specialists></Specialists>
            </PrivetRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
