import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Avenulogo from '../imgs/AvenuLogo.png'
import annlogo from '../imgs/ann.png'
import { IoLogoLinkedin } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import {NavLink } from 'react-router-dom';
import { RiMenuLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import {Clients,Services} from '../Data/NavItem'



const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [dropdown , setDropdown] = useState(false)
  const [services, setServices] = useState(false)
  const link= () => {            //remember the onclick attribute mentioned in img tag is having name **link**
    window.location.href = "/";
    }
  return (
    <>
      <div className='w-full bg-gray-100 p-[0.3rem] px-[2.5rem] hidden lg:block'>
        <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center text-xs'>
              <IoLocationSharp className='text-red-500' />
              <p>Princeton Junction, New Jersey, USA</p>
            </div>
            <div className='flex justify-center items-center text-xs gap-[1rem]'>
                  <p>Corporate Office:<span className='text-red-500'>+1 (609) 945-1160</span></p>
                  <p>Recruiting Office:<span className='text-red-500'>+1 (609) 342-5590</span></p>
            </div>
            <div className='flex  justify-centeritems-center gap-[0.3rem]'>
              <p className='shadow-sm bg-white p-2'><CgFacebook /></p>
              <p className='shadow-sm bg-white p-2'><IoLogoLinkedin /></p>
            </div>
        </div>
      </div>

      <div className='flex justify-between items-center shadow-md w-full h-[12vh]'>
        <div className='flex justify-around items-center  w-full lg:w-[20%] h-[10vh] lg:gap-[2rem] lg:pl-[2rem]'>
        
          <img src={Avenulogo} alt='logo' className='w-[60%] cursor-pointer' onClick={link}  />
        
          <RiMenuLine className='text-4xl' onClick={()=>setOpen(!open)} />
          <img src={annlogo} alt='logo' className='hidden lg:block'/>
        </div>

        <nav className='lg:flex lg:justify-between lg:items-center lg:gap-[1.5rem] lg:text-sm hidden'>
          <NavLink to='/about'  className='{({ isActive }) =>
              isActive ? "text-red-500" : ""} hover:text-red-500'>ABOUT US</NavLink>

          <NavLink to='' onClick={()=>setServices((prev)=>!prev)} className='{({ isActive }) =>
              isActive ? "text-red-500" : ""} hover:text-red-500 flex justify-center items-center relative'>OUR SERVICES<IoIosArrowDown className='text-xs' />
               {
                services &&(
                  <div className='bg-white text-black absolute z-10 top-7 shadow-md'>
                    {
                      Services.map((item)=>{
                        return(
                            <div className='flex items-center text-sm px-[1rem]'>
                              <Link className='m-1' to={item.path}>{item.title}</Link>
                            </div>
                        )
                      })
                    }
                  </div>
                )
              }
              
            </NavLink>

          <NavLink to='' onClick={()=>setDropdown((prev)=>!prev)} className='{({ isActive }) =>
              isActive ? "text-red-500" : ""}
              hover:text-red-500 flex justify-center items-center relative'>CLIENTS <IoIosArrowDown className='text-xs' />
              
              {
                dropdown &&(
                  <div className='bg-white text-black absolute z-10 top-7'>
                    {
                      Clients.map((item)=>{
                        return(
                            <div className='flex items-center text-sm px-[1rem]'>
                              <Link className='m-1' to={item.path}>{item.title}</Link>
                            </div>
                        )
                      })
                    }
                  </div>
                )
              }
            </NavLink>
              

          <NavLink to='/contact' className='{({ isActive }) =>
              isActive ? "text-red-500" : ""} hover:text-red-500'>CONTACT US</NavLink>

          <div className='flex justify-center items-center bg-red-500 p-5 text-white'>
            <button>Current Openings</button>
            <FaLongArrowAltRight className='text-center' />
          </div>
        </nav>
       

        

      </div>
      {
        open && (
            <div className='lg:hidden w-full p-3 h-[380px] bg-white shadow-md'>
              <img src={annlogo} alt='logo' className='w-[70%]' />
              <nav className='flex flex-col text-gray-700 font-semibold gap-[0.7rem] p-[1rem]'>
              <NavLink to='/about'>ABOUT US</NavLink>
              <NavLink to='' onClick={()=>setServices((prev)=>!prev)} className='{({ isActive }) =>
              isActive ? "text-red-500" : ""} flex items-center relative'>OUR SERVICES<IoIosArrowDown className='text-xs' />
               {
                services &&(
                  <div className='lg:hidden w-full p-3 h-[210px] bg-white shadow-md absolute z-10 top-7'>
                    {
                      Services.map((item)=>{
                        return(
                            <div className='flex items-center text-sm px-[1rem]'>
                              <Link className='m-1' to={item.path}>{item.title}</Link>
                            </div>
                        )
                      })
                    }
                  </div>
                )
              }
              
              </NavLink>
              
              <NavLink to='' onClick={()=>setDropdown((prev)=>!prev)} className='{({ isActive }) =>
              isActive ? "text-red-500" : ""}
              flex items-center relative'>CLIENTS <IoIosArrowDown className='text-xs' />
              
              {
                dropdown &&(
                  <div className='lg:hidden w-full p-3 h-[100px] bg-white shadow-md absolute top-7'>
                    {
                      Clients.map((item)=>{
                        return(
                            <div className='flex items-center text-sm px-[1rem]'>
                              <Link className='m-1' to={item.path}>{item.title}</Link>
                            </div>
                        )
                      })
                    }
                  </div>
                )
              }
              </NavLink>
              
              
              <NavLink to='/contact'>CONTACT US</NavLink>
            </nav>
            </div>
        )
    }
    </>
  )
}

export default Navbar
