import React from 'react'
import bannerA from '../../imgs/bannerA.jpg'
import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'
import staffing from '../../imgs/services/ITservices/staffing.jpeg'
import { ITStaffing } from '../../Data/NavItem'

const ITservices = () => {
  return (

   <Layout>
     <div className="mb-10 relative flex items-center">
        <div className="absolute lg:left-0 text-left lg:p-20 p-3">
          <h1 className="lg:text-6xl text-4xl font-bold text-white p-4 animate-slide-down">
          IT Staffing Services
          </h1>
          <p className="text-base text-white p-4">
              <NavLink to='/'>Home</NavLink>/
             <NavLink to='/ITservices'>IT Staffing Services</NavLink>
          </p>
        </div>
        <img
          className="h-64 min-h-84 w-full"
          src={bannerA}
          alt="banner"
        />
      </div>

      <div className='lg:flex lg:justify-between lg:items-center lg:h-[150vh] w-full bg-gray-200'>
        <div className='lg:w-[50%]'>
            <img src={staffing} alt='logo' className='lg:h-[150vh]' />
        </div>
        <div className='lg:w-[50%] p-4'>
            <h1 className='text-4xl font-bold mb-[1rem]'>IT Staffing Services</h1>
            {
                ITStaffing.map((item)=>{
                    return(
                        <ul className='list-disc p-[1rem]'>
                            <li>{item}</li>
                        </ul>
                    )
                })
            }
        </div>
      </div>

     <div>
     <div className='m-[2rem]'>
        <h1 className='text-4xl text-center font-bold mb-[2rem]'>New York State (NYS) HBITS Contract</h1>
        <p className='text-gray-500 text-lg'>We are prime contractor to New York State HBITS (Hourly Based IT Services) contract. Feel free to contact our recruiters when interested in applying for HBITS position.</p>
      </div>

      <div className='m-[2rem]'>
        <h1 className='text-4xl text-center font-bold mb-[2rem]'>Why Avenues International Inc ?</h1>
        <p className='text-gray-500 mb-[2rem] text-lg'>We believe in the power of personalization when it comes to IT staffing. We understand that each business is unique, with its own culture, goals, and technical requirements. That's why we take the time to get to know your organization inside and out, so we can provide tailor-made staffing solutions that align with your specific needs and aspirations.</p>
        <p className='text-gray-500 mb-[2rem] text-lg'>Our extensive network of IT professionals includes a diverse range of skill sets and experience levels, ensuring that we can find the perfect fit for your team, whether you're a startup looking for cutting-edge tech talent or an established enterprise seeking seasoned IT veterans.</p>
        <p className='text-gray-500 mb-[2rem] text-lg'>With us you can trust that we'll be by your side every step of the way, from initial consultations to onboarding and beyond, ensuring a seamless and successful staffing process.</p>
        <p className='text-gray-500 mb-[2rem] text-lg'>Let us be your strategic partner in building the IT dream team that will drive your business forward.</p>
      </div>    
    </div>
   </Layout>
  )
}

export default ITservices
