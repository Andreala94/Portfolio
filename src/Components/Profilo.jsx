import React, { useEffect, useState } from 'react'
import MyFoto from '../Components/assets/io.jpg'
import '../Components/Css/Profilo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';


function Profilo() {

  const [animazioneFoto, setAnimazioneFoto] = useState(false);

  useEffect(() => {
   
    setAnimazioneFoto(true);
  }, []);


  return (
    <>
      <div className='d-flex justify-content-center my-5'><h3><FontAwesomeIcon icon={faCode} /> Un pò di me <FontAwesomeIcon icon={faCode} /></h3></div>
      
      <Container className='d-flex flex-column align-items-center justify-content-center'>
        
        <div className={`animated-image ${animazioneFoto ? 'animate-in' : ''}`}>
          <img id='myfoto'
            src={MyFoto}
            alt=""
            className="img-fluid" />
        </div>
        <div className='about w-75 m-3 text-center mb-5'>
          <h5>Mi chiamo Andrea Lauro, sono un ragazzo appassionato di tecnologia con la voglia d'imparare sempre cose nuove,
            ma sopratutto di mettersi in gioco. Attualmente mi sto dedicando alla programmazione imparando sempre cose nuove.
          </h5>
        </div>
      </Container>
    </>
  )
}

export default Profilo