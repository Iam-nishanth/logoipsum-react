import React,{useState} from 'react'
import ServiceHelp from '../../views/ServiceHelp'
import {
  ServiceContainer,
  Container,
  ServiceSection,
  Wrapper,
  HR,
  Heading,
} from "../../style/ServicesStyle"
import ServiceWorkwith from '../../views/ServiceWorkwith'
import ProjectIdea from "../../views/ProjectIdea"
import Footer from '../../components/Footer'
import MobileNav from '../../components/Header/MobileNav'
import Navbar from '../../components/Header/Navbar'
const Services = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    return isOpen
  }
  return (
    <ServiceContainer>
    
         <Container>
                <MobileNav isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <ServiceSection>
                    <Wrapper>
                        <HR />
                        <Heading>Services</Heading>
                    </Wrapper>
                </ServiceSection>
            </Container>
          
    <ServiceHelp/>
    <ServiceWorkwith/>
    <ProjectIdea/>
    <Footer/>
    </ServiceContainer>
  )
}

export default Services
