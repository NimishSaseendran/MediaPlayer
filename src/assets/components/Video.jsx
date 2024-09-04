import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideos } from '../../services/allApis'

function Video(add) {

    const [videos, setVideos] = useState([])
    const [delResponse, setDelResponse] = useState("")

    useEffect(() => {
        getData()
    }, [add, delResponse])

    const getData = async () => {
        const res = await getVideos()
        console.log(res);
        if (res.status == 200) {
            setVideos(res.data)
        } else {
            console.log(res);

        }

    }

    return (
        <>
            <div className='border border-3 shadow p-5 mb-4'>
                {
                    videos.length > 0 ?
                        <Row>
                            {
                                videos.map(item => (
                                    <Col>
                                        <VideoCard video={item} response={setDelResponse}/>
                                    </Col>
                                ))
                            }

                        </Row>
                        :
                        <h2 className='text-center text-warning'>No videos Available</h2>
                }

            </div>
        </>
    )
}

export default Video