import React from 'react';
import {useParams} from "react-router-dom";

const ServiceDetails = () => {
    const {title} = useParams();
    return (
        <div>
            <h5>{title}</h5>
        </div>
    );
};

export default ServiceDetails;