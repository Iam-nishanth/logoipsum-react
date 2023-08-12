import React,{useState} from 'react'
import Hero from '../../views/Hero'
import {
    HomeContainer,
    BackgroundImg,
} from "../../style/HomeStyle"
import Hire from '../../views/Hire'
import About from '../../views/HomeAbout'
import Workwith from '../../views/Workwith'
import ProjectIdea from '../../views/ProjectIdea'
import Motivated from '../../views/Motivated'
import Subscribe from '../../views/Subscribe'
import Footer from '../../components/Footer'

const Home = () => {

  return (
    <HomeContainer>
        <Hero/>
        <Hire/>
        <About/>
        <Workwith/>
        <ProjectIdea/>
        <Motivated/>
        <Subscribe/>
        <Footer/>
      
    </HomeContainer>
  )
}

export default Home
