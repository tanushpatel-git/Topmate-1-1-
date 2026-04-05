import React from "react";

// helper functions
const paragraph = (text) => (
  <p className="text-sm md:text-base leading-7 mb-3">{text}</p>
);

const listItem = (text) => <li className="mb-2">{text}</li>;

// sections
const sections = [
  {
    title: "PRIVACY POLICY",
    content: (
      <>
        {paragraph(
          "This Privacy Notice for Kavalry Technologies Private Limited (doing business as topmate.io) (\"we\", \"us\", or \"our\"), describes how and why we might access, collect, store, use, and/or share (\"process\") your personal information when you use our services (\"Services\"), including when you:"
        )}
        <ul className="list-disc pl-6 mb-3">
          {listItem(
            "Visit our website at https://topmate.io, or any website of ours that link to the Privacy Notice"
          )}
          {listItem(
            "Engage with us in other related ways, including any sales, marketing, or events"
          )}
          {listItem(
            "Connect third-party accounts such as Instagram Business or Creator accounts to enable features like Auto-DM automation, comment triggers, and account management."
          )}
        </ul>
        {paragraph(
          "Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@topmate.io."
        )}

        {paragraph("SUMMARY OF KEY POINTS")}
        <ul className="list-disc pl-6 mb-3">
          {listItem("What personal information do we process?")}
          {listItem("Do we process any sensitive personal information?")}
          {listItem("Do we collect any information from third parties?")}
          {listItem("How do we process your information?")}
          {listItem("In what situations and with which parties do we share personal information?")}
          {listItem("How do we keep your information safe?")}
          {listItem("What are your rights?")}
          {listItem("How do you exercise your rights?")}
        </ul>

        {paragraph("1. WHAT INFORMATION DO WE COLLECT?")}
        {paragraph(
          "Personal information you disclose to us: We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, participate in activities on the Services, or otherwise contact us."
        )}
        <ul className="list-disc pl-6 mb-3">
          {listItem("Names")}
          {listItem("Phone numbers")}
          {listItem("Email addresses")}
          {listItem("Usernames")}
        </ul>
        {paragraph("Sensitive Information: We do not process sensitive information.")}
        {paragraph(
          "Payment Data: We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Razorpay, Payglocal, and PayPal. Privacy policies: https://razorpay.com/privacy/, https://www.payglocal.com/privacy-policy, https://www.paypal.com/myaccount/privacy/privacyhub."
        )}
        {paragraph(
          "Social Media Login Data: We may provide you with the option to register with your existing social media account details, like Facebook, X, or other social media accounts. If you choose to register this way, we will collect certain profile information from the social media provider."
        )}

        {paragraph("Information automatically collected")}
        <ul className="list-disc pl-6 mb-3">
          {listItem(
            "Log and Usage Data: Includes IP address, browser type, pages viewed, date/time of access, search queries, and other actions taken within the Services."
          )}
          {listItem(
            "Device Data: Includes device identification numbers, operating system, hardware model, Internet service provider, location, and system configuration."
          )}
          {listItem(
            "Cookies and Similar Technologies: Like many businesses, we collect information through cookies for analytics and service improvements."
          )}
        </ul>

        {paragraph("2. HOW DO WE PROCESS YOUR INFORMATION?")}
        <ul className="list-disc pl-6 mb-3">
          {listItem("Facilitate account creation and authentication")}
          {listItem("Deliver and facilitate delivery of services")}
          {listItem("Respond to user inquiries and offer support")}
          {listItem("Send administrative information about products, services, and changes")}
          {listItem("Fulfill and manage orders, payments, returns, and exchanges")}
          {listItem("Enable user-to-user communications")}
          {listItem("Request feedback")}
          {listItem("Send marketing and promotional communications (with opt-out options)")}
          {listItem("Save or protect an individual's vital interest")}
        </ul>
      </>
    ),
  },
  {
  title: "WHAT INFORMATION DO WE COLLECT?",
  content: (
    <>
      {paragraph("Personal information you disclose to us")}
      {paragraph(
        "In Short: We collect personal information that you provide to us. You may voluntarily provide this information when you register on the Services, express an interest in our products and Services, participate in activities on the Services, or contact us."
      )}
      {paragraph(
        "Personal Information Provided by You: The personal information we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:"
      )}
      <ul className="list-disc pl-6 mb-3">
        {listItem("Names")}
        {listItem("Phone numbers")}
        {listItem("Email addresses")}
        {listItem("Usernames")}
      </ul>
      {paragraph("Sensitive Information: We do not process sensitive information.")}
      {paragraph(
        "Payment Data: We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number and the security code associated with your payment instrument. All payment data is handled and stored by Razorpay, Payglocal, and PayPal. Privacy policies: https://razorpay.com/privacy/, https://www.payglocal.com/privacy-policy, https://www.paypal.com/myaccount/privacy/privacyhub."
      )}
      {paragraph(
        "Social Media Login Data: We may provide you with the option to register with your existing social media account details, like Facebook, X, or other social media accounts. If you choose to register in this way, we will collect certain profile information from the social media provider."
      )}
      {paragraph(
        "All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information."
      )}

      {paragraph("Information automatically collected")}
      {paragraph(
        "In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services."
      )}
      {paragraph(
        "We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain security and operation of our Services, and for internal analytics and reporting."
      )}
      {paragraph("Like many businesses, we also collect information through cookies and similar technologies.")}

      {paragraph("The information we collect includes:")}
      <ul className="list-disc pl-6 mb-3">
        {listItem(
          "Log and Usage Data: Includes IP address, device information, browser type and settings, pages viewed, date/time stamps, searches, and other actions taken within the Services."
        )}
        {listItem(
          "Device Data: Includes device identification numbers, operating system, hardware model, Internet service provider, location, and system configuration."
        )}
      </ul>
    </>
  ),

}
,

{
  title: "2. HOW DO WE PROCESS YOUR INFORMATION?",
  content: (
    <>
      {paragraph(
        "In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent."
      )}
      {paragraph(
        "We process your personal information for a variety of reasons, depending on how you interact with our Services, including:"
      )}
      <ul className="list-disc pl-6 mb-3">
        {listItem("To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.")}
        {listItem("To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.")}
        {listItem("To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.")}
        {listItem("To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.")}
        {listItem("To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.")}
        {listItem("To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.")}
        {listItem("To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.")}
        {listItem("To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time.")}
        {listItem("To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.")}
      </ul>
    </>
  ),
},


{
  title: "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
  content: (
    <>
      {paragraph(
        "In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services, to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests."
      )}
      {paragraph(
        "If you are located in the EU or UK, this section applies to you. The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:"
      )}
      <ul className="list-disc pl-6 mb-3">
        {listItem("Consent: We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.")}
        {listItem("Performance of a Contract: We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.")}
        {listItem("Legitimate Interests: We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to send users information about special offers and discounts on our products and services, or understand how our users use our products and services so we can improve user experience.")}
        {listItem("Legal Obligations: We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.")}
        {listItem("Vital Interests: We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.")}
      </ul>
      {paragraph("If you are located in Canada, this section applies to you.")}
    </>
  ),
}


];

export default function PrivacyPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <div className="w-full bg-black h-[300px] flex items-center justify-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">
          Privacy Policy
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <p className="text-sm md:text-base leading-7 mb-6">
          <strong>Last Updated:</strong> December 1, 2025
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