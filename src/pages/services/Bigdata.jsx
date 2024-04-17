import { FaCheck } from "react-icons/fa";
import CloudDropdown from "./CloudDropdown";
import { useState } from "react";
import Layout from "../../components/Layout";
import banner from '../../imgs/services/BigDataImg/bigdata.jpg'
import bigdata from '../../imgs/services/BigDataImg/bigdata1.jpeg'
import c1 from '../../imgs/services/BigDataImg/1024px-Hadoop_logo.svg.png'
import c2 from '../../imgs/services/BigDataImg/Cloudera_logo_tag_rgb.png'
import c3 from '../../imgs/services/BigDataImg/apache_hive-ar21.png'


const Bigdata = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const dropdownData = [
    {
      title: "BIG DATA PLATFORM(Powered by Amazon Cloud and Cloudera)",
      content: [
        "Amazon Web Services (AWS) Consulting Partner and Worlwide Resellers",
        "Cloudera Systems Integration Partners",
        "Hortonworks Systems Integration Partners",
      ],
    },
    {
      title: "Big Data Platform",
      content: [
        "Get Cloudera Data Platform on demand, powered by Apache Hadoop, the industry’s leading enterprise-grade, open-source Hadoop distribution. With the Cloud Big Data Platform, you get a ready and configured cluster, running on our Amazon Web Services",
        "CDH is the world’s most complete, tested, and popular distribution of Apache Hadoop and related projects",
        "CDH is 100% Apache-licensed open source and is the only Hadoop solution to offer unified batch processing, interactive SQL, and interactive search, and role-based access controls",
      ],
    },
    {
      title: "Managed Hosting Solution",
      content: [
        "Installing and maintain Hadoop clusters on your own can be difficult. But Avenues in partnership with AWS and Cloudera can help you eliminate the complexities and cumbersome manual processes associated with maintaining your big data environment",
        "With our managed hosting solution, you can design the optimal configuration for your data, and leave the infrastructure management details to us",
      ],
    },
    {
      title: "Hadoop Services",
      content: [
        "Hadoop solutions designed by Hadoop-certified consultants",
        "Business-level Big Data strategy consulting",
      ],
    },
  ];
  return (
    <Layout>
      <section className="mb-10 z-0 relative flex items-center bg-[#807f7c]">
        <div className="absolute lg:left-0 text-left lg:p-[7rem] p-3 z-50">
          <h1 className="lg:text-4xl text-4xl font-bold text-white p-4 animate-slide-down">
            Big Data Analytics
          </h1>
          <p className="text-base text-white p-4">Home / Big Data Analytics</p>
        </div>
        <img
          className="h-[40vh] w-[100%] brightness-50 opacity-100 contrast-75 object-contain"
          src={banner}
          alt="banner"
        />
      </section>
      <section className="lg:flex lg:h-[150vh] bg-[#f4f4f5]">
        <div className="lg:px-[5rem] lg:py-[5rem] p-4 lg:w-[50%]">
          <h1 className="text-slate-900 lg:text-5xl text-2xl font-bold">
            Big Data Analytics
          </h1>
          <p className="text-[#57534e] lg:mt-7 text-lg">
            We provide complete Big Data Solution from Soup to Nuts!
          </p>
          <p className="text-[#57534e] lg:mt-5 text-lg">
            Just Bring your data (or let us know where your data is) and in
            matter of days we give you a secured server platform with all the
            software and tools you need to analyze the data.
          </p>
          <h2 className="text-slate-900 text-2xl font-bold mt-5 mb-4">
            Specialization:
          </h2>
          <ul className="list-none text-[#57534e] lg:text-lg text-sm">
            <li className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              Infrastructure – On Amazon Cloud
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              Software – Hadoop / Hive Ecosystem
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              Analytical Tools (such as “R”, Tableau, MicroStrategy) or any
              specific tool you may need
            </li>
          </ul>
          <p className="text-[#57534e] lg:mt-2 lg:text-lg text-sm">
            You do not need to buy and hardware and software but just need to
            pay monthly subscription usage costs.
          </p>
        </div>
        <div className="lg:w-[50%]">
          <img
            src={bigdata}
            alt="strategy"
            className="h-[20vh] w-[100%] lg:w-[100%] lg:h-[150vh] "
          />
        </div>
      </section>
      <section className="mx-auto py-10 px-2 lg:px-[2rem]">
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
      <section className="lg:px-[2rem] lg:h-[50vh] h-[80vh]">
        <h1 className="text-slate-900 lg:text-5xl text-4xl font-bold text-center mb-11">
          Hadoop Ecosystem Technologies
        </h1>
        
          <div className="lg:flex lg:items-center justify-center">
            <div className="lg:w-1/4 border h-[20vh] border-sky-200 flex items-center justify-center">
              <img
                src={c2}
                className="lg:h-[10vh] "
                alt="hadoop"
              />
            </div>
            <div className="lg:w-1/4 border h-[20vh] border-sky-200 flex items-center justify-center">
              <img src={c1} className="h-[15vh] w-[80%]" alt="react" />
            </div>
            <div className="lg:w-1/4 h-[20vh] border border-sky-200 flex items-center justify-center">
              <img
                src={c3}
                className="h-[10vh] "
                alt="react"
              />
            </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default Bigdata;
