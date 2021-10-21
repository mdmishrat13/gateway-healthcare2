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
import Details from './Components/Details/Details';
import Support from './Components/Support/Support';
import Pro from './Components/Pro/Pro';


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
            <Route path="/specialists">
              <Specialists></Specialists>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivetRoute path="/details/:specialistId">
              <Details></Details>
            </PrivetRoute>
            <PrivetRoute path="/support">
              <Support></Support>
            </PrivetRoute>
            <PrivetRoute path="/pro">
              <Pro></Pro>
            </PrivetRoute>
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
