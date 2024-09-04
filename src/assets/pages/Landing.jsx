import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            <div className='container-fluid'>
                <Row className='align-items-center'>
                    <Col className='p-5' sm={12} md={6}>
                        <h2 className='text-primary'>
                            <i class="fa-solid fa-music fa-fade me-2" style={{ color: '#7649fa' }}></i>
                            Media Player 2024
                        </h2>
                        <p style={{ textAlign: 'justify' }}>Media Player is an online platform for youtube video uploads and management.</p>
                        <div className="d-grid">
                            <Link to={'/log'} className='btn btn-info'>Let's Go</Link>
                        </div>
                    </Col>
                    <Col className='py-4 text-center' sm={12} md={6}>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/media-player-8044271-6369983.png?f=webp" className='img-fluid rounded' alt="intro image" />
                    </Col>
                </Row>
            </div>
            <div className='container-fluid py-3 mb-5'>
                <h3 className='text-center'>Features</h3>
                <div className='p-4 d-flex flex-wrap justify-content-around'>
                    <Card className='my-2' style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'200px'} src="https://families-infaith.com/wp-content/uploads/2017/09/video-gallery.gif" />
                        <Card.Body>
                            <Card.Title>Manage Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    <Card className='my-2' style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif" />
                        <Card.Body>
                            <Card.Title>Upload Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    <Card className='my-2' style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" style={{objectFit:'cover'}} />
                        <Card.Body>
                            <Card.Title>Watch History</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='p-5'>
                <Row className='align-items-center'>
                    <Col sm={12} md={7}>
                    <h4 className='text-primary fw-bold'>Simple and Faster</h4>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sed eius perspiciatis debitis qui, cumque, ipsa officia ipsam iure delectus ex commodi voluptatibus similique tempora maxime laboriosam ullam. Omnis, in.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, at iusto nisi iure ducimus quaerat distinctio voluptate iste velit quis est nobis impedit aperiam reprehenderit nesciunt deleniti eius. Quia, architecto?
                    </p>
                    </Col>
                    <Col sm={12} md={5}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MRIMT0xPXFI?si=vSwQsvlSA6o_UwfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
                </Row>
            </div>
        </>
    )
}

export default Landing