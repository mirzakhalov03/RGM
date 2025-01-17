import { MdDateRange } from "react-icons/md"; 
import { BiEdit } from "react-icons/bi"; 
import React, { useState } from 'react'
import { Layout, Menu, theme } from 'antd';
import { CgDarkMode } from 'react-icons/cg';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../img/RGM-icon.png'


const { Header, Content } = Layout;


const items = [
    {
        key: '1',
        icon: <MdDateRange />,
        label: <Link to=''>Qabullar ro'yhati</Link>

    },
    {
        key: '2',
        icon: <BiEdit />,
        label: <Link to='post'>Post qo'yish</Link>,
    },
]
    






const Admin = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();



  return (
    <div>
        <Layout>
            
            <Layout>
            <Header
                style={{
                    padding: 3,
                    height: '80px',
                    background: CgDarkMode,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'    

                }}>
                    <Link to='/'>
                    <div className='trademark trademark-inAdmin '>
                        <img className='trademark-icon' src={logo}/>
                        <div className='flex flex-col'>
                            <span className='trademark-logo trademark-logo-inAdmin'>RGM</span>
                        </div>
                    </div>
                    </Link>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={items}
                        style={{
                            flex: 1,
                            minWidth: 0,
                            borderRadius: borderRadiusLG
                            
                        }}
                        className="rounded-3xl"
                        />


                </Header>
            <Content
            style={{
                margin: '24px 16px 0',
            }}
            >
                
            <div
                style={{
                padding: 10,
                minHeight: '89vh',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                }}
            >
                <Outlet/>
            </div>
            </Content>
        
            </Layout>
        </Layout>
        <ToastContainer/>
    </div>
  )
}

export default Admin