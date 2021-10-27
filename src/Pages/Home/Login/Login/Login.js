import React from 'react';
import './Login.css';
import logo from '../../../../logos/logo-top.png';
import googlelogo from '../../../../logos/googlelogo.png';
import { Link ,  useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';



const Login = () => {
     const {googleUserLogin} = useAuth()
     
     const location = useLocation();
     const history = useHistory();
     const redirect_uri = location.state?.from || '/home';
 
 
     const handleGoogleLogin = () => {
          googleUserLogin()
          .then( result => {
               history.push(redirect_uri)
          })
     }


     return (
          <div>
               <div className="container my-5">
               <div className="logo-login">
                    <img width="200px" src={logo} alt="" />
               </div>
                 <div className="login-box">
                      <div className="little-wrapper">
                      <h3 className="login-title">Login With</h3>
                      <div className="google-login">
                         <img className="img-fluid" src={googlelogo} alt="" />
                         <button onClick={handleGoogleLogin} className="google-button">Continue with Google</button>
                      </div>
                      <div className="toggle-login d-flex my-5 m-2 p-3">
                      <Link to="/loginemail">
                         <p className="me-2">Do you have an account ?</p>
                         </Link>
                           <Link to="/signup"><p>Create an account?</p></Link>
                      </div>
                      </div>
                 </div>
               </div>
          </div>
     );
};

export default Login;