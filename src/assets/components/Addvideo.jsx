import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../../services/allApis';
import { toast } from 'react-toastify';

function Addvideo({response}) {

    const [video, setVideo] = useState({
        videoId: "", title: "", imageUrl: "", videoUrl: ""
    })

    const handleUpload = async () => {
        try {
            console.log(video);
            const { videoId, title, imageUrl, videoUrl } = video
            if (!videoId || !title || !imageUrl || !videoUrl) {
                toast.warn('Enter all the input fields')
            } else {
                const vUrl = videoUrl.split("v=")[1]
                const eUrl = `https://www.youtube.com/embed/${vUrl}?si=MtFEZL94PyU-VkMm&autoplay=1`
                video.videoUrl = eUrl
                const res = await addVideos(video)
                console.log(res);
                if (res.status == 201) {
                    toast.success('Upload successfully')
                    handleClose()
                    response(res)
                } else {
                    toast.error("upload Failed")
                }
            }

        }
        catch(err){
            console.log(err);{
                toast.error('Upload Failed')
            }
            
        }
        
    }


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setVideo({
            videoId: "", title: "", imageUrl: "", videoUrl: ""
        })
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-solid fa-circle-plus" style={{ color: "#74C0FC", fontSize:'2rem'}} />
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
                        <Form.Control type="number" placeholder="id" onChange={(e) => { setVideo({ ...video, videoId: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="vTitle" label="Video Title" className='mb-3'>
                        <Form.Control type="text" placeholder="title" onChange={(e) => { setVideo({ ...video, title: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="imgUrl" label="Video Image URL" className='mb-3'>
                        <Form.Control type="text" placeholder="image url" onChange={(e) => { setVideo({ ...video, imageUrl: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="vUrl" label="Youtube Video URL" className='mb-3'>
                        <Form.Control type="text" placeholder="video url" onChange={(e) => { setVideo({ ...video, videoUrl: e.target.value }) }} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addvideo