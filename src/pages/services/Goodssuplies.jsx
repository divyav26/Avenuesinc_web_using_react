import { FaCheck } from "react-icons/fa";
import CloudDropdown from "./CloudDropdown";
import { useState } from "react";
import goods from '../../imgs/services/GoodsSupplyImg/goods.jpeg'
import goodssupplies from '../../imgs/services/GoodsSupplyImg/goodssupplies.jpeg'
import c1 from '../../imgs/services/GoodsSupplyImg/oracle.png'
import c2 from '../../imgs/services/GoodsSupplyImg/IBM_logo.svg.png'
import c3 from '../../imgs/services/GoodsSupplyImg/Microsoft-partner.png'
import c4 from '../../imgs/services/GoodsSupplyImg/cisco2.png'
import c5 from '../../imgs/services/GoodsSupplyImg/Dell_Logo.png'
import c6 from '../../imgs/services/GoodsSupplyImg/Acronis.svg_.png'
import c7 from '../../imgs/services/GoodsSupplyImg/Facebook-Juniper-logo-AEM.png'
import c8 from '../../imgs/services/GoodsSupplyImg/lenovo.png'
import c9 from '../../imgs/services/GoodsSupplyImg/Samsung_Logo.png'
import c10 from '../../imgs/services/GoodsSupplyImg/bluebeam-software-inc.jpg'
import c11 from '../../imgs/services/GoodsSupplyImg/das.png'
import c12 from '../../imgs/services/GoodsSupplyImg/entrust.png'
import c13 from '../../imgs/services/GoodsSupplyImg/Kensington-logo.jpg'
import c14 from '../../imgs/services/GoodsSupplyImg/forcepoint.png'
import c15 from '../../imgs/services/GoodsSupplyImg/Hewlett_Packard_Enterprise_logo.svg.png'
import c16 from '../../imgs/services/GoodsSupplyImg/TrendMicro.jpg'
import c17 from '../../imgs/services/GoodsSupplyImg/hitachi vantara.png'
import c18 from '../../imgs/services/GoodsSupplyImg/manageengine.png'
import c19 from '../../imgs/services/GoodsSupplyImg/kaeser.jpg'
import c20 from '../../imgs/services/GoodsSupplyImg/cherwell-featured.jpg'
import c21 from '../../imgs/services/GoodsSupplyImg/1200px-Citrix.svg.png'
import c22 from '../../imgs/services/GoodsSupplyImg/Eaton-Logo.png'
import c23 from '../../imgs/services/GoodsSupplyImg/lexmark.jpg'
import c24 from '../../imgs/services/GoodsSupplyImg/mcafee.png'
import c25 from '../../imgs/services/GoodsSupplyImg/Micro_Focus_logo.svg.png'
import c26 from '../../imgs/services/GoodsSupplyImg/panasonic.jpg'
import c27 from '../../imgs/services/GoodsSupplyImg/spectra.png'
import c28 from '../../imgs/services/GoodsSupplyImg/synology.png'
import c29 from '../../imgs/services/GoodsSupplyImg/tdsynnex.png'
import c30 from '../../imgs/services/GoodsSupplyImg/topaz.png'
import Layout from "../../components/Layout";

