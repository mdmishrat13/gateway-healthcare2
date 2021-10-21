import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Details.css";

const Details = () => {
    const { specialistId } = useParams();
    const { specialist } = useAuth();
    const indexNumber = specialistId - 1;
    return (
        <div>
            <div className="my-container">
                <div className="image">
                    <img src={specialist[indexNumber].img} alt="" />
                </div>
                <div className="text-center">
                    <div className="title">
                        <h2>{specialist[indexNumber].name}</h2>
                        <p className="text-warning">{specialist[indexNumber].degree}</p>
                    </div>
                    <div className="btn btn-sm btn-primary">Hire Now</div>
                </div>

            </div>
        </div>
    );
};

export default Details;