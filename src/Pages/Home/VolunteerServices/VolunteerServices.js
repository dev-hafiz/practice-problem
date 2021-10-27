import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleVolunterService from '../SingleVolunterService/SingleVolunterService';

import './VolunteerServices.css';


const VolunteerServices = () => {
     //State for garb services
     const [services, setServices] = useState([])
     // console.log(services)
     useEffect( ()=>{
          fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data =>  setServices(data))
     },[])

     return (
          <div>
               <div className="container">
                    <div className="row">
                         {
                           services.map(service => <SingleVolunterService
                                key={service._id}
                                service={service}

                           />)   
                         }
                    </div>
               </div>
          </div>
     );
};

export default VolunteerServices;