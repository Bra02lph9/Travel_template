
      import React,{useEffect} from "react";
      import './Main.css';
      import img1 from '../../assets/img1.jpg';
      import img2 from '../../assets/img2.jpg';
      import img3 from '../../assets/img3.jpg';
      import img4 from '../../assets/img4.jpg';
      import img5 from '../../assets/img5.jpg';
      import img6 from '../../assets/img6.jpg';
      import img7 from '../../assets/img7.jpg';
      import img8 from '../../assets/img8.jpg';
      import img9 from '../../assets/img9.jpg';
      import img10 from '../../assets/img10.jpg';
      import img11 from '../../assets/img11.jpg';
      import img12 from '../../assets/img12.jpg';
      import { MdOutlineShareLocation } from "react-icons/md";
      import { LuClipboardList } from "react-icons/lu";
      import Aos from 'aos';
      import 'aos/dist/aos.css';
      const Data = [
        {
          id: 1,
          imgSrc: img1,
          destTitle: 'Merzouga',
          location: 'Morocco',
          grade: 'DESERT EXPERIENCE',
          fees: '$500',
          description: 'Merzouga is known for its stunning dunes and the gateway to Erg Chebbi, offering camel treks and mesmerizing sunsets.'
        },
        {
          id: 2,
          imgSrc: img2,
          destTitle: 'Zagora',
          location: 'Morocco',
          grade: 'DESERT ADVENTURE',
          fees: '$450',
          description: 'Zagora is famous for its impressive landscapes and is a starting point for excursions into the Sahara Desert.'
        },
        {
          id: 3,
          imgSrc: img3,
          destTitle: 'Erg Chebbi',
          location: 'Morocco',
          grade: 'DUNE EXPLORATION',
          fees: '$600',
          description: 'Erg Chebbi offers some of the highest sand dunes in Morocco, perfect for a true desert experience.'
        },
        {
          id: 4,
          imgSrc: img4,
          destTitle: 'M\'Hamid El Ghizlane',
          location: 'Morocco',
          grade: 'SAHARA GATEWAY',
          fees: '$400',
          description: 'M’Hamid El Ghizlane is a remote village offering an authentic Saharan experience with stunning dunes and oases.'
        },
        {
          id: 5,
          imgSrc: img5,
          destTitle: 'Ait Benhaddou',
          location: 'Morocco',
          grade: 'HISTORIC KASBAH',
          fees: '$350',
          description: 'Ait Benhaddou is a historic fortified village and a UNESCO World Heritage site, often used as a backdrop in movies.'
        },
        {
          id: 6,
          imgSrc: img6,
          destTitle: 'Ouarzazate',
          location: 'Morocco',
          grade: 'DESERT FILM SET',
          fees: '$300',
          description: 'Ouarzazate, known as the "Gateway to the Sahara," is home to the Atlas Film Studios and many historic kasbahs.'
        },
        {
          id: 7,
          imgSrc: img7,
          destTitle: 'Tinghir',
          location: 'Morocco',
          grade: 'GORGES AND DESERT',
          fees: '$320',
          description: 'Tinghir offers access to the stunning Todra Gorge and is a great base for exploring the Sahara Desert.'
        },
        {
          id: 8,
          imgSrc: img8,
          destTitle: 'Draa Valley',
          location: 'Morocco',
          grade: 'PALM OASIS',
          fees: '$400',
          description: 'The Draa Valley is a beautiful oasis with lush palm groves and traditional Berber villages, leading into the Sahara.'
        },
        {
          id: 9,
          imgSrc: img9,
          destTitle: 'Tamegroute',
          location: 'Morocco',
          grade: 'CULTURAL HERITAGE',
          fees: '$380',
          description: 'Tamegroute is known for its historic library and pottery, offering a unique cultural experience in the Sahara.'
        },
        {
          id: 10,
          imgSrc: img10,
          destTitle: 'Erfoud',
          location: 'Morocco',
          grade: 'FOSSIL TOWN',
          fees: '$360',
          description: 'Erfoud is known for its fossil discoveries and is a popular starting point for Sahara Desert excursions.'
        },
        {
          id: 11,
          imgSrc: img11,
          destTitle: 'Skoura',
          location: 'Morocco',
          grade: 'OASIS VILLAGE',
          fees: '$340',
          description: 'Skoura is a beautiful oasis town with many kasbahs and palm groves, offering a serene desert experience.'
        },
        {
          id: 12,
          imgSrc: img12,
          destTitle: 'Tinfou Dunes',
          location: 'Morocco',
          grade: 'UNIQUE LANDSCAPE',
          fees: '$420',
          description: 'The Tinfou Dunes are known for their unique, pyramid-like shape and offer a less crowded desert experience.'
        },
      ];
      
      export default function Main() {
        useEffect(()=>{
          Aos.init({duration:2000})
       },[])
          return (
              <section className=" main container section">
                  <div className="sectiontitle"  data-aos="fade-right">
                      <h3 className="title">Most visited destination</h3>
                  </div>
                  <div className="seccontent grid">
                      {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                          return (
                              <div key={id} data-aos="fade-up" className="singledestination">
                                  <div className="imagediv">
                                      <img src={imgSrc} alt={destTitle} />
                                  </div>
                                  <div className="cardinfo">
                                      <h4 className="destitle">{destTitle}</h4>
                                      <span className="contient flex">
                                          <MdOutlineShareLocation className="icon" />
                                          <span className="name">{location}</span>
                                      </span>
                                      <div className="fees flex">
                                          <div className="grade">
                                              <span>{grade}<small>+1</small></span>
                                          </div>
                                          <div className="price">
                                              <h5>{fees}</h5>
                                          </div>
                                      </div>
                                      <div className="descr">
                                          <p>{description}</p>
                                      </div>
                                      <button className="btn flex">DETAILS <LuClipboardList className="icon" /></button>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </section>
          );
      }
      