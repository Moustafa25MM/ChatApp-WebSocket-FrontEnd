import React from 'react'
import { Row , Col ,Button } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap';
import '../CSS/home.css'
function Home() {
    return <Row>
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
          <div>
              <h1 className="home-title">
                  Chat with Your Friends
              </h1>
              <p className="home-subtitle">
                  Chat App
              </p>
              <LinkContainer to="/chat">
                  <Button variant='success'>
                      Get Start
                      <i className='fas fa-comments home-message-icon'></i>
                  </Button>
              </LinkContainer>
          </div>
      </Col>
      <Col md={6} className="home_bg">
  
      </Col>
    </Row>
  }

export default Home