const Goodssuplies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleDropdownClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const dropdownData = [
      {
        title: "NYC Agencies",
        content: [
          "New York City Department of Finance",
          "New York City Department of Correction",
          "NY County District Attorney’s Office",
          "New York City Department of Design & Construction",
          "New York City Department of Transportation",
          "New York City Office of Management and Budget",
          "New York City Department of City Planning",
          "New York City Civilian Complaint Review Board",
          "New York City Department of Investigation",
          "New York City Administration for Children’s Services",
          "New York City Department of Health and Mental Hygiene",
          "New York City Department of Environmental Protection",
          "New York City Department of Citywide Administrative Services",
          "New York City Department of Information Technology and Telecommunications…,etc",
        ],
      },
      {
        title: "Federal Agencies",
        content: [
          "American Embassy Cotonou",
          "Navsea Supship",
          "Federal Bureau of Prisons",
          "MICC – Department of Army",
          "US Department of state",
          "U.S. Embassy Tbilisi…,etc",
        ],
      },
      {
        title: "City of Philadelphia Agencies",
        content: [
          "Council President’s Office",
"City council-Legislative Division",
"Department of public health…,etc",
        ],
        },
    ];
  return (
    <Layout>
      <section className="mb-10 relative flex items-center">
        <div className="absolute lg:left-0 text-left lg:p-[2rem] p-3 z-50">
          <h1 className="lg:text-4xl text-3xl font-bold text-white p-4 animate-slide-down">
            Goods & Supplies
          </h1>
          <p className="text-base text-white p-4">Home / Goods & Supplies</p>
        </div>
        <img
          className="h-[40vh] w-[100%] brightness-50 opacity-100 contrast-75 object-cover"
          src={goods}
          alt="banner"
        />
      </section>
      <section className="lg:flex lg:h-[190vh] bg-[#f4f4f5]">
        <div className="lg:px-[2rem] lg:py-[2rem] p-4 lg:w-[50%]">
          <h1 className="text-slate-900 lg:text-5xl text-2xl font-bold">
            Goods & Supplies
          </h1>
          <h2 className="text-slate-900 text-2xl font-bold lg:mt-5 mt-2 mb-2 lg:mb-4">
            IT Equipment, Hardware and Software Supplier & Reseller
          </h2>
          <p className="text-[#57534e] lg:mt-7 text-lg">
            Avenues International Inc. is a well-established Technology company
            providing IT products, services and equipment since 1994.
          </p>
          <p className="text-[#57534e] lg:mt-5 text-lg">
            We provide delivery of quality hardware and telecom equipment and
            accessories, in a timely manner at competitive prices. Some of the
            products that we supply are:
          </p>
          <div className="list-none lg:mt-8 text-[#57534e] text-base">
            <div className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              <p className="flex items-center gap-5">
                Servers/Networking/IT Infrastructure System - Lenovo, Dell,
                Cisco, HPE, IBM, Hitachi, Desktops, Laptops, Tablets - Lenovo,
                Dell, HP
              </p>
            </div>
            <div className="flex items-center gap-5">
              <FaCheck className="text-red-600" />
              <p className="flex items-center gap-5">
                IT software’s licenses & solutions - IBM, Cisco, Micro Focus,
                Hitachi Vantara, Juniper etc. Samsung/HP/Lenovo/Dell Products
              </p>
            </div>
            <div>
              <p className="flex items-center gap-5">
                <FaCheck className="text-red-600" />
                Professional Audio & Sound Equipment products
              </p>
            </div>
            <div>
              <p className="flex items-center gap-5">
                <FaCheck className="text-red-600" />
                Cisco Switches, Telcom equipment
              </p>
            </div>
            <div>
              <p className="flex items-center gap-5">
                <FaCheck className="text-red-600" />
                Elevators, Compressors & Hardware Tools and miscellaneous parts
              </p>
            </div>
            <div>
              <p className="flex items-center gap-5">
                <FaCheck className="text-red-600" />
                Office supplies and Office Products
              </p>
            </div>
            <div>
              <p className="flex items-center gap-5">
                <FaCheck className="text-red-600" />
                Medical Equipment
              </p>
            </div>
          </div>
          <h3 className="text-[#57534e] text-lg font-semibold lg:mt-5 mb-4">
            Capability Statement for Goods and Supplies{" "}
            <span className="text-red-500">Click here</span>
          </h3>
        </div>
        <div className="lg:w-[50%]">
          <img
            src={goodssupplies}
            alt="strategy"
            className="h-[35vh] w-[100%] lg:w-[100%] lg:h-[190vh] object-cover"
          />
        </div>
      </section>
      <section className="mx-auto py-10 px-2 lg:px-[2rem]">
        <h1 className="text-slate-900 lg:text-5xl text-4xl font-bold text-center mb-7">
          Our Clients
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
      <section className="lg:px-[2rem] lg:py-[2rem] p-1">
        <h1 className="text-slate-900 lg:text-5xl text-2xl font-bold mb-2 text-center lg:my-[3rem]">
          Authorized Reseller Partner
        </h1>
        <div className="lg:flex">
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c1}
              className="lg:h-[10vh] lg:w-[80%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c2}
              className="lg:h-[9vh] lg:w-[70%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c3}
              className="lg:h-[10vh] lg:w-[70%] h-[10vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c4}
              className="lg:h-[10vh] lg:w-[70%] h-[9vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c5}
              className="lg:h-[9vh] lg:w-[80%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c6}
              className="lg:h-[10vh] lg:w-[80%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c7}
              className="lg:h-[10vh] lg:w-[80%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c8}
              className="lg:h-[7vh] lg:w-[70%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c9}
              className="lg:h-[7vh] lg:w-[70%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c10}
              className="lg:h-[20vh] lg:w-[70%] h-[15vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c11}
              className="lg:h-[10vh] lg:w-[65%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c12}
              className="lg:h-[10vh] lg:w-[80%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c13}
              className="lg:h-[10vh] lg:w-[60%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c14}
              className="lg:h-[9vh] lg:w-[70%] h-[9vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c15}
              className="lg:h-[9vh] lg:w-[60%] h-[8vh] w-[50%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c16}
              className="lg:h-[9vh] lg:w-[60%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c17}
              className="lg:h-[6vh] lg:w-[80%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c18}
              className="lg:h-[10vh] lg:w-[80%] h-[9vh] w-[70%]"
              alt="react"
            />
          </div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c19}
              className="lg:h-[10vh] lg:w-[70%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c20}
              className="lg:h-[10vh] lg:w-[70%] h-[10vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c21}
              className="lg:h-[10vh] lg:w-[70%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c22}
              className="lg:h-[10vh] lg:w-[70%] h-[10vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c23}
              className="lg:h-[9vh] lg:w-[80%] h-[10vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c24}
              className="lg:h-[10vh] lg:w-[80%] h-[10vh] w-[70%]"
              alt="react"
            />
          </div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c25}
              className="lg:h-[8vh] lg:w-[65%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c26}
              className="lg:h-[12vh] lg:w-[65%] h-[10vh] w-[80%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c27}
              className="lg:h-[9vh] w-[65%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c28}
              className="lg:h-[8vh] lg:w-[60%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c29}
              className="lg:h-[6vh] lg:w-[60%] h-[8vh] w-[70%]"
              alt="react"
            />
          </div>
          <div className="lg:w-1/6 h-[10rem] border border-sky-200 flex items-center justify-center">
            <img
              src={c30}
              className="lg:h-[14vh] lg:w-[60%] h-[15vh] w-[70%]"
              alt="react"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Goodssuplies;


