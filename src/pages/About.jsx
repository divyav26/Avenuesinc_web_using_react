import React, { useState } from 'react'
import Layout from '../components/Layout'
import {firstDropdowns} from '../Data/NavItem'
import { secondDropdowns } from '../Data/NavItem'
import { thirdDropdowns } from '../Data/NavItem'
import Dropdown from '../components/Dropdown'
import bannerA from '../imgs/bannerA.jpg'
import bannerabout from '../imgs/aboutBanner.jpg'

const About = () => {
  const [openIndex, setOpenIndex] =useState(null);
 const handleDropdownClick = (index) => {
   setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
 };
 
  return (
    <Layout>
       <div>
       <div className="mb-10 relative flex items-center">
        <div className="absolute lg:left-0 text-left lg:p-20 p-3">
          <h1 className="lg:text-6xl text-4xl font-bold text-white p-4 animate-slide-down">
            About Us
          </h1>
          <p className="text-base text-white p-4">Home / About Us</p>
        </div>
        <img
          className="h-64 min-h-84 w-full"
          src={bannerA}
          alt="banner"
        />
      </div>
      <div className="lg:flex mb-14">
        <div className="lg:w-[50%]">
          <img src={bannerabout} alt="about" className='lg:h-[160vh]' />
        </div>
        <div className="lg:w-[50%] bg-[#f4f4f5] lg:p-14 p-5">
          <h1 className="text-black lg:text-5xl text-4xl font-bold">About Us</h1>
          <p className="text-[#57534e] mt-10">
            Avenues International is your trusted partner in the world of cloud
            solutions and IT services, serving businesses with excellence since
            1994. With a proven track record spanning nearly three decades, we
            have successfully executed numerous cloud implementations, catering
            to a diverse clientele. Our expertise ranges from crafting cloud
            strategies and roadmaps to designing and implementing robust
            architectures. We specialize in building cutting-edge SaaS
            applications on the cloud, leveraging technologies like ReactJS,
            Python, Django, and PostgreSQL to deliver exceptional results.
          </p>
          <h2 className="text-[#57534e] text-lg font-semibold mt-9">
            Why Choose Avenues International?
          </h2>
          <p className="text-[#57534e] mt-9">
            At Avenues International, we believe in providing unparalleled value
            to our clients. We have developed a Cloud Application Development
            Framework that allows us to rapidly create and deploy scalable and
            resilient applications on various cloud platforms. Our
            specialization lies in creating multi-tenant SaaS applications on
            the cloud, ensuring that your business stays ahead in the digital
            landscape.
          </p>
        </div>
      </div>
      <div className="lg:px-[30px] m-auto">
      <div>
        {/* Your existing JSX code */}
        <div className="lg:px-[2rem] px-2">
          <h1 className="text-center text-black lg:text-5xl text-4xl font-bold mb-10">
            Our Service Offerings
          </h1>
          <div className="flex flex-col">
            {firstDropdowns.map((dropdown, index) => (
              <Dropdown
                key={index}
                index={index}
                title={dropdown.title}
                content={dropdown.content}
                isOpen={openIndex === index}
                onClick={() => handleDropdownClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        {/* Your existing JSX code */}
        <div className="lg:px-[2rem] px-2">
          <h1 className="text-center text-black lg:text-5xl text-3xl mt-10 font-bold mb-10">
            Unlock the Power of Big Data Analytics
          </h1>
          <p className="text-base text-[#57534e] text-center mb-7">
            If you are considering big data analytics, look no further. Avenues
            International offers end-to-end big data solutions, from data
            ingestion to analysis. We provide secure server platforms hosted on
            Amazon Cloud, equipped with Hadoop/Hive ecosystem and analytical
            tools like R, Tableau, MicroStrategy, and more. With us, you dont
            need to invest in hardware and software; simply pay a monthly
            subscription usage cost.
          </p>
          <div className="flex flex-col">
            {secondDropdowns.map((dropdown, index) => (
              <Dropdown
                key={index}
                index={index}
                title={dropdown.title}
                content={dropdown.content}
                isOpen={openIndex === index + firstDropdowns.length}
                onClick={() =>
                  handleDropdownClick(index + firstDropdowns.length)
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="lg:px-[2rem] px-2">
          <h1 className="text-center text-black lg:text-5xl text-4xl mt-10 font-bold mb-10">
            Technological Process
          </h1>
          <p className="text-base text-[#57534e] text-center mb-7">
            Avenues International supports a wide range of leading technology
            solutions, including Teradata, Oracle, SQL Server, Informatica,
            Cognos, and more.
          </p>
          <h1 className="text-center text-black lg:text-5xl text-4xl mt-10 font-bold mb-10">
            Client Benefits
          </h1>
          <p className="text-base text-[#57534e] text-center mb-7">
            When you partner with Avenues International, you gain access to a
            host of benefits.
          </p>
          <div className="flex flex-col">
            {thirdDropdowns.map((dropdown, index) => (
              <Dropdown
                key={index}
                title={dropdown.title}
                content={dropdown.content}
                isOpen={
                  openIndex ===
                  index + firstDropdowns.length + secondDropdowns.length
                }
                onClick={() =>
                  handleDropdownClick(
                    index + firstDropdowns.length + secondDropdowns.length
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:px-[2rem] px-2">
        <h1 className="text-center text-black lg:text-5xl text-4xl mt-10 font-bold mb-7">
          Opportunity Assessment
        </h1>
        <p className="text-base text-[#57534e] text-center mb-7">
          Our Opportunity Assessment service provides a business-level
          evaluation of BI analytics and Data Warehousing opportunities. We
          define business problems or opportunities, outline benefits and
          metrics, assess risks, and provide a high-level plan.
        </p>
        <h1 className="text-center text-black lg:text-5xl text-4xl  mt-10 font-bold mb-7">
          Your IT Staffing and Equipment Partner
        </h1>
        <p className="text-base text-[#57534e] text-center mb-7">
          Beyond cloud and data solutions, Avenues International excels in IT
          staffing and equipment provisioning. We match qualified and
          experienced candidates to your requirements, ensuring a perfect fit.
          Our partnership extends to providing quality hardware and telecom
          equipment from renowned brands like Dell, Cisco, Lenovo, Samsung,
          Oracle, Microsoft, and more.
        </p>
        <h1 className="text-center text-black text-5xl mt-10 font-bold mb-7">
          Our Clients
        </h1>
        <p className="text-base text-[#57534e] text-center mb-7">
          We have proudly served a diverse clientele, including NYC agencies,
          federal agencies, the City of Philadelphia, Southeastern Pennsylvania
          Transportation Authority (SEPTA), and the State of Virginia. At
          Avenues International, we are committed to delivering excellence,
          driving innovation, and empowering your business with transformative
          IT solutions. With nearly three decades of experience, we stand as
          your trusted partner on your journey to success in the digital age.
        </p>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
