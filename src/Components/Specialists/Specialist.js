import React from 'react';
import "./Specialist.css";

const Specialist = (props) => {
    const [name, img, degree] = props.specialists;
    return (
        <div>
            <div className="my-container">
                <div className="image">
                    <img src={img} alt="" />
                </div>
                <div className="text-center">
                    <div className="title">
                        <h2>{name}</h2>
                        <p className="text-warning">{degree}</p>
                    </div>
                    <div className="btn btn-sm btn-primary">Hire Now</div>
                </div>

            </div>
        </div>
    );
};

export default Specialist;