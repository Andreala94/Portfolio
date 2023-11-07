import React from 'react'
import MyFoto from '../Components/assets/logo.png'
import '../Components/Css/Profilo.css'


export const Profilo = () => {
  //Blocco 1 
  return (
    <>
      <div className='d-flex justify-content-center p-5'>
        <h2>Un pò di me</h2>
      </div>
      <div className='d-flex align-items-center justify-content-center justify-content-around'>
         <div>
            <h5>Salve, mi chiamo Andrea Lauro</h5>
         </div>
         <div>
          <img id='myfoto' src={MyFoto} alt="" />
         </div>
      </div>
    </>
  )
}
