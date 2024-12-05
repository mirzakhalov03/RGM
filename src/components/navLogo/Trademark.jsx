import React from 'react'
import logo from '../../img/RGM-icon.png'
import './navLogo.scss'

const Trademark = () => {
  return (
    <div className='trademark '>
        <img className='trademark-icon' src={logo}/>
        <div className='flex flex-col'>
            <span className='trademark-logo'>RGM</span>
            {/* <small className='trademark-slogan'>Ra'no Grand Medical</small> */}
        </div>
    </div>
  )
}

export default Trademark