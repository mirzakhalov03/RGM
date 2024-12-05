import { GiHamburgerMenu } from "react-icons/gi"; 
import { ImCross } from "react-icons/im"; 
import { AiOutlineDown } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiPhoneCall } from "react-icons/bi";
import './nav.scss';
import "./callBtn.scss";
import Trademark from '../navLogo/Trademark';
import LanguageSelector from '../dropdown/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown } from 'antd';
import { throttle } from 'lodash';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
        const handleScroll = throttle(() => {
          setScrollPosition(window.scrollY);
        }, 100);
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
  }, []);

  useEffect(() => {
    const navBarMobId = document.getElementById("navbarMobId");
    const burgerBtn = document.getElementById("burgerBtnId");
    const burgerCloseBtn = document.getElementById("burgerClose")

    const handleBurgerToggle = () => {
      console.log("clicked")
      navBarMobId.classList.add("navbarMobOpen")
    }

    const handleBurgerClose = () => {
      navBarMobId.classList.remove("navbarMobOpen")
    }

    


    if(burgerBtn){
      burgerBtn.onclick = handleBurgerToggle
    }
    if(burgerCloseBtn){
      burgerCloseBtn.onclick = handleBurgerClose;
    }

    return () => {
      if (burgerBtn) {
        burgerBtn.onclick = null;
      }
    };
    

  }, [])

  const menuItems = [
    {
      key: '1',
      label: <NavLink to="/doctors" className={({ isActive }) => isActive ? 'active-link' : ''}>{t("navDoctors")}</NavLink>,
    },
    {
      key: '2',
      label: <NavLink to="/location" className={({ isActive }) => isActive ? 'active-link' : ''}>{t("navLocation")}</NavLink>,
    },
  ];

  return (
    <>
      <div className={`w-full fixed p-2 z-10 ${scrollPosition > 150 ? 'bg-[--lightgray] shadow-lg top-0' : 'top-4'} transition-all duration-300`}>
        <div className='nav-container flex items-center justify-between'>
          <Trademark />
          <div className="phoneMob"><a href="#" className="flex items-center gap-[5px] text-[14px] rounded-lg text-white bg-[dodgerblue] py-1 px-2"><BiPhoneCall className=""/> 94 500 05 09</a></div>
          <div id="burgerBtnId" className="navBurger">
           <GiHamburgerMenu className="text-[25px] text-[--headline]" /> 
          </div>
          <ul id="navbarMobId" className='navbarMob'>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>{t("nav1")}</NavLink>
            </li>
            <li>
              <Dropdown menu={{ items: menuItems }} placement="bottom" arrow>
                <Button
                  className="navbarDropdown lg:text-[16px] bg-transparent border-none shadow-none"
                  aria-haspopup="true"
                  onClick={() => { navigate("/about"); }}
                >
                  {t("nav2")} <AiOutlineDown />
                </Button>
              </Dropdown>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'active-link' : ''}>{t("nav4")}</NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => isActive ? 'active-link' : ''}>{t("nav5")}</NavLink>
            </li>
            <li>
              <LanguageSelector />
            </li>
            <button id="burgerClose" className="navCloseBtn absolute right-[35px] top-[35px]"><ImCross className="text-[25px] text-[--headline]"/></button>
          </ul>
          <a href="tel:+998945000509" className='callBtn'>
            <span className="call-info">
              <BiPhoneCall className="xl:text-[25px] phone-icon" />
              <span className="flex items-center">+998(94) <b>500-05-09</b></span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
