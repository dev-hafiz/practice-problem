import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initalizationAuthentication = () =>{
     initializeApp(firebaseConfig);
}

export default initalizationAuthentication;