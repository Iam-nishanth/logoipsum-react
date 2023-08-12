
import { Nav, NavContainer, MobileIcon, NavMenu, NavItem, NavLink, NavSocials, Hamburger, NavButton } from '../../../style/NavbarStyle/NavStyles'


// eslint-disable-next-line react/prop-types
const Navbar = ({ toggle }) =>
  <Nav>
    <NavContainer>
      <NavLink to='/'>
        <img src='https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/logo.svg' />
      </NavLink>
      <MobileIcon onClick={toggle}>
        <Hamburger />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLink to='/'>HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/services' >SERVICES</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/contact'>CONTACT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about'>ABOUT</NavLink>
        </NavItem>
      </NavMenu>
      <NavSocials>
        <NavButton>GET QUOTE</NavButton>
      </NavSocials>
    </NavContainer>
  </Nav>


export default Navbar