import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Skills() {
    return (
        <Container className='mt-5' >
            <Row className='text-white'>
                <Col>
                    <h4>Program Language</h4>
                    <hr />
                    <p>Html</p>
                    <p>Css</p>
                    <p>Javascript</p>
                    <p>MySQL</p>
                    <h4>Library / Framework</h4>
                    <hr />
                    <p>React</p>
                    <p>Express</p>
                    <p>Flutter</p>
                    <h4>Tools</h4>
                    <hr />
                    <p>vs Code</p>
                </Col>
                <Col>
                    <h4>Project</h4>
                    <hr />
                    <a href="http://mengkomik.github.io/">Mengkomik</a>
                    <p className='pt-2' >Selebihnya ada di local belum di upload <i className="bi bi-emoji-smile"></i></p>

                </Col>
            </Row>
        </Container>
    )
}

export default Skills