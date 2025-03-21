import React from 'react'
import './services.scss'
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Services = () => {
  const {t} = useTranslation();

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])



  return (
    <>
    <div className='w-full min-h-screen bg-[#fed]'>
      <div className='container pt-[80px]'>
        <h2 className='h2-titles '>{t("service_headline")}</h2>
        <div className='mb-[50px] flex items-center justify-center hover:scale-105 transition-all cursor-pointer'>
          <Link to="/publiclist" className='px-4  py-2 rounded-md bg-[--softBlue] text-[white] shadow-lg hover:shadow-2xl transition-all'>{t("service_lineUpBtn")}</Link>
        </div>
        <div className="serviceWrapper">
          <div data-aos="fade-up" className="serviceDropdown">
            <div className="serviceTitle">
              <span className='w-full h-full flex items-center justify-center'>
              <h3>{t("service_type1")}</h3>
              </span>
            </div>
            <div className="serviceDesc">
              <p><b>{t("service_brief")} </b>{t("service_desc1")}</p>
              
              <div className="priceTag"><b>+ 55 000 {t("sum")} </b></div>
            </div>
          </div>
          <div data-aos="fade-up" className="serviceDropdown">
            <div className="serviceTitle">
              <span className='w-full h-full flex items-center justify-center'>
              <h3>{t("service_type2")}</h3>
              </span>
            </div>
            <div className="serviceDesc">
              <p><b>{t("service_brief")} </b>{t("service_desc2")}</p>
              <div className="priceTag"><b>55 000 {t("sum")}</b></div>
            </div>
          </div>
          <div data-aos="fade-up" className="serviceDropdown">
            <div className="serviceTitle">
              <span className='w-full h-full flex items-center justify-center'>
              <h3>{t("service_type3")}</h3>
              </span>
            </div>
            <div className="serviceDesc">
              <p><b>{t("service_brief")} </b>{t("service_desc3")}</p>
              
              <div className="priceTag"><b>55 000 {t("sum")}</b></div>
            </div>
          </div>
          <div data-aos="fade-up" className="serviceDropdown">
            <div className="serviceTitle">
              <span className='w-full h-full flex items-center justify-center'>
              <h3>{t("service_type4")}</h3>
              </span>
            </div>
            <div className="serviceDesc">
              <p><b>{t("service_brief")} </b>{t("service_desc4")}</p>
             
              <div className="priceTag"><b>55 000 {t("sum")}</b></div>
            </div>
          </div>
          <div data-aos="fade-up" className="serviceDropdown">
            <div className="serviceTitle">
              <span className='w-full h-full flex items-center justify-center'>
              <h3>{t("service_type5")}</h3>
              </span>
            </div>
            <div className="serviceDesc">
              <p><b>{t("service_brief")} </b>{t("service_desc5")}</p>
              
              <div className="priceTag"><b>70 000 {t("sum")}</b></div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Services