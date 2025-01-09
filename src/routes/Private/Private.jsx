import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
    const auth = localStorage.getItem('rgm_admin_token')
  
    return auth ? <Outlet/> : <Navigate to='/auth'/>

}

export default Private