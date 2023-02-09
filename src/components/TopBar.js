import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TopBar() {
    return (
        <Navbar variant="dark" className='fw-bold' id='topbar'>
            <Container className='mt-2'>
                <Row>
                    <Col className='mb-3 d-flex justify-content-center'>
                        <Navbar.Brand as={Link} to={'/'} className='text-center' >Nurman Hadi</Navbar.Brand>
                    </Col>
                    <Col>
                        <Nav className="d-flex justify-content-center">
                            <Nav.Link as={Link} to={'/'}><i class="fa-solid fa-house nav-icon"></i></Nav.Link>
                            <Nav.Link as={Link} to={'/about'}><i class="fa-solid fa-address-card nav-icon"></i></Nav.Link>
                            <Nav.Link as={Link} to={'/skill'}><i class="fa-solid fa-laptop-code nav-icon"></i></Nav.Link>
                            <Nav.Link as={Link} to={'/contact'}><i class="fa-solid fa-envelope nav-icon"></i></Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar >
    )
}

export default TopBar