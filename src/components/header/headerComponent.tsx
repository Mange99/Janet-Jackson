import {Navbar, Container, Nav} from 'react-bootstrap';
import react from "react"
import './headerCss.css';


export function HeaderComponent(){
  return <div>

  <Navbar bg="primary" variant="dark" expand="md" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

</div>
}