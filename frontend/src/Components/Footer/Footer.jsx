import React,{useEffect} from 'react'
import './footer.scss'
import video2 from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebookF,FaTripadvisor, FaTwitter, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
        },[])
    return (
        <section className="footer">
            <div className="videoDiv">
                <div className="overlay"></div>
                <video src={video2} muted autoPlay loop type ="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up"  className='btn flex' type='submit' >
                        SEND <FiSend className='icon' />
                        </button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="/" className='logo flex'>
                                <MdOutlineTravelExplore className='icon' />Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up"  className="footerParagraph">
                            "The world is wide and waiting — pack your bags and start your dream journey today!"
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <FaFacebookF className='icon'/>
                            <FaTripadvisor className='icon'/>
                            <FaTwitter className='icon'/>
                            <FaTiktok className='icon'/>
                            <FaYoutube className='icon'/>
                            <FaInstagram className='icon'/>
                        </div> 
                    </div>
                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="3000"
                        className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex" >
                                <FiChevronRight className='icon' />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="4000" 
                        className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex" >
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                TripAdvisor
                            </li>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="5000"
                        className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex" >
                                <FiChevronRight className='icon' />
                                Đà Nẵng
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Hồ Chí Minh
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Hà Nội
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Nha Trang
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Cần Thơ
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>CREATE BY PHUOC 2025</small>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Footer