import React from 'react'
import logo from "../../img/RGM-icon.png"
import './logo.scss'

const Logo = () => {
  return (
    <div className='w-full h-screen hero p-[300px]'>
        <div className='trademarkHD '>
        <img className='trademark-iconHD' src={logo}/>
        <div className='flex flex-col'>
            <span className='trademark-logoHD'>RGM</span>
            {/* <small className='trademark-slogan'>Ra'no Grand Medical</small> */}
        </div>
    </div>
    </div>
  )
}

export default Logo