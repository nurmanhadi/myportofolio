import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Profile() {
    return (
        <Container className='mt-5'>
            <Row>
                <Col className='side-1'>
                    <div className='imgProfile rounded border-5' ></div>
                    <h4 className='name'>Nurman Hadi</h4>
                    <div className="icon">
                        <a href="https://www.instagram.com/manz3__/"><i className="sosmed bi bi-instagram"></i></a>
                        <a href="https://github.com/nurmanhadi"><i className="sosmed bi bi-github"></i></a>
                        <a href="https://www.facebook.com/nurmanHadi023/"><i className="sosmed bi bi-facebook"></i></a>
                    </div>
                </Col>
                <Col className='text-white'>
                    <h4>Hallo</h4>
                    <hr />
                    <p>Nama saya Muhammad Nurman Hadi, saya saat ini mahasiswa semester 5 di salah satu Universitas di Jakarta. saya mengambil jurusan Teknik Informatika</p>
                    <h4>Hobi</h4>
                    <p>Hobi saya yaitu bermain game dan membaca komik</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile