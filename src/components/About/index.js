import React from 'react';
import AboutImage from '../../Images/assests/about-us-hero.png';
import CreditMitra from '../../Images/assests/creditmitra.png';
import Header from '../Header';

const About = () => (
  <div className="font-sans bg-gradient-to-roboto from-[#e6f0ff] to-white">
    {/* Fixed header */}
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={AboutImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <Header />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pt-28 sm:pt-24">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold font-roboto leading-tight drop-shadow-md">
          <span className="text-white">About </span>
          <span className="text-orange-400">Us</span>
        </h1>
        <p className="mt-5 sm:mt-6 max-w-md sm:max-w-2xl text-base sm:text-lg md:text-xl text-white font-medium text-left leading-relaxed">
          Sajan International
          is a trusted financial institution dedicated to providing easy, fast, and transparent loan solutions. Since
          1980, we have been helping individuals achieve their financial goals with seamless access to credit. Our
          commitment to innovation and customer satisfaction drives us to make borrowing effortless and stress-free.
        </p>
      </div>
    </section>

    {/* Vision & Mission */}
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 space-y-12">
      <div>
        <h2 className="text-3xl font-bold font-roboto">
          Our <span className="text-orange-400">Vision</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed">
          Sajan International is a trusted financial institution dedicated to providing easy, fast, and transparent loan solutions.
          Since 1980, we have been helping <br /> individuals achieve their financial goals with seamless access to
          credit. Our commitment to innovation and customer satisfaction drives us to make borrowing effortless and
          stress-free.Sajan International is a trusted financial institution dedicated to providing easy, fast, and transparent loan
          solutions. Since 1980, we have been helping individuals achieve their financial goals with seamless access to
          credit. Our commitment to innovation and customer satisfaction drives us to make borrowing effortless and
          stress-free.Sajan International is a trusted financial institution dedicated to providing easy, fast, and transparent loan
          solutions. Since 1980, we have been helping individuals achieve their financial goals with seamless access to
          credit. Our commitment to innovation and customer satisfaction drives us to make borrowing effortless and
          stress-free.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold font-roboto">
          Our <span className="text-orange-400">Mission</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed">
          Our mission is to make borrowing simple, reliable, and inclusive. We are dedicated to offering flexible loan
          options with fair terms, ensuring <br /> that individuals and businesses get the support they need at the right
          time. Through innovation, ethical practices, and customer-first policies, we aim to drive financial growth and
          independence for millions. Our mission is to make borrowing simple, reliable, and inclusive. We are dedicated to
          offering flexible loan options with fair terms, ensuring that individuals and businesses get the support they need
          at the right time. Through innovation, ethical practices, and customer-first policies, we aim to drive financial
          growth and independence for millions. Our mission is to make borrowing simple, reliable, and inclusive. We are
          dedicated to offering flexible loan options with fair terms, ensuring that individuals and businesses get the
          support they need at the right time. Through innovation, ethical practices, and customer-first policies, we aim to
          drive financial growth and independence for millions.
        </p>
      </div>
    </div>

    {/* Leadership */}
    {/* <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-12">
        <h2 className="text-3xl font-bold text-center font-roboto">
          Our <span className="text-orange-400">Leadership</span>
        </h2>
        <p className="text-center mt-4 text-base">
          A team of experienced professionals leading with vision, integrity…
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl border px-4 py-6 flex flex-col items-center">
              <img
                src="https://placehold.co/226x296"
                alt="Director"
                className="rounded-3xl w-full h-auto"
              />
              <h3 className="mt-4 text-lg font-bold font-roboto">
                Murthy Balaji, <span className="text-orange-400">Director</span>
              </h3>
            </div>
          ))}
        </div>
      </div> */}

    {/* Partner Section */}
    <section id="our-partner" className="max-w-6xl mx-auto px-4">
      <div id="our-partner" className="text-center md:text-center mb-4">
        <div className="inline-flex justify-center md:justify-center space-x-2 text-3xl sm:text-4xl font-bold font-roboto">
          <span className="text-blue-950">Our</span>
          <span className="text-orange-400">Partner</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-0">
        {/* Left Side Image */}
        <div className="w-full md:w-[500px] h-[280px] md:h-96 shrink-0">
          <img
            src={CreditMitra}
            alt="CreditMitra"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-[709px] bg-white rounded-[20px] p-5 shadow-md flex flex-col justify-between h-auto">
          <div className="overflow-y-auto md:overflow-hidden">
            <h2 className="text-orange-400 text-xl font-bold font-roboto mb-2">
              CreditMitra
            </h2>
            <p className="text-gray-950 text-sm md:text-base font-roboto leading-relaxed space-y-2">
              <span className="block mb-2">
                CreditMitra is redefining the lending experience for young salaried individuals, offering a seamless and transparent financial solution. With a strong commitment to simplicity and accessibility, CreditMitra connects borrowers with RBI-registered NBFCs, ensuring secure loan disbursement.
              </span>
              <span className="block mb-2">
                The platform provides instant loans of up to ₹2 lakh, featuring flexible repayment options and competitive interest rates tailored to meet diverse financial needs. Whether covering emergency expenses, funding aspirations, or managing short-term cash flow gaps, CreditMitra ensures quick approvals and minimal documentation, making borrowing stress-free.
              </span>
              <span className="block">
                By leveraging cutting-edge technology and customer-first policies, CreditMitra is fostering financial inclusion, empowering individuals to take charge of their financial journey with confidence.
              </span>
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 gap-4">
            <button
              onClick={() => window.open('https://www.creditmitra.in', '_blank')}
              className="bg-orange-400 text-white font-semibold font-roboto px-6 py-2 rounded-full hover:bg-orange-500 transition"
            >
              Apply Now
            </button>

            <div className="flex items-center gap-2 mt-4">
              {/* SVG Icon */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4092 8.64013V8.59013C20.7046 6.66635 19.4261 5.00541 17.7467 3.83199C16.0673 2.65857 14.068 2.0293 12.0192 2.0293C9.97047 2.0293 7.97115 2.65857 6.29173 3.83199C4.6123 5.00541 3.33382 6.66635 2.62922 8.59013C2.62922 8.59013 2.62922 8.59013 2.62922 8.64013C1.84234 10.811 1.84234 13.1892 2.62922 15.3601V15.4101C3.33382 17.3339 4.6123 18.9948 6.29173 20.1683C7.97115 21.3417 9.97047 21.971 12.0192 21.971C14.068 21.971 16.0673 21.3417 17.7467 20.1683C19.4261 18.9948 20.7046 17.3339 21.4092 15.4101C21.4092 15.4101 21.4092 15.4101 21.4092 15.3601C22.1961 13.1892 22.1961 10.811 21.4092 8.64013ZM4.25922 14.0001C3.91153 12.6895 3.91153 11.3108 4.25922 10.0001H6.11922C5.95896 11.3286 5.95896 12.6716 6.11922 14.0001H4.25922ZM5.07922 16.0001H6.47922C6.71268 16.8924 7.04823 17.7547 7.47922 18.5701C6.49852 17.9021 5.67872 17.0242 5.07922 16.0001ZM6.47922 8.00013H5.07922C5.67009 6.97921 6.47941 6.10159 7.44922 5.43013C7.02858 6.24684 6.70311 7.10915 6.47922 8.00013ZM10.9992 19.7001C9.77098 18.7988 8.90837 17.4854 8.56922 16.0001H10.9992V19.7001ZM10.9992 14.0001H8.13922C7.95313 12.6733 7.95313 11.327 8.13922 10.0001H10.9992V14.0001ZM10.9992 8.00013H8.56922C8.90837 6.51489 9.77098 5.20144 10.9992 4.30013V8.00013ZM18.9192 8.00013H17.5192C17.2858 7.10788 16.9502 6.24552 16.5192 5.43013C17.4999 6.0982 18.3197 6.97607 18.9192 8.00013ZM12.9992 4.30013C14.2275 5.20144 15.0901 6.51489 15.4292 8.00013H12.9992V4.30013ZM12.9992 19.7001V16.0001H15.4292C15.0901 17.4854 14.2275 18.7988 12.9992 19.7001ZM15.8592 14.0001H12.9992V10.0001H15.8592C16.0453 11.327 16.0453 12.6733 15.8592 14.0001ZM16.5492 18.5701C16.9802 17.7547 17.3158 16.8924 17.5492 16.0001H18.9492C18.3497 17.0242 17.5299 17.9021 16.5492 18.5701ZM19.7392 14.0001H17.8792C17.961 13.3366 18.001 12.6686 17.9992 12.0001C18.001 11.3316 17.961 10.6636 17.8792 10.0001H19.7392C20.0869 11.3108 20.0869 12.6895 19.7392 14.0001Z"
                  fill="#FF9E28"
                />
              </svg>

              {/* Anchor link */}
              <a
                href="https://www.creditmitra.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 underline font-poppins text-sm"
              >
                www.creditmitra.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
