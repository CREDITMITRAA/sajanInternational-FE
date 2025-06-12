import React from "react";
import ContactHeroImage from "../../Images/assests/contact-hero-image.png";
import ContactIllustration from "../../Images/assests/contact-illustration.png";
import Header from "../Header"; // Adjust the import path as necessary

const Contact = () => {
    return (
        <div className="font-sans bg-gradient-to-roboto from-[#e6f0ff] to-white">
            {/* Hero Section */}
            <div
                className="relative h-[300px] md:h-[450px] lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${ContactHeroImage})` }}
            >
                <div className="text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Contact <span className="text-orange-500">Us</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg text-left">
                        At Samicint, we value your feedback and inquiries. Whether you have questions
                        about our services, need assistance with an existing account, or want to explore
                        new financial opportunities, we are here to help.
                    </p>
                </div>
                  <div className="fixed top-0 left-0 right-0 z-20">
            <Header />
          </div>
            </div>

            {/* Form and Info Section */}
            <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 bg-white shadow-lg rounded-lg p-6 md:p-10">

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-blue-950 mb-2">
                            Get in <span className="text-orange-500">touch</span>
                        </h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Feel free to connect with us with any questions or queries.
                            Werobotore dedicated to providing you with the best possible experience.
                        </p>

                        <form className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-blue-950/25 rounded-[5px] px-4 py-3 bg-blue-950/10 text-sm placeholder-blue-950/60 font-[robotorobotoroboto] focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-blue-950/25 rounded-[5px] px-4 py-3 bg-blue-950/10 text-sm placeholder-blue-950/60 font-[robotoroboto'] focus:outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border border-blue-950/25 rounded-[5px] px-4 py-3 bg-blue-950/10 text-sm placeholder-blue-950/60 font-roboto focus:outline-none"
                            />

                            {/* Updated Textarea */}
                            <div className="w-full h-32 relative bg-blue-950/10 rounded-[5px] outline outline-1 outline-blue-950/25">
                                <textarea
                                    className="w-full h-full px-4 pt-8 pb-2 bg-transparent resize-none text-blue-950 text-sm font-normal font-roboto placeholder-blue-950/60 focus:outline-none"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            {/* Figma Styled Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-72 px-2.5 py-3 bg-blue-950 rounded-[30px] inline-flex justify-center items-center gap-2.5 hover:bg-blue-900 transition"
                            >
                                <span className="text-white text-base font-bold font-['robotoroboto]">
                                    Submit
                                </span>
                            </button>
                        </form>
                    </div>

                    <div className="hidden md:flex justify-center">
                        <div className="h-full flex items-center">
                            <svg className="h-full" width="2" viewBox="0 0 2 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L1.00002 512" stroke="#061B4E" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>


                    {/* Contact Info Section */}
                    <div className="flex flex-col justify-center items-start gap-6">
                        <img
                            src={ContactIllustration}
                            alt="Contact Illustration"
                            className="w-full md:w-3/4 mx-auto"
                        />
                        <div className="text-sm text-gray-800 space-y-4 w-full">
                            {/* Location */}
                            <div className="flex items-start gap-3">
                                <div data-svg-wrapper className="relative mt-1">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z"
                                            fill="#061B4E"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    4th Floor, roboto-Wing, Purva Summit, Whitefields Road,<br />
                                    Hitec City, Kondapur, Telangana - 500081
                                </p>
                            </div>


                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <div data-svg-wrapper className="relative mt-1">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.3274 22.4996C17.4124 22.4996 16.1271 22.1686 14.2024 21.0933C11.862 19.7808 10.0516 18.5691 7.72383 16.2474C5.47946 14.0044 4.38727 12.5522 2.85868 9.77066C1.1318 6.63003 1.42618 4.98378 1.75524 4.28019C2.14712 3.43925 2.72555 2.93628 3.47321 2.43707C3.89787 2.15883 4.34727 1.92032 4.81571 1.72457C4.86258 1.70441 4.90618 1.68519 4.94508 1.66785C5.17712 1.56332 5.52868 1.40535 5.97399 1.5741C6.27118 1.68566 6.53649 1.91394 6.9518 2.3241C7.80352 3.1641 8.96743 5.03488 9.3968 5.95363C9.68508 6.57285 9.87587 6.9816 9.87633 7.44003C9.87633 7.97675 9.60633 8.39066 9.27868 8.83738C9.21727 8.92128 9.15633 9.00144 9.09727 9.07925C8.74055 9.548 8.66227 9.68347 8.71383 9.92535C8.81837 10.4114 9.5979 11.8585 10.879 13.1368C12.1601 14.415 13.5654 15.1453 14.0534 15.2494C14.3056 15.3033 14.4438 15.2218 14.9276 14.8524C14.997 14.7994 15.0682 14.7446 15.1427 14.6897C15.6424 14.318 16.0371 14.055 16.5612 14.055H16.564C17.0201 14.055 17.4106 14.2528 18.0574 14.5791C18.9012 15.0047 20.8282 16.1536 21.6734 17.0063C22.0845 17.4207 22.3137 17.685 22.4257 17.9818C22.5945 18.4285 22.4356 18.7786 22.332 19.013C22.3146 19.0519 22.2954 19.0946 22.2752 19.1419C22.0779 19.6095 21.838 20.058 21.5585 20.4816C21.0602 21.2269 20.5554 21.8039 19.7126 22.1963C19.2798 22.401 18.8062 22.5047 18.3274 22.4996Z"
                                            fill="#061B4E"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    <p>+91 99519703178 | +91 99519703178</p>

                                </p>
                            </div>


                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <div data-svg-wrapper className="relative mt-1">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.6064 13.6008L12.0024 15.9228L15.276 13.6644L22.614 20.904C22.4204 20.9672 22.2156 20.9992 21.9996 21H2.0004C1.7364 21 1.4844 20.9484 1.2528 20.856L8.6064 13.6008ZM24 7.6512V18.9996C24 19.296 23.9352 19.5768 23.82 19.83L16.6272 12.7332L24 7.6512ZM0 7.7148L7.2504 12.6732L0.1272 19.7028C0.0437553 19.4777 0.00069479 19.2397 0 18.9996L0 7.7148ZM21.9996 3C23.1036 3 24 3.8952 24 5.0004V5.7036L11.9976 13.9776L0 5.772V5.0004C0 3.8964 0.8952 3 2.0004 3H21.9996Z"
                                            fill="#061B4E"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    support@creditmittra.in
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
