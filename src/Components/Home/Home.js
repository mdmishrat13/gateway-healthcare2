import React from 'react';
import { Carousel } from 'react-bootstrap';
import FakeData from '../../hooks/fakeData';
import Specialist from '../Specialists/Specialist';

const Home = () => {
    const [specialist] = FakeData();
    const shortData = specialist.slice(1, 6)
    return (
        <div className="top-margin">
            <div className="main-head">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/BVyXB25/images-11.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Abdul Hamid</h5>
                            <p>Neuro Surgery</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/7YsZdy9/images-9.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Sabiha Khanom</h5>
                            <p>Neurology</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=" https://i.ibb.co/H2wXSTh/images-13.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Sultana Shila</h5>
                            <p>Radiology</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="py-5 text-center">
                <h2>Our Specialists</h2>
            </div>
            <div className="specialists">
                {shortData.map(spe => <Specialist specialists={spe} key={spe.index}></Specialist>)}
            </div>
        </div>
    );
};

export default Home;