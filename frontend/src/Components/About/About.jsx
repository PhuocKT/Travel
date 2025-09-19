import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './about.css'
import img from '../../Assets/introduction.png'
import img3 from '../../Assets/adventures.jpg'
import img1 from '../../Assets/local.jpg'
import img2 from '../../Assets/food.jpg'
import { ReactTyped } from "react-typed"
import { FaMapMarkedAlt, FaDollarSign, FaHeadset } from "react-icons/fa";


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true })
    }, [])

    return (
        <section className='introSection'>
            <div className="introContent">
                
                <div className="introImg">
                    <img src={img} alt="introduction" />
                </div>
                <div className="introText">
                    <ReactTyped
                        strings={[
                            "We bring you the best travel experiences in Đà Nẵng",
                            "Our team is passionate about making your journey memorable",
                            "Discover Đà Nẵng like never before"
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop={true}
                        showCursor={true}
                    />
                </div>
            </div>
            <section className="missionSection" data-aos="fade-up">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to bring travelers closer to the authentic beauty of Đà Nẵng.
                    We focus on creating memorable experiences through local culture, food, and adventures.
                </p>
                <div className="missionImg">
                    <img src={img1} alt="local" />
                    <img src={img2} alt="food" />
                    <img src={img3} alt="adventures" />
                </div>
            </section>

            <section className="whyChooseUs" data-aos="fade-up">
                <h2>Why Choose Us</h2>
                <div className="reasons">
                    <div className="reason">
                        <FaMapMarkedAlt className="icon" />
                        <h3>Unique Destinations</h3>
                        <p>Discover hidden gems and breathtaking locations in Đà Nẵng.</p>
                    </div>
                    <div className="reason">
                        <FaDollarSign className="icon" />
                        <h3>Affordable Prices</h3>
                        <p>Enjoy the best experiences without breaking the bank.</p>
                    </div>
                    <div className="reason">
                        <FaHeadset className="icon" />
                        <h3>24/7 Support</h3>
                        <p>Our team is always here to support your journey.</p>
                    </div>
                </div>
                </section>
            <section className="ctaSection" data-aos="zoom-in">
                <h2>Ready to explore Đà Nẵng?</h2>
                <button className="ctaBtn">Contact Us</button>
            </section>

        </section>
        
        
    )
}

    export default About
