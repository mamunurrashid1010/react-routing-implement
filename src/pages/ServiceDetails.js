import React from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

const ServiceDetails = () => {
    const {title} = useParams();
    const [mySearchParam] = useSearchParams()
    return (
        <div>
            <h5>Title : {title}</h5>
            <h6>Name  : {mySearchParam.get('name')}</h6>
            <h6>Age   : {mySearchParam.get('age')}</h6>
        </div>
    );
};

export default ServiceDetails;