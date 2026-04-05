import React from "react";

// helper functions
const paragraph = (text) => (
  <p className="text-sm md:text-base leading-7 mb-3">{text}</p>
);

const listItem = (text) => <li className="mb-2">{text}</li>;

// sections
const sections = [
  {
    title: "1. USER ELIGIBILITY AND ACCOUNT CREATION",
    content: (
      <>
        {paragraph(
          "Eligibility: You represent and warrant that you are at least eighteen (18) years of age and possess the legal capacity to enter into binding agreements. By accessing or using the Platform, you further represent that you are not prohibited by applicable law from receiving the services offered herein."
        )}
        {paragraph(
          "Minors: Users below the age of eighteen (18) years may access the Platform solely under the direct supervision and responsibility of a parent or legal guardian. Such parent or legal guardian must agree to be bound by these Terms and assume full liability for all activities, transactions, and conduct of the minor user. Topmate reserves the right to terminate any account upon failure to comply with age and identity verification requirements."
        )}
      </>
    ),
  },
  {
    title: "2. ACCEPTANCE OF TERMS",
    content: (
      <>
        {paragraph(
          "By accessing, registering with, or using Topmate in any manner, you acknowledge that you have read, understood, and unconditionally accept all terms, conditions, and policies set forth herein."
        )}
        {paragraph(
          "Your continued use of the Platform following any amendments to these Terms constitutes acceptance of the modified terms."
        )}
        {paragraph(
          "If you disagree with any provision herein, you must immediately cease using the Platform."
        )}
      </>
    ),
  },
  {
    title: "3. PLATFORM OVERVIEW AND INTERMEDIARY STATUS",
    content: (
      <>
        {paragraph(
          "Service Model: Topmate operates as an Intermediary as defined under the Information Technology Act, 2000, and the Information Technology (Intermediary Guidelines) Rules, 2021."
        )}
        {paragraph(
          "The Platform provides technological infrastructure that enables the facilitation of services and content sharing between users. Topmate does not author, curate, edit, or endorse any User-Generated Content."
        )}
        {paragraph(
          "Safe Harbour Protection: In accordance with Section 79 of the Information Technology Act, 2000, Topmate claims safe harbour protection and shall not be liable for any third-party content, user transactions, disputes between experts and followers, or any unauthorized use of the Platform."
        )}
      </>
    ),
  },
  {
    title: "4. ACCOUNT SECURITY",
    content: (
      <>
        {paragraph(
          "Account Maintenance: Users are solely responsible for maintaining the confidentiality and security of their account credentials, including passwords, OTPs, and authentication tokens."
        )}
        {paragraph(
          "Users must immediately notify Topmate of any unauthorized access or suspected breach of account security in writing."
        )}
        {paragraph(
          "Topmate shall not be liable for any losses, damages, or unauthorized transactions resulting from the user's failure to maintain account security or the compromise of user credentials."
        )}
      </>
    ),
  },
  {
    title: "5. PROHIBITED ACTIVITIES",
    content: (
      <ul className="list-disc pl-6">
        {listItem("Illegal or harmful content")}
        {listItem("IP violations")}
        {listItem("Fraud, impersonation")}
        {listItem("Malware or harmful code")}
      </ul>
    ),
  },
  {
    title: "6. CONTENT RIGHTS",
    content: (
      <>
        {paragraph(
          "Ownership and Licensing: Users retain all ownership rights to original content created and uploaded by them (User Content)."
        )}
        {paragraph(
          "In consideration for the provision of hosting, distribution, and related services, users grant Topmate a non-exclusive, worldwide, royalty-free, perpetual license to host, display, reproduce, and distribute User Content as reasonably necessary to provide the Services."
        )}
        {paragraph(
          "Representations and Warranties: Users warrant that (i) User Content is original and created by the user or properly licensed; (ii) User Content is accurate, lawful, and not misleading; (iii) User Content does not violate any third-party rights; and (iv) all professional credentials, qualifications, or specialized knowledge claims made in User Content are truthful and verifiable."
        )}
        {paragraph(
          "Content Removal: Topmate reserves the right to remove any User Content without prior notice if it violates these Terms or applicable law, or if Topmate receives valid legal process, government orders, or verified third-party takedown notices."
        )}
      </>
    ),
  },
  {
    title: "7. INTELLECTUAL PROPERTY",
    content: (
      <>
        {paragraph(
          "Platform Ownership: Topmate retains all ownership rights, including intellectual property rights, in and to the Platform, including source code, software architecture, design elements, graphics, user interface, branding, trademarks, and proprietary technology."
        )}
        {paragraph(
          "Users are granted a limited, non-exclusive, non-transferable license to access and use the Platform solely for lawful purposes."
        )}
        {paragraph(
          "Prohibited Activities: Users may not reverse-engineer, decompile, disassemble, adapt, modify, translate, or create derivative works based on the Platform."
        )}
      </>
    ),
  },
  
  {
    title: "8. INTERMEDIARY GRIEVANCE REDRESSAL MECHANISM (IT RULES 2021)",
    content: (
      <>
        {paragraph(
          "Grievance Officer Appointment: In compliance with Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, Topmate has designated a Grievance Redressal Officer with the following contact details:"
        )}
        <ul className="list-disc pl-6 mb-3">
          {listItem("Name: Ankit Agarwal")}
          {listItem("Email Address: support@topmate.io")}
          {listItem(
            "Physical Address: Ground Floor, 656, 13th Cross Rd, Sector 2, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102"
          )}
        </ul>
        {paragraph(
          "Grievance Submission Procedure: Users may submit grievances by email to support@topmate.io, including detailed descriptions of the grievance, affected content identifiers, and supporting documentation."
        )}
        {paragraph(
          "Mandatory Response Timelines: All grievances submitted by users shall be acknowledged within twenty-four (24) hours and shall be conclusively resolved within fifteen (15) calendar days of submission. For escalated grievances, a secondary review shall be conducted within thirty (30) days."
        )}
        {paragraph(
          "Content Removal Timeline: Topmate shall remove prohibited content within thirty-six (36) hours of receiving a valid court order, government directive, or verified notice from competent authority."
        )}
      </>
    ),
  },
  {
    title: "9. PAYMENT AND CHARGEBACK MANAGEMENT",
    content: (
      <>
        {paragraph(
          "Payment Processing: All payments shall be processed in Indian Rupees (INR) through licensed third-party payment gateways. Applicable Goods and Services Tax (GST) shall be calculated and collected as per applicable Indian tax law."
        )}
        {paragraph(
          "Chargeback Protocol: Unauthorized or fraudulent chargebacks may result in immediate account termination, suspension of payment privileges, and initiation of legal proceedings."
        )}
      </>
    ),
  },
  {
    title: "10. REFUNDS",
    content: (
      <>
        {paragraph(
          "Creator-Initiated Cancellations: If an expert cancels a scheduled session, Topmate will automatically issue a refund to the consumer. This applies to cancellations made at any point before the scheduled session end time."
        )}
        {paragraph("Consumer-Initiated Refund Requests:")}
        <ul className="list-disc pl-6 mb-3">
          {listItem(
            "Non-Delivery of Service: A full refund will be issued if the expert does not deliver the purchased product or service."
          )}
          {listItem(
            "Voluntary Cancellation: Consumers may request cancellation before the service begins, provided the request is made at least 24 hours prior to the scheduled start time. Such requests are eligible for a full refund."
          )}
          {listItem(
            "Voluntary Cancellation Within 24 Hours: Cancellation requests submitted within 24 hours of the scheduled session are subject to expert approval. Topmate will verify the request with the expert, and such refunds will be processed solely based on the expert's confirmation."
          )}
          {listItem(
            "Non-Refundable Purchases: Digital products, recorded or self-paced courses, and any instant-access content. Multi-session packages or bundles are refundable solely with the expert's explicit approval."
          )}
        </ul>
        {paragraph(
          "Review and Verification Process: For refund requests that are not automatically eligible, Topmate's support team will review the request and reach out to the expert. After receiving the expert's response, Topmate will either process the refund or facilitate the delivery or completion of the product or service."
        )}
        {paragraph(
          "Final Decision & Processing Time: Where expert approval is required, the refund will be processed only after the expert provides confirmation. Once approved, the refund will be issued to the original payment method within 5–7 business days."
        )}
      </>
    ),
  },
  {
    title: "11. WARRANTIES DISCLAIMER AND LIMITATION OF LIABILITY",
    content: (
      <>
        {paragraph(
          "Disclaimer of Warranties: THE PLATFORM AND ALL SERVICES PROVIDED THEREON ARE PROVIDED ON AN 'AS-IS' AND 'AS-AVAILABLE' BASIS WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TOPMATE MAKES NO REPRESENTATION OR WARRANTY REGARDING: (I) UNINTERRUPTED OR ERROR-FREE SERVICE OPERATION; (II) THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT, INFORMATION, OR SERVICES; (III) THE CAPABILITY OF THE PLATFORM TO MEET USER REQUIREMENTS; OR (IV) THE QUALITY, PERFORMANCE, OR DELIVERY OF SERVICES PROVIDED BY EXPERTS OR OTHER USERS."
        )}
        {paragraph(
          "Limitation of Liability: TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TOPMATE'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED  TO THESE TERMS, THE PLATFORM, OR USER'S USE OF THE SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL FEES PAID BY THE USER TO TOPMATE DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE CLAIM; OR (B) ONE THOUSAND INDIAN RUPEES (INR 1,000)."
        )}
        {paragraph(
          "Exclusion of Consequential Damages: IN NO EVENT SHALL TOPMATE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOSS OF DATA, OR BUSINESS INTERRUPTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."
        )}
        {paragraph(
          "Non-Liability for User Conduct: Topmate is not liable for the performance, non-performance, quality, or failure of Experts to deliver promised services or content. Users assume all risk associated with their interactions with other users on the Platform."
        )}
      </>
    ),
  },


];

export default function TermsAndServices() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <div className="w-full bg-black h-[300px] flex items-center justify-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">
          Terms of Use
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <p className="text-sm md:text-base leading-7 mb-6">
          <strong>Last Updated:</strong> December 1, 2025
        </p>

        <p className="text-sm md:text-base leading-7 mb-6">
          THESE TERMS OF USE govern your use of the website located at{" "}
          <a
            href="https://topmate.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://topmate.io
          </a>{" "}
          (the "Website"). The Website is the exclusive property of KAVALRY
          TECHNOLOGIES PRIVATE LIMITED.
        </p>

        <p className="text-sm md:text-base leading-7 mb-8">
          These Terms constitute a legally binding agreement between you and
          Topmate regarding your use of the Platform.
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              {section.title}
            </h2>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}