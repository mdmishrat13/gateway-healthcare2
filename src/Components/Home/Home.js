import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FakeData from '../../hooks/fakeData';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import Specialist from '../Specialists/Specialist';
import './Home.css'

const Home = () => {
    const { user, specialist } = useAuth();


    const shortData = specialist.slice(1, 4)
    return (
        <div className="top-margin">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm">
                        <div className="header-img">
                            <img src="https://i.ibb.co/C0d5fSM/header-img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm">
                        <div className="header-title text-center py-5">
                            <h1 className="py-4">Welcome {user.displayName}</h1>
                            <p>Get Tips From Our Specialists</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 text-center">
                <h2>Our Specialists</h2>
            </div>
            <div className="specialists">
                {shortData.map(spe => <Specialist specialists={spe} key={spe.index}></Specialist>)}
            </div>
            <div className="mb-4">
                <Link to="/specialists"> <span className="btn btn-md btn-info"> See All </span> </Link>
            </div>
        </div>
    );
};

export default Home;