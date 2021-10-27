
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut  } from "firebase/auth";
import { useEffect, useState } from 'react';
import initalizationAuthentication from "../Pages/Home/Login/Firebase/firebase.init";

initalizationAuthentication()
const useFirebase = () =>{

     const [user, setUser] = useState({})
     const [error, setError] = useState('')

     const googleProvider = new GoogleAuthProvider();
     const auth = getAuth();
     //google login
     const googleUserLogin = () =>{
        return  signInWithPopup(auth, googleProvider)
          
     }

     //Log out impliment
     const handleLogoutUser = () =>{
          signOut(auth)
          .then(() => {
              setUser({})
             })
          .catch( error =>{
               setError(error.message)
          })
     }

     //OnAuthStateChanged
     useEffect( () => {
          onAuthStateChanged(auth, user=>{
               if (user) {
                    setUser(user)
               }
               else{
                    setUser({})
               }
          })
     },[])

     return{
          user,
          error,
          googleUserLogin,
          handleLogoutUser
     }

     
}

export default useFirebase;