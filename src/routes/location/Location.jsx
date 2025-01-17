import { FcGoogle } from "react-icons/fc"; 
import { MdLocationPin } from "react-icons/md"; 
import { IoMdClock } from "react-icons/io"; 
import { BiCalendar } from "react-icons/bi"; 
import React, { useState } from 'react'
import './location.scss'
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import {
    Map, 
    APIProvider, 
    AdvancedMarker, 
    Pin, 
    InfoWindow,
  } from "@vis.gl/react-google-maps"
import { Divider } from "antd";

const Location = () => {
  const {t} = useTranslation();
  const position = { lat: 41.02722, lng: 71.84431 };
  const [open, setOpen] = useState(false)



  
  
  return (
    <>
        <div className='location-bg '>
            <div className="container">
              <h2 className='h2-titles'>{t("navLocation")}</h2>
              <div className='location_glassMorph lg:flex gap-2'>
                    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
                      <div className="location_map">
                        <Map
                        
                          zoom={15}
                          center={position}
                          mapId={import.meta.env.VITE_GOOGLE_MAPS_API}
                          fullscreenControl={false}
                        >
                          <AdvancedMarker position={position} onClick={() => setOpen(true)} >
                            <Pin/>

                          </AdvancedMarker>
                          {open && <InfoWindow position={position} onCloseClick={() => setOpen(false)}>Ra'no Grand Medical</InfoWindow>}

                        </Map>
                      </div>
                    </APIProvider>
                    <div className="location_info">
                      <h3 className="text-2xl font-bold text-[--headline]">{t("openHours_headline")}:</h3>
                      <span>
                        <BiCalendar className="text-[25px] text-[--headline]"/>
                        <p className="">{t("openTime")}</p>
                      </span>
                      <span>
                        <IoMdClock className="text-[25px] text-[--headline]"/>
                        <p className="pl-5">8:00 - 17:00</p>
                      </span>
                      <div>
                        <address>{t("footerAddress")}</address>
                        <address>{t("footerAddress2")}</address>
                      </div>
                      
                      <Divider className="dividerStyle">{t("get_directions")}</Divider>
                      <div className="directionBtns">
                        <a href="https://yandex.uz/maps/-/CHAcQBM8" target="_blank" className="yandex flex sm:hover:scale-[1.05] sm:hover:bg-[white]"><MdLocationPin className="text-[#FF4433] text-xl"/>Yandex Maps</a>
                        <a href="https://maps.app.goo.gl/UhBuJeDEGukoHcPv6" target="_blank" className="googleMaps flex items-center sm:hover:scale-[1.05] sm:hover:bg-[white]"><FcGoogle className="text-xl"/>Maps</a>
                      </div>
                    </div>

              </div>
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default Location



