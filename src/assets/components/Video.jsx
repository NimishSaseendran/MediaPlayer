import React from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'

function Video() {
    return (
        <>
            <div className='border border-3 shadow p-5 mb-4'>
                <Row>
                    <Col>
                        <VideoCard />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Video