import React from 'react'
import { Container } from 'react-bootstrap'
import vscode from "../assets/images/vscode.png"
import flutter from "../assets/images/flutter.png"
import ex from "../assets/images/express.png"
import sql from "../assets/images/mysql.png"

function Skills() {
    return (
        <Container className='mt-5' >
            <div className="card-transparent text-white">
                <h4>Program Language</h4>
                <hr />
                <div className="icons">
                    <i className="fa-brands fa-html5 mx-2"></i>
                    <i className="fa-brands fa-css3-alt mx-2"></i>
                    <i className="fa-brands fa-js mx-2"></i>
                    <img src={sql} alt="mysql" className='logo-brand mx-2' />
                </div>
                <h4>Library / Framework / Tools</h4>
                <hr />
                <div className="icons">
                    <i className="fa-brands fa-react mx-2"></i>
                    <i className="fa-brands fa-node mx-2"></i>
                    <img src={flutter} alt="flutter" className='logo-brand mx-2' />
                    <img src={ex} alt="express" className='logo-brand mx-2' />
                    <img src={vscode} alt="vscode" className='logo-brand mx-2' />
                </div>
                <h4>Project</h4>
                <div className='text-center'>
                    <hr />
                    <a href="http://mengkomik.github.io/" className='lk'>Mengkomik</a>
                    <p className='pt-2' >Selebihnya ada di local belum di upload <i className="bi bi-emoji-smile"></i></p>
                </div>
            </div>
        </Container>
    )
}

export default Skills