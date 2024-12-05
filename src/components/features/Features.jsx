import { BsLightningChargeFill } from "react-icons/bs"; 
import { GrMapLocation } from "react-icons/gr"; 
import { FaHeartbeat } from "react-icons/fa"; 
import { GiMedicines } from "react-icons/gi"; 
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import "./feature.scss"
import { useTranslation } from 'react-i18next'

const Features = () => {
    const {t} = useTranslation();


    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

  return (
    <div className='w-full mt-[100px]'>
        <div className="container flex flex-col gap-0 ">
        <h2 className='h2-titles'>{t("feature_headline")}</h2>
            <div className='w-full flex items-center justify-center '>
                <div className="feature__wrapper ">
                    <div data-aos="zoom-in-up" className='text-center flex flex-col items-center w-[250px]'>
                        <FaHeartbeat className="w-[40px] h-[40px] text-[--headline]"/>
                        <h2 className="font-semibold sm:text-md 2xl:text-xl text-[--headline]">{t("feature_title1")}</h2>
                        <p className="text-[--p]">{t("feature1")}</p>
                    </div>
                    <div data-aos="zoom-in-up" className='text-center flex flex-col items-center w-[250px]'>
                        <GrMapLocation className="text-[--headline] w-[40px] h-[40px]"/>
                        <h2 className="font-semibold sm:text-md 2xl:text-xl text-[--headline]">{t("feature_title2")}</h2>
                        <p className="text-[--p]" >{t("feature2")}</p>
                    </div>
                    <div data-aos="zoom-in-up" className='text-center flex flex-col items-center w-[250px]'>
                        <GiMedicines className="w-[40px] h-[40px] text-[--headline]"/>
                        <h2 className="font-semibold sm:text-md 2xl:text-xl text-[--headline]">{t("feature_title3")}</h2>
                        <p className="text-[--p]">{t("feature3")}</p>
                    </div>
                    <div data-aos="zoom-in-up" className='text-center flex flex-col items-center w-[250px]'>
                        <BsLightningChargeFill className="w-[40px] h-[40px] text-[--headline]"/>
                        <h2 className="font-semibold sm:text-md 2xl:text-xl text-[--headline]">{t("feature_title4")}</h2>
                        <p className="text-[--p]">{t("feature4")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features