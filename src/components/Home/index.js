import React from 'react';
import { useNavigate } from 'react-router-dom';
import landingBanner from '../../Images/assests/landing-banner.webp';
import landingHeroBackground from '../../Images/assests/landing-hero-banner.webp';
import TouchIcon from '../../Images/assests/touch-icon.png';
import EmpoweringIcon from '../../Images/assests/empowering-icon.png';
import VP_Image1 from '../../Images/assests/image1.png'
import VP_Image2 from '../../Images/assests/image2.png'
import VP_Image3 from '../../Images/assests/image3.png'
import VP_Image4 from '../../Images/assests/image4.png'
import StepCard from '../StepCard.js';
import Header from '../Header';

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  return (
    <div className="relative min-h-screen">
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
          </div>

          <div className="fixed top-0 left-0 right-0 z-20">
            <Header />
          </div>

          {/* Foreground Image and Text */}
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
            {/* Text Section — Shows first on mobile */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-24">
              <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[38px] text-white font-bold font-roboto capitalize leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                Welcome to <span>Sajan International</span>
              </h1>
              <h2 className="text-[30px] sm:text-4xl md:text-4xl lg:text-5xl text-white font-bold font-roboto leading-tight">
                Lending <span className="text-[#FF9E28]">Starts Here
                     <span className="w-1 h-1 md:w-2 md:h-2 bg-[#FF9E28] rounded-full inline-block ml-1"></span>
                    <span className="w-1 h-1 md:w-2 md:h-2 bg-[#FF9E28] rounded-full inline-block ml-1"></span>
                    <span className="w-1 h-1 md:w-2 md:h-2 bg-[#FF9E28] rounded-full inline-block ml-1"></span>
                </span>
              </h2>
              <div className="mt-6 hidden md:block">
                <button
                  onClick={handleContactClick}
                  className="w-[163px] bg-[#FF9E28] hover:bg-[#e88715] text-white font-roboto py-3 px-4 md:mt-2 rounded-full shadow">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Image Section — Appears after text on mobile */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end mt-4 md:mt-20">
              <img
                src={landingHeroBackground}
                alt="Hero Visual"
                className="w-full max-w-[650px] lg:max-w-[720px] rounded-[20px] transition-transform duration-300 shadow-2xl"
              />

              {/* Contact Us Button – Only on mobile */}
              <div className="mt-6 block md:hidden">
                <button
                  onClick={handleContactClick}
                  className="w-48 bg-[#FF9E28] hover:bg-[#e88715] text-white font-roboto py-2 px-6 rounded-full shadow">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full md:px-16">
          <div className="text-center md:text-center md:mb-4">
            <div className="inline-flex justify-center md:justify-center space-x-2 text-3xl sm:text-4xl font-bold font-roboto leading-tight py-2">
              <span className="text-[#061B4E]">At</span>
              <span className="text-[#FF9E28]">Sajan International</span>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center md:ml-4">
              <div className="order-2 md:order-1 md:col-span-8 bg-white rounded-xl shadow-md border border-white p-6">
                <p className="text-base font-roboto leading-relaxed"
                    style={{ color: '#051414' }}
                >
                  We believe that financial access should be a right, not a privilege. Whether it’s funding a dream business, managing personal expenses, or handling unexpected financial needs, we make borrowing simple, transparent, and accessible to all. Our loan solutions are designed to cater to individuals and businesses, ensuring that financial limitations never stand in the way of growth and success.
                  <br /><br />
                  Since our inception in 1980, we have been committed to bridging financial gaps and providing opportunities for those who need them the most. With a customer-first approach, state-of-the-art technology, and quick processes, we strive to make lending stress-free. As we continue to grow, our vision is to become a trusted financial platform that empowers millions, helping them achieve their goals and build a financially secure future.
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
        <section className="max-w-6xl mx-auto px-4">
          <div className="text-center md:mb-6">
            <div className="inline-flex flex-wrap justify-center space-x-2 text-2xl sm:text-4xl font-bold font-roboto">
              <span className="text-[#061B4E]">Empowering salaried employees</span>
              <span className="text-[#FF9E28] block md:inline w-full md:w-auto">
                with flexible loan solutions!
              </span>
            </div>
          </div>
          {/* <section className="w-full bg-[#FF9E28] py-10 px-4"> */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
            {/* Left Side Image */}
            <img
              className="w-[499px] h-72 md:h-96 rounded-[20px] 
              shadow-[5px_6px_16px_0px_rgba(0,0,0,0.10)] 
              shadow-[19px_23px_29px_0px_rgba(0,0,0,0.09)] 
              shadow-[42px_51px_40px_0px_rgba(0,0,0,0.05)] 
              shadow-[75px_91px_47px_0px_rgba(0,0,0,0.01)] 
              shadow-[117px_142px_51px_0px_rgba(0,0,0,0.00)]"
              src={EmpoweringIcon}
              alt="Empowering Icon"
            />


            {/* Right Side Content */}
            <div className="w-full md:w-[669px] bg-white border border-white rounded-[16px] p-4 text-base font-normal font-roboto leading-normal"
                style={{ color: '#051414' }}
            >
              In today’s fast-paced world, financial flexibility of salaried employees is necessary. Our NBFC is committed to providing instant personal loans designed to meet the unique needs of working professionals. Whether you need funds for an emergency, a dream vacation, home renovation, or any personal requirement, we ensure the easiest borrowing experience because we believe in financial freedom.
              <br />
              We understand that time is valuable, especially for corporate employees with demanding schedules. That’s why our loan process is quick, transparent, and convenient. With competitive interest rates, flexible repayment options, and zero hidden charges, we make borrowing stress free.
              <br />
              Our goal is to empower professionals by giving them the financial freedom they deserve. No more waiting for lengthy approval processes—our advanced technology ensures seamless loan disbursal directly to your account. Whether it’s for career growth, education, or managing unforeseen expenses, we have you covered.
              <br />
              With our lending solutions, we bring a new way of borrowing to help you achieve your financial aspirations. Experience a smarter, more reliable, and efficient way to access instant personal loans—because financial well-being matters the most!
            </div>

          </div>
          {/* </section> */}

        </section>

        {/* Quick & hassle free*/}
        <section className="w-full md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-bold font-roboto text-[#061B4E] mb-2">
              Quick & Hassle-Free Way to <span className="text-[#FF9E28]">Secure Your Loan</span>
            </h2>
            <div className="text-base md:text-xl font-medium font-roboto leading-normal mb-6"
              style={{ color: '#051414' }}
              >
              4-easy steps to get financial freedom
            </div>
            {/* Grid for Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-2 gap-x-4 px-4 md:px-0 justify-items-center font-roboto">
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
        <section className="max-w-6xl mx-auto w-full">
          <div className="mx-auto text-center mb-2 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold font-roboto text-[#061B4E]">
              Our <span className="text-[#FF9E28]">Values and Principles</span>
            </h2>
          </div>

          <div className="md:space-y-0 space-y-4">
            {/* 1. Customer-Centric Approach */}
            <div className="w-full flex md:flex-row flex-col md:space-y-0 space-y-2">
              <div className="md:w-2/5 relative md:pb-4 md:pr-4 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={VP_Image1} alt="Customer-Centric Approach" />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-[30px] rounded-xl font-bold font-roboto z-10">
                  Customer-Centric Approach
                </h2>
              </div>
              <div className="md:w-3/5 p-8 bg-white md:rounded-none md:rounded-t-xl md:rounded-br-xl rounded-xl shadow-lg">
                <h1 className="font-bold text-xl text-orange-400 mb-2 font-roboto">Customer-Centric Approach</h1>
                <p style={{ color: '#051414' }}>
                  At Sajan International, customers are at the heart of everything they do. They prioritize financial needs
                  by offering easy loan solutions, seamless processes, and transparent terms. Their goal is to build
                  long-term relationships by providing exceptional service and ensuring a hassle-free borrowing
                  experience.
                </p> 
              </div>
            </div>

            {/* 2. Transparency & Trust */}
            <div className="w-full flex md:flex-row-reverse flex-col md:space-y-0 space-y-2">
              <div className="md:w-2/5 relative md:py-4 md:pl-4">
                <img className="w-full h-full object-cover rounded-xl" src={VP_Image2} alt="Transparency & Trust" />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-[30px] font-bold rounded-xl z-10 font-roboto">
                  Transparency & Trust
                </h2>
              </div>
              <div className="md:w-3/5 p-8 bg-white md:rounded-none md:rounded-l-xl rounded-xl shadow-lg font-roboto">
                <h1 className="font-bold text-xl text-orange-400 mb-2">Transparency & Trust</h1>
                <p style={{ color: '#051414' }}>
                  They believe in complete transparency, ensuring customers have clarity on loan terms, interest rates,
                  and repayment structures. There are no hidden charges or misleading policies—just honest and
                  straightforward financial solutions. Trust is the foundation of their business, and they work hard
                  to maintain it with every transaction.
                </p>
              </div>
            </div>

            {/* 3. Financial Inclusion for All */}
            <div className="w-full flex md:flex-row flex-col md:space-y-0 space-y-2">
              <div className="md:w-2/5 relative md:py-4 md:pr-4">
                <img className="w-full h-full object-cover rounded-xl" src={VP_Image3} alt="Financial Inclusion for All" />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-[30px] bg-black/0 rounded-xl z-10 font-bold font-roboto">
                  Financial Inclusion for All
                </h2>
              </div>
              <div className="md:w-3/5 p-8 bg-white md:rounded-none md:rounded-r-xl rounded-xl shadow-lg">
                <h1 className="font-bold text-xl text-orange-400 mb-2 font-roboto">Financial Inclusion for All</h1>
                <p style={{ color: '#051414' }}>
                  Their mission is to make financial assistance accessible to everyone, regardless of background or
                  credit history. They strive to bridge the gap between dreams and reality by providing fair and
                  inclusive loan opportunities, empowering individuals and businesses to grow without financial
                  constraints.
                </p>
              </div>
            </div>

            {/* 4. Innovation & Growth */}
            <div className="w-full flex md:flex-row-reverse flex-col md:space-y-0 space-y-2">
              <div className="md:w-2/5 relative md:pt-4 md:pl-4">
                <img className="w-full h-full object-cover rounded-xl" src={VP_Image4} alt="Innovation & Growth" />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-[30px] rounded-xl z-10 font-bold font-roboto">
                  Innovation & Growth
                </h2>
              </div>
              <div className="md:w-3/5 p-8 bg-white md:rounded-none md:rounded-l-xl md:rounded-br-xl rounded-xl shadow-lg">
                <h1 className="font-bold text-xl text-orange-400 mb-2 font-roboto">Innovation & Growth</h1>
                <p style={{ color: '#051414' }}>
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
