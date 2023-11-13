import React from 'react'
import Logo from '../Components/assets/logo.png'
import '../Components/Css/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar ()  {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container>
      <img src={Logo} alt="Il mio logo" className='logo' />
        <Navbar.Brand href="#home">Andrea Lauro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Progetti</Nav.Link>
            <Nav.Link href="#link">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar