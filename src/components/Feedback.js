import { Container, Form, Button } from "react-bootstrap";

const Feedback = () => {

    const event = () => {
        alert('Belum Beres YGY')
    }
    return (
        <Container className='mt-5 text-white' >
            <h2 className='text-white text-center mb-5'>Contact Us</h2>
            <Form className="feedback">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Messege"></textarea>
                </Form.Group >
                <Form.Group className='text-center'>
                    <Button variant="primary" onClick={() => event()}>SEND</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Feedback