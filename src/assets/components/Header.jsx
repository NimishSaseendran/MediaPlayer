import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (
        <>
          <Navbar className="bg-body-tertiary ">
            <Container>
              <Navbar.Brand href="#home">
              <i class="fa-solid fa-music fa-fade fa-lg me-2" style={{color:'#7649fa'}}></i>
                Media Player
              </Navbar.Brand>
            </Container>
          </Navbar>
        </>
      );
    
}

export default Header