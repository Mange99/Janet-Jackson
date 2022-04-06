import {Navbar, Container, Nav} from 'react-bootstrap';
import react from "react"
import './headerCss.css';


export function HeaderComponent(){
  return <div>

  <Navbar bg="primary" variant="dark" expand="md" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Fitness</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Exersices</Nav.Link>
      <Nav.Link href="#features">Food and Health</Nav.Link>
      <Nav.Link href="#pricing">Tips</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

</div>
}