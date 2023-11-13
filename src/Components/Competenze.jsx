import React from 'react'
import  { Carousel }  from 'react-bootstrap'
import CSS from '../Components/assets/css.png'
import JS from '../Components/assets/js.jpg'
import Node from '../Components/assets/node.jpg'
import ReactJS from '../Components/assets/react.png'

function Competenze  () {
  return (
    <>
    
    <div>Competenze</div>

    <div className='d-flex justify-content-center'>
      
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={CSS}
          alt="Prima immagine"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={JS}
          alt="Seconda immagine"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={Node}
          alt="Terza immagine"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src={ReactJS}
          alt="Quarta immagine"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="https://via.placeholder.com/800x400/ffff00/000000?text=5"
          alt="Quinta immagine"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
    </>



    
  )
}

export default Competenze
