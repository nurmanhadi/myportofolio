import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <Navbar variant="dark" className='fw-bold' id='navi'>
            <Container>
                <Navbar.Brand as={Link} to={'/'} >Nurman Hadi</Navbar.Brand>
                <Nav className="text-right">
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                    <Nav.Link as={Link} to={'/skill'}>Skill</Nav.Link>
                    <Nav.Link as={Link} to={'/contact'}>Contact Me</Nav.Link>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default Navigation