import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Services ,links} from '../Data/NavItem';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const Footer = () => {
  return (
    <>
    <div className='w-full h-[100vh] lg:h-[50vh] bg-black text-white lg:flex lg:justify-around p-[2rem] lg:p-[3rem] gap-3'>
      <div className='mb-[2rem]'>
        <h1 className='font-bold text-xl m-1'>Address</h1>
        <div className='flex items-center text-sm mt-3'>
            <IoLocationSharp />
            <p>Princeton Junction, New Jersey, USA</p>
        </div>
        <div className='flex items-center text-sm mt-3'>
            <FaPhoneAlt />
            <p>+1 (609) 945-1160</p>
        </div>
        <div className='flex items-center text-sm mt-3'>
          <MdEmail />
            <p>anupam@avenuesinc.com</p>
        </div>
        <div className='flex items-center gap-2 mt-3'>
              <p className='border border-gray-100 p-1'><CgFacebook /></p>
              <p className='border border-gray-100 p-1'><IoLogoLinkedin /></p>
        </div>
      </div>

      <div className='mb-[2rem]'>
        <h1 className='font-bold text-xl m-1'>Services</h1>
        {
         Services.map((item)=>{
          return(
            <>
            <motion.div className='flex items-center text-sm' 
            whileHover={{scale:1.1, originX:0, color:"red"}}
            transition={{type:'spring', stiffness:300}}
            >
              <IoIosArrowForward className=''/>
             <Link className='m-1' to={item.path}>{item.title}</Link>
            </motion.div>
            </>
          )
         })
        }
      </div>

      <div className='mb-[2rem]'>
        <h1 className='font-bold text-xl m-1'>Quick Links</h1>
        {
         links.map((item)=>{
          return(
            <>
            <motion.div className='flex items-center text-sm' 
            whileHover={{scale:1.1, originX:0, color:"red"}}
            transition={{type:'spring', stiffness:300}}
            >
              < IoIosArrowForward/>
              <Link className='m-1' to={item.path}>{item.title}</Link>
            </motion.div>
            </>
          )
         })
        }
      </div>

      <div className=''>
        <h1 className='font-bold text-xl m-1'>Newsletter</h1>
        <p className='text-xs text-gray-400 mb-2'>Please signup to get latest updates</p>
        <input type='text' className='w-full p-2'></input>
      </div>

    </div>
    <div className='w-full h-[25vh] bg-black p-[2rem] lg:p-[3rem]'>
        <hr className='bg-gray-500'/>
        <div className='text-white text-sm  lg:flex lg:justify-between mt-5'>
          <p><span className='border-b border-gray-500'>© 2024 Avenues International Inc</span>, All Right Reserved.</p>
          <p className='mt-[1rem]'>Designed By <span className='border-b border-gray-500'>Avenues</span></p>
        </div>
    </div>


    </>
  )
}

export default Footer
