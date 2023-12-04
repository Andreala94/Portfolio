import React from 'react'
import Slider from 'react-infinite-logo-slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import '../Components/Css/Competenze.css'
import CSS from '../Components/assets/Css.png'
import JS from '../Components/assets/JS.png'
import Node from '../Components/assets/Node.png'
import ReactJS from '../Components/assets/React.png'
import MongoDB from '../Components/assets/MongoDB.png'
import Bootstrap from '../Components/assets/Bootstrap.png'
import HTML from '../Components/assets/HTML.png'

function Competenze() {
  return (
    <>

      <div className='d-flex justify-content-center'><h3><FontAwesomeIcon icon={faCode} /> Competenze <FontAwesomeIcon icon={faCode} /></h3></div>

      <div className='mt-5 w-75 d-flex'>
        <Slider
          width="250px"
          duration={30}
          pauseOnHover={true}
          blurBorders={true}
          blurBoderColor={'#fff'}
        >
          <Slider.Slide>
            <div className='text-center stack_icon_hover'>
              <img src={Bootstrap} alt="any" className='w-30 stack_icon' />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div className='text-center stack_icon_hover'>
              <img src={CSS} alt="any" className='w-30 stack_icon' />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div className='text-center stack_icon_hover'>
              <img src={HTML} alt="any" className='w-30 stack_icon' />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div className='text-center stack_icon_hover'>
              <img src={JS} alt="any" className='w-30 stack_icon' />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div className='text-center stack_icon_hover'>
              <img src={MongoDB} alt="any" className='w-30 stack_icon' />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div className='text-center stack_icon_hover'>
              <img src={ReactJS} alt="any" className='w-30 stack_icon' />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <div className='text-center stack_icon_hover'>
              <img src={Node} alt="any" className='w-30 stack_icon' />
            </div>
          </Slider.Slide>
        </Slider>





      </div>

    </>




  )
}

export default Competenze
