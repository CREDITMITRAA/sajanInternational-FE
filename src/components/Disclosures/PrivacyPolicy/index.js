import React from "react";
import Header from "../../Header";

const PrivacyPolicy = () => {
    return (
        <div className="text-blue-950 font-roboto min-h-screen">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 right-0 z-20">
                <Header />
            </div>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
                <section className="space-y-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center">
                        Privacy Policy
                    </h1>

                    <p className="text-sm sm:text-base leading-relaxed">
                        This Privacy Policy ("Privacy Policy") has been prepared by <strong>Sajan International Private Limited</strong> (“Sajan International”, “We”, “Our”, “Us”), a private limited company incorporated in India (CIN U74899DL1980PTC010483), having its registered office at 3rd Floor, No. 128/9, Maruthi Sapphire, HAL Old Airport Road, Murgesh Palya, Bangalore 560017. Sajan International is a Systemically Important Non-Deposit Taking Non Banking Financial Company registered with the Reserve Bank of India ("RBI").
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        Sajan International provides you, the user, (“You”, “Your” or “User”) loans through offline mode as well as through websites, digital lending applications (“DLAs”) and platforms which are either owned and operated by itself or belong to its Lending Service Providers (“LSPs”).
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        The Privacy Policy summarizes all types of information or data (“Information”) that is collected from You by Us, the manner in which it is collected and shared with other third parties as detailed under this Privacy Policy, along with the purpose of collection for each, retention period, the parties that have access and store such Information, and whether provision of such Information is mandatory or optional for availing the lending products being offered by the Company (“Services”) when You use:
                        <br /> (a) our website 
                               {" "}
                            <a
                                href="https://www.sajaninternational.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-orange-500 transition"
                            >
                                Sajan International
                            </a>
                            {" "}
                            (“Website”), and
                        <br /> (b) other loan sourcing websites and applications in order to avail lending services on which the Company is currently lending or through which it is directly sourcing its customers.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        You are advised to read this Privacy Policy along with the terms of use and other Information on Sajan International’s website/ applications. Users please take note that any statements made on Sajan International’s website/ applications shall not be construed as an offer or promises for grant of any financial services.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        This Privacy Policy has been prepared in compliance with:
                    </p>

                    <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base pl-6">
                        <li>Information Technology Act, 2000 (“IT Act”);</li>
                        <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011;</li>
                        <li>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021;</li>
                        <li>Digital Personal Data Protection Act, 2023 (“DPDPA”) and corresponding rules as may be notified from time to time;</li>
                        <li>Guidelines on Digital Lending issued by the Reserve Bank of India (RBI), 2022 (“DLG”); and</li>
                        <li>
                            other applicable acts, regulations and rules which require the publishing of a privacy policy for handling of or dealing in personal information including sensitive personal Information and all applicable laws, regulations, guidelines provided by applicable regulatory authorities including but not limited to the Reserve Bank of India (“RBI”).
                        </li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">
                        1. Use of our website or services
                    </h2>

                    <p className="text-sm sm:text-base leading-relaxed">
                        This Privacy Policy is incorporated into and at all times is subject to and is to be read in conjunction with the Terms of Use of the Website.
                    </p>

                    {/* Section 2: Collection of Information */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">
                        2. Collection of information
                    </h2>

                    <h3 className="text-lg font-semibold text-blue-950">
                        2.1. Information we collect on our Website or from our LSPs, DLAs and Direct Selling Agents (“DSA(s)”)
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed">
                        2.1.1. All Information collected by Us for provision of our Services is done through the means of:
                    </p>
                    <ul className="list-decimal list-inside space-y-2 pl-6 text-sm sm:text-base leading-relaxed">
                        <li>Information provided by You by filling in forms on the Website;</li>
                        <li>Information provided by You to our LSPs, DLAs and DSAs for availing our Services;</li>
                        <li>Information provided during communications with us (for example, by e-mail or chat) in relation to any Services;</li>
                        <li>Information that You provide when You subscribe to any Services (such as applying for a loan), search for a loan product, and when You report a problem with any of our Services;</li>
                        <li>Information received by Us from third parties (detailed in Para 2.3 below) based on consents given by You to them in terms of their privacy policies; and</li>
                        <li>Information generated by Your usage of our Website.</li>
                    </ul>

                    <p className="text-sm sm:text-base leading-relaxed">
                        This collection of Information is further detailed below.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        2.1.2. All Information accessed by Us for provision of our Services is collected, processed, stored and shared in a secure manner and to ensure that all the recipients of Your personal information comply with data protection, confidentiality, fidelity and secrecy obligations and duly execute covenants in this regard.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        2.1.3. We have indicated in this Policy the mandatory and the optional fields of Information required from You. If You exercise the option to not provide any mandatorily required Information, the Company reserves the right to deny You the Service.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        2.1.4. The personal Information which is collected by Us is collected (a) directly or (b) via our DLAs by taking access of Your mobile phone applications or (c) through third parties, such third party details are disclosed in Para 2.3 below, its purpose (summarized below and as further detailed under “Purpose” section of this Privacy Policy) and whether the Information to be provided by the User is mandatory or optional, for availing any Services, is listed below:
                    </p>

                    {/* Scrollable Table */}
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-[900px] table-auto border border-gray-400 text-sm sm:text-base">
                            <thead className="bg-sky-200 text-blue-950 font-semibold">
                                <tr>
                                    <th className="border border-gray-300 px-3 py-2 text-left">S No.</th>
                                    <th className="border border-gray-300 px-3 py-2 text-left">Information Category</th>
                                    <th className="border border-gray-300 px-3 py-2 text-left">Purpose</th>
                                    <th className="border border-gray-300 px-3 py-2 text-left">Mandatory/ Optional</th>
                                </tr>
                            </thead>
                            <tbody className="text-blue-950">
                                <tr>
                                    <td className="border px-3 py-2">1</td>
                                    <td className="border px-3 py-2">Personal and Demographic Information including but not limited to Mobile, Email, Name, Gender, DOB, Address</td>
                                    <td className="border px-3 py-2">Account Creation, Identity Verification, Customer KYC, Fraud Prevention, Underwriting, Enabling Communication and Customer Support, Legal Compliance, Advertisement and Marketing</td>
                                    <td className="border px-3 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">2</td>
                                    <td className="border px-3 py-2">Asset Information</td>
                                    <td className="border px-3 py-2">Underwriting and assessing financial repayment capability</td>
                                    <td className="border px-3 py-2">Optional</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">3</td>
                                    <td className="border px-3 py-2">PAN and Credit Information from Bureaus</td>
                                    <td className="border px-3 py-2">Underwriting, Legal Compliance</td>
                                    <td className="border px-3 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">4</td>
                                    <td className="border px-3 py-2">Device hardware Information, app usage Information</td>
                                    <td className="border px-3 py-2">Identity Verification and Fraud Prevention</td>
                                    <td className="border px-3 py-2">Mandatory if applied through DLAs</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">5</td>
                                    <td className="border px-3 py-2">KYC Information</td>
                                    <td className="border px-3 py-2">Identity Verification and Fraud Prevention, Legal Compliance</td>
                                    <td className="border px-3 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">6</td>
                                    <td className="border px-3 py-2">Geolocation and IP Information</td>
                                    <td className="border px-3 py-2">Identity Verification and Fraud Prevention</td>
                                    <td className="border px-3 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">7</td>
                                    <td className="border px-3 py-2">Reference Information</td>
                                    <td className="border px-3 py-2">Identity Verification, Fraud Prevention, and Loan Repayment</td>
                                    <td className="border px-3 py-2">Mandatory (Creditmitra Android & Website), Optional (others)</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">8</td>
                                    <td className="border px-3 py-2">SMS and Installed Apps Information</td>
                                    <td className="border px-3 py-2">Identity Verification, Fraud Prevention, Underwriting</td>
                                    <td className="border px-3 py-2">Mandatory (Creditmitra Android), Optional (others)</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">9</td>
                                    <td className="border px-3 py-2">Transaction Information</td>
                                    <td className="border px-3 py-2">Legal Compliance</td>
                                    <td className="border px-3 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">10</td>
                                    <td className="border px-3 py-2">Usage Information</td>
                                    <td className="border px-3 py-2">Enabling and enhancing Digital Lending Services</td>
                                    <td className="border px-3 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">11</td>
                                    <td className="border px-3 py-2">Feedback and similar Information</td>
                                    <td className="border px-3 py-2">For Enabling Our Services on the DLAs</td>
                                    <td className="border px-3 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">12</td>
                                    <td className="border px-3 py-2">Risk evaluation score</td>
                                    <td className="border px-3 py-2">Underwriting</td>
                                    <td className="border px-3 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">13</td>
                                    <td className="border px-3 py-2">Employment Information</td>
                                    <td className="border px-3 py-2">Underwriting and assessing financial repayment capability</td>
                                    <td className="border px-3 py-2">Mandatory for Salaried individuals</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">14</td>
                                    <td className="border px-3 py-2">Financial Information</td>
                                    <td className="border px-3 py-2">Underwriting and assessing financial repayment capability</td>
                                    <td className="border px-3 py-2">Mandatory for Salaried individuals</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section 2.2: Collection of Other Non-Personal Information */}
                    <h3 className="text-lg font-semibold text-blue-950 mt-6">
                        2.2. Collection of other Non-Personal Information
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed">
                        2.2.1. We automatically track certain Information (such as browser details, device details and usage details) about You based upon Your behaviour on our Website. We use this information to do internal research on our users’ demographics, interests, and behaviour to better understand, protect and serve our users and improve our services. This information is compiled and analysed on an aggregated basis.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        2.2.2. <strong>Cookies:</strong> Cookies are small data files that the Website stores on Your computer. Use of this Information helps Us identify You in order to make our Website more user friendly. We do not store personal/identity Information in the cookies. You have the right to reject our access to Cookies since most browsers will permit You to decline cookies but if You choose to do this it might affect service on some parts of Our Website.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed">
                        2.2.3. If You choose to avail any Services through any DLA, we collect Information about the manner in which You are using the DLA. We retain this Information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law. If You send us personal correspondence, such as emails or letters, or if other users or third parties (detailed below) send us correspondence about Your activities or postings on the Website, we collect such Information into a file specific to You.
                    </p>

                    {/* Section 2.3: Information from Third Parties */}
                    <h3 className="text-lg font-semibold text-blue-950 mt-6">
                        2.3. Information we collect about You from third parties:
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed">
                        2.3.1. For making the Services available to You, we may collect credit Information in accordance with applicable laws, from the following third parties:
                    </p>

                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full text-sm border border-blue-950/20">
                            <thead className="bg-blue-100 text-blue-950">
                                <tr>
                                    <th className="border border-blue-950/20 px-4 py-2 text-left font-semibold">S No.</th>
                                    <th className="border border-blue-950/20 px-4 py-2 text-left font-semibold">Third Party</th>
                                    <th className="border border-blue-950/20 px-4 py-2 text-left font-semibold">Type of Information Collected</th>
                                </tr>
                            </thead>
                            <tbody className="text-blue-950">
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">1</td>
                                    <td className="border border-blue-950/20 px-4 py-2">UIDAI</td>
                                    <td className="border border-blue-950/20 px-4 py-2">KYC Information</td>
                                </tr>
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">2</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Account Aggregators and Financial Institutions</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Bank statement and other Financial Information</td>
                                </tr>
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">3</td>
                                    <td className="border border-blue-950/20 px-4 py-2">
                                        Central Registry of Securitisation Asset Reconstruction and Security Interest (“CERSAI”)
                                    </td>
                                    <td className="border border-blue-950/20 px-4 py-2">CKYC Information</td>
                                </tr>
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">4</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Razorpay India Innovations Private Limited</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Risk evaluation score</td>
                                </tr>
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">5</td>
                                    <td className="border border-blue-950/20 px-4 py-2">National Securities Depository Limited</td>
                                    <td className="border border-blue-950/20 px-4 py-2">PAN verification records</td>
                                </tr>
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">6</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Digilocker</td>
                                    <td className="border border-blue-950/20 px-4 py-2">KYC Information</td>
                                </tr>
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">7</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Credit Bureaus</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Credit Information</td>
                                </tr>
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">8</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Official GSTIN API stack</td>
                                    <td className="border border-blue-950/20 px-4 py-2">GSTIN records and Information</td>
                                </tr>
                                <tr>
                                    <td className="border border-blue-950/20 px-4 py-2">9</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Udyam registration database</td>
                                    <td className="border border-blue-950/20 px-4 py-2">Udyam certificate and associated details</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed mt-4">
                        2.3.2. We collect and use this Information on a need basis for the provision of Services and for performing due diligence and verification of Your loan application. Please see paragraph 2.5 below for the consents we obtain from You in relation to the Information sought for obtaining Information from the third parties.
                    </p>

                    {/* Section 2.4: Information collected via DLAs */}
                    <h3 className="text-lg font-semibold text-blue-950 mt-6">
                        2.4. Information collected via DLAs
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed mt-2">
                        2.4.1. <strong>Creditmitra</strong>
                    </p>

                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full text-sm border border-blue-950/20">
                            <thead className="bg-blue-100 text-blue-950">
                                <tr>
                                    <th className="border px-4 py-2 text-left">S. No.</th>
                                    <th className="border px-4 py-2 text-left">Information</th>
                                    <th className="border px-4 py-2 text-left">Purpose</th>
                                    <th className="border px-4 py-2 text-left">Mandatory/ Optional</th>
                                </tr>
                            </thead>
                            <tbody className="text-blue-950">
                                <tr>
                                    <td className="border px-4 py-2">1</td>
                                    <td className="border px-4 py-2">
                                        Personal Information<br />
                                        • Name<br />
                                        • Email address<br />
                                        • User ID (including social account)<br />
                                        • Phone number<br />
                                        • Address<br />
                                        • Gender and Date of Birth
                                    </td>
                                    <td className="border px-4 py-2">
                                        App functionality*, Advertisement and Marketing<br />
                                        As covered under Paragraph 2.1.4
                                    </td>
                                    <td className="border px-4 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">Approximate Location</td>
                                    <td className="border px-4 py-2">App functionality*, Advertisement and Marketing</td>
                                    <td className="border px-4 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">Device & Log Info (IP, crashes, date, etc.)</td>
                                    <td className="border px-4 py-2">App functionality*, Advertisement, Data analytics</td>
                                    <td className="border px-4 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">App Information (Crash logs, Diagnostics)</td>
                                    <td className="border px-4 py-2">Analytics</td>
                                    <td className="border px-4 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">5</td>
                                    <td className="border px-4 py-2">Audio (voluntary recordings for support)</td>
                                    <td className="border px-4 py-2">App functionality*</td>
                                    <td className="border px-4 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">6</td>
                                    <td className="border px-4 py-2">Photos/Videos (KYC or support uploads)</td>
                                    <td className="border px-4 py-2">App functionality*</td>
                                    <td className="border px-4 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">7</td>
                                    <td className="border px-4 py-2">Financial Info (payments, e-NACH, etc.)</td>
                                    <td className="border px-4 py-2">App functionality*</td>
                                    <td className="border px-4 py-2">Mandatory</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">8</td>
                                    <td className="border px-4 py-2">Other Files & Docs (bank statements, GST)</td>
                                    <td className="border px-4 py-2">App functionality*, Fraud Prevention, Legal Compliance</td>
                                    <td className="border px-4 py-2">Optional</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">9</td>
                                    <td className="border px-4 py-2">Financial SMS Information (6-digit alpha sources)</td>
                                    <td className="border px-4 py-2">App functionality*, Fraud Prevention, Legal Compliance</td>
                                    <td className="border px-4 py-2">Mandatory</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed mt-4 italic">
                        *The term ‘App functionality’ means the Information collected for provision of any of the services on, and improving the overall performance of the Creditmitra DLA.
                    </p>

                    {/* Section 2.5: Consents */}
                    <h3 className="text-lg font-semibold text-blue-950 mt-8">
                        2.5. Consents sought as part of rendering the Services (through our Website or LSPs/DLAs)
                    </h3>


                    <div className="overflow-x-auto rounded-lg shadow">
                        <table className="min-w-full table-auto border border-blue-200 text-sm md:text-base">
                            <thead className="bg-blue-100 text-blue-950">
                                <tr>
                                    <th className="border border-blue-200 px-4 py-2">S. No.</th>
                                    <th className="border border-blue-200 px-4 py-2">Nature of Consent Sought</th>
                                    <th className="border border-blue-200 px-4 py-2">Purpose</th>
                                    <th className="border border-blue-200 px-4 py-2">Consent Type</th>
                                    <th className="border border-blue-200 px-4 py-2">Mandatory/Optional</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        sn: 1,
                                        consent: "Your consent that You have read the terms of our Terms of Use/Terms & Conditions and this Privacy Policy",
                                        purpose: "Loan Servicing",
                                        type: "Recurring",
                                        status: "Mandatory"
                                    },
                                    {
                                        sn: 2,
                                        consent: "Consent for sending promotional communication via SMS, Email and WhatsApp",
                                        purpose: "Loan Servicing",
                                        type: "Recurring",
                                        status: "Mandatory at the time of registration (can be opted out later)"
                                    },
                                    {
                                        sn: 3,
                                        consent: "Consent for verifying Your PAN on the various PAN databases",
                                        purpose: "Customer KYC",
                                        type: "Recurring",
                                        status: "Mandatory"
                                    },
                                    {
                                        sn: 4,
                                        consent: "Consent for increasing Your credit limit (if required) for availing any loan product on the Creditmitra Application.",
                                        purpose: "Customer KYC",
                                        type: "One-time",
                                        status: "Optional"
                                    },
                                    {
                                        sn: 5,
                                        consent: "Consent for offline submission of Your Aadhaar",
                                        purpose: "Customer KYC (for submission of paperless Aadhaar and provide Your masked Aadhaar and related data)",
                                        type: "One-time",
                                        status: "Mandatory (if option availed)"
                                    },
                                    {
                                        sn: 6,
                                        consent: "Consent to obtain Your CKYC record from CERSAI for CKYC verification",
                                        purpose: "Customer KYC",
                                        type: "Recurring",
                                        status: "Mandatory"
                                    },
                                    {
                                        sn: 7,
                                        consent: "Consent that Your monthly household income is above INR 25,000",
                                        purpose: "Underwriting",
                                        type: "One-time",
                                        status: "Mandatory"
                                    },
                                    {
                                        sn: 8,
                                        consent: "Consent for acceptance of Terms of Use for completing video KYC",
                                        purpose: "Underwriting",
                                        type: "One-time",
                                        status: "Mandatory"
                                    },
                                    {
                                        sn: 9,
                                        consent: "Consent for submission of e-KYC; Consent to obtaining Credit Bureau Report",
                                        purpose: "Customer KYC",
                                        type: "One-time",
                                        status: "Mandatory (if option availed)"
                                    },
                                    {
                                        sn: 10,
                                        consent: "Consent for obtaining Your Udyam registration status",
                                        purpose: "Underwriting",
                                        type: "One-time",
                                        status: "Mandatory (if applicable)"
                                    },
                                    {
                                        sn: 11,
                                        consent: "Consent for availing insurance services",
                                        purpose: "Loan Servicing",
                                        type: "One-time",
                                        status: "Mandatory (if insurance option availed)"
                                    },
                                    {
                                        sn: 12,
                                        consent: "Consent to fetch Your credit report from credit Information bureaus",
                                        purpose: "Underwriting, Loan Servicing",
                                        type: "Recurring",
                                        status: "Mandatory (if credit report option availed)"
                                    },
                                    {
                                        sn: 13,
                                        consent: "Consent for obtaining Your financial SMS Information (6 digit alphanumeric source) and installed apps on Your device",
                                        purpose: "Underwriting, Fraud Prevention, Loan Servicing",
                                        type: "Recurring",
                                        status: "Mandatory for all Loan Products on Creditmitra DLA on Android. Optional for Creditmitra DLA on iOS. Optional for all other DLAs"
                                    },
                                    {
                                        sn: 14,
                                        consent: "Consent for collecting Your financial Information from account aggregators",
                                        purpose: "Underwriting",
                                        type: "Recurring",
                                        status: "Optional"
                                    },
                                    {
                                        sn: 15,
                                        consent: "Consent to access Your Location and IP Information",
                                        purpose: "Customer KYC, Fraud Prevention",
                                        type: "One-time",
                                        status: "Mandatory if Services are availed"
                                    },
                                    {
                                        sn: 16,
                                        consent: "Consent to access Your Microphone",
                                        purpose: "Customer KYC, Fraud Prevention",
                                        type: "One-time",
                                        status: "Mandatory"
                                    },
                                    {
                                        sn: 17,
                                        consent: "Consent to access Your camera (to share photos of necessary documents)",
                                        purpose: "Customer KYC, Fraud Prevention",
                                        type: "One-time",
                                        status: "Mandatory"
                                    },
                                    {
                                        sn: 18,
                                        consent: "Consent to get Your risk evaluation score from payment gateways",
                                        purpose: "Underwriting",
                                        type: "Recurring",
                                        status: "Mandatory"
                                    }
                                ].map(({ sn, consent, purpose, type, status }) => (
                                    <tr key={sn} className="odd:bg-white even:bg-blue-50">
                                        <td className="border border-blue-200 px-4 py-2 text-center">{sn}</td>
                                        <td className="border border-blue-200 px-4 py-2 whitespace-pre-wrap">{consent}</td>
                                        <td className="border border-blue-200 px-4 py-2 whitespace-pre-wrap">{purpose}</td>
                                        <td className="border border-blue-200 px-4 py-2 whitespace-nowrap text-center">{type}</td>
                                        <td className="border border-blue-200 px-4 py-2 whitespace-pre-wrap">{status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Purpose of collection */}
                    {/* <section className="max-w-6xl mx-auto w-full px-4 py-8 text-blue-950 font-sans"> */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-4">
                        3. Purpose of Collection
                    </h2>

                    <p className="mb-4 text-justify">
                        <strong>3.1.</strong> We understand the importance of Your Information and as a responsible company,
                        we strive to ensure that it is used for the following intended purposes only.
                        We shall use the Information collected from You for facilitating the Services for the
                        following purposes as detailed below.
                    </p>

                    <p className="mb-6 text-justify">
                        <strong>3.2.</strong> At various stages during Your loan journey (i.e. from the moment You register
                        on the DLAs for availing a Service till the closure of all loan products availed by You),
                        we collect different sets of Information via the DLAs. The intended purpose of collecting
                        such Information provided by You is summarized below:
                    </p>

                    <div className="overflow-x-auto mb-6">
                        <table className="min-w-full table-auto border border-gray-300 text-sm text-left">
                            <thead className="bg-sky-200">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">Used For</th>
                                    <th className="border border-gray-300 px-4 py-2">Purpose</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">
                                        Account creation and registration
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        Your personal Information is collected to establish/verify Your identity, and to create and verify Your account.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Enabling the Services</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        We use this Information to enable Our Services on the DLAs and Website, and features that help You check loan and transaction history.
                                        This also provides us with critical usage and feedback Information on the activity on the DLAs.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">
                                        Supporting Customer KYC, Underwriting, and Loan Processing
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        We collect and analyze KYC documents, employment status, creditworthiness, and other details to assess eligibility and process loans.
                                        You consent to provide KYC documents and allow us to fetch details from the Central KYC Records Registry. We may share such data
                                        with third parties for processing or communication.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">For Enabling Customer Support</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        Used to provide support, respond to queries, and facilitate transactions. Reference contacts may be used if You are unreachable,
                                        especially during repayment collection.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Data Analytics</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        We use the data to trigger automated actions like flagging unclear photos, fraud, or errors, and to recommend services. We may measure
                                        satisfaction and manage our relationship with You.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">
                                        For Enabling Communications Between You and Us
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        Includes features and communication tools that help Us respond to applications, queries, or provide updates. We may share or access
                                        Information for promotional or legal compliance as required by authorities.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">
                                        For Legal Compliance and Requirements
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        Information may be used to detect and prevent fraud, money laundering, illegal activities, and to comply with audits, claims, or
                                        inquiries from regulators or government entities.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Branding and Marketing</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        Your Information may be used for promotional purposes, including sharing Your ratings and reviews. We may contact You via
                                        emails/SMS/WhatsApp for marketing and to inform You about offers and services.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Clause 4: STORAGE OF PERSONAL INFORMATION */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-4">
                        4. Storage of Personal Information
                    </h2>

                    <p className="mb-4 text-justify">
                        <strong>4.1.</strong> We ensure that all personal Information collected from You is stored in servers located within India.
                    </p>

                    <p className="mb-6 text-justify">
                        <strong>4.2.</strong> No personal Information (other than basic minimal Information viz. name, address, contact details, etc.) belonging to You is collected by our DSAs/DLAs or stored by our LSPs through DLAs for provision of the Services by us. In case, if any of our representatives ask for the same from You, we request You to kindly refrain from doing the same and address this concern to our Grievance Officer (the details of the same have been provided below).
                    </p>

                    {/* Clause 5: DISCLOSURE TO THIRD PARTIES */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-4">
                        5. Disclosure to Third Parties
                    </h2>

                    <p className="mb-4 text-justify">
                        <strong>5.1.</strong> We will share Your Information only on a need-basis with the third parties as listed in this Privacy Policy including our regulated financial partners/co-lenders, vendors etc. for facilitation of Services.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>5.2.</strong> We will share Your Information with the following categories of third parties and for the purposes as described below:
                    </p>

                    <div className="overflow-x-auto mb-6">
                        <table className="min-w-full table-auto border border-gray-300 text-sm text-left">
                            <thead className="bg-sky-200 text-blue-950">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 font-medium">S. No.</th>
                                    <th className="border border-gray-300 px-4 py-2 font-medium">Party Type</th>
                                    <th className="border border-gray-300 px-4 py-2 font-medium">Purpose of Disclosure</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    ["1", "Governmental or Regulatory Authority", "Disclosure as required by law, legal process, courts or regulators."],
                                    ["2", "Debt Collection/Recovery Agents (DRAs)", "For recovery of dues related to loans availed by You."],
                                    ["3", "Service Providers for Data Analytics, Fraud and AML Checks", "To perform fraud checks and improve services."],
                                    ["4", "ASA and Aadhaar Database", "For fetching Your KYC Information."],
                                    ["5", "PAN Verification Agency", "For verifying PAN details for identity purposes."],
                                    ["6", "Banks", "For validation, loan disbursal, and mandate registration."],
                                    ["7", "Credit Bureaus", "For fetching credit profile for underwriting."],
                                    ["8", "Account Aggregators", "To fetch financial data for underwriting."],
                                    ["9", "Third Party E-signing Providers", "For digital signing of loan documents."],
                                    ["10", "Insurance Providers", "To issue insurance policies."],
                                    ["11", "Telecom Service Providers", "For sending SMS and calls."],
                                    ["12", "WhatsApp Service Providers", "For communication over WhatsApp."],
                                    ["13", "Email Service Providers", "For communication via email."],
                                    ["14", "CKYC Providers", "For fetching CKYC details."],
                                    ["15", "Payment Gateways", "To fetch risk score for underwriting."],
                                    ["16", "SIDBI", "To fetch Udyam Information."],
                                    ["17", "GSTIN Service Provider", "To fetch GSTIN details for underwriting."],
                                    ["18", "SDKs Providers", "To maintain and operate Application Programming Interface."],
                                ].map(([id, party, purpose]) => (
                                    <tr key={id}>
                                        <td className="border border-gray-300 px-4 py-2">{id}</td>
                                        <td className="border border-gray-300 px-4 py-2">{party}</td>
                                        <td className="border border-gray-300 px-4 py-2">{purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="mb-4 text-justify">
                        <strong>5.3.</strong> We will share Your Information under a confidentiality agreement with these third parties and restrict use of the said Information by these third parties specifically for the purposes detailed hereinabove. We warrant that there will be no unauthorised disclosure of Your Information shared with these third parties.
                    </p>

                    <p className="mb-4 text-justify">
                        <strong>5.4.</strong> We may share Your personal Information upon receipt of notice/communication/order, as part of Our legal obligations, as may be required by authorities. By accepting this Privacy Policy, You provide Your consent for such regulatory disclosures.
                    </p>

                    <p className="mb-2 text-justify">
                        <strong>5.5.</strong> Any disclosure to these third parties is subject to the following:
                    </p>
                    <div className="space-y-2 text-justify mb-6 ml-4">
                        <p>5.5.1. If we are under a duty to disclose or share Your personal Information in order to comply with any legal or regulatory obligation or request, we shall not seek Your explicit consent; however, we shall reasonably endeavour to notify the same to You accordingly as the case may be, as stated under this Privacy Policy.</p>
                        <p>5.5.2. We shall take Your express consent in the event we share Your personal Information with these third parties.</p>
                        <p>5.5.3. We shall share Your Information with third parties only on a need basis and only for the purpose stated hereunder, as per the applicable laws.</p>
                        <p>5.5.4. We shall additionally seek explicit consent at appropriate stages of Information collection, if so required under applicable laws.</p>
                        <p>5.5.5. Usage of Your Information by such third parties is subject to their privacy policies. We share Information with them to the extent required. We recommend You to go through the privacy policies of such third parties.</p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                            6. Data Retention and Deletion
                        </h2>
                        <p className="mb-2 text-justify">
                            6.1. We retain Your personal Information in terms of our board approved Record Retention Policy (and in compliance with all regulatory requirements and applicable laws) to provide a seamless experience, to contact You in case of support required and about Your account, to detect, mitigate, prevent, and investigate fraudulent or illegal activities during the course of the Services.
                        </p>
                        <p className="mb-2 text-justify">
                            6.2. Any Information retained by us will be subject to Your right to withdraw/deny Your consents as per the terms of this Policy and the retention requirements as per applicable laws only.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                            7. Changes in this Privacy Policy
                        </h2>
                        <p className="mb-2 text-justify">
                            7.1. We reserve the right to change, modify, add, or remove portions of this Privacy Policy at any time for any reason. In case, any changes are made in the Privacy Policy, we shall update the same on the Platform. Once posted, those changes are effective immediately, unless stated otherwise. We encourage You to periodically review this page for the latest Information on our privacy practices. Continued access or use of the Services constitute Your acceptance of the changes to the Privacy Policy.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                            6. Data Retention and Deletion
                        </h2>
                        <p className="mb-2 text-justify">
                            <strong>6.1.</strong> We retain Your personal Information in terms of our board approved Record Retention Policy (and in compliance with all regulatory requirements and applicable laws) to provide a seamless experience, to contact You in case of support required and about Your account, to detect, mitigate, prevent, and investigate fraudulent or illegal activities during the course of the Services.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>6.2.</strong> Any Information retained by us will be subject to Your right to withdraw/deny Your consents as per the terms of this Policy and the retention requirements as per applicable laws only.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                            7. Changes in this Privacy Policy
                        </h2>
                        <p className="mb-2 text-justify">
                            <strong>7.1.</strong> We reserve the right to change, modify, add, or remove portions of this Privacy Policy at any time for any reason. In case, any changes are made in the Privacy Policy, we shall update the same on the Platform. Once posted, those changes are effective immediately, unless stated otherwise. We encourage You to periodically review this page for the latest Information on our privacy practices. Continued access or use of the Services constitute Your acceptance of the changes to the Privacy Policy.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                            8. Security Precautions
                        </h2>
                        <p className="mb-2 text-justify">
                            <strong>8.1.</strong> The Company intends to protect Your Information and to maintain its accuracy as confirmed by You. We implement reasonable physical, administrative and technical safeguards to help us protect Your Information from unauthorized access, use and disclosure. For example, we encrypt all Information when we transmit the Information in digital form. We also require that our service providers protect such Information from unauthorized access, use and disclosure.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.2.</strong> Our Company has stringent security measures in place to protect the loss, misuse and alteration of Information under control. We endeavor to safeguard and ensure the security of the Information provided by You. We use Secure Sockets Layers (SSL) based encryption, for the transmission of the Information, which is currently the required level of encryption in India as per applicable law.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.3.</strong> We further ensure that LSPs engaged by Us comply with all mandatory technology standards, requirements on cybersecurity guidelines stipulated by the RBI and other regulators /agencies, or as may be specified from time to time, for undertaking digital lending services.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.4.</strong> In the event of a data breach, we act swiftly to contain and investigate the incident. We report incidents to CERT-IN within 6 (six) hours of discovery and notify regulatory bodies, impacted customers, and other relevant parties as required. Corrective actions are taken to strengthen security, and we provide support to affected customers as necessary.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.5.</strong> We blend security at multiple steps within our products with the state-of-the-art technology to ensure our systems maintain strong security measures and the overall data and privacy security design allow us to defend our systems ranging from low hanging issue up to sophisticated attacks.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.6.</strong> We aim to protect from unauthorized access, alteration, disclosure or destruction of Information we hold, including:
                        </p>
                        <div className="space-y-2 text-justify mb-6 ml-4">
                            <p>8.6.1. Encryption of Information to keep Your Information private while in transit;</p>
                            <p>8.6.2. Security feature like an OTP verification to help You protect Your account;</p>
                            <p>8.6.3. Review our process of collection, storage, and processing practices, including physical security measures, to prevent unauthorized access to our systems;</p>
                            <p>8.6.4. Restricted access to personal Information to our Staff, representatives, contractors, and agents who need that Information in order to process it. Anyone with this access is subject to strict contractual confidentiality obligations and suitable disciplinary action taken, in case if they fail to meet these obligations;</p>
                            <p>8.6.5. Compliance & Cooperation with Regulations and applicable laws;</p>
                            <p>8.6.6. Periodic review of this Privacy Policy and make sure that we process Your Information in ways that comply with it.</p>
                            <p>8.6.7. Non-disclosure of Aadhaar number in any manner.</p>
                            <p>8.6.8. We comply with legal frameworks relating to the transfer of Information as mentioned and required under the IT Act, DPDPA, and corresponding rules and the amendments made thereunder.</p>
                            <p>8.6.9. On receipt of formal/ written complaints, we respond by contacting the person who made the complaint. We work with the appropriate regulatory authorities, including local data protection authorities, to resolve any complaints regarding the transfer of Your Information that we cannot resolve with You directly.</p>
                        </div>
                        <p className="mb-2 text-justify">
                            <strong>8.7.</strong> The Website has a link to registered third party SDKs, Application Programming Interface (API) integrations, redirections which collects Information on our behalf and Information is stored to a secured server. We ensure that our third-party service provider takes extensive security measures in order to protect Your personal Information against loss, misuse or alteration of the Information as required under the applicable laws, and employ separation of environments and segregation of duties and have strict role-based access control on a documented, need-to-use basis.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.8.</strong> Our third-party service providers employ separation of environments and segregation of duties and have strict role-based access control on a documented, authorized, need-to-use basis. The stored Information is protected and with application-level encryption. They enforce key management services to limit access to Information.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.9.</strong> Furthermore, our registered third-party service provider provides hosting security – they use industry-leading anti-virus, anti-malware, intrusion prevention systems, intrusion detection systems, file integrity monitoring, and application control solutions.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.10.</strong> We don't allow unauthorized access to Your non-public personal contacts or financial transaction SMS Information by any third party in relation to the Services.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>8.11.</strong> The Website links to other websites that may collect Information about You. We are not responsible for the privacy practices or the content of those linked websites. With this Policy we are only addressing the disclosure and use of Information collected by Us. Their Information collection practices, and their policies might be different from this Policy and We do not have control over any of their policies neither do we have any liability in this regard.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                            9. Consent
                        </h2>
                        <p className="mb-2 text-justify">
                            <strong>9.1.</strong> You hereby expressly consent to provide the Information that may be required (and for the purposes as specified herein) in relation to the Services being rendered as per this Privacy Policy.
                        </p>
                        <p className="mb-2 text-justify">
                            <strong>9.2.</strong> In addition to the terms provided in this Privacy Policy, You are advised to also read the privacy policies and terms and conditions of our co-lending partners (available on our Website).
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                            10. Your Rights
                        </h2>

                        <p className="mb-2 text-justify">
                            <strong>10.1.</strong> <strong>Modifying or rectifying Your Information:</strong> In case any Information provided by You is inaccurate, incomplete, or outdated, You shall have the right to provide Us with the accurate, complete, and up-to-date Information and have Us rectify such Information immediately. Supporting documents may be required for verification purposes.
                        </p>

                        <p className="mb-2 text-justify">
                            <strong>10.2.</strong> <strong>Your Privacy Controls:</strong> You have the following choices regarding the Information we collect and how it is used:
                        </p>
                        <div className="space-y-2 text-justify mb-6 ml-4">
                            <p>10.2.1. Modify permissions on your device or browser to limit access, noting that Service performance may be impacted.</p>
                            <p>10.2.2. Delete the DLAs from Your device.</p>
                            <p>10.2.3. Request content removal from our servers in accordance with the applicable clause.</p>
                        </div>

                        <p className="mb-2 text-justify">
                            <strong>10.3.</strong> <strong>Withdrawal/Denial of Consent:</strong>
                        </p>
                        <div className="space-y-2 text-justify mb-6 ml-4">
                            <p>10.3.1. You may withdraw, deny, or restrict consent for use, disclosure, or retention of your Information. However, this may affect Service continuity, especially if Information is essential for any ongoing Services.</p>
                            <p>10.3.2. Services cannot be guaranteed in case consent is withdrawn where Information is mandatory.</p>
                            <p>10.3.3. Requests for consent updates or data deletion will be actioned within 30 days post written request or upon contract termination, whichever is later, subject to applicable laws.</p>
                            <p>10.3.4. Specific rights include:
                                <br />&emsp;(a) Deny consent for specific uses or third-party disclosure.<br />
                                &emsp;(b) Withdraw consent anytime by raising a request or writing to <a href="mailto:legal@Sajaninternational.com" className="text-blue-600 underline">legal@Sajaninternational.com</a>.
                            </p>
                        </div>

                        <p className="mb-2 text-justify">
                            <strong>10.4.</strong> <strong>Report an Issue:</strong> You have the right to report any security breaches to our Grievance Redressal Officer by emailing <a href="mailto:dataprivacy@Sajaninternational.com" className="text-blue-600 underline">dataprivacy@Sajaninternational.com</a>. Reports must be made within 10 days of being informed of any unauthorized use.
                        </p>

                        <p className="mb-2 text-justify">
                            <strong>10.5.</strong> <strong>Right to Nominate:</strong> You may nominate a person to exercise your data rights in case of your death or incapacity as per applicable laws.
                        </p>

                        <p className="mb-2 text-justify">
                            <strong>10.6.</strong> <strong>Specific Scenarios on Consent Withdrawal:</strong>
                        </p>
                        <div className="space-y-2 text-justify mb-6 ml-4">
                            <p>10.6.1. For marketing communications, consent withdrawal can be initiated via email.</p>
                            <p>10.6.2. Information deletion may not be permitted if Services such as loan, insurance, or digital gold are still active.</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">
                            11. Prohibited Actions
                        </h2>
                        <p className="mb-2 text-justify">
                            <strong>11.1.</strong> While visiting or using our Website, You agree not to, by any means (including hacking, cracking, or defacing any portion of the website/applications/portals/platforms), indulge in illegal or unauthorized activities, including but not limited to:
                        </p>
                        <div className="space-y-2 text-justify mb-6 ml-4">
                            <p>11.1.1. Restrict or inhibit any authorized user from using the Website;</p>
                            <p>11.1.2. Use the Website for unlawful purposes;</p>
                            <p>11.1.3. Harvest or collect Information about the Website’s users without their express consent;</p>
                            <p>11.1.4. "Frame" or "mirror" any part of the Website without our prior authorization;</p>
                            <p>11.1.5. Engage in spamming or flooding;</p>
                            <p>11.1.6. Transmit any software or other materials that contain any virus, time bomb, or other harmful or disruptive component;</p>
                            <p>11.1.7. Remove any copyright, trademark, or other proprietary rights notices contained in the application or digital platform;</p>
                            <p>11.1.8. Use any device, application, or process to retrieve, index, "data mine," or in any way reproduce or circumvent the navigational structure or presentation of the application or digital platform;</p>
                            <p>11.1.9. Permit or help anyone without access to the application or digital platform to use the application or digital platform through Your username and password or otherwise.</p>
                        </div>

                        <p className="mb-2 text-justify">
                            <strong>11.2.</strong> <strong>Contact:</strong> For any information regarding the Privacy Policy, You may contact us at <a href="mailto:dataprivacy@sajaninternational.in" className="text-blue-600 underline">dataprivacy@sajaninternational.in</a>.
                        </p>
                        <p className="mb-2 text-justify">
                            In case You have any grievance relating to the collection, receipt, possession, storage, dealing, or handling of personal Information provided by You, You may contact our Grievance Officer at the following address or by writing an email:
                        </p>
                        <div className="text-justify mb-2 ml-4">
                            <p><strong>Name:</strong> </p>
                            <p><strong>Email:</strong> <a href="mailto:[Insert Email]" className="text-blue-600 underline"></a></p>
                            <p><strong>Address:</strong></p>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
