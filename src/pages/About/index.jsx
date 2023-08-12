import { useState } from 'react'
import MobileNav from '../../components/Header/MobileNav'
import Navbar from '../../components/Header/Navbar'
import AboutContent from '../../views/AboutContent'
import AboutTestimonials from '../../views/AboutTestimonials'
import Footer from '../../components/Footer'
import { AboutSection, Container, HR, Heading, MainContainer, Wrapper } from '../../style/AboutStyles/AboutPageStyles'
import ProjectIdea from "../../views/ProjectIdea"

const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MainContainer>
      <Container>
        <MobileNav isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <AboutSection>
          <Wrapper>
            <HR />
            <Heading>About us</Heading>
          </Wrapper>
        </AboutSection>
      </Container>
      <AboutContent />
      <AboutTestimonials />
      <ProjectIdea />
      <Footer />

    </MainContainer>

  )
}

export default About