import { useState } from "react"
import MobileNav from "../../components/Header/MobileNav"
import Navbar from "../../components/Header/Navbar"
import Footer from '../../components/Footer'
import { ContactSection, Container, HR, Heading, MainContainer, Wrapper } from "../../style/ContactStyles/ContactStyels"
import ContactForm from "../../views/ContactForm"

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <MainContainer>
            <Container>
                <MobileNav isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <ContactSection>
                    <Wrapper>
                        <HR />
                        <Heading>Contact us</Heading>
                    </Wrapper>
                </ContactSection>
            </Container>
            <ContactForm />
            <Footer />

        </MainContainer>

    )
}

export default Contact