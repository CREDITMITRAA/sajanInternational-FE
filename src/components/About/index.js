import React from 'react';
import HeroImage from '../../Images/assests/about-us-hero.png'; // Replace with actual image path
import Header from '../Header'; // Adjust the import path as necessary
 // Assuming Next.js or adapt if needed

const About = () => {
  return (
    <div className="bg-blue-50 text-blue-950 font-sans">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center text-center px-6 py-16" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="p-8 rounded">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-orange-400">Us</span>
          </h1>
          <p className="text-white max-w-3xl mx-auto">
            [NBFC Name] is a trusted financial institution dedicated to providing easy, fast, and transparent loan solutions. Since [Year], we have been helping individuals achieve their financial goals with seamless access to credit. Our commitment to innovation and customer satisfaction drives us to make borrowing effortless and stress-free.
          </p>
        </div>
           <div className="fixed top-0 left-0 right-0 z-20">
                    <Header />
                  </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">Our Vision</h2>
        <p>
          [NBFC Name] is a trusted financial institution dedicated to providing easy, fast, and transparent loan solutions. Since [Year], we have been helping individuals achieve their financial goals with seamless access to credit. Our commitment to innovation and customer satisfaction drives us to make borrowing effortless and stress-free.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">Our Mission</h2>
        <p>
          Our mission is to make borrowing simple, reliable, and inclusive. We are dedicated to offering flexible loan options with fair terms, ensuring that individuals and businesses get the support they need at the right time. Through innovation, ethical practices, and customer-first policies, we aim to drive financial growth and independence for millions.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-8">Our Leadership</h2>
        <p className="text-center mb-10">A team of experienced professionals leading with vision, integrity, and a passion for financial inclusion.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1,2,3,4].map((_, i) => (
            <div key={i} className="bg-blue-100 p-4 rounded-xl shadow">
              <div className="h-48 bg-gray-300 rounded mb-4"></div> {/* Replace with actual image */}
              <h3 className="font-semibold">Murthy Balaji, <span className="text-orange-500">Director</span></h3>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-blue-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">Our Partner</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="h-64 bg-gray-300 rounded-xl"></div> {/* Replace with actual image */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2 text-orange-500">CreditMitra</h3>
            <p className="mb-4 text-sm">
              CreditMitra is redefining the lending experience for young salaried individuals, offering a seamless and transparent financial solution... [Truncate as needed or make it scrollable]
            </p>
            <a href="https://www.creditmitra.in" className="text-blue-600 hover:underline">www.creditmitra.in</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
