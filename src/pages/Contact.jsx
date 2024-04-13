import React from 'react'
import Layout from '../components/Layout'
import banner from '../imgs/bannerA.jpg'
import contact from '../imgs/contact.jpg'

const Contact = () => {
  return (
    <Layout>
      <div>
      <div className="mb-10 relative flex items-center">
        <div className="absolute lg:left-0 text-left lg:p-20 p-3">
          <h1 className="lg:text-6xl text-4xl font-bold text-white p-4 animate-slide-down">
            Contact Us
          </h1>
          <p className="text-base text-white p-4">Home / Contact Us</p>
        </div>
        <img
          className="h-64 min-h-84 w-full"
          src={banner}
          alt="banner"
        />
      </div>
      <div className="lg:flex justify-between py-1 px-2 lg:px-[5rem] ">
        <div className="border-solid p-2 relative border border-gray-200 rounded shadow-xl">
          <h1 className="text-black lg:text-3xl font-bold mb-4">
            Headquarter (USA)
            <hr />
          </h1>
          <div className="p-4 mr-6 text-[#57534e]">
            <p className="mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              Princeton Junction, New Jersey(NJ) – 08550
            </p>
            <p className="mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              Director : Anupam Gupta
            </p>
            <p className="mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              Phone : +1 609-945-1160
            </p>
            <p className="mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              Email : anupam@avenuesinc.com
            </p>
          </div>
        </div>
        <div className="border-solid p-2 border border-gray-200 rounded relative shadow-xl">
          <h1 className="text-black lg:text-3xl font-bold mb-4">
            Regional Office (USA)
            <hr />
          </h1>
          <div className="p-4 mr-6 text-[#57534e]">
            <p className="mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              57 West 57th Street, Suite 300, New York, NY 10019
            </p>
            <p className="mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              Phone : +1 609-945-1160
            </p>
            <p className="mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              Email: sales@avenuesinc.com
            </p>
          </div>
        </div>
        <div className="border-solid p-2 border border-gray-200 rounded relative shadow-xl">
          <h1 className="text-black lg:text-3xl font-bold mb-4">
            Office in India
            <hr />
          </h1>
          <div className="p-4 mr-6 text-[#57534e]">
            <p className="mb-2 flex text-[#57534e] items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              C-26, South City II, Gurgaon Haryana, 122001 (INDIA)
            </p>
            <p className="mb-2 flex text-[#57534e] items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              Phone: +91 840-035-4555
            </p>
            <p className="mb-2 flex text-[#57534e] items-center">
              <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
              Email : sales@avenuesinc.com
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-[5rem] p-2 mt-4">
        <div className="border-solid p-2 relative border border-gray-200 rounded shadow-xl">
          <h1 className="text-black lg:text-3xl font-bold mb-2">
            Department
            <hr />
          </h1>
          <div className="lg:flex justify-between space-x-6 lg:px-10 lg:py-4">
            <div className="ml-6">
              <h1 className="ml-4 text-lg font-semibold">Recruiting Team</h1>
              <div className="mt-1 text-[#57534e]">
                <p className="mb-1 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Name : Adarsh Shukla
                </p>
                <p className="mb-1 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Phone : 609-342-5250
                </p>
                <p className="mb-1 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Email : hr@avenuesinc.com
                </p>
              </div>
            </div>
            <div>
              <h1 className="ml-4 text-lg font-semibold">Recruiting Team</h1>
              <div className="mt-1 text-[#57534e]">
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Name : David Miller
                </p>
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Phone : 609-342-5590
                </p>
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Email : hr2@avenuesinc.com
                </p>
              </div>
            </div>
            <div>
              <h1 className="ml-4 text-lg font-semibold">
                Procurement Manager
              </h1>
              <div className="mt-1 text-[#57534e]">
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Name : Madhu Tyagi
                </p>
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Phone: (609) 491-3910
                </p>
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Email : supplies@avenuesinc.com
                </p>
              </div>
            </div>
            <div>
              <h1 className="ml-4 text-lg font-semibold">
                HR & Administration
              </h1>
              <div className="mt-1 text-[#57534e]">
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Name : Ms. Neha
                </p>
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-black mr-2 rounded-full"></span>
                  Email : admin@avenuesinc.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Contact Us*/}
      <div className="lg:px-[5rem] px-5 lg:py-[5rem]">
        <h1 className="text-black font-bold text-5xl mt-4">Contact Us</h1>
        <div className="lg:flex mt-10">
          <div className="lg:w-[50%] p-1">
            <p className="text-[#57534e] text-sm lg:text-xl">
              We value your feedback and would love to hear from you. If you
              have any questions, comments, or concerns, please dont hesitate to
              contact us. You can reach us via email, phone, or by filling out
              the form below. Our team will respond to your inquiry as soon as
              possible.
            </p>
            <img src={contact} alt="contact" />
          </div>
          <div className="lg:w-[50%] p-1">
            <div>
              <form className="flex flex-col">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="text-[#57534e] block mb-2 text-sm font-medium"
                  >
                    Name:
                  </label>
                  <input
                    name="name"
                    type="name"
                    id="name"
                    required
                    className="bg-white border border-gray-200 text-sm  block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="text-[#57534e] block text-sm mb-2 font-medium"
                  >
                    Eamil:
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-white border border-gray-200 text-sm block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="text-[#57534e] block text-sm mb-2 font-medium"
                  >
                    Phone:
                  </label>
                  <input
                    name="phone"
                    type="phone"
                    id="phone"
                    required
                    className="bg-white border border-gray-200 text-sm block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-[#57534e] block text-sm mb-2 font-medium"
                  >
                    Message:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="bg-white border border-gray-200 text-sm block w-full h-24 p-2.5"
                    cols={30}
                    rows={30}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white text-base font-medium py-4 px-5 w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Contact
