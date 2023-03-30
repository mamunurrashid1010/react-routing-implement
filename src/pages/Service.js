import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Service = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Service Page</h1>

            <h5>Web-Design</h5>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Link to="Web Design" style={{color:'blue'}}>Details</Link>

            <h5>Web-Development</h5>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Link to="Web Development" style={{color:'blue'}}>Details</Link><br/>

            <button onClick={()=>navigate('/')}>Back to home</button>
        </div>
    );
};

export default Service;