import React,{useEffect} from "react";
import './Home.css';
import vedio from '../../assets/bagvedio.mp4';
import { IoLocationOutline } from "react-icons/io5";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Home(){
     useEffect(()=>{
        Aos.init({duration:2000})
     },[])
    return(
      <section className="home">
          <div className="overly"></div>
           <video src={vedio} type="video/mp4" autoPlay loop muted></video>
          <div className="homecontent container">
            <div className="textdiv">
             <span className="smallText" data-aos="fade-up">
                Our Packages
             </span>
             <h1 className="homeTitle" data-aos="fade-up">Journey To Sahara</h1>
           </div>
           <div className="carddiv grid" data-aos="fade-up">

            <div className="distination">
                <label htmlFor="city"> Search your destination :</label>
                <div className="input flex">
                 <input type="text" placeholder="Enter name her..."/>
                 <IoLocationOutline className="icon"  />      
                </div>
            </div>
              
            <div className="dateinput">
                <label htmlFor="date">Select Your Date :</label>
                <div className="input flex">
                 <input type="date" />    
                </div>
            </div>
            <div className="priceinput">
                <label htmlFor="price">Max Price : </label>
                <div className="input flex">
                 <input type="number" placeholder="Enter name her..." min={10} value={10}/>
                 <HiMiniCurrencyDollar className="icon" />      
                </div>
            </div>
            <div className="serchoption flex">
                <CiFilter className="icon" color="white"/>
                <span>MORE FILTERS</span>
            </div>
           </div>
        </div>
      </section> 
    )
}