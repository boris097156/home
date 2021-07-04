import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-1 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <p className="lead">
                    {data.role}
                    <br/>
                    <i>{data.date}</i>
                </p>                
            </div>
            <div className="pt-1">
                <p>
                <small>{data.description}</small>
                </p>
            </div>
        </Col>
     );
}
 
export default ExperienceCard;