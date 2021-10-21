import React from 'react';
import FakeData from '../../hooks/fakeData';
import useAuth from '../../hooks/useAuth';
import Specialist from './Specialist';
import "./Specialists.css";

const Specialists = () => {
    const { specialist } = useAuth();
    return (
        <div className="top-margin">
            <div className="main-container">
                {specialist.map(spe => <Specialist specialists={spe} key={spe.index}></Specialist>)}
            </div>

        </div>
    );
};

export default Specialists;