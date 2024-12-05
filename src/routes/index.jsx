import React from 'react';
import { useRoutes } from 'react-router-dom';
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

const RouteController = () => {
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
  ]);
};

export default RouteController;
