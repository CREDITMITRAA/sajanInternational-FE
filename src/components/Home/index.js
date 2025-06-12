import React from 'react';
import landingBanner from '../../Images/assests/landing-banner.png';
import landingHeroBackground from '../../Images/assests/landing-hero-banner.png';
import TouchIcon from '../../Images/assests/touch-icon.png';
import EmpoweringIcon from '../../Images/assests/empowering-icon.jpeg';
import VP_Image1 from '../../Images/assests/image1.png'
import VP_Image2 from '../../Images/assests/image2.png'
import VP_Image3 from '../../Images/assests/image3.png'
import VP_Image4 from '../../Images/assests/image4.png'
import StepCard from '../StepCard.js';
import Header from '../Header';

const Home = () => {
  return (
    <div className='relative min-h-screen'>
      {/* <Header /> */}
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative text-white py-24 px-2 text-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={landingBanner}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>

          <div className="fixed top-0 left-0 right-0 z-20">
            <Header />
          </div>

          {/* Foreground Image and Text */}
         <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-8">
  {/* Text Section — Shows first on mobile */}
  <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-24">
    <h1 className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[38px] text-white font-bold font-roboto capitalize leading-tight mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
      Welcome to <span>Sajan International</span>
    </h1>
    <h2 className="text-xl sm:text-4xl md:text-4xl lg:text-5xl text-white font-bold font-roboto leading-tight">
      Lending <span className="text-orange-500">Starts Here...</span>
    </h2>
    <div className="mt-6">
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full shadow">
        Contact Us
      </button>
    </div>
  </div>

  {/* Image Section — Appears after text on mobile */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-20">
    <img
      src={landingHeroBackground}
      alt="Hero Visual"
      className="w-full max-w-[650px] lg:max-w-[720px] rounded-[20px] transition-transform duration-300 shadow-2xl"
    />
  </div>
</div>



        </section>

        {/* About Section */}
        <section className="w-full md:px-16">
          <div className="text-center md:text-center mb-8">
            <div className="inline-flex justify-center md:justify-center space-x-2 text-3xl sm:text-4xl font-bold font-roboto">
              <span className="text-blue-950">At</span>
              <span className="text-orange-400">Sajan International</span>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center md:ml-4">
              <div className="order-2 md:order-1 md:col-span-8 bg-white rounded-xl shadow-md border border-white p-6">
                <p className="text-black text-base font-roboto leading-relaxed">
                  We believe that financial access should be a right, not a privilege. Whether it’s funding a dream business, managing personal expenses, or handling unexpected financial needs, we make borrowing simple, transparent, and accessible to all. Our loan solutions are designed to cater to individuals and businesses, ensuring that financial limitations never stand in the way of growth and success.
                  <br /><br />
                  Since our inception in [Year], we have been committed to bridging financial gaps and providing opportunities for those who need them the most. With a customer-first approach, state-of-the-art technology, and quick processes, we strive to make lending stress-free. As we continue to grow, our vision is to become a trusted financial platform that empowers millions, helping them achieve their goals and build a financially secure future.
                </p>
              </div>

              <div className="order-1 md:order-2 md:col-span-3 flex justify-center md:justify-end">
                <img
                  src={TouchIcon}
                  alt="Touch Icon"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-[20rem] rounded-[20px] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>



        {/* Empowering Section */}
        <section className="w-full px-4 md:px-8 py-8">
          <h2 className="text-center text-sm md:text-4xl font-bold text-blue-950 mb-4">
            Empowering salaried employees{" "}
            <span className="text-orange-400">with flexible loan solutions!</span>
          </h2>

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-2">
            {/* Left Image */}
            <div className="w-full md:w-1/2 flex p-2">
              <img
                src={EmpoweringIcon}
                alt="Illustration"
                className="w-10/12  object-contain rounded-xl"
              />
            </div>



            {/* Right Text Content */}
            <div className="w-full md:w-4/5">
              <p className="text-gray-800 text-sm leading-tight bg-white p-6 rounded-xl shadow-2xl">
                In today’s fast-paced world, financial flexibility for salaried employees is necessary.
                Our NBFC is created by professionals with personal needs-designed tools to meet the unique
                needs of working professionals. Whether you need funds for an emergency, a dream vacation,
                home renovation, or any personal milestone, we ensure you access to solutions with ease and
                convenience rooted in financial freedom.
                <br /><br />
                We understand that time is valuable, especially for corporate and government sector employees
                with busy schedules. That’s why our loan process is quick, transparent, and convenient — offering
                competitive rates and simple repayment options. No matter your profession or goals, we make
                borrowing stress-free.
                <br /><br />
                Our aim is to empower professionals by giving them the financial freedom they deserve.
                It’s our way of saying that for highly aspirational and educated knowledge workers, accessible
                loans delivered directly to your account are essential. Whether it’s for career growth, education,
                or managing personal responsibilities — we’ve got you covered.
                <br /><br />
                We believe in making dreams real, and we’re constantly innovating to help you achieve your
                financial aspirations faster. Join the growing number of professionals who enjoy a secure,
                reliable, and personal loaner — because financial wellbeing matters the most!
              </p>
            </div>
          </div>
        </section>

        {/* <section className="w-full md:px-16">
          <div className="max-w-6xl mx-auto"> */}
        {/* Section Title */}
        {/* <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-roboto text-blue-950 leading-normal">
                Empowering salaried employees
                <span className="text-orange-400"> with flexible loan solutions!</span>
              </h2>
            </div> */}

        {/* Image + Content Wrapper */}
        {/* <div className="w-full h-full flex flex-col md:flex-row items-center bg-blue-500"> */}
        {/* Image Section with Orange Gradient Background */}
        {/* <div className="w-2/5 h-128 flex items-center bg-red-400">
                <img
                  className="w-full h-full object-cover rounded-[20px]"
                  src={EmpoweringIcon}
                  alt="Empowering Loan Image"
                />
              </div> */}

        {/* <div className='w-full h-[420px] bg-yellow-400'>
                <img
                  className='w-[600px]  p-0 m-0'
                src={EmpoweringIcon}
              
                  alt="Empowering Loan Image"  >
                </img>
              </div> */}


        {/* Content Section (wider and reduced height) */}
        {/* <div className="w-full bg-white rounded-[20px] p-2 md:p-8 font-roboto text-gray-600 text-sm font-normal leading-tight h-auto">
                <p className="mb-4">
                  In today’s fast-paced world, financial flexibility of salaried employees is necessary. Our NBFC is committed to providing instant personal loans designed to meet the unique needs of working professionals. Whether you need funds for an emergency, a dream vacation, home renovation, or any personal requirement, we ensure the easiest borrowing experience because we believe in financial freedom.
                </p>
                <p className="mb-4">
                  We understand that time is valuable, especially for corporate employees with demanding schedules. That’s why our loan process is quick, transparent, and convenient. With competitive interest rates, flexible repayment options, and zero hidden charges, we make borrowing stress-free.
                </p>
                <p className="mb-4">
                  Our goal is to empower professionals by giving them the financial freedom they deserve. No more waiting for lengthy approval processes—our advanced technology ensures seamless loan disbursal directly to your account. Whether it’s for career growth, education, or managing unforeseen expenses, we have you covered.
                </p>
                <p>
                  With our lending solutions, we bring a new way of borrowing to help you achieve your financial aspirations. Experience a smarter, more reliable, and efficient way to access instant personal loans—because financial well-being matters the most!
                </p>
              </div> */}
        {/* </div>
          </div>
        </section> */}

        {/* Quick & hassle free*/}
        <section className="w-full md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-roboto text-blue-900 mb-2">
              Quick & Hassle-Free Way to <span className="text-orange-500">Secure Your Loan</span>
            </h2>
            <div className="text-gray-950 text-xl font-medium font-roboto leading-normal mb-10">
              4-easy steps to get financial freedom
            </div>

            {/* Grid for Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10 px-4 md:px-0 justify-items-center">
              <StepCard
                step="1"
                title="Connect With Us"
                description="Reach out to our customer support team. Check your eligibility and explore loan options tailored to your financial needs with ease."
              />
              <StepCard
                step="2"
                title="Fill in Your Application"
                description="Complete a simple application form with your basic details. It ensures a smooth and quick process, saving you time and effort."
              />
              <StepCard
                step="3"
                title="Submit Required Documents"
                description="Provide essential documents for our minimal documentation policy, which ensures a hassle-free experience, with instant verification for quicker processing."
              />
              <StepCard
                step="4"
                title="Get Funds in Your Account"
                description="Once approved, the loan amount is disbursed directly to your bank account in no time. Enjoy instant access to funds and take control of your financial needs effortlessly!"
              />
            </div>
          </div>
        </section>

        {/* Values & Prinicles Section */}
        <section className="max-w-6xl mx-auto w-full ">
          <div className="mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-roboto text-blue-950">
              Our <span className="text-orange-400">Values and Principles</span>
            </h2>
          </div>

          <div className="">
            {/* 1. Customer-Centric Approach */}
            <div className="w-full flex">
              <div className="w-2/5 relative pb-4 pr-4 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={VP_Image1} alt="Customer-Centric Approach" />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl  rounded-xl z-10">
                  Customer-Centric Approach
                </h2>
              </div>
              <div className="w-3/5 p-8 bg-white rounded-t-xl rounded-br-xl rounded-br-xl shadow-lg">
                <h1 className="font-bold text-xl text-orange-400 mb-2">Customer-Centric Approach</h1>
                <p>
                  At [NBFC Name], customers are at the heart of everything they do. They prioritize financial needs
                  by offering easy loan solutions, seamless processes, and transparent terms. Their goal is to build
                  long-term relationships by providing exceptional service and ensuring a hassle-free borrowing
                  experience.
                </p>
              </div>
            </div>

            {/* 2. Transparency & Trust */}
            <div className="w-full flex flex-row-reverse">
              <div className="w-2/5 relative py-4 pl-4">
                <img className="w-full h-full object-cover rounded-xl" src={VP_Image2} alt="Transparency & Trust" />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl  rounded-xl z-10">
                  Transparency & Trust
                </h2>
              </div>
              <div className="w-3/5 p-8 bg-white rounded-l-xl shadow-lg">
                <h1 className="font-bold text-xl text-orange-400 mb-2">Transparency & Trust</h1>
                <p className=''>
                  They believe in complete transparency, ensuring customers have clarity on loan terms, interest rates,
                  and repayment structures. There are no hidden charges or misleading policies—just honest and
                  straightforward financial solutions. Trust is the foundation of their business, and they work hard
                  to maintain it with every transaction.
                </p>
              </div>
            </div>

            {/* 3. Financial Inclusion for All */}
            <div className="w-full flex">
              <div className="w-2/5 relative py-4 pr-4">
                <img className="w-full h-full object-cover rounded-xl" src={VP_Image3} alt="Financial Inclusion for All" />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-black/0 rounded-xl z-10">
                  Financial Inclusion for All
                </h2>
              </div>
              <div className="w-3/5 p-8 bg-white rounded-r-xl shadow-lg">
                <h1 className="font-bold text-xl text-orange-400 mb-2">Financial Inclusion for All</h1>
                <p>
                  Their mission is to make financial assistance accessible to everyone, regardless of background or
                  credit history. They strive to bridge the gap between dreams and reality by providing fair and
                  inclusive loan opportunities, empowering individuals and businesses to grow without financial
                  constraints.
                </p>
              </div>
            </div>

            {/* 4. Innovation & Growth */}
            <div className="w-full flex flex-row-reverse">
              <div className="w-2/5 relative pt-4 pl-4">
                <img className="w-full h-full object-cover rounded-xl" src={VP_Image4} alt="Innovation & Growth" />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl rounded-xl z-10">
                  Innovation & Growth
                </h2>
              </div>
              <div className="w-3/5 p-8 bg-white rounded-l-xl rounded-br-xl shadow-lg">
                <h1 className="font-bold text-xl text-orange-400 mb-2">Innovation & Growth</h1>
                <p>
                  As they expand, they continuously evolve their technology, services, and offerings to better serve
                  customers. By embracing innovation, they simplify lending processes, enhance customer experiences,
                  and ensure that borrowing remains fast, secure, and convenient for everyone who trusts them with
                  their financial needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
};

export default Home;