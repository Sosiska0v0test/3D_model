
import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./components/Loader";
import teemPhoto1 from '../assets/Screenshot_1.png';
import teemPhoto2 from '../assets/Screenshot_2.png';
import teemPhoto3 from '../assets/Screenshot_3.png';
import House from './models/House'
import { BiChevronsUp } from "react-icons/bi";
import companyPhoto from '../assets/flowers-8564949_1920.png'

const TeamMember = ({ name, position, photo }) => (
  <div className='team-member'>
    <img src={ photo } alt={ name } />
    <p>Name: { name }<br />Position: { position }</p>
  </div>
);


const App = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustHouseForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, -2];
    let houseRotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, houseRotation]
  }

  const [houseScale, housePosition, houseRotation] = adjustHouseForScreenSize();

  const teamMembers = [
    { name: 'John Doe', position: 'Designer', photo: teemPhoto1 },
    { name: 'Jane Smith', position: 'Developer', photo: teemPhoto2 },
    { name: 'Mike Johnson', position: 'Animator', photo: teemPhoto3 }
  ];


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const scrollFunc = () => {
      const scrollBtn = document.getElementById('scroll-to-top-btn');
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <section className='w-full h-screen relative'>
      <div className='header'>
        <div className='row'>
          <button onClick={ () => scrollToSection('about-us') }>About us<span></span></button>
          <button onClick={ () => scrollToSection('innovations') }>Innovations<span></span></button>
          <button onClick={ () => scrollToSection('our-team') }>Our Team<span></span></button>
        </div>
      </div>
      <Canvas className={ `w-full canvas h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}` }
        camera={ { near: 0.1, far: 1000 } }
      >
        <Suspense fallback={ <Loader /> }>
          <directionalLight position={ [1, 1, 1] } intensity={ 20 } />
          <ambientLight intensity={ 0.5 } />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={ 1 } />
          <House
            scale={ houseScale }
            position={ housePosition }
            rotation={ houseRotation }
            isRotating={ isRotating }
            setIsRotating={ setIsRotating }
            setCurrentStage={ setCurrentStage }
          />
        </Suspense>
      </Canvas>
      <div id="about-us" className='about'>
        <h1>About Us</h1>
        <div className='content'>
          <div className='text_about'>
            <p>Welcome to CartoonCrafters, your premier destination for delightful 3D models in a whimsical, cartoon-inspired style!

              At CartoonCrafters, we're passionate about infusing creativity and imagination into every aspect of our work. With a team of skilled artists and designers, we bring your visions to life with vibrant colors, dynamic shapes, and a touch of magic.

              Our mission is to make the world a brighter, more joyful place through our playful 3D creations. Whether you're a game developer seeking captivating characters, an animator in need of enchanting props, or a designer looking for unique assets, we've got you covered.

              We take pride in our commitment to quality and innovation. Each model is crafted with meticulous attention to detail, ensuring that it not only meets but exceeds your expectations. From concept to completion, we strive for excellence in every project we undertake.

              At CartoonCrafters, we believe in the power of imagination to inspire, entertain, and unite people of all ages. Join us on our journey as we continue to push the boundaries of creativity and bring joy to the world, one 3D model at a time.

              Thank you for choosing CartoonCrafters. Let's create something magical together!</p>
          </div>
          <div className='photo_company'>
            <img src={ companyPhoto } alt='Cartoon Crafters Logo' />
          </div>
        </div>
      </div>
      <div id="innovations" className='innovations'>
        <h1>Commitment to Innovation</h1>
        <div className='text'>
          <p>Welcome to CartoonCrafters, your premier destination for delightful 3D models in a whimsical, cartoon-inspired style!

            At CartoonCrafters, we're passionate about infusing creativity and imagination into every aspect of our work. With a team of skilled artists and designers, we bring your visions to life with vibrant colors, dynamic shapes, and a touch of magic.

            Our mission is to make the world a brighter, more joyful place through our playful 3D creations. Whether you're a game developer seeking captivating characters, an animator in need of enchanting props, or a designer looking for unique assets, we've got you covered.

            We take pride in our commitment to quality and innovation. Each model is crafted with meticulous attention to detail, ensuring that it not only meets but exceeds your expectations. From concept to completion, we strive for excellence in every project we undertake.

            At CartoonCrafters, we believe in the power of imagination to inspire, entertain, and unite people of all ages. Join us on our journey as we continue to push the boundaries of creativity and bring joy to the world, one 3D model at a time.

            Thank you for choosing CartoonCrafters. Let's create something magical together!</p>

          Welcome to CartoonCrafters, your premier destination for delightful 3D models in a whimsical, cartoon-inspired style! At CartoonCrafters, we're passionate about infusing creativity and imagination into every aspect of our work. With a team of skilled artists and designers, we bring your visions to life with vibrant colors, dynamic shapes, and a touch of magic. Our mission is to make the world a brighter, more joyful place through our playful 3D creations. Whether you're a game developer seeking captivating characters, an animator in need of enchanting props, or a designer looking for unique assets, we've got you covered. We take pride in our commitment to quality and innovation. Each model is crafted with meticulous attention to detail, ensuring that it not only meets but exceeds your expectations. From concept to completion, we strive for excellence in every project we undertake. At CartoonCrafters, we believe in the power of imagination to inspire, entertain, and unite people of all ages. Join us on our journey as we continue to push the boundaries of creativity and bring joy to the world, one 3D model at a time. Thank you for choosing CartoonCrafters. Let's create something magical together!
        </div>
      </div>
      <div id="our-team" className='teem'>
        <h1>Our Team</h1>
        <div className='team-container'>
          { teamMembers.map((member, index) => (
            <TeamMember
              key={ index }
              name={ member.name }
              position={ member.position }
              photo={ member.photo }
            />
          )) }
        </div>
      </div>
      <div class='footer'>
        <div class="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non maximus erat, et bibendum leo.</p>
        </div>
        <div class="footer-section">
          <h3>Location</h3>
          <p>123 Main Street, Cityville, Country</p>
        </div>
        <div class="footer-section">
          <h3>Tips</h3>
          <p>Check out our blog for the latest tips and tricks!</p>
        </div>
        <div class="footer-section">
          <h3>Testimonials</h3>
          <p>"Amazing service! Highly recommended!"</p>
          <p>"The quality of their work exceeded my expectations."</p>
        </div>
        <div class="footer-section">
          <h3>Portfolio</h3>
          <p>View some of our latest projects <a href="#">here</a>.</p>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <button onClick={ scrollToTop } id="scroll-to-top-btn" className='btn_top'>
        <BiChevronsUp />
      </button>
    </section>
  );
};

export default App;
