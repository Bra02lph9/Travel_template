
import React,{useEffect} from "react";
import vedio2 from '../../assets/bagvedio.mp4';
import './footer.css'
import { IoIosSend } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Footer(){
    useEffect(()=>{
        Aos.init({duration:2000})
     },[])
    return(
        <section className="footer">
            <div className="videoDiv">
            <video src={vedio2} type="video/mp4" autoPlay loop muted></video>
            </div>
         <div className="secContent container">
           <div className="contactDiv flex">
            <div className="text"  data-aos="fade-up">
                <small>KEEP IN TOUCH</small>
                <h2>Explore Sahara with Us</h2>
            </div>
            <div className="inputDiv flex"  data-aos="fade-up">
                <input type="email" placeholder="Enter your email"/>
                <button className="btn flex" type="submit">
                    SEND<IoIosSend className="icon" color="white"/>
                </button>
            </div>
           </div>
           <div className="footerCard flex"  data-aos="fade-up">
             <div className="footerIntro flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                    <MdTravelExplore className="icon" />SaharaTrip.</a>
                </div>
                <div className="footerparagraphe">
                Discover the wonders of the Moroccan desert with SaharaTrip. Embark on adventures across golden dunes, spend nights in starry bivouacs, and explore authentic Berber villages. SaharaTrip promises you an unforgettable experience in the heart of the Sahara.
                </div>
                <div className="footersociel">
                <CiFacebook className="icon"/><FaInstagram className="icon"/><FaXTwitter className="icon" />
                </div>
                <div className="footerlinks grid">
                    <div className="linkgroup">
                        <span className="grouptitle">
                         OUR AGENCY
                        </span>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        SERVICE
                        </li>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        AGENCY
                        </li>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        INSURANCE
                        </li>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        TOURISM
                        </li>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        PAYMENT
                        </li>
                    </div>

                    <div className="linkgroup">
    <span className="grouptitle">
        SAHARATRIP
    </span>
    <li className="footerlist flex">
        <FiChevronRight className="icon"/>
        HOME
    </li>
    <li className="footerlist flex">
        <FiChevronRight className="icon"/>
        TOURS
    </li>
    <li className="footerlist flex">
        <FiChevronRight className="icon"/>
        ACCOMMODATION
    </li>
    <li className="footerlist flex">
        <FiChevronRight className="icon"/>
        GALLERY
    </li>
    <li className="footerlist flex">
        <FiChevronRight className="icon"/>
        CONTACT
    </li>
</div>

                    
                    <div className="linkgroup">
                        <span className="grouptitle">
                         LAST MINUTE
                        </span>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        Marzouga
                        </li>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        Ouarzazate
                        </li>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        Dakhla
                        </li>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        Merzouga
                        </li>
                        <li className="footerlist flex">
                        <FiChevronRight  className="icon"/>
                        Zagora
                        </li>
                    </div>
                </div>
                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE</small>
                    <small>COPYRIGHTS RESERVED-ISRATECH 2024</small>
                </div>
             </div>
           </div>
         </div>
        </section>
    )
}