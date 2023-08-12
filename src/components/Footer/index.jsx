import { 
    FaTwitter, 
    FaYoutube, 
    FaFacebook, 
    FaInstagram
 } from 'react-icons/fa'
import { Address, 
    Anchor, 
    Container, 
    Copyright, 
    Wrapper, 
    Content,
    Icons, 
    Image, 
    LinkSection, 
    Links, 
    Logo, 
    LogoSection, 
    Para 
} from "../../style/FooterStyle"

const Footer = () => {
    return (
        <Container>
           <Wrapper>
           <Content>
                <LogoSection>
                    <Logo>
                        <Image/>
                    </Logo>
                    <Address>
                        <Para>1234 N Spring St, Los Angeles, CA 90012</Para>
                        <Anchor>mail@example.com</Anchor>
                    </Address>
                </LogoSection>
                <LinkSection>
                    <Links>
                        <Anchor>Home</Anchor>
                        <Anchor>Services</Anchor>
                        <Anchor>About</Anchor>
                        <Anchor>Contact</Anchor>
                    </Links>
                    <Icons>
                        <FaTwitter />
                        <FaYoutube />
                        <FaFacebook />
                        <FaInstagram />
                    </Icons>
                </LinkSection>
            </Content>
            <Copyright>
                <p>Copyright © 2023 Digital Agency | Powered by Digital Agency</p>
            </Copyright>
           </Wrapper>
        </Container>
    )
}


export default Footer