import React from 'react';
import FakeData from '../../hooks/fakeData';
import Specialist from './Specialist';
import "./Specialists.css";

const Specialists = () => {
    const [specialist] = FakeData();
    return (
        <div className="top-margin">
            {specialist.map(spe => <Specialist specialists={spe} key={spe.index}></Specialist>)}
        </div>
    );
};

export default Specialists;