import React from 'react'
import Layout from '../../components/Layout'
import bannerA  from '../../imgs/bannerA.jpg'
import { NavLink } from 'react-router-dom'
import { imgClients } from '../../Data/NavItem'


const Ourclients = () => {
  return (
    <Layout>
      <div className="mb-10 relative flex items-center">
        <div className="absolute lg:left-0 text-left lg:p-20 p-3">
          <h1 className="lg:text-6xl text-4xl font-bold text-white p-4 animate-slide-down">
            Our Clients
          </h1>
          <p className="text-base text-white p-4">
              <NavLink to='/'>Home</NavLink>/
             <NavLink to='/Ourclients'>Our clients</NavLink>
          </p>
        </div>
        <img
          className="h-64 min-h-84 w-full"
          src={bannerA}
          alt="banner"
        />
      </div>
      <div className='w-[100%] h-[20vh] text-center'>
        <h1 className='text-6xl font-semibold'>Our Clients</h1>
      </div>

      <div className='grid lg:grid-cols-3 grid-cols-1 p-[2rem]'>
        {
            imgClients.map((item)=>{
                return(
                 <div className='border border-blue-300 w-[100%] h-[40vh] flex justify-center items-center'>
                    <img src={item} alt='logo' className='w-[40%]'/>
                 </div>   
                )
            })
        }
      </div>



    </Layout>
  )
}

export default Ourclients
