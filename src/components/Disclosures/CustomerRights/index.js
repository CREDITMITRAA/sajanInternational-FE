import React from "react";
import Header from "../../Header";

const CustomerRights = () => {
    return (
        <div className="customer-rights font-roboto text-blue-950 min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-20">
                <Header />
            </div>

            <div className="pt-36 px-4 md:px-12 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-500">
                    CUSTOMER RIGHTS & GRIEVANCE REDRESSAL POLICY
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
                    SAJAN INTERNATIONAL PRIVATE LIMITED
                </h2>

                {/* Version Table */}
                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full text-sm border border-blue-950">
                        <thead className="bg-blue-100 text-blue-950">
                            <tr>
                                <th className="border border-blue-950 px-4 py-2">Version</th>
                                <th className="border border-blue-950 px-4 py-2">Approval/Revision Date</th>
                                <th className="border border-blue-950 px-4 py-2">Review Date</th>
                                <th className="border border-blue-950 px-4 py-2">Approved by</th>
                                <th className="border border-blue-950 px-4 py-2">Review Frequency</th>
                                <th className="border border-blue-950 px-4 py-2">Next Review Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="border border-blue-950 px-4 py-2">V1</td>
                                <td className="border border-blue-950 px-4 py-2">03/04/25</td>
                                <td className="border border-blue-950 px-4 py-2">—</td>
                                <td className="border border-blue-950 px-4 py-2">Board of Directors</td>
                                <td className="border border-blue-950 px-4 py-2">Annually or as and when required</td>
                                <td className="border border-blue-950 px-4 py-2">On or before 03/04/26</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Contents */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-orange-500 mb-3">Contents</h3>
                    <ol className="list-decimal ml-6 space-y-1 text-base text-justify">
                        <li>Introduction</li>
                        <li>Purpose</li>
                        <li>Scope of the Policy</li>
                        <li>Key Principles</li>
                        <li>Definitions</li>
                        <li>Responsibilities of Grievance Redressal Committee</li>
                        <li>Role of the Board</li>
                        <li>Channels - Lodgment of a Query/ Request/ Complaint</li>
                        <li>Classification of Customer Queries, Requests, and Complaints</li>
                        <li>Internal Machinery & TAT</li>
                        <li>Allocation</li>
                        <li>Time Frame</li>
                        <li>Review and Monitoring</li>
                        <li>Touch Points - Escalation Matrix</li>
                        <li>Internal Ombudsman (IO) Office</li>
                        <li>Complaints to Ombudsman</li>
                        <li>Grievance Redressal Mechanism - Protection of Personal Data</li>
                        <li>Display – Grievance Redressal Policy</li>
                        <li>Sensitizing Operating Staff on Handling Complaints</li>
                        <li>Customer Education</li>
                        <li>Modifications/Amendments/Revision to the Policy</li>
                    </ol>
                </div>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        1. Introduction
                    </h2>
                    <p className="text-justify mb-4">
                        Sajan International Private Limited (“the Company/Sajan
                        International”) believes in conducting its affairs in a fair and
                        transparent manner by maintaining the highest levels of integrity,
                        honesty and ethical behavior while dealing with its customers
                        (“Customers”).
                    </p>
                    <p className="text-justify mb-4">
                        In compliance with the guidelines issued by the Reserve Bank of
                        India (“RBI”), as applicable to non-banking financial companies, for
                        adherence to RBI’s charter of Customer Rights & maintenance of an
                        appropriate grievance redressal mechanism within the organization to
                        create a customer-centric environment, ensure compliance with
                        regulatory standards, and enhance customer satisfaction, resolve the
                        complaints and grievances of its customers, the Company has
                        formulated this Grievance Redressal Policy (“Policy”) setting out
                        the procedure for receiving, registering and disposing of the
                        complaints and grievances of the Customers with respect to the
                        products and services of the Company (“Complaints”), including but
                        not limited to the Complaints in relation to the services provided
                        by the service providers, third party agents or business facilitators
                        appointed by the company for providing such services on behalf of the
                        Company.
                    </p>
                    <p className="text-justify">
                        This Policy aims to provide a framework to deal with the Complaints
                        of the Customers in a fair and transparent manner and educate the
                        Customers about the processes to be followed to lodge a Complaint
                        with the Company and/or the RBI.
                    </p>
                </section>

                {/* 2. Purpose */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        2. Purpose
                    </h2>
                    <p className="text-justify mb-4">
                        The policy aims to provide transparent, fair, and customer-friendly
                        services, ensuring prompt resolution of customer queries and
                        grievances while maintaining high standards of integrity and
                        professionalism. Customer complaints constitute an important voice
                        of customer, and this policy details complaint handling through a
                        structured grievance redressal framework. Complaint redressal is
                        supported by a review mechanism, to minimize the recurrence of
                        similar issues in future.
                    </p>
                    <p className="text-justify font-semibold mb-2">
                        The Grievance Redressal policy follows the following principles:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-justify ml-4">
                        <li>Customers are treated fairly;</li>
                        <li>
                            Complaints raised by customers are dealt with courtesy and in a
                            timely manner;
                        </li>
                        <li>
                            Customers are informed of avenues to escalate their complaints
                            within the organization, and their rights if they are not
                            satisfied with the resolution of their complaints;
                        </li>
                        <li>
                            The employees work in good faith and without prejudice, towards
                            the interests of the customers.
                        </li>
                    </ul>
                </section>

                {/* 3. Scope of the Policy */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        3. Scope of the Policy
                    </h2>
                    <p className="text-justify mb-4">
                        This policy applies to all branches, employees, and representatives
                        of Sajan International covering interactions with prospective,
                        current, and former customers across all products and services
                        offered.
                    </p>
                    <p className="text-justify mb-4">
                        The Policy is also applicable across all the offices/Customer touch
                        points, business segments of the company and the entities engaged
                        under outsourcing arrangement.
                    </p>
                    <p className="text-justify">
                        The policy shall be reviewed annually in alignment with the
                        regulatory guidelines issued from time to time or basis internal
                        requirements or as and when considered necessary.
                    </p>


                </section>

                {/* Section 4: Key Principles */}
                <section className="mb-2">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        4. Key Principles
                    </h2>
                    <p className="mb-4 text-justify">
                        The Charter enshrines broad, overarching principles for the protection of customers and outlines five basic rights of Company customers:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2 ml-4 text-justify">
                        <li>Right to Fair Treatment</li>
                        <li>Right to Transparency, Fair and Honest Dealing</li>
                        <li>Right to Suitability</li>
                        <li>Right to Privacy</li>
                        <li>Right to Grievance Redress and Compensation</li>
                    </ul>

                    <div className="space-y-4 text-justify">
                        <p><strong>4.1 Right to Equitable and Fair Treatment:</strong> Customers and company representatives must be treated with courtesy. Discrimination on grounds such as gender, age, religion, caste, or physical ability is not acceptable.</p>
                        <p><strong>4.2 Right to Transparency:</strong> Contracts and agreements must be clear, transparent, and well communicated. Key terms and conditions should be explained before engagement.</p>
                        <p><strong>4.3 Right to Suitability:</strong> Products offered must match the customer’s risk appetite, liabilities, and financial capacity.</p>
                        <p><strong>4.4 Right to Privacy and Confidentiality:</strong> Personal data must be protected unless customer consent is given, or disclosure is mandated by law or for legitimate business purposes.</p>
                        <p><strong>4.5 Right to Grievance Redressal and Compensation:</strong> Customers have the right to seek redress for valid complaints. This policy defines the escalation mechanism within the organization.</p>
                    </div>
                </section>

                {/* Section 5: Definitions */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">5. Definitions</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-justify">
                        <li><strong>“Complaint”</strong> means a representation in writing or other modes alleging deficiency in service on the part of the company and seeking relief thereon.</li>
                        <li><strong>“Deficiency in service”</strong> means any shortcoming or inadequacy in service provided, which may not necessarily result in financial loss but is below statutory or expected standards.</li>
                        <li>Doubts, enquiries, or clarification requests placed with the Company may be categorized as a <strong>Query</strong> or <strong>Request</strong>.</li>
                    </ul>
                </section>

                {/* Section 6: Responsibilities of Grievance Redressal Committee */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        6. Responsibilities of Grievance Redressal Committee
                    </h2>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-justify">
                        <li>Oversee and guide the implementation of customer service initiatives across the company.</li>
                        <li>Monitor customer feedback, identify gaps, and recommend corrective actions.</li>
                        <li>Ensure correct classification of cases as Queries/Requests/Complaints monthly.</li>
                        <li>Ensure resolution within the defined TAT; investigate and document reasons for TAT breaches.</li>
                        <li>Forward partially/wholly rejected cases to the Internal Ombudsman for further review.</li>
                        <li>Review quarterly MIS with root cause analysis and present to the Board.</li>
                        <li>Highlight anomalies and share feedback with senior management.</li>
                        <li>Meet quarterly to evaluate complaints, policies, and service improvement plans.</li>
                        <li>Review quarterly MIS and instruct senior leadership on corrective measures.</li>
                    </ul>
                </section>

                {/* Section 7: Role of the Board */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">7. Role of the Board</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-justify">
                        <li>Annual review of the Customer Grievance Redressal mechanism and its performance.</li>
                        <li>Recommend process improvements for grievance redressal.</li>
                        <li>Periodic review of overall complaint management performance.</li>
                        <li>Evaluate internal audit findings on grievance processes and reported lapses.</li>
                        <li>Analyze all received Query/Requests/Complaints, especially rising categories, and identify root causes.</li>
                        <li>Evaluate rejected complaints by category and assess Internal Ombudsman’s comments.</li>
                        <li>Consider internal and external factors like organizational changes, regulatory updates, or technology innovations while reviewing the policy.</li>
                    </ul>
                </section>
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">8. Channels - Lodgment of a Query/ Request/ Complaint</h2>
                    <p className="mb-4">
                        The queries/requests/complaints can be registered/lodged by a customer using the below channels:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-justify">
                        <li>Inbound calls via Customer Service Helpline: <strong>(+91) 9951703178</strong></li>
                        <li>E-mails via Customer Service Email: <strong>reachus@sajaninternational.com</strong></li>
                        <li>Social Media: X, Facebook, LinkedIn, Instagram etc.</li>
                        <li>Physical Channels: Letter, Register, Complaint Box etc.</li>
                        <li>Digital Lending Application “Creditmitra” Website</li>
                        <li>LSP related redressal Mechanism: <a href="https://www.sajaninternational.com/grievance-redressal" className="text-blue-700 underline">https://www.sajaninternational.com/grievance-redressal</a></li>
                        <li>Other channels: Complaint management System (CMS-RBI), CPGRAMS, RBI’s DAKSH, Consumer Forum, Consumer court etc.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">9. Classification of Customer Queries, Requests, and Complaints</h2>
                    <p className="mb-4 text-justify">
                        Categorization and classification of different types of customer communications (queries, requests, complaints) to be done.
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2 ml-4 text-justify">
                        <li>
                            <strong>Queries:</strong> This includes any customer inquiry, clarification required or action sought by a customer on different loan and non-loan products, services provided by Sajan International, features or specifications of the front-end channels that does not need any kind of follow up or processing and can be resolved then and there itself in the same interaction.
                        </li>
                        <li>
                            <strong>Requests:</strong> Customers asking for actions such as account modifications, product/service requests, or transactions.
                        </li>
                        <li>
                            <strong>Complaints:</strong> Customers expressing dissatisfaction with a product, service, or process, or reporting issues.
                        </li>
                    </ul>

                    {/* <div className="overflow-x-auto"> */}
                    <table className="min-w-full border border-gray-300 text-sm md:text-base">
                        <thead className="bg-sky-200">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Queries (Indicative List)</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requests (Indicative List)</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Complaints (Indicative List)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">General Inquiry (Customers enquiring whether they’ll be able to get a loan from Sajan International, expressing interest in any product, or checking eligibility after not getting approved.)</td>
                                <td className="border border-gray-300 px-4 py-2">Request for NOC (Request to get NOC after closing the loan)</td>
                                <td className="border border-gray-300 px-4 py-2">Transaction related: mis-selling, erroneous charges, TDS/service charges, cheque or eNACH clearance, policy breach, etc.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Credit Limit Inquiry (Inquiry about approved loan amount or eligibility for higher amount, or Price Discovery inquiry on app)</td>
                                <td className="border border-gray-300 px-4 py-2">Loan Statement Request</td>
                                <td className="border border-gray-300 px-4 py-2">Staff related: harassment, inappropriate behaviour, use of rude language, bribery, etc.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Loan Application Process Inquiry (Steps to complete the application, disbursement issues, bank verification etc.)</td>
                                <td className="border border-gray-300 px-4 py-2">Loan Repayment Request (Additional time, penalty waiver, EMI extension)</td>
                                <td className="border border-gray-300 px-4 py-2">Lending related: delayed disbursals, modifications, excessive collection calls, recovery agent misconduct, fraud, discrimination etc.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Loan Parameters Inquiry (Fees, ticket size, tenure, product or offer inquiries)</td>
                                <td className="border border-gray-300 px-4 py-2">Profile Related Request (Change phone number, unauthorized loan report, feature issues, insurance/product cancellation)</td>
                                <td className="border border-gray-300 px-4 py-2">Agent/Vendor related: misbehavior, rude language, mis-selling, unauthorized charges, recovery agent/verifier/vendor misconduct</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Bureau Inquiry (Loan closure reflection on credit report, EMI update TAT)</td>
                                <td className="border border-gray-300 px-4 py-2">—</td>
                                <td className="border border-gray-300 px-4 py-2">—</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Repayment Inquiry (Payment options, update timelines, delays, auto debit failure, settlement offers)</td>
                                <td className="border border-gray-300 px-4 py-2">—</td>
                                <td className="border border-gray-300 px-4 py-2">—</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Partner Inquiry (Associated partners or outreach programs)</td>
                                <td className="border border-gray-300 px-4 py-2">—</td>
                                <td className="border border-gray-300 px-4 py-2">—</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">10. Internal Machinery & TAT</h2>
                    <p className="text-justify mb-2">
                        The Company to implement robust Customer Relationship Management (CRM) system to ensure timely resolution of the grievances. Such system to capture details of the complaints; apply defined Turn Around Time (TATs) norms i.e., 14 working days basis the nature of the query along with the escalation matrix.
                    </p>
                    <p className="text-justify mb-2">
                        Company to adopt the process for classification / segregation into queries, requests, complaints and tagging with specific identifiers like customer ID, issue type, priority level, and time of receipt for further tracking. The process to include details of allocation to various team/ levels within the customer support team handling such requests/grievances.
                    </p>
                    <p className="text-justify mb-2">
                        The process adopted to cover the complaints related to respective DLA/LSP and ensuring timely resolution. The responsibility of grievance redressal shall continue to be with the company.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">11. Allocation</h2>
                    <p className="text-justify mb-2">
                        Upon classification, each customer interaction to be allocated to the relevant team or individual to handle the issue. Allocation to be based on the below factors:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-justify">
                        <li>
                            <span className="font-medium">Expertise:</span> The complexity of the issue determines whether the customer is routed to customer service, technical support, sales, or the complaints department.
                        </li>
                        <li>
                            <span className="font-medium">Workload Management:</span> Allocation may depend on the current workload of different teams to ensure timely resolution.
                        </li>
                        <li>
                            <span className="font-medium">Language Preference:</span> Depending on the language preference of the customer, the Q/R/C will be routed to the individuals.
                        </li>
                        <li>
                            <span className="font-medium">Regulatory Requirements:</span> Complaints related to financial services, from compliance/ any other department originated from Regulatory / Statutory / Investigating Authorities.
                        </li>
                    </ul>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">12. Time Frame</h2>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-justify">
                        <li>Queries to be responded within 3 working days.</li>
                        <li>
                            Requests/complaints to be responded within 14 working days or within the stipulated timeline by the statutory regulatory / investigating authority.
                        </li>
                        <li>
                            Suitable timelines of fourteen (14) working days to be set for every complaint depending upon the investigations and resolution. Complaints are suitably acknowledged on receipt and the customers are informed of delays if any, in the resolution.
                        </li>
                        <li>
                            However, the TAT, in case of complaints referred to Internal Ombudsman (IO) may be 21 days (14 days - customer care + 7 days – IO office).
                        </li>
                        <li>
                            Upon non-resolution of any complaint lodged by the borrower against the Company or the LSP engaged by the Company within the stipulated period (currently 30 days), he/she can lodge a complaint over the Complaint Management System (CMS) portal under the Reserve Bank-Integrated Ombudsman Scheme (RB-IOS).
                        </li>
                    </ul>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">13. Review and Monitoring</h2>
                    <p className="text-justify">
                        Periodic review of monitoring of complaints, TATs, nature of complaints will be done to ensure that process loopholes, if any, are plugged and trends are checked. The Company has a Grievance Redressal Committee established by the Board of Directors of the Company to protect the Customers interest by providing adequate safeguards. The committee members are responsible for Customer satisfaction, redressal of their complaints and for adequate collection statistics.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">14. Touch Points - Escalation Matrix</h2>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Grievance Redressal Officer</h3>
                        <p className="text-justify mb-2">
                            Customers/ Borrowers are requested to address all their grievances at the first instance to the Grievance Redressal Officer.
                        </p>
                        <ul className="list-none ml-4 mb-2 space-y-1">
                            <li><span className="font-medium">Mr. </span></li>
                            <li><span className="font-medium">Designation:</span> </li>
                            <li><span className="font-medium">Address:</span> </li>
                            <li><span className="font-medium">Contact:</span> </li>
                            <li><span className="font-medium">Email:</span> </li>
                        </ul>
                        <p className="text-justify">
                            The Grievance Redressal Officer may be reached on the number provided above anytime between 10 AM and 7 PM from Monday to Saturday (except public holidays) or through the E-mail address mentioned above. The Grievance Redressal Officer shall endeavor to resolve the grievance within a period of 14 (fourteen) days from the date of receipt of a grievance.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Nodal Officer</h3>
                        <p className="text-justify mb-2">
                            If the Borrower does not receive a response from the Grievance Redressal Officer within 14 (fourteen) days of making a representation, or if the Borrower is not satisfied with the response received from the Grievance Redressal Officer, the Borrower may reach the Nodal Officer on the number below anytime between 10 AM and 7 PM from Monday to Saturday (except public holidays) or write to the Nodal Officer at the e-mail address below.
                        </p>
                        <ul className="list-none ml-4 space-y-1">
                            <li><span className="font-medium">Ms. </span></li>
                            <li><span className="font-medium">Designation:</span> </li>
                            <li><span className="font-medium">Contact:</span> </li>
                            <li><span className="font-medium">Email:</span> </li>
                        </ul>
                    </div>
                </div>

                <section className="max-w-6xl mx-auto w-full px-4 py-10 space-y-10 text-justify text-gray-800">
                    <div>
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">15. Internal Ombudsman (IO) office:</h2>
                        <p>
                            Company to set up IO Office in line with RBI guidelines and sufficient staff support for the office to perform its work. IO shall report to the ED/ MD/ CEO (administratively) and Board (functionally)
                            Office of IO be placed in the HO or Corporate Office. The IO office to handle all the rejected / partially rejected complaints , forwarded by the Customer support team that are not in the below mentioned categories:
                        </p>
                        <p className="mt-2">(a) Complaints related to corporate frauds, misappropriation etc., except those resulting from deficiency in service, if any, on the part of the regulated entity;</p>
                        <p>(b) References in the nature of suggestions and commercial decisions of regulated entity. However, service deficiencies in cases falling under ‘commercial decisions’ will be valid complaints for the Internal Ombudsman;</p>
                        <p>(c) Complaints / references relating to</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>internal administration,</li>
                            <li>human resources, or</li>
                            <li>pay and emoluments of staff</li>
                        </ul>
                        <p>(d) Complaints which have been decided by or are already pending in other fora such as the Consumer Disputes Redressal Commission, courts, etc.;</p>
                        <p>(e) Disputes for which remedy has been provided under Section 18 of the Credit Information Companies (Regulation) Act, 2005</p>
                        <p className="mt-2">Complaints that are outside the purview of these IO Directions 2023 shall be immediately referred back to the Company by the Internal Ombudsman.</p>
                        <p className="mt-2">However, if the customer continues to remain dissatisfied with the resolution, (s)he can escalate the issue through the grievance redressal mechanism as referred in this policy.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">16. Complaints to Ombudsman</h2>
                        <p>
                            In case the Borrower does not receive a response from the Grievance Redressal Official or the Nodal Officer within one month from the date of making a representation to the Company, or if the Borrower is not satisfied with the response so received, a complaint may be made in accordance with the ‘Integrated Ombudsman Scheme, 2021’ (“Ombudsman Scheme”) to the Ombudsman in whose jurisdiction the office of the Lender complained against, is located.
                        </p>
                        <p className="mt-2">
                            For contact details of the Ombudsman online through the portal (
                            <a href="https://cms.rbi.org.in" className="text-blue-700 underline" target="_blank" rel="noreferrer">
                                https://cms.rbi.org.in
                            </a>) or submit through electronic or physical mode to the Centralized Receipt and Processing Centre 4th Floor, Sector 17, Chandigarh – 160017. Contact Centre with a toll-free number – 14448 (9:30 am to 5:15 pm) and for salient features of the Ombudsman Scheme, please refer to our website
                            <a href="https://www.Sajaninternational.com/ombudsman-scheme" className="text-blue-700 underline" target="_blank" rel="noreferrer">
                                https://www.Sajaninternational.com/ombudsman-scheme
                            </a>. A copy of the Ombudsman Scheme is available on the website of the Reserve Bank of India at
                            <a href="https://www.rbi.org.in" className="text-blue-700 underline" target="_blank" rel="noreferrer">
                                www.rbi.org.in
                            </a> and also with our Nodal Officer.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">17. Grievance Redressal Mechanism- Protection of Personal data</h2>
                        <p>
                            Grievances connected to digital applications / data processing in digital mode can be raised through organization’s Privacy officer via multiple channels like on the website, through phone, SMS, mobile application etc.
                        </p>
                        <p className="mt-2 font-semibold">Contact details of the Privacy Officer</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Name of Privacy Officer:</li>
                            <li>Phone:</li>
                            <li>Email:</li>
                        </ul>
                        <p className="mt-2 font-semibold">Display –Grievance Redressal Policy</p>
                        <p>
                            The Grievance Redressal Policy of the company to be made available on company’s website
                            <a href="https://www.Sajaninternational.com" className="text-blue-700 underline" target="_blank" rel="noreferrer">
                                https://www.Sajaninternational.com
                            </a>
                        </p>
                        <p>
                            The Customer can lodge a complaint related to unauthorized schemes of various kind and fake emails at
                            <a href="https://sachet.rbi.org.in/home/index" className="text-blue-700 underline" target="_blank" rel="noreferrer">
                                https://sachet.rbi.org.in/home/index
                            </a>
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">18. Sensitizing operating staff on handling complaints</h2>
                        <p>
                            Customer Grievances provide valuable feedback on quality of service and whether the initiatives taken by the company/ vendor in technology and re-engineering of business processes are having the desired impact on business growth and improved customer satisfaction.
                        </p>
                        <p>
                            Company also understands the importance of sensitizing staff to handle customer transactions/ requests with courtesy, empathy and promptness. Relevant staff is properly trained for handling complaints.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">19. Customer education</h2>
                        <p>
                            The company, shall make continuous efforts to educate its customers to enable them to make informed choices regarding company products and also educate them about the grievance redressal mechanism to express their dissatisfaction, if any.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">20. Modifications/Amendments/Revision to the Policy</h2>
                        <p>
                            The modification/amendments/revisions, if any, made by RBI in norms/criteria/procedure, from time to time, shall construe to be part of this Policy.
                        </p>
                        <p>
                            This Policy must be reviewed at least once in a financial year or at such intervals as may be deemed necessary by the Board / basis RBI regulations
                        </p>
                    </div>
                </section>



            </div>
        </div>
    );
};

export default CustomerRights;
