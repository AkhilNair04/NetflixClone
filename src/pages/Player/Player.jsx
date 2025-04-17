import React, { useEffect, useState } from 'react';
import './Player.css';
import backarrow from '../../assets/backarrow.png';
import { useParams, useNavigate } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmNhMWYyYmIzMmMzMWJlYWYwOWYxNmE3M2JjZjAzMiIsIm5iZiI6MTc0NDg2MDQyOC41ODgsInN1YiI6IjY4MDA3NTBjZTQ3NTM0MjVlZmFjZTA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuUn256TKMZ6V_uxiSToe599pYnVxOLf86xlTuBgXCU'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(data => {
        const youtubeTrailer = data.results.find(
          vid => vid.site === "YouTube" && vid.type === "Trailer"
        );
        if (youtubeTrailer) {
          setVideo(youtubeTrailer);
        } else {
          console.warn("No YouTube trailer found.");
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img src={backarrow} alt="Back" onClick={() => navigate(-1)} style={{cursor: 'pointer'}} />
      {video ? (
        <>
          <iframe
            width='90%'
            height='90%'
            src={`https://www.youtube.com/embed/${video.key}`}
            title='Trailer'
            frameBorder='0'
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>{video.published_at?.slice(0, 10)}</p>
            <p>{video.name}</p>
          </div>
        </>
      ) : (
        <p>Loading trailer or no trailer found.</p>
      )}
    </div>
  );
};

export default Player;
