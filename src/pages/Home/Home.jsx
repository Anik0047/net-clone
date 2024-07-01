import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img'/>
        <div className="hero_caption">
          <img src={hero_title} alt="" className='caption_img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city form an immortal enemy.</p>
          <div className="hero_btn">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark_btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCard></TitleCard>
        </div>
      </div>
      <div className="more_cards">
      <TitleCard title={"Blockbuster Movies"}></TitleCard>
      <TitleCard title={"Only on Netflix"}></TitleCard>
      <TitleCard title={"Upcoming"}></TitleCard>
      <TitleCard title={"Top Pics for You"}></TitleCard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
