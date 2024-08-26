import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addvideo() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-solid fa-circle-plus" style={{ color: "#74C0FC", }} />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="vID" label="Video ID" className="mb-3" >
                        <Form.Control type="number" placeholder="id" />
                    </FloatingLabel>
                    <FloatingLabel controlId="vTitle" label="Video Title" className='mb-3'>
                        <Form.Control type="text" placeholder="title" />
                    </FloatingLabel>
                    <FloatingLabel controlId="imgUrl" label="Video Image URL" className='mb-3'>
                        <Form.Control type="text" placeholder="image url" />
                    </FloatingLabel>
                    <FloatingLabel controlId="vUrl" label="Youtube Video URL" className='mb-3'>
                        <Form.Control type="text" placeholder="video url" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addvideo