import { Close, Container, Icon, MobileMenu, NLink, NavButton, SocialMenu, Wrapper } from '../../../style/NavbarStyle/MobileNav'

// eslint-disable-next-line react/prop-types
const MobileNav = ({ isOpen, toggle }) =>
  <Container isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <Close />
    </Icon>
    <Wrapper>
      <MobileMenu>
        <NLink to='/' onClick={toggle}>HOME</NLink>
        <NLink to='/services' onClick={toggle}>SERVICES</NLink>
        <NLink to='/about' onClick={toggle}>ABOUT</NLink>
        <NLink to='/contact' onClick={toggle}>CONTACT</NLink>
      </MobileMenu>
      <SocialMenu>
        <NavButton>GET QUOTE</NavButton>
      </SocialMenu>
    </Wrapper>
  </Container>


export default MobileNav