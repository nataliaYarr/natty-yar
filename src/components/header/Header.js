import React, { useRef , useEffect } from 'react';
import './header.css';
import { sliderFn, heroImgFn } from '../animation.js';

const Header = () => {
  const introRef = useRef(null);
  const introTextRef = useRef(null);
  const nameRef = useRef(null);
  const infoRef = useRef(null);
  const heroRef = useRef(null)
  
  //animating img and sliders on load
  useEffect(() => {
    sliderFn(introRef.current, nameRef.current, infoRef.current);
  },[])

  useEffect(() => {
    heroImgFn(heroRef.current);
  },[heroRef])

  return (
  <div className='header'>
    <div className='intro' ref={introRef}>
      <div className='intro-text' ref={introTextRef}>
        <h1 className='hide'>
          <span className='text'>Welcome</span>
        </h1>
        <h1 className='hide'>
          <span className='text'>to my</span>
        </h1>
        <h1 className='hide'>
          <span className='text'>website</span>
        </h1>
      </div>
    </div>
    <div className='slider-header slider1'></div>
    <div className='slider-header slider2'></div> 

    <div className="header-container" ref={nameRef}>
      <h1 className="title">front end </h1>
      <h1 className="title">developer</h1>
      
      <div className="hero-container">
        <img ref={heroRef} alt='' />
      </div>

      <div className='name' >
        <h1>Natalia</h1>
        <h1>Yarysheva</h1>
      </div>
    </div>
    <div className='info-container' ref={infoRef}>
        <a href="" target="_blank">
          <div className='icon cv'/>  
        </a>
        <a href="https://www.w3schools.com" target="_blank" >
          <div className='icon in' />
        </a>
        <a href="https://github.com/nataliaYarr" target="_blank">
          <div className='icon git' />
        </a>
    </div>
  </div>
  )
}

export default Header