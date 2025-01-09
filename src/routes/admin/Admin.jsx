import { MdDateRange } from "react-icons/md"; 
import { BiEdit } from "react-icons/bi"; 
import React from 'react'
import { Layout, Menu, theme } from 'antd';
import { CgDarkMode } from 'react-icons/cg';
import Trademark from '../../components/navLogo/Trademark';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const { Header, Content, Sider } = Layout;

const items = [
    {
        key: '1',
        icon: <MdDateRange />,
        label: <Link to='lineup'>Manage visits</Link>

    },
    {
        key: '2',
        icon: <BiEdit />,
        label: <Link to='post'>Add Posts</Link>,
    },
]
    






const Admin = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();



  return (
    <div>
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
                }}
                style={{height: "100vh"}}
                trigger={null}
            >
            <Link to='/' className="demo-logo-vertical w-full p-3 h-[80px] bg-[dodgeblue]">
                <Trademark/>
            </Link>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
            <Layout>
            <Header
                style={{
                    padding: 3,
                    height: '80px',
                    background: CgDarkMode,
                }}
            />
            <Content
            style={{
                margin: '24px 16px 0',
            }}
            >
                
            <div
                style={{
                padding: 24,
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