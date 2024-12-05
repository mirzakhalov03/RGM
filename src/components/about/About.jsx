import { FaUserNurse } from "react-icons/fa"; 
import { GrMapLocation } from "react-icons/gr"; 
import { TbBuildingHospital } from "react-icons/tb"; 
import React from 'react'
import './about.scss'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation()

  return (
    <div className='w-full mt-[100px] relative'>
        <div className='w-full parallax py-[100px]'>
            <div className='container flex items-center justify-center'>
                <div className='centerWrapper'>
                  <p className='h2-titles'>{t("homeAbout_headline")}</p>
                  <div className='homeAboutSectionWrapper'>
                    <Link to="/about" className="homeAboutSection">
                      <TbBuildingHospital className=""/>
                      <p>{t("homeAbout_card1")}</p>
                    </Link>
                    <Link to="/doctors" className="homeAboutSection">
                      <FaUserNurse className=""/>
                      <p>{t("homeAbout_card2")}</p>
                    </Link>
                    <Link to="/location" className="homeAboutSection">
                      <GrMapLocation className=""/>
                      <p>{t("homeAbout_card3")}</p>
                    </Link>
                  </div>
                </div> 
            </div>
        </div>
        
    </div>
  )
}

export default About