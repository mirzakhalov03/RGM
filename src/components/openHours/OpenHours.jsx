import { IoMdClock } from "react-icons/io"; 
import { MdDateRange } from "react-icons/md"; 
import React from 'react'
import { useTranslation } from "react-i18next";
import './openHours.scss'

const OpenHours = () => {
  const {t} = useTranslation();

  return (
    <div className='openHours w-full flex items-center justify-center'>
        <div className='openHoursBox mx-auto  rounded-lg border-4 backdrop-blur-sm bg-[#ffffff71] border-sky-400 absolute bottom-[20px] '>
            <h2 className='text-center text-[20px] text-[--headline] font-semibold'>{t("openHours_headline")}</h2>
            <br />
            <p className="w-full pb-[12px] font-semibold flex items-center justify-center gap-3 text-[--headline]"><MdDateRange className="text-[22px]"/><span className="text-[--softBlue]">{t("openTime")}</span></p>
            <p className="w-[180px]  mx-auto font-semibold flex items-center justify-between  text-[--headline]"><IoMdClock className="text-[22px]"/><span className="text-[--softBlue]">8:00 - 17:00</span><span></span></p>
            <br />
        </div>
    </div>
  )
}

export default OpenHours