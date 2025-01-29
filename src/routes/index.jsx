import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './layout/Layout'; 
import Home from './home/Home';
import About from './about/About';
import Services from './services/Services';
import FAQ from './FAQ/FAQ';
import Doctors from './doctors/Doctors';
import Location from './location/Location';
import LineUp from './lineUp/LineUp';
import Logo from './logo/Logo';
import SinglePost from './SinglePost/SinglePost';
import Admin from './admin/Admin';
import AdminPost from './admin/AdminPost';
import AdminLineup from './admin/AdminLineup';
import Auth from './auth/Auth';
import Private from './Private/Private';
import SinglePage from './admin/customerSinglePage/SinglePage';
import PublicList from './publicList/PublicList';

const RouteController = () => {

  const auth = localStorage.getItem('rgm_admin_token')

  return useRoutes([
    {
      path: "",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "about",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "doctors",
      element: (
        <Layout>
          <Doctors />
        </Layout>
      ),
    },
    {
      path: "location",
      element: (
        <Layout>
          <Location />
        </Layout>
      ),
    },
    {
      path: "services",
      element: (
        <Layout>
          <Services />
        </Layout>
      ),
    },
    {
      path: "publiclist",
      element: <PublicList/>
    },
    {
      path: "blog",
      element: (
        <Layout>
          <FAQ />
        </Layout>
      ),
      
      
    },
    {
      path: "blog/post/:id",
      element: (
        <Layout>
          <SinglePost />
        </Layout>
      )
    },
    {
      path: "post/:id",
      element: (
        <Layout>
          <SinglePost />
        </Layout>
      )
    },
    {
      path: "lineup",
      element: (
        <Layout>
          <LineUp />
        </Layout>
      ),
    },
    {
      path: "logo",
      element: (
        <Layout>
          <Logo />
        </Layout>
      ),
    },
    {
      path: "admin",
      element: <Private/>,
      children: [
        {
          path: "",
          element: <Admin/>,
          children: [
            {
              path: "",
              element: <AdminLineup/>
            },
            {
              path: "post",
              element: <AdminPost/>
            },
            {
              path: ':id',
              element: <SinglePage/>
            }
          
          ]
        },
        
      ]
    },
    {
      path: "auth",
      element: auth ? <Navigate to='/admin'/> : <Auth/>
    }
  ]);
};

export default RouteController;
