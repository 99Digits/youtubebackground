import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import ReactPlayer from 'react-player';

function YoutubePlayer() {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
  
    overflow: 'hidden',
  };

  const videoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
   
    margin:'50px;',
    
   
    transform: 'translate(-50%, -50%) scale(1.2)',
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensure the video covers the entire container while maintaining aspect ratio
    pointerEvents: 'none',
    zIndex: '-1',
  
  };

  return (
    <div style={containerStyle}>
      {/* Add your other content here */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JETMAX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
      
          <div className="col-lg-12">
            
          </div>
      
      </Container>
      

      <ReactPlayer
        url="https://www.youtube.com/watch?v=n9LgeoJE4EI"
        playing={true}
        controls={false}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        style={videoStyle}
        
      />
    </div>
  );
}

export default YoutubePlayer;
