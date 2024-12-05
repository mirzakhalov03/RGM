import { FaUserNurse } from "react-icons/fa"; 
import React from 'react'
import "./doctors.scss"
import { Divider } from "antd";
import telegram from "../../img/Telegram_logo.webp"
import gmail from "../../img/gmail_logo.png"
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

const Doctors = () => {
  const {t} = useTranslation();

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <>
      <div className='location-bg pb-[40px]'>
          <h2 className='h2-titles'>{t("doctors_headline")}</h2>
            <div className="doctors_wrapper">
              <div data-aos="fade-up" className="doctor_wrapperTop">
                <div className='doctorsCard mainDoctor doctor'>
                  <div className="flex items-center justify-around">
                    <div className="w-[100px] flex items-center justify-center p-">
                      <FaUserNurse  className="text-[90px] text-[gold]"/>
                    </div>
                    <div className="w-[200px]">
                      <h2 className="text-[26px] font-semibold leading-7 text-[--headline]">Ravshanjon Mirzakhalov</h2>
                      <span className="text-[gray]">{t("doctor_title1")}</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="doctor_desc">
                      <p className="pt-5 opacity-70 text-[--p] sm:text-[15px] text-[14px]">{t("doctor_desc1")}</p>
                    </div>
                    <Divider style={{color: "#196aa0"}} className="block text-center">{t("doctor_contact")}</Divider>
                    <div className="w-full flex flex-col overflow-auto ">
                      <a href="https://t.me/ravshanjonmirzakhalov" className="flex items-center gap-2 sm:hover:underline text-[--softBlue]"><img className="w-[20px] h-[20px]" src={telegram} alt="" />@ravshanjonmirzakhalov</a>
                      <a href="mailto:ravshanmirzahalov@gmail.com" className="flex items-center gap-2 sm:hover:underline text-[--softBlue]"><img className="w-[20px] h-[15px]" src={gmail} alt="" />ravshanmirzahalov@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className='doctorsCard otherDoctors doctor'>
                <div className="flex items-center justify-around">
                    <div className="w-[100px] flex items-center justify-center p-">
                      <FaUserNurse  className="text-[90px] text-[#196aa0b4]"/>
                    </div>
                    <div className="w-[200px]">
                      <h2 className="text-[26px] font-semibold leading-7 text-[--headline]">Jo'rabek Mirzakhalov</h2>
                      <span className="text-[gray]">{t("doctor_title2")}</span>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="doctor_desc">
                      <p className="pt-5 opacity-70 text-[--p] sm:text-[15px] text-[14px]">{t("doctor_desc2")}</p>
                    </div>
                    <Divider style={{color: "#196aa0"}} className="block text-center">{t("doctor_contact")}</Divider>
                    <div className="w-full flex flex-col overflow-auto ">
                      <a href="https://t.me/Medicus_us" className="flex items-center gap-2 sm:hover:underline text-[--softBlue]"><img className="w-[20px] h-[20px]" src={telegram} alt="" />@Medicus_us</a>
                      <a href="mailto:mirzahalov1809@gmail.com" className="flex items-center gap-2 sm:hover:underline text-[--softBlue]"><img className="w-[20px] h-[15px]" src={gmail} alt="" />mirzahalov1809@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="doctor_wrapperBottom">
                <div className='doctorsCard otherDoctors nurses'>
                <div className="flex items-center justify-around">
                    <div className="w-[100px] flex items-center justify-center p-">
                      <FaUserNurse  className="text-[90px] text-[#196aa0b4]"/>
                    </div>
                    <div className="w-[200px]">
                      <h2 className="text-[26px] font-semibold leading-7 text-[--headline]">Nasiba Badalova</h2>
                      <span className="text-[gray]">{t("doctor_title3")}</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="doctor_desc">
                      <p className="pt-5 opacity-70 text-[--p] sm:text-[15px] text-[14px]">{t("doctor_desc3")}</p>
                    </div>
                  </div>
                </div>
                <div className='doctorsCard otherDoctors nurses'>
                <div className="flex items-center justify-around">
                    <div className="w-[100px] flex items-center justify-center p-">
                      <FaUserNurse  className="text-[90px] text-[#196aa0b4]"/>
                    </div>
                    <div className="w-[200px]">
                      <h2 className="text-[26px] font-semibold leading-7 text-[--headline]">Mo'tabar Abdulmatova</h2>
                      <span className="text-[gray]">{t("doctor_title4")}</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="doctor_desc">
                      <p className="pt-5 opacity-70 text-[--p] sm:text-[15px] text-[14px]">{t("doctor_desc4")}</p>
                    </div>
                    
                  </div>
                </div>
                <div className='doctorsCard otherDoctors nurses'>
                  <div className="flex items-center justify-around">
                    <div className="w-[100px] flex items-center justify-center ">
                      <FaUserNurse  className="text-[90px] text-[#196aa0b4]"/>
                    </div>
                    <div className="w-[200px]">
                      <h2 className="text-[26px] font-semibold leading-7 text-[--headline]">Muhayyo Atavaliyeva</h2>
                      <span className="text-[gray]">{t("doctor_title5")}</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="doctor_desc">
                      <p className="pt-5 opacity-70 text-[--p] sm:text-[15px] text-[14px]">{t("doctor_desc5")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <Footer/>

    
    </>
  )
}

export default Doctors