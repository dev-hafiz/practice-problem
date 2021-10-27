import React from 'react';
import { useParams } from 'react-router';

const RegisterEvent = () => {
     const {idRegister} = useParams()
     return (
          <div>
               <h2>This is Deatail Register Event</h2>
               <h4>{idRegister}</h4>
          </div>
     );
};

export default RegisterEvent;