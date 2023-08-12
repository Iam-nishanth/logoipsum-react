import React,{useState,useEffect} from 'react'
import {
  Container,
  Wrapper,
  Description,
  ServiceSection,
  TestWrapper,
  Title,
  Text,
  Find,
  ArrowDown,
} from "../../style/HeroStyle"
import MobileNav from '../../components/Header/MobileNav'
import Navbar from '../../components/Header/Navbar'
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTopBtn, setShowTopBtn] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
    return isOpen
  }

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY < 500) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const findOut = () => {
      window.scrollTo({
          top: 450,
          behavior: "smooth",
      });
  };

  return (

           <Container>
                <MobileNav isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <ServiceSection>
                <Wrapper>
                <Description>
                  <TestWrapper><Title>Digital Agency That Thrives on Your Success</Title></TestWrapper>
                  <Text>If you are looking for an agency to help you create a remarkable presence online, you’ve come to the right place. We can help you take your business to the next level.</Text>
                  <Find onClick={findOut} ><ArrowDown/> Find out how!</Find>
                </Description>
                </Wrapper>
                </ServiceSection>
            </Container>
    

  )
}

export default Hero
