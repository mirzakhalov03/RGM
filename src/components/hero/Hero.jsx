import React from 'react'
import hero1 from '../../img/main/hero1.svg'
import './hero.scss'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'
import "aos/dist/aos.css"
import OpenHours from '../openHours/OpenHours'
import telegramLogo from "../../img/Telegram_logo.webp"
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();


  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <div className='w-full hero'>
      {/* Hero Background downloaded by FREEPIK */}
        <div className='container relative'>
            <div className="w-full flex items-center min-h-screen justify-around">
                <div data-aos="fade-up" className='heroWrapperMob flex flex-col'>
                    <span className='strongOnMob flex gap-2 items-center justify-center sm:justify-normal'>
                      <span className='yellowGlass text-[#eec25]'>{t("heroStrong1")}</span>
                      <span className='GreenGlass text-[#51e46]'>{t("heroStrong2")}</span>
                    </span>
                    <span className='h3flexMob'>
                      <h3 className='hero-text '>Ra'no Grand</h3>
                      <h3 className='hero-text '>Medical</h3>
                     
                    </span>
                    <span className='max-w-[500px] pFlexMob'>
                      <p className='lg:text-[20px] pt-[10px]  text-[#14537d]'>{t("heroText")}</p>
                    </span>
                    <div className='w-full flex sm:justify-start justify-center  mt-[12px] gap-4'>
                      <button onClick={()=>{navigate("/lineup")}} className='heroBtn1' >{t("heroBtn1")}</button>
                      <a href='https://t.me/rgm_clinic' className='px-3 py-1 bg-[#ffffffcc] rounded-lg border-2 border-sky-400 text-[--headline] flex items-center gap-1'><img className='w-[20px] h-[20px]' src={telegramLogo} alt="" /><span>Telegram</span></a>
                    </div>
                </div>
                <div className='heroImg' data-aos="fade-down">
                  <img src={hero1} alt="" />
                </div>
            </div>
            <OpenHours/>
        </div>
    </div>
  )
}

export default Hero