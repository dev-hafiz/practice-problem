import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import logo from '../../../../logos/logo-top.png'
import googlelogo from '../../../../logos/googlelogo.png'

const SignUp = () => {
     return (
          <div>
          <div className="container my-5">
               <div>
               <div className="logo-login">
               <img width="200px" src={logo} alt="" />
               </div>
               <div className="login-box">
                   <div className="little-wrapper">
                   <h3 className="login-title">Please Sign-Up</h3>
                  <div className="input-box-wrapper">
                  <input type="email" name="" id="" placeholder="Email" required/>
                   <br />
                   <input type="password" name="" placeholder="Password" id="" required />
                   <br />
                   <input type="submit" className="submit-input" value="Sign-up" />

                   
                   <div className="google-login my-4">
                    <img className="img-fluid" src={googlelogo} alt="" />
                    <button className="google-button">Continue with Google</button>
                 </div>
                   </div>
                   <div>
                      <Link to="/loginemail"><p>Do you have an account ?</p></Link>
                 </div>
                  </div>
               </div>
               </div>
          </div>
     </div>
     );
};

export default SignUp;