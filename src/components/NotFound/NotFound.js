import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import imgSrc from '../../assets/404.png';
function NotFound() {
  return (
  <>
    <Container>
      <Row>
        <Col lg={4} sm={12}>
          
          <img alt="shu's memoji for 404 page" src={imgSrc}></img>
    
        </Col>
        <Col lg={8} sm={12} style={{margin: 'auto'}}>
        <h1>404 Not Found</h1>
        <p>Sorry, the page you were looking for does not exist.</p>
        </Col>
      </Row>
    </Container>  
  </>
  )
  ;
}

export default NotFound;
