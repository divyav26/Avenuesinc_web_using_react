import { FaCheck } from "react-icons/fa";
import banner from '../../imgs/services/CloudStrategyImg/strategybanner.jpeg'
import rs from '../../imgs/services/CloudStrategyImg/6rs.jpg'
import assesment from '../../imgs/services/CloudStrategyImg/assesment.jpeg'
import cloud from '../../imgs/services/CloudStrategyImg/cloudadoption.png'
import strategy from '../../imgs/services/CloudStrategyImg/strategy.jpeg'
import Layout from "../../components/Layout";



const CloudStrategy = () => {
  return (
    <Layout>
      <section className="mb-10 z-0 relative flex items-center">
        <div className="absolute lg:left-0 text-left lg:p-[7rem] p-3 z-50">
          <h1 className="lg:text-4xl text-4xl font-bold text-white p-4 animate-slide-down">
            Cloud Strategy & Implementation
          </h1>
          <p className="text-base text-white p-4">
            Home / Cloud Strategy & Implementation
          </p>
        </div>
        <img
          className="h-[20rem] w-full object-cover brightness-50 inset-0"
          src={banner}
          alt="banner"
        />
      </section>
      <section className="bg-[#f4f4f5] h-[35rem] lg:flex items-center">
        <div className="lg:p-[5rem] p-4 lg:w-[60%]">
          <h1 className="text-slate-900 lg:py-3 lg:text-5xl text-2xl font-bold">
            Cloud Strategy &
          </h1>
          <h1 className="text-slate-900 lg:text-5xl text-2xl font-bold">
            Implementation
          </h1>
          <p className="text-[#57534e] lg:mt-7 text-lg">
            Right Cloud Strategy – Custom tailored to your business objectives.
            Align your business goals with right cloud technology.
          </p>
          <div className="lg:flex lg:py-[2rem] gap-32">
            <div className="flex gap-5 items-center">
              <div className="bg-white h-14 w-14 mb-2 mt-2 flex items-center justify-center">
                <FaCheck className="text-red-600 h-8 w-8" />
              </div>
              <h1 className="text-black text-xl font-semibold">
                Cloud Adoption
              </h1>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-white h-14 w-14 flex items-center justify-center">
                <FaCheck className="text-red-600 h-8 w-8" />
              </div>
              <h1 className="text-black text-xl font-semibold">
                Cloud Assessment
              </h1>
            </div>
          </div>
          <div className="flex gap-5 mt-2 items-center">
            <div className="bg-white h-14 w-14 flex items-center justify-center">
              <FaCheck className="text-red-600 h-8 w-8" />
            </div>
            <h1 className="text-black text-xl font-semibold">
              Cloud Migration
            </h1>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src={strategy}
            alt="strategy"
            className="w-[15rem] h-[10rem] lg:w-[100%] lg:h-[33rem]"
          />
        </div>
      </section>
      <section className="lg:px-[2rem] lg:py-[2rem]">
        <div>
          <h1 className="text-black text-5xl font-bold text-center mb-10">
            Offerings
          </h1>
          <div className="bg-[#f4f4f5] h-[25rem] lg:flex">
            <div className="lg:w-[50%] bg-white flex items-center justify-center">
              <img
                src={cloud}
                alt="cloud"
                className="w-[18rem] h-[10rem] lg:w-[40rem] lg:h-[26rem]"
              />
            </div>
            <div className="items-center lg:px-[3rem] px-2 py-2 lg:py-[5rem] lg:w-[50%]">
              <h1 className="text-black text-2xl font-bold lg:mb-10">
                Cloud Adoption Roadmap
              </h1>
              <div className="px-[2rem] mt-2">
                <ul className="list-disc text-[#57534e] text-sm font-normal items-center">
                  <li>Develop a Cloud-First and Multi-cloud Strategy</li>
                  <li>Adopt Cloud Platforms</li>
                  <li>Migrate Applications</li>
                  <li>IT Optimization</li>
                  <li>Business Innovation</li>
                  <li>Create Business Models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f4f4f5] h-[25rem] lg:flex">
          <div className="items-center px-2 py-2 lg:px-[3rem] lg:py-[5rem] lg:w-[50%]">
            <h1 className="text-black text-2xl font-bold lg:mb-10">
              Cloud Assessment Approach
            </h1>
            <div className="px-[2rem] mt-2">
              <ul className="list-disc text-[#57534e] text-base font-normal">
                <li>Financial Assessment</li>
                <li>Security Assessment</li>
                <li>Compliance & Regulatory Assessment</li>
                <li>Business Assessment</li>
                <li>Technical Assessment</li>
                <li>Contractual Assessment</li>
              </ul>
            </div>
          </div>
          <div className=" bg-white">
            <img
              src={assesment}
              alt="cloud"
              className="lg:h-[26rem] lg:w-[45rem] h-[11rem] w-[20rem]"
            />
          </div>
        </div>

        <div>
          <div className="bg-[#f4f4f5] lg:h-[30rem] h-[40rem] lg:flex">
            <div className="lg:w-[50%] bg-white">
              <img
                src={rs}
                alt="cloud"
                className="lg:h-[26rem] lg:w-[45rem] h-[15rem] w-[20rem]"
              />
            </div>
            <div className="items-center lg:px-[3rem] p-2 lg:py-[5rem] lg:w-[50%]">
              <h1 className="text-black text-2xl font-bold mb-10">
                Cloud Migration: Migration Strategies- “The 6 R’s”
              </h1>
              <div className="px-[2rem]">
                <ul className="list-disc text-[#57534e] text-base font-normal">
                  <li>Rehosting—“Lift-and-shift.”</li>
                  <li>Replatforming—“Lift-tinker-and-shift.”</li>
                  <li>
                    Repurchasing—Move to a different product. For example:
                    move CRM to Salesforce or HR system to Workday.
                  </li>
                  <li>
                    Refactoring / Re-architecting—Re architected and develop
                    your existing application using cloud-native features.
                  </li>
                  <li>Retire—Some applications can simply get rid of.</li>
                  <li>Retain—Do nothing (for now).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudStrategy;
