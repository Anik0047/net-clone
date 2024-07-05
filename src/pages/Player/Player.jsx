import React from 'react';
import './Player.css';
import back_arrow from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className='player'>
      <img src={back_arrow} alt="" />
      <iframe src='https://www.youtube.com/embed/hkHHwA-vEyQ' width='90%' height='90%' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player_info">
        <p>Publish date</p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default Player
