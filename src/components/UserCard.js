import React from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';  

function UserCard(props) {
  const {id, firstName, lastName, email, show, hide} = props;
  return(
    <Modal
    show={show}
    onHide={hide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
>

    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Profile
        </Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <div className="container">
            <Row>
                <Col sm={6}>

                    <Form>
                        <p>ID: {id}</p>
                        <p>First Name: {firstName}</p>
                        <p>Last Name: {lastName}</p>
                        <p>Email: {email}</p>

                        <Form.Group>
                            <Button variant="secondary"onClick={hide}>Close</Button>

                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    </Modal.Body>
</Modal>
)
}

export default UserCard;
