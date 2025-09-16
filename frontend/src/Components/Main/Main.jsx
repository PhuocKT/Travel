import React, { useEffect, useState } from 'react';
import './main.scss';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css';

    const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Aos.init({ duration: 2000 });

        fetch("http://localhost:5000/api/destinations")
        .then(res => res.json())
        .then(json => setData(json))
        .catch(err => console.error("Lỗi fetch:", err));
    }, []);

    return (
        <section className='main container section'>
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
            Most visited destinations
            </h3>
        </div>
        <div className="secContent grid">
            {data.map(({ _id, imgSrc, destTitle, location, grade, fees, description }) => (
            <div key={_id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                <img src={`http://localhost:5000/images/${imgSrc}`} alt={destTitle} />
                </div>

                <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className='Name'>{location}</span>
                </span>

                <div className="fees flex">
                    <div className="grade">
                    <span>{grade}<small>+1</small></span>
                    </div>
                    <div className='price'>
                    <h5>{fees}</h5>
                    </div>
                </div>

                <div className='desc'>
                    <p>{description}</p>
                </div>

                <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className='icon'/>
                </button>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Main;
