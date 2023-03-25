import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

function MyNavbar() {
    const location = useLocation();
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/resume">Portfolio</Navbar.Brand>
                <Nav className="me-auto" activeKey={location.pathname}>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                    <Nav.Link href="/cover-letter">Cover Letter</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;