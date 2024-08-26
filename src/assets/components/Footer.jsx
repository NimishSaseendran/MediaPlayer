import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className=" py-2 bg-light container-fluid">
                <Row className='p-5'>
                    <Col sm={12} md={5}>
                        <h3>Media Player 2024</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quam dolorem ipsam numquam quos eos facilis architecto accusantium ea, omnis eum ipsum labore aut, illum, cum itaque sapiente doloremque odio!
                        </p>
                    </Col>
                    <Col sm={12} md={2} className='d-flex flex-column'>
                        <h3>Links</h3>
                        <Link to={'/'}>Landing</Link>
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/his'}>History</Link>
                    </Col>
                    <Col sm={12} md={5}>
                        <h3>FeedBack</h3>
                        <textarea name="" id="" className='form-control'></textarea>
                        <button className='btn btn-info mt-3'>Send</button>
                    </Col>
                </Row>
                <p className='text-center'>Media player &copy; 2024 All rights reserved</p>
            </div>
        </>
    )
}

export default Footer