import React, { useRef } from 'react'
import Layout from '../../components/Layout'
import bannerA  from '../../imgs/bannerA.jpg'
import { NavLink } from 'react-router-dom'
import { partnerships } from '../../Data/NavItem'
import { motion ,useInView } from 'framer-motion'

const StrategicPartnership = () => {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Layout>
    <div className="mb-10 relative flex items-center">
      <div className="absolute lg:left-0 text-left lg:p-20 p-3">
        <h1 className="lg:text-6xl text-4xl font-bold text-white p-4 animate-slide-down">
        Strategic Partnership
        </h1>
        <p className="text-base text-white p-4">
            <NavLink to='/'>Home</NavLink>/
            <NavLink to='/StrategicPartnership'>Strategic Partnership</NavLink>  
        </p>
      </div>
      <img
        className="h-64 min-h-84 w-full"
        src={bannerA}
        alt="banner"
      />
    </div>
      <div className='w-[100%] h-[20vh] text-center'>
          <h1 className='text-6xl font-semibold'>Partnership</h1>
      </div>

      <div className='m-3'>
        {
          partnerships.map((item,index)=>{
            return(
              <section ref={ref}>
              <motion.div 
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.1, delay: index * 0.2,type:'spring',stiffness:60 }}
              key={index}
              className='lg:flex lg:justify-between lg:items-center border-2 border-gray-200 gap-5 m-[2rem] p-[2rem]'>
                <div className='w-[100%]'>
                  <img src={item.img} alt='logo' />
                </div>
                <div className=''>
                  <h1 className='text-black font-bold text-xl'>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </motion.div>
              </section>
            )
          })
        }
      </div>

  </Layout>
  )
}

export default StrategicPartnership
