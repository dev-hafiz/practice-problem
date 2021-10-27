import React from 'react';
import { Link } from 'react-router-dom';
import './SingleVolunterService.css';


const SingleVolunterService = ({service}) => {
     const { _id,  title , img} = service;

     return (
          <div className="col-lg-3 col-md-6 col-12 service-card">
          <Link to={`/registerevent/${_id}`}>
           <img className="img-fluid" src={img} alt="" />
          </Link>
              <h2 className="little-heading">{title}</h2>
              
          </div>
     );
};

export default SingleVolunterService;