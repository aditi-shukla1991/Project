import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Contactus">Contactus</Nav.Link>
            <Nav.Link href="/ListEmployee">ListEmp</Nav.Link>
            <Nav.Link href="/ListStudent">ListStudent</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            
    </>
  );
}