import React from 'react'
import Layout from '../../components/Layout'
import bannerA  from '../../imgs/bannerA.jpg'
import { NavLink } from 'react-router-dom'

const Certifications = () => {
  return (
    <Layout>
    <div className="mb-10 relative flex items-center">
      <div className="absolute lg:left-0 text-left lg:p-20 p-3">
        <h1 className="lg:text-6xl text-4xl font-bold text-white p-4 animate-slide-down">
          Certification
        </h1>
        <p className="text-base text-white p-4">
            <NavLink to='/'>Home</NavLink>/
            <NavLink to='/Certifications'>Certifications</NavLink>        
        </p>
      </div>
      <img
        className="h-64 min-h-84 w-full"
        src={bannerA}
        alt="banner"
      />
    </div>
  </Layout>
  )
}

export default Certifications
