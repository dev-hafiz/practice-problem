import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../logos/logo-top.png';
import googlelogo from '../../../../logos/googlelogo.png';
import './LoginWithEmail.css';

const LoginWithEmail = () => {
     return (
          <div>
               <div className="container my-5">
                    <div>
                    <div className="logo-login">
                    <img width="200px" src={logo} alt="" />
                    </div>
                    <div className="login-box">
                        <div className="little-wrapper">
                        <h3 className="login-title">Please Login</h3>
                       <div className="input-box-wrapper">
                       <input type="email" name="" id="" placeholder="Email" required/>
                        <br />
                        <input type="password" name="" placeholder="Password" id="" required />
                        <br />
                        <input type="submit" className="submit-input" value="Login" />

                        
                        <div className="google-login my-4">
                         <img className="img-fluid" src={googlelogo} alt="" />
                         <button className="google-button">Continue with Google</button>
                      </div>
                        </div>
                        <div>
                           <Link to="/signup"><p>Create an account?</p></Link>
                      </div>
                       </div>
                    </div>
                    </div>
               </div>
          </div>
     );
};

export default LoginWithEmail;