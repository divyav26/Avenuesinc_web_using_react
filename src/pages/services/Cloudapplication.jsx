import { FaCheck } from "react-icons/fa";
import CloudDropdown from "./CloudDropdown";
import { useState } from "react";
import Layout from "../../components/Layout";
import cloudbanner from '../../imgs/services/CloudAppImg/cloudbanner.jpeg'
import Cloud from '../../imgs/services/CloudAppImg/Cloud1.jpg'
import imgc1 from '../../imgs/services/CloudAppImg/react.png'
import imgc2 from '../../imgs/services/CloudAppImg/python.png'
import imgc3 from '../../imgs/services/CloudAppImg/postgre.png'
import imgc4 from '../../imgs/services/CloudAppImg/JavaScript-logo.png'
import imgc5 from '../../imgs/services/CloudAppImg/github.png'
import imgc6 from '../../imgs/services/CloudAppImg/devopz.png'
import imgc7 from '../../imgs/services/CloudAppImg/aws.png'
import imgc8 from '../../imgs/services/CloudAppImg/angular.png'

import {dropdownData} from '../../Data/NavItem'
import { NavLink } from "react-router-dom";


const Cloudapplication = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleDropdownClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    
    
  return (
    <Layout>
     <div className="mb-10 relative flex items-center">
      <div className="absolute lg:left-0 text-left lg:p-20 p-3">
        <h1 className="lg:text-4xl text-4xl font-bold text-white p-4 animate-slide-down">
        Cloud Strategy & Implementation
        </h1>
        <p className="text-base text-white p-4">
            <NavLink to='/'>Home</NavLink>/
            <NavLink to='/Certifications'>Cloud Strategy & Implementation</NavLink>        
        </p>
      </div>
      <img
        className="h-64 min-h-84 w-full"
        src={cloudbanner}
        alt="banner"
      />
    </div>

      <div className="lg:flex  mb-14">
        <div className="lg:w-[50%] bg-[#f4f4f5] lg:p-14 p-5">
          <h1 className="text-slate-900 lg:text-5xl text-3xl font-bold">
            Cloud Application Development
          </h1>
          <p className="text-[#57534e] mt-5 text-lg">
            Avenues is a your trusted Cloud business partner with a proven and
            successful track record.
          </p>
          <p className="text-[#57534e] mt-5 text-lg">
            Avenues International’s ‘Cloud Application Development Framework’
            can rapidly develop and deploy, cost effective, scalable and secure
            software solutions. Avenues has been assisting client to adopt AWS
            Cloud infrastructure rapidly and efficiently.
          </p>
          <h2 className="text-slate-900 text-2xl font-bold mt-5 mb-4">
            Specialization:
          </h2>
          <ul className="list-none text-[#57534e] text-lg">
            <li className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              Cloud Migration Services
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              Cloud Adaption
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              Serverless
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              Architecture
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              Design and deploy multiple end to end, cloud based Multi-Tenant
            </li>
          </ul>
          <p className="text-[#57534e] text-lg ml-10">
            SaaS (Software As A Service) applications
          </p>
          <p className="text-[#57534e] mt-3 text-lg">
            We can undertake the entire cloud project from analysis to
            implementation and maintenance on turnkey basis at a fixed price.
          </p>
        </div>
      
          <img
            src={Cloud}
            alt="about"
            className="lg:h-[170vh] lg:w-[50%] object-cover"
          />
        
      </div>

      <section className="mx-auto px-[2rem] py-10">
        <h1 className="text-slate-900 lg:text-5xl text-4xl font-bold text-center mb-7">
          What we offer
        </h1>
        {dropdownData.map((dropdown, index) => (
          <CloudDropdown
            key={index}
            title={dropdown.title}
            content={dropdown.content}
            isOpen={openIndex === index}
            onClick={() => handleDropdownClick(index)}
          />
        ))}
      </section>

      <section className="px-[2rem] text-slate-900 lg:text-5xl text-4xl font-bold text-center mb-11">
        <h1 className="text-slate-900 lg:text-5xl text-4xl font-bold text-center mb-11">
          Technology We Used
        </h1>
        <div className="">
          <div className="lg:flex">
            <div className="lg:w-1/4 h-[10rem] border border-sky-200 flex items-center justify-center">
              <img
                src={imgc1}
                className="h-[10rem] w-[11rem]"
                alt="react"
              />
            </div>
            <div className="lg:w-1/4 h-[10rem] border border-sky-200 flex items-center justify-center">
              <img
                src={imgc2}
                className="h-[4rem] w-[12rem]"
                alt="react"
              />
            </div>
            <div className="lg:w-1/4 h-[10rem] border border-sky-200 flex items-center justify-center">
              <img
                src={imgc3}
                className="h-[4rem] w-[12rem]"
                alt="react"
              />
            </div>
            <div className="lg:w-1/ h-[10rem] border border-sky-200 flex items-center justify-center">
              <img
                src={imgc4}
                className="h-[10rem] w-[11rem]"
                alt="react"
              />
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:w-1/4 h-[10rem] border border-sky-200 flex items-center justify-center">
              <img
                src={imgc5}
                className="h-[4rem] w-[12rem]"
                alt="react"
              />
            </div>
            <div className="lg:w-1/4 h-[10rem] border border-sky-200 flex items-center justify-center">
              <img
                src={imgc6}
                className="h-[6rem] w-[12rem]"
                alt="react"
              />
            </div>
            <div className="lg:w-1/4 h-[10rem] border border-sky-200 flex items-center justify-center">
              <img
                src={imgc7}
                className="h-[7rem] w-[12rem]"
                alt="react"
              />
            </div>
            <div className="lg:w-1/4 h-[10rem] border border-sky-200 flex items-center justify-center">
              <img
                src={imgc8}
                className="h-[12rem] w-[12rem]"
                alt="react"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cloudapplication;
