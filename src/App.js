import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import MyEvent from './Pages/Home/MyEvent/MyEvent';
import Header from './Pages/Shared/Header/Header';
import Donation from './Pages/Home/Donation/Donation';
import Login from './Pages/Home/Login/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RegisterEvent from './Pages/Home/RegisterEvent/RegisterEvent';
import SignUp from './Pages/Home/Login/SignUp/SignUp';
import LoginWithEmail from './Pages/Home/Login/LoginWithEmail/LoginWithEmail';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route path="/myevent">
                  <MyEvent/>
                </Route>
                <Route path="/donation">
                  <Donation/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/signup">
                <SignUp/>
                </Route>
                <PrivateRoute path="/registerevent/:idRegister">
                  <RegisterEvent/>
                </PrivateRoute>
                <Route path="/loginemail">
                  <LoginWithEmail/>
                </Route>
                <Route exact path="*">
                  <NotFound/>
                </Route>
            </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
