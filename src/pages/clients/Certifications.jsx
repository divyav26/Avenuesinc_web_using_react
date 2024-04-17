import React from 'react'
import Layout from '../../components/Layout'
import bannerA  from '../../imgs/bannerA.jpg'
import { NavLink } from 'react-router-dom'
import { certifications } from '../../Data/NavItem'

const Certifications = () => {
  const details =[
    "NY and NJ National Minority Supplier Development Council (NMSDC)",
"New York City Small Business MBE Certified",
"New York State Small Business MBE Certified (Empire State Development)",
"Minority Business Enterprise (MBE) Certified by Port Authority of NY & NJ",
"Pennsylvania Department of General Services (DGS) - Small and Diverse Business",
"The City of Philadelphia, Office of Economic Opportunity (OEO)",
"Avenues is enrolled in E-Verify",
  ]
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

    <div className='text-center font-bold text-2xl m-5'>
      <h1>Avenues International Inc. is recognized and certified as a Minority Owned Business Enterprise (MBE) by various Organizations as listed below:
    </h1>
    </div>

    <div className=''>
      {
        details.map((item)=>{
          return(
            <ul className='mx-[2rem] my-[0.5rem] list-disc'>
              <li>{item}</li>
            </ul>
          )
        })
      }
    </div>

    <div className='grid lg:grid-cols-6 grid-cols-1 p-[2rem]'>
        {
            certifications.map((item)=>{
                return(
                 <div className='border border-gray-200 w-[100%] h-[30vh] flex justify-center items-center'>
                    <img src={item} alt='logo' className='w-[40%]'/>
                 </div>   
                )
            })
        }
      </div>
  </Layout>
  )
}

export default Certifications
