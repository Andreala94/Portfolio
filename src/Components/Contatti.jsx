import React from 'react'
import '../Components/Css/Contatti.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';

function Contatti  ()  {
  return (
  <>
    <div className='d-flex justify-content-center my-5'><h3><FontAwesomeIcon icon={faCode} /> Contatti <FontAwesomeIcon icon={faCode} /></h3></div>
    
   <Container>
      
    <div className='d-flex justify-content-center my-5 '> <a href="https://www.linkedin.com/in/andrea-lauro-113b6225b/"> <Button className='bottone'>Linkedin <FontAwesomeIcon icon={faLinkedin}  /> </Button></a> </div>
    <div className='d-flex justify-content-center my-5 '> <a href='https://github.com/Andreala94'><Button className='bottone'>GhitHub <FontAwesomeIcon icon={faGithub} /> </Button></a> </div>
    <div className='d-flex justify-content-center my-5 '> <a href='mailto:andrea.lauro94@gmail.com'><Button className='bottone'>Email <FontAwesomeIcon icon={faEnvelope}  /> </Button> </a></div>
    <div className='d-flex justify-content-center my-5 '> <a href='tel:3283167863'><Button className='bottone'>Telefono <FontAwesomeIcon icon={faMobile} /> </Button></a></div>


   </Container>
    
    

    
    </>
  )
}
export default Contatti
