import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {

  const nav = useNavigate()

  const logout = () =>{
    nav('/')
    toast.success('Logout Successful ...')
    sessionStorage.removeItem('userData')
  }

    return (
        <>
          <Navbar className="bg-body-tertiary ">
            <Container>
              <Navbar.Brand href="#home">
              <i className="fa-solid fa-music fa-fade fa-lg me-2" style={{color:'#7649fa'}}></i>
                Media Player
              </Navbar.Brand>
            </Container>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          </Navbar>
        </>
      );
    
}

export default Header