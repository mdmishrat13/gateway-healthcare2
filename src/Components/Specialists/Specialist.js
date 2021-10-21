import React from 'react';
import { Link } from 'react-router-dom';
import "./Specialist.css";

const Specialist = (props) => {
    const { id, name, img, degree } = props.specialists;
    return (
        <div className="mb-5">
            <div className="my-container">
                < div className="mb-2" >
                    <div className="image">
                        <img className="w-100 image-cover" src={img} alt="" />
                    </div>
                    <div className="text-center">
                        <div className="title">
                            <h2>{name}</h2>
                            <p className="text-warning">{degree}</p>
                        </div>
                        <Link to={`/details/${id}`}><div className="btn btn-sm btn-primary">See details</div></Link>
                    </div>
                </div >

            </div >
        </div >
    );
};

export default Specialist;