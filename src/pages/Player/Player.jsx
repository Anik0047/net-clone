import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();

  const navigate= useNavigate();

  const [apiData,setApiData] = useState({name:"",key:"",published_at:"",type:""});

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjJjNmZiYTAwZWYzYmI1MWEzYzA0YzJmNmYxMjgwMCIsIm5iZiI6MTcyMDE3MjgyNy4xMTAyNTIsInN1YiI6IjY2ODdiZjc1NWI2YzcyOWJhNzc5NzMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pS7AFuNLyGgakVQRylKJQ51JjgZ9WDThzfGpsr0rI0s'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  
  


  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
