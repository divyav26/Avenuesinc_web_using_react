import CloudDropdown from "./CloudDropdown";
import { useState } from "react";
import banner from '../../imgs/services/DatawareImg/databanner.jpeg'
import data from '../../imgs/services/DatawareImg/datawarehouse.jpg'
import Layout from "../../components/Layout";

const Datawarehousing = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const dropdownData = [
    {
      title: "Data Warehousing Architecture",
      content: [
        "Conducted by the Data Warehouse Architect, this service spells out the architectural components best suited to delivering on the needs identified in the Opportunity Assessment, Business Analysis and Data Assessment services. Architectural components include the Technology Architecture, Data Architecture, Security Architecture and Data Warehouse Architecture.",

        "The Technology Architecture specifies the technologies to be used, and will be influenced by the company’s existing technology standards, such as intranet/web, client/server, middleware and ETL software, RDBMS software, security software, and hardware.",
        "The Data Architecture specifies which data sources will be used, how they will be accessed by middleware or ETL (Extract Transform Load) software, how they will be loaded to the data warehouse.",
        "The Security Architecture specifies how the security requirements will be met, whether through LDAP (Lightweight Directory Access Protocol) or other method, and how tightly the security will be integrated with the company’s existing security methods.",
        "The Data Warehouse Architecture specifies the structure of the data warehouse and/or data marts, including the handling of metadata. Typically the architecture consists of staging tables for data loading and preparation (Entity-Relationship schema), and production tables (star schema) to house the read-only data which will be made available for analysis. Often this production data will be further distributed to conformed data marts for high-performance access by local applications.",
      ],
    },
    {
      title: "Date Warehouse Design",
      content: [
        "Using requirements gathered in Opportunity Assessment and Business Analysis, the Data Warehouse Architect creates detailed data models for the data warehouse and/or data mart(s) and creates the physical database definitions.",
        "Facts, dimensions, summaries, indexes, loading tables, staging tables and public tables are defined. Sizing estimates are refined. Database ids and security are implemented.",
        "The Data Warehouse Architect works with your company’s Database Administrator (DBA) throughout this process to ensure compatibility with corporate standards and to ensure the DBA will be comfortable supporting the databases into the future.",
        "Data Extract, Transform and Load (ETL)",
        "This service is delivered by an ETL Specialist with assistance from IT and user staff who are very familiar with the data sources and the business rules.",
        "The ETL products are configured to deliver the data from the legacy sources to the data warehouse environment.",
        "Wherever possible, the ETL rules will be stored in a single repository for consistency of definition and ease of maintenance. This is best accomplished with an ETL software tool. In some cases, it may be necessary to use custom business logic, that should be implemented as Stored Procedures and Triggers in the RDBMS. As a last resort, unique requirements may have to be met using a programming language such as C++.",
      ],
    },
    {
      title: "Date Warehouse Methodology",
      content: [
        "The bulleted items below summarize the five major steps in creating a data warehouse. Although every project possesses some distinctive characteristics, and we reflect those considerations in the project plan, our basic methodology remains consistent.",
        "Meet with client personnel to identify immediate and long–term data requirements.",
        "Produce a Requirements Specification for the client’s approval.",
        "Assemble a Design Specification, beginning with recommendations for the necessary hardware and Business Intelligence software. The Design Specification also includes a data model and mock–ups of the key user interface screens. Work with the client’s project team to refine the design for client approval.",
        "Develop, test, and document the software described in the Design Specification. Throughout this process, transfer knowledge about system support and long–term maintenance to the client’s IT staff.",
        "Prior to the production roll–out of the data warehouse, provide “train the trainer” instruction for end users of the system.",
      ],
    },
    {
      title: "Date Warehouse Strategy",
      content: [
        "This service can be targeted at producing a new Data Warehouse (DW) strategy or for working within your company’s existing DW strategy. Both business and IT management will be interviewed by the Data Warehouse Architect to develop a well-grounded strategy for the long-term and short-term. We assess your data warehouse and business intelligence needs. Then we develop a prioritized, high level plan on how to reach your goals.",
        "Working from the results of the Opportunity Assessment, and using the Data Warehouse Strategy as a framework, the Senior Business Analyst identifies the detailed requirements for the solution.",
        "The Senior Business Analyst works with end users to capture their intended use of the information for business growth, determine what information they need to see, and how they need to see it:",
        "Identify the Key Performance Indicators (KPIs) which will be used to track objectives",
        "Online analysis processing requirements (analytics).",
        "Security requirements.",
        "Review current reporting systems that report on related data.",
        "Describe reports that need to be provided.",
        "Span of history to be kept in the data mart.",
        "Facts and Dimensions required to support the analysis and reports.",
        "Frequency of generating analytics reports.",
        "Frequency of refreshing the data mart.",
        "Geographic location of users.",
        "Method of distributing reports.",
        "Estimate how much data will be processed and stored for facts, dimensions, summaries and indexes.",
        "Outputs from this service include:",
        "Documentation of objectives, KPIs, requirements, reports, estimates, assumptions and findings.",
        "High level Logical Data Model.",
        "Scenarios describing how the analytics and reports will be used in the business context.",
      ],
    },
    {
      title: "Client Benefits",
      content: [
        "By helping you define strategies, integrate new processes, leverage best practices and proven resources, we help you make well-informed decisions, improve operational efficiencies and create new revenue channels. Clients of Avenues enjoy the following benefits:",
        "Defined Business Intelligence Strategy – Solutions are developed and deployed that address the strategic goals and business objectives of your organization",
        "Project completion on-time and on-budget – Best practices, strong project management and solutions architecture allow your project to start strong, stay strong and end strong",
        "Customer satisfaction and retention – We utilize resources and methodologies to build BI solutions that are an integral part of extending and improving customer relationships throughout the value chain",
        "Measurable ROI – Enterprise intelligence methods greatly improve the speed and quality of your decisions, resulting in greater return on your information assets",
      ],
    },
    {
      title: "Opportunity Assessment",
      content: [
        "This service gives you a business-level assessment of the opportunity to use Business Intelligence (BI) analytics and Data Warehousing (DW) methods. Conducted by a Data Warehouse Architect, the outputs of the service include:",
        "Definition of business problem or opportunity",
        "Benefits of deploying a BI/DW solution and the metrics for measuring those benefits",
        "Business risks, IT risks and risk-mitigation options",
        "High-level plan outlining time, resources and costs",
      ],
    },
  ];
  return (
    <Layout>
      <section className="mb-[5rem] z-0 relative flex items-center">
        <div className="absolute lg:left-0 text-left lg:p-[2rem] p-3 z-50">
          <h1 className="lg:text-4xl text-3xl font-bold text-white p-4 animate-slide-down">
            Data Warehousing & BI
          </h1>
          <p className="text-base text-white p-4">
            Home / Data Warehousing & BI
          </p>
        </div>
        <img
          className="h-[40vh] w-[100%] brightness-50 opacity-100 contrast-75 object-cover"
          src={banner}
          alt="banner"
        />
      </section>
      <section className="lg:flex h-[100vh] bg-[#f4f4f5]">
        <div className="lg:px-[2rem] p-4 lg:w-[50%]">
          <h1 className="text-slate-900 lg:text-5xl text-2xl font-bold">
            Data Warehousing & BI
          </h1>
          <ul className="text-[#57534e] lg:mt-7 ml-4 lg:text-base text-xs list-disc">
            <li className="lg:mb-6 mb-1 lg:ml-6">
              Avenues International, the professional services firm focused
              exclusively on end-to-end business intelligence, Data Warehousing
              and database marketing solutions.
            </li>
            <li className="lg:mb-6 mb-1 lg:ml-6">
              We have been doing Business Intelligence and Data Warehousing
              since 1994, and have acquired tremendous expertise and knowledge
              in this field.
            </li>
            <li className="lg:mb-6 mb-1 lg:ml-6">
              We provide consulting services for the architecture, design, and
              implementation of Business Intelligence solutions. Avenues works
              with medium to large organizations in developing enterprise
              solutions that provide timely, secure information through the Web.
              Our expertise and knowledge is second to none in the Data
              Warehousing / Business Intelligence World.
            </li>
          </ul>
        </div>
        <div className="lg:w-[50%]">
          <img
            src={data}
            alt="strategy"
            className="h-[35vh] w-[100%] lg:w-[100%] lg:h-[100vh]"
          />
        </div>
      </section>
      <section className="mx-auto py-10 px-2 lg:px-[2rem]">
        <h1 className="text-slate-900 lg:text-5xl text-4xl font-bold text-center mb-7">
          Expertise
        </h1>
        <p className="text-[#57534e] lg:mt-5 lg:mb-6 mb-4 text-base lg:text-lg">
          Avenues provide the business and technical expertise required to
          extract key business data from corporate systems and deliver it based
          on your specific user requirements. We will partner with you to build
          a solution that allows your organization to efficiently access,
          analyze and share information in a consistent format across your
          enterprise.
        </p>
        <p className="text-[#57534e] lg:mt-5 lg:mb-6 mb-4 text-base lg:text-lg">
          Avenues utilizes its project methodology to properly deliver a
          solution that gives you the capability-building advantages of in-house
          development, the domain expertise and experience of systems
          integrators, and the flexibility of high tech experts on demand. We
          are successful because we work with you to leverage what you have,
          build what you need, and leave your organization stronger than when we
          started.
        </p>
        <h2 className="text-[#57534e] lg:text-xl text-lg font-bold mb-7">
          Avenues has expertise in providing strategy, architecture, development
          services for:
        </h2>
        <ul className="text-[#57534e] lg:mt-7 text-base list-disc lg:list-disc">
          <li className="lg:ml-8">Data Warehouse Requirements Analysis</li>
          <li className="lg:ml-8">Data Warehouse Architecture</li>
          <li className="lg:ml-8">
            Multi Dimensional Data Modeling (STAR Schema)
          </li>
          <li className="lg:ml-8">
            ETL Architecture and Data Integration Design
          </li>
          <li className="lg:ml-8">Data Delivery Architecture</li>
          <li className="lg:ml-8">
            OLAP Reports (Using Cognos, OBIEE, MicroStrategy)
          </li>
        </ul>
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
    </Layout>
  );
};

export default Datawarehousing;

