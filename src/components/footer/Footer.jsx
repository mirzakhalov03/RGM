import { IoIosCall } from "react-icons/io"; 
import { FaYoutube } from "react-icons/fa"; 
import { FaTelegramPlane } from "react-icons/fa"; 
import gmail from "../../img/gmail_logo.png"
import React from 'react'
import './footer.scss'
import Trademark from '../navLogo/Trademark'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
    const {t} = useTranslation();

  return (
    <div className='footer w-full bg-[--softBlue] '>
        <div className="container">
            <div className="footerWrapper">
                <div className="footerLogo">
                    <Trademark/>
                    <a target="_blank" href="https://maps.app.goo.gl/UhBuJeDEGukoHcPv6">
                        <address>{t("footerAddress")}</address>
                        <address>{t("footerAddress2")}</address>
                    </a>
                </div>
                <div className="footerInfo">
                    <p>{t("footerInfo")} <b>{t("footerInfoBold")}</b></p>
                </div>
                <div className="footerSocials">
                    <a  href='https://t.me/rgm_clinic' target="_blank" className='socialIcon iconMob Telegram'>
                        <FaTelegramPlane className="text-[30px] text-[--softBlue]"/>
                    </a>
                    <a href="tel:+998945000509" target="_blank" className='socialIcon iconMob Message'>
                        <IoIosCall className="text-[30px] text-[--green]"/>
                    </a>
                    <a href="#" target="_blank"  onClick={(e) => {alert(t("comingSoon"))}} className='socialIcon iconMob YouTube'>
                        <FaYoutube className="text-[30px] text-[crimson]"/>
                    </a>
                    <a href="mailto:ravshanmirzahalov@gmail.com" target="_blank" className='socialIcon iconMob Gmail'>
                        <img src={gmail} className="w-[30px] h-[20p]" alt="" />
                    </a>
                </div>
            </div>
            <div className="footerSocialsMob">
                <a href="tel:+998945000509" target="_blank" className='socialIcon Message'>
                    <IoIosCall className="text-[30px] text-[--green]"/>
                </a>
                <a href="mailto:javohirmirzakhalov@gmail.com" target="_blank" className='socialIcon Gmail'>
                    <img src={gmail} className="w-[30px] h-[20p]" alt="" />
                </a>
                <a href="#"  target="_blank" onClick={(e) => {alert(t("comingSoon"))}}  className='socialIcon YouTube'>
                    <FaYoutube className="text-[30px] text-[crimson]"/>
                </a>
                <a target="_blank" href='https://t.me/rgm_clinic' className='socialIcon Telegram'>
                    <FaTelegramPlane className="text-[30px] text-[--softBlue]"/>
                </a>
            </div>
        </div>
        <hr className="opacity-10 mt-[15px] mb-[10px]"/>
        <div className="container sm:flex items-center sm:justify-between  pb-[10px] text-[--lightP]">
            <span className='flex items-center justify-center gap-1 text-center sm:text-[16px] text-[13px]'>©️ {t("copyright")}</span>
            <span className="block text-center m-2 hover:scale-105 transition-all"><Link to='/admin' className="text-center  underline border border-[gold] text-[gold] rounded py-1  px-2 hover:shadow-lg ">Login as Admin</Link></span>
            <small className="flex items-center justify-center ">Developed by <a target="_blank" href="https://www.mirzakhalov.com" className="block pl-1 underline" >  Mirzakhalov Javohirbek</a></small>
        </div>
    </div>
  )
}

export default Footer



