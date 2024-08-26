import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Addvideo from '../components/Addvideo'
import Video from '../components/Video'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='d-flex justify-content-between p-4'>
      <h1>Videos</h1>
      <div className='d-flex align-items-center'>
        <Link to={'/his'}>Watch History</Link>
      </div>
    </div>
    <div className='container-fluid'>
      <Row>
        <Col sm={12} md={1}>
        <Addvideo/>
        </Col>
        <Col sm={12} md={8}>
        <Video/>
        </Col>
        <Col sm={12} md={3}>
        <Category/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Home