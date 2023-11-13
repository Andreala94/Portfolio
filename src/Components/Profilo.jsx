import React, { useEffect, useState } from 'react'
import MyFoto from '../Components/assets/io.jpg'
import '../Components/Css/Profilo.css'


function Profilo() {

  const [animazioneFoto, setAnimazioneFoto] = useState(false);

  useEffect(() => {
   
    setAnimazioneFoto(true);
  }, []);


  return (
    <>
      <div className='d-flex justify-content-center p-5'>
        <h2>Un pò di me</h2>
      </div>
      <div className='d-flex align-items-center justify-content-center justify-content-around'>
        <div className='about w-50 m-5'>
          <h5>Mi chiamo Andrea Lauro, sono un ragazzo appassionato di tecnologia con la voglia d'imparare sempre cose nuove,
            ma sopratutto di mettersi in gioco. Attualmente mi sto dedicando alla programmazione imparando sempre cose nuove.
          </h5>
        </div>
        <div className={`animated-image ${animazioneFoto ? 'animate-in' : ''}`}>
          <img id='myfoto'
            src={MyFoto}
            alt=""
            style={{ width: '20%', height: 'auto' }} />
        </div>
      </div>
    </>
  )
}

export default Profilo