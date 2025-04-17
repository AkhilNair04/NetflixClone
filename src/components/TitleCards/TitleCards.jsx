import React, { useEffect } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/Cards/Cards_data'
import { useRef,useState } from 'react'

const TitleCards = ({title,category}) => {
  const [apiData, setapiData]= React.useState([])
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmNhMWYyYmIzMmMzMWJlYWYwOWYxNmE3M2JjZjAzMiIsIm5iZiI6MTc0NDg2MDQyOC41ODgsInN1YiI6IjY4MDA3NTBjZTQ3NTM0MjVlZmFjZTA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuUn256TKMZ6V_uxiSToe599pYnVxOLf86xlTuBgXCU'
    }
  };
  
const handleWheel=(event)=> {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {

fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
.then(res => res.json())
.then(res => setapiData(res.results))
.catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel);
},[])
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref ={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
