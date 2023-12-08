import React from 'react';
import './Css/Progetti.css'
import ProfiloGit from '../Components/assets/ghithub.png'
import EventiPuglia from '../Components/assets/EventiPuglia.png'
import Netflix from '../Components/assets/Netflix.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Image } from 'react-bootstrap';




const Progetti = () => {

  const openEventi = () =>{
    window.open('https://eventipuglia.netlify.app', '_blank');
  }
  const openGitHub = () =>{
    window.open('https://github.com/Andreala94', '_blank');
  }
  const openNetflix = () =>{
    window.open('https://chipper-mochi-c8f6bd.netlify.app/', '_blank')
  }
  
    return (
      <>
      <div className='d-flex justify-content-center my-5'><h3><FontAwesomeIcon icon={faCode} /> Progetti <FontAwesomeIcon icon={faCode} /></h3></div>
     
      <Container className='my-5 '>
      <Row>
        <Col xs={12} md={6}>
        <a href="https://github.com/Andreala94" target="_blank" rel="noopener noreferrer" onClick={openGitHub}>
          <Image src={ProfiloGit} className='immagine' fluid />
          </a>
          <p>Profilo GhitHub</p>
        </Col>
    
        <Col xs={12} md={6}>
        <a href="https://eventipuglia.netlify.app" target="_blank" rel="noopener noreferrer" onClick={openEventi}>
          <Image src={EventiPuglia}  className='immagine' fluid />
        </a>
        <p>Sito Eventi in Puglia dove un utente può controllare che eventi ci sono in puglia,
          ma può anche tramite la registrazione e il Login creare un proprio Evento nella propria città.
        </p>
        </Col>

        <Col xs={12} md={6}>
          <a href="https://chipper-mochi-c8f6bd.netlify.app/" target='-blank' rel="noopener noreferrer" onClick={openNetflix}>
            <Image src={Netflix} className='immagine mt-3' fluid />
          </a>
          <p>ksfjdljfslsdmkfdlsfklfk</p>
        </Col>
      </Row>
    </Container>
     

      </>
      
  );
};

export default Progetti;
