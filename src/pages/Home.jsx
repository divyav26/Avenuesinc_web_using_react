import React, { useRef, useState } from 'react'
import Layout from '../components/Layout'
import Slider from "react-slick";
import { ImgBanner, cardItem, list } from '../Data/NavItem';
import cloudsonIn from '../imgs/cloudsoln1.jpeg'
import { GoDotFill } from "react-icons/go";
import SrcollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import { FaUsers } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import reinvent from '../imgs/reinvent.jpeg'
import { FaUserCheck } from "react-icons/fa";
import { FaCompassDrafting } from "react-icons/fa6";
import { RiHeadphoneFill } from "react-icons/ri";
import Testimonial from '../components/Testimonial';
import contact from '../imgs/contancthome.jpg'
import {motion ,useInView} from 'framer-motion'
import ReCAPTCHA from "react-google-recaptcha";
import HomeCarousel from '../components/HomeCarousel';




const Home = () => {
  const [count, setCount] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  


  const [name, setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  return (
    <Layout>

      <div>
        <HomeCarousel />
      </div>

      <div className='w-full h-[10vh]'>
    
        <Slider {...settings}>
          {
            ImgBanner.map((item)=>{
              return(
                <>
                <div className='w-full h-[15vh] bg-gray-200'>
                  <img src={item} alt='img' className='w-[40%] h-[15vh] py-[1rem]'/>
                </div>
                </>
              )
            })
          }
          </Slider>
      </div>
     

      <div className='w-full lg:flex lg:justify-between bg-gray-200'>
        <div className=''>
          <img src={cloudsonIn} alt='img' className='lg:h-[100vh] h-[50vh] lg:w-[100%] lg:p-0 p-[1rem]' />
        </div>

        <div className='bg-gray-200 h-[100vh] lg:w-[50%]'>
          <h1 className='m-[3rem] text-3xl font-bold'>Your Trusted Cloud Solutions Provider</h1>
              <div className='mx-[3rem]'>
                {
                  list.map((item)=>{
                    return(
                    <div className=''>
                        <p className='flex text-sm'><GoDotFill />{item}</p>
                      </div>
                    )
                  })
                }
              </div>

       
                <SrcollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
                  <div className='lg:flex lg:justify-around mt-[1rem] lg:ml-0 ml-[8rem]'>
                    <div className='lg:flex lg:items-center gap-[1rem] p-[1rem]'>
                      <FaUsers className='text-5xl text-red-500 bg-white lg:p-1' />
                      <div className='flex flex-col'>
                          {
                            count && <CountUp className='text-2xl font-bold text-red-500' start={0} end={43} duration={2} delay={0} />
                          }
                          <p className='text-sm'>Happy Clients</p>
                        </div>
                    </div>
                    <div className='lg:flex items-center gap-[1rem] p-[1rem]'>
                        <FaCheck className='text-5xl text-red-500 bg-white p-1' />
                      <div className='flex flex-col'>
                        {
                          count && <CountUp className='text-2xl font-bold text-red-500' start={400} end={539} duration={2} delay={0} />
                        }
                        <p className='text-sm'>Projects Done</p>
                      </div>
                    </div>
                  </div>
                </SrcollTrigger>

            <div className='mx-[3rem] my-[1rem]'>
              <button className='px-[3rem] py-[0.7rem] bg-red-500 text-white'>Contact</button>
            </div>
          </div>
     
      </div>

      <div className='w-full'>
        <h1 className='text-5xl text-center font-bold mt-5'>Service & Solutions</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 p-[2rem] gap-[1rem]'>
          {
           cardItem.map((item,index)=>{
            return(
              <section ref={ref}>
              <div className='text-center p-[1rem]'>
                <motion.div variants={cardVariants}
                 initial="initial"
                 animate={isInView ? "animate" : "initial"}
                 transition={{ duration: 0.1, delay: index * 0.4,type:'spring',stiffness:60 }}
                key={index}> 
                  <motion.img src={item.img} alt='img' className='w-[100%] h-[40vh]' /> 
                  <div className='border-4 border-gray-200'>
                    <h1 className='text-xl font-bold'>{item.title}</h1>
                    <p>{item.description}</p>
                    <div className='flex justify-center items-center gap-2 m-4'>
                    <button className='text-red-500 font-semibold text-xl'>Read More</button>
                    <FaArrowRight className=' text-red-500'/>
                    </div>
                  </div>
                </motion.div>
                
              </div>
              </section>
            )
           }) 
          }
        </div>
      </div>

      <div className='w-full lg:flex bg-gray-200'>
          <motion.div className='p-[2rem] mb-1 h-[90vh]'
          initial={{x:-100, opacity:0}}
          whileInView={{x:0, opacity:1}}
          viewport={{once:true}}
          transition={{
            delay:0.6,
            x:{type:"spring", stiffness:60},
            opacity:{duration:0.6},
            ease:"easeIn"
          }}
          >
            <h1 className='text-4xl font-bold'>Why Reinvent ?</h1>
            <p className=''>Using our Cloud Application Development Framework, we rapidly create and deploy, scalable robust applications on clouds for our clients.</p>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='lg:flex lg:items-center gap-[1rem] p-[1rem]'>
                      <FaCheck className='text-5xl text-red-500 bg-white lg:p-1' />
                      <div className='flex flex-col'>
                          <p className='text-xs'>Quality</p>
                          <p className='font-bold'>Services</p>
                      </div>
                </div>
                <div className='lg:flex lg:items-center gap-[1rem] p-[1rem]'>
                      <FaUserCheck className='text-5xl text-red-500 bg-white lg:p-1' />
                      <div className='flex flex-col'>
                          <p className='text-xs'>Creative</p>
                          <p className='font-bold'>Designers</p>
                      </div>
                </div>
                <div className='lg:flex lg:items-center gap-[1rem] p-[1rem]'>
                      <FaCompassDrafting className='text-5xl text-red-500 bg-white lg:p-1' />
                      <div className='flex flex-col'>
                          <p className='text-xs'>Free</p>
                          <p className='font-bold'>Consultation</p>
                      </div>
                </div>
                <div className='lg:flex lg:items-center gap-[1rem] p-[1rem]'>
                      <RiHeadphoneFill className='text-5xl text-red-500 bg-white lg:p-1' />
                      <div className='flex flex-col'>
                          <p className='text-xs'>Customer</p>
                          <p className='font-bold'>Support</p>
                      </div>
                </div>

            </div>
          </motion.div>

          <div className=''>
            <img src={reinvent} alt='img' className='w-full h-full'/>
          </div>
      </div>

      <div className=''>
        <div className='text-6xl font-bold text-center my-[2rem]'>
        Testimonial
        </div>
        <Testimonial />
      </div>

      <div className='w-full lg:flex lg:justify-betwee mb-[2rem]'>
          <div className='w-[100%]'>
              <img src={contact} alt='img' className='lg:w-[100%] lg:h-[150vh] h-[50vh]  lg:p-0 p-[1rem]' />
          </div>
          <div className='w-[100%] p-[3rem] bg-gray-200'>
            <h1 className='text-5xl font-bold mb-4'>Contact Us</h1>
            <p className='text-gray-600 text-sm'>We value your feedback and would love to hear from you. If you have any questions, comments, or concerns, please don't hesitate to contact us. You can reach us via email, phone, or by filling out the form below. Our team will respond to your inquiry as soon as possible.</p>
            <div>
              <form>
              <div>
              <label for="first_name" class="block m-2 text-sm">Enter Name</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" required />
            </div>

            <div>
                <label for="first_name" class="block m-2 text-sm">Enter Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email" required />
            </div>

            <div>
                <label for="first_name" class="block m-2 text-sm">Enter Phone</label>
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email" required />
            </div>

            <div>
                <label for="first_name" class="block m-2 text-sm">Message</label>
                <textarea cols='40' rows='5' type="text" value={message} onChange={(e)=>setMessage(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message...." required />
            </div>
            <div className='mt-4'>
            <ReCAPTCHA
              sitekey="6LegpbgpAAAAAD4M2jzmYcEo1VrrRHDwOUX2pimn"/>

            </div>

            <div className='mt-2'>
              <button className='bg-red-500 p-3 text-white font-bold w-full'>Submit</button>
            </div>
          
              </form>
            </div>
          </div>


      </div>

    </Layout>
  )
}

export default Home
