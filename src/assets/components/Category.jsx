import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../../services/allApis';
import CategoryList from './CategoryList';

function Category() {
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState({
        categoryId:"",title:"",videos:[]
    })
    const [addResponse, setAddResponse] = useState("")

    const handleCategory =async () =>{
        console.log(category);
        const {categoryId, title}=category
        if(!categoryId || !title){
            toast.warning("Enter All Input !!!")
        } else {
            const result = await addCategory(category)
            console.log(result);
            if(result.status == 201){
                toast.success("Category Added !!!")
                handleClose()
                setCategory({
                    categoryId:"",title:"",videos:[]
                })
                setAddResponse(result)
            } else{
                toast.error("Category adding Failed !!!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='d-grid'>
                <Button onClick={handleShow} variant='btn btn-success'>Add Category</Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                >
    
                    <Modal.Header closeButton>
                        <Modal.Title>Add Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel controlId="floatingInput" label="Category ID" className="mb-3">
                            <Form.Control type="number" onChange={(e)=>setCategory({...category, categoryId:e.target.value})} placeholder="cID" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Category Name" className='mb-3'>
                            <Form.Control type="text" onChange={(e)=>setCategory({...category, title:e.target.value})} placeholder="cName" />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={handleCategory}>Save</Button>
                    </Modal.Footer>
                </Modal>
                <CategoryList response={addResponse}/>
            </div>
        </>
    )
}

export default Category