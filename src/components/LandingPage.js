import React from 'react'
import { Container } from 'react-bootstrap'

function LandingPage() {
    const foto = require('../assets/images/mee.png')
    return (
        <Container className=' mt-5'>
            <div className='LandingPage' >
                <img src={foto} alt="Foto" className='foto' />
            </div>
            <div className='Perkenalan' >
                <h3 className='text-white'>Hi, I'm</h3>
                <h3 className="nur">Nurman Hadi</h3>
            </div>
            <div className="icon">
                <a href="https://www.instagram.com/manz3__/"><i className="sosmed bi bi-instagram"></i></a>
                <a href="https://github.com/nurmanhadi"><i className="sosmed bi bi-github"></i></a>
                <a href="https://www.facebook.com/nurmanHadi023/"><i className="sosmed bi bi-facebook"></i></a>
            </div>
        </Container>
    )
}

export default LandingPage