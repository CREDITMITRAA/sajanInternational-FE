import React from "react";
import Header from "../../Header";

const CustomerRights = () => {
    return (
        <div className="font-roboto text-blue-950 min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-20">
                <Header />
            </div>

            <div className="pt-36 px-4 md:px-12 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-500">
                    Grievance Redressal
                </h1>

                <div className="space-y-8 text-justify leading-relaxed">
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Grievance Redressal Officer</h2>
                        <p className="mb-4">
                            Customers are requested to address all their grievances at the first instance to the Grievance Redressal Officer. The contact details of the Grievance Redressal Officer are as provided below.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-md">
                            <p className="font-semibold">Rasheed Mohammad</p>
                            <p><span className="font-medium">Address:</span> Office No-903, 9th Floor, D-Mall, Netaji Subhash Place, Pitampura, North West, New Delhi, Delhi, India, 110034</p>
                            <p><span className="font-medium">Contact number:</span> +91 9951703178</p>
                            <p><span className="font-medium">Email ID:</span> <a href="mailto:grievance@sajaninternational.com" className="text-blue-700 underline">grievance@sajaninternational.com</a></p>
                        </div>
                        <p className="mt-4">
                            The Grievance Redressal Officer may be reached on the number provided above anytime between 10:00 am and 6:00 pm on weekdays except public holidays or through the e-mail address above. The Grievance Redressal Officer shall endeavor to resolve the grievance within a period of fifteen days from the date of receipt of a grievance.
                        </p>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Nodal Officer</h2>
                        <p className="mb-4">
                            If the customer does not receive a response from the Grievance Redressal Officer within 15 days of making a representation, or if the customer is not satisfied with the response received from the Grievance Redressal Officer, the customer may reach the Nodal Officer on the number below anytime between 10:00am and 6:00 pm on weekdays except public holidays or write to the Nodal Officer at the e-mail address below. The contact details of our Nodal Officer are provided below:
                        </p>
                        <div className="bg-blue-50 p-4 rounded-md">
                            <p className="font-semibold">Mr. Priyesh Ranjan</p>
                            <p><span className="font-medium">Address:</span> Office No-903, 9th Floor, D-Mall, Netaji Subhash Place, Pitampura, North West, New Delhi, Delhi, India, 110034</p>
                            <p><span className="font-medium">Contact number:</span> +91 9951703178</p>
                            <p><span className="font-medium">Email ID:</span> <a href="mailto:nodal@sajaninternational.com" className="text-blue-700 underline">nodal@sajaninternational.com</a></p>
                        </div>
                    </section>

                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Complaints to Ombudsman</h2>
                        <p className="mb-4">
                            In case the customer does not receive a response from the Grievance Redressal Officer or the Nodal Officer within one month from the date of making a representation to the Company, or if the customer is not satisfied with the response so received, a complaint may be made in accordance with the 'The Reserve Bank - Integrated Ombudsman Scheme, 2021' ("Ombudsman Scheme") to the Ombudsman in whose jurisdiction the office of the Company complained against, is located.
                        </p>
                        <p className="mb-2">
                            To Know more about the Ombudsman Scheme, click the link below:
                        </p>
                        <div className="bg-blue-50 p-4 rounded-md">
                            <a 
                                href="https://rbidocs.rbi.org.in/rdocs/content/pdfs/RBIOS2021_121121.pdf" 
                                className="text-blue-700 underline break-all"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                https://rbidocs.rbi.org.in/rdocs/content/pdfs/RBIOS2021_121121.pdf
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CustomerRights;