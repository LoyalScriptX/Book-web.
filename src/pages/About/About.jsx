import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookBreeze</h2>
            <p className='fs-17'>Welcome to BookBreeze, the virtual library where your literary journey knows no bounds. Here, you can search for any book your heart desires and instantly uncover the author’s name, the edition, and the year of publication. But that’s just the beginning! If you fall in love with a particular book, our curated recommendations will guide you to similar reads, ensuring your passion for storytelling never fades. And if a certain author captures your imagination, you can delve deeper into their world, exploring more of their works at your leisure. At BookBreeze, it's like wandering through a library where every book on the shelf is a gateway to endless discovery and delight.</p>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
