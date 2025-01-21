import { MdAdminPanelSettings } from "react-icons/md"; 
import { GiHamburgerMenu } from "react-icons/gi"; 
import { ImCross } from "react-icons/im"; 
import { AiOutlineDown } from "react-icons/ai"; 
import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef(null);
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

  const handleBurgerToggle = () => {
    setIsNavbarOpen(true);
  };

  const handleBurgerClose = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };

    if (isNavbarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavbarOpen]);

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
          <Link to="/"><Trademark /></Link>
          <div className="phoneMob">
            <button onClick={() => { navigate('/lineup')}} className="flex items-center gap-[5px] text-[14px] rounded-md text-white bg-[dodgerblue] py-1 px-2">
              {t("heroBtn1")}
            </button>
          </div>
          <div id="burgerBtnId" className="navBurger" onClick={handleBurgerToggle}>
            <GiHamburgerMenu className="text-[25px] text-[--headline]" /> 
          </div>
          <ul ref={navbarRef} id="navbarMobId" className={`navbarMob ${isNavbarOpen ? 'navbarMobOpen' : ''}`}>
            <div className="w-[100%] navListMob">
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
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'active-link' : ''}>{t("nav5")}</NavLink>
              </li>
              <li>
                <LanguageSelector />
              </li>
              <button id="burgerClose" className="navCloseBtn absolute right-[35px] top-[35px]" onClick={handleBurgerClose}>
                <ImCross className="text-[25px] text-[--headline]"/>
              </button>
            </div>
            <button onClick={() => { navigate('/admin') }} className="NavAdminBtn">
              {t("navAdmin")}  <MdAdminPanelSettings className="text-[20px] text-[dodgerblue]"/>
            </button>
          </ul>
          <a href="tel:+998945000509" target="_blank" className='callBtn'>
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
