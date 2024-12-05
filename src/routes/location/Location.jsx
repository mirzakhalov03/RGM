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





// function Directions() {
//   const map = useMap();
//   const routesLibrary = useMapsLibrary("routes")
//   const [directionsService, setDirectionsService] = useState()
//   const [directionsRenderer, setDirectionsRenderer] = useState()
//   const [routes, setRoutes] = useState([])
//   const [routeIndex, setRouteIndex] = useState(0)
//   const selected = routes[routeIndex]
//   const leg = selected?.legs[0]

//   useEffect(() => {
//     if(!routesLibrary || !map ) return

//     setDirectionsService(new routesLibrary.DirectionsService())
//     setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))

//   }, [routesLibrary, map])

//   useEffect(() => {
//     if(!directionsService || !directionsRenderer) return
  
//     directionsService.route({
//       origin: { lat: 41.02722, lng: 71.84431 },
//       destination: { lat: 41.02883, lng: 71.84867 },
//       travelMode: google.maps.TravelMode.DRIVING,
//       provideRouteAlternatives: true,
//     }).then(response => {
//       directionsRenderer.setDirections(response)
//       setRoutes(response.routes)
//     })
//   }, [directionsService, directionsRenderer])

//   console.log(routes)


//   if(!leg) return null

//   return (
//     <div className="directions">
//       <h2>{selected.summary}</h2>
//       <p>{leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}</p>
//       <p>Distance: {leg.distance?.text}</p>
//       <p>Duration: {leg.duration?.text}</p>

//       <h2>Other routes</h2>
//       <ul>
//         {routes.map((route, index) => (
//           <li
//             key={route.summary}
//             onClick={() => setRouteIndex(index)}
//             className={routeIndex === index ? "active" : ""}
//           >
//             {route.summary}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )

// }

























