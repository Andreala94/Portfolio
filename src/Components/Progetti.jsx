import React from 'react';
import './Css/Progetti.css'
import ProfiloGit from '../Components/assets/ghithub.png'
import EventiPuglia from '../Components/assets/EventiPuglia.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Image } from 'react-bootstrap';



const Progetti = () => {
  
    return (
      <>
      <div className='d-flex justify-content-center my-5'><h3><FontAwesomeIcon icon={faCode} /> Progetti <FontAwesomeIcon icon={faCode} /></h3></div>
     
      <Container className='my-5 '>
      <Row>
        <Col xs={12} md={6}>
          <Image src={ProfiloGit} fluid />
        </Col>

        <Col xs={12} md={6}>
          <Image src={EventiPuglia} fluid />
        </Col>
      </Row>
    </Container>
     

      </>
      
  );
};

export default Progetti;
