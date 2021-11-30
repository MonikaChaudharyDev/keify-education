import './App.css';
import './assets/css/styles.css';
import './assets/css/custom.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import KnowMore from './component/KnowMore';
import Footer from './component/Footer';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import OtpVerification from './pages/OtpVerification';
import SubjectDetails from './pages/SubjectDetails';
import ClassDetails from './pages/ClassDetails';
import Tution from './pages/Tution';
import Home from './pages/Home';

function App() {
  return (
    <div className = 'app'>
     
      <Router>
      <Navbar />
        <Switch>
          <Route path="/classdetails">
            <ClassDetails />  
          </Route>
          <Route path="/subjectdetails">
            <SubjectDetails />  
          </Route>
          <Route path="/tution">
            <Tution />  
          </Route>
          <Route path="/signup">
            <Signup />  
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />  
          </Route>
          <Route path="/otpverification">
            <OtpVerification />  
          </Route>
          <Route path="/login">
            <Login />  
          </Route>
          <Route path="/">
            <Home />  
          </Route>
        </Switch>
      </Router>      
      <KnowMore />
      <Footer />
    </div>
  );
}

export default App;
