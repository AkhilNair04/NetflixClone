import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Stowbanner from '../../assets/Stowbanner.jpg'
import Title from '../../assets/Title.png'
import Playbutton from '../../assets/Playbutton.png'
import info from '../../assets/info.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className= 'home'>
      <Navbar/>
      <div className='hero'>
        <img src={Stowbanner} alt="" className='banner-img'/>
        <div className='hero-caption'>
          <img src={Title} alt="" className='caption-img' />
          <p>A three-person crew on a mission to Mars faces an impossible choice when an unplanned passenger jeopardizes the lives of everyone on board.</p>
          <div className="hero-btns">
          <button className='btn'><img src={Playbutton} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
          </div>
          <TitleCards title={"Now trending"} category={"now_playing"}/>
        </div>
      </div>
      <div className="moreCards">
      <TitleCards title={"Picked for you"} category={"top_rated"}/> 
      <TitleCards title={"Since you watched Marsian"} category={"upcoming"}/>   
      </div>
      <div className="top">
      <TitleCards title={"Suggestions"} category={"popular"}/>
      </div>
    <Footer/>
    </div>
  )
}

export default Home
