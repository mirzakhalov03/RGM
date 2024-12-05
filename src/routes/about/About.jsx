import React from 'react';
import { Carousel } from "antd";
import './about.scss';
import '../../components/nav/nav.scss';
import Footer from "../../components/footer/Footer";
import rgmIMG1 from "../../img/RGM_photos/rgm_outBig.jpg";
import rgmHall1 from "../../img/RGM_photos/rgm_hall1.jpg";
import combine from "../../img/RGM_photos/rgm_combine.jpg";
import rgmHall2 from "../../img/RGM_photos/rgm_hall2.jpg";
import { useTranslation } from 'react-i18next';
import { MdLocationOn } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

  


  return (
    <div>
      <div className="about">
        <div className="container pt-[100px]">
          <h2 className="h2-titles">{t("homeAbout_headline")}</h2>
          <div className="about_wrapper">
            <Carousel autoplay arrows dotPosition="top" fade speed={800}>
              <div className="carouselDiv">
                <img src={rgmIMG1} alt="Clinic Exterior" />
              </div>
              <div className="carouselDiv">
                <img src={rgmHall2} alt="Clinic Hallway" />
              </div>
              <div className="carouselDiv">
                <img src={rgmHall1} alt="Clinic Interior" />
              </div>
              <div className="carouselDiv">
                <img src={combine} alt="Combine Machine" />
              </div>
            </Carousel>

            <div className="about_info">
              <div className="about_text">
                <p><b>Ra'no Grand Medical</b> - {t("aboutP1")}</p>
                <p className='mt-4'>{t("aboutP2-1")}<i> <a className='underline' href="https://t.me/ravshanjonmirzakhalov">Ravshanjon Mirzakhalov</a></i> {t("aboutP2-2")}</p>
                <p className='mt-4'>{t("aboutP3")} </p>
              </div>
              <div className="py-1"></div>
            </div>
          </div>
          <div className='w-full flex items-center justify-center gap-5 mt-[40px]'>
            <a href="/doctors" className='flex items-center justify-center gap-2 transition-all xl:hover:scale-[1.05] md-focus:scale-[0.95] doctor-tag md:w-[150px] xl:w-[200px]  p-3 shadow-xl border-l-4 border-[--headline]  bg-[#ffffff8a] rounded-xl'>
              <FaUserNurse className="text-[--headline] text-[28px]"/>
              <p className="text-[--headline] ">{t("navDoctors")}</p>
            </a>
            <a href="/location" className='flex items-center justify-center gap-2 doctor-tag xl:hover:scale-[1.05] transition-all md-focus:scale-[0.95] md:w-[150px] xl:w-[200px]  p-3 shadow-xl border-l-4 border-[--headline]  bg-[#ffffff8a] rounded-xl'>
              <MdLocationOn className="text-[--headline] text-[28px]"/>
              <p className="text-[--headline] ">{t("navLocation")}</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;


