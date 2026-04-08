import React from "react";
import { Check, X , ArrowDownNarrowWideIcon } from "lucide-react";
import TopmateLogo from "../../assets/topmate-light-logo.svg";
import calendlylogo from "../../assets/calendly-logo.svg";
import glogo from "../../assets/gumroad-logo.svg";


export default function PricingComparison() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-10">
{/* Header Logos */}
<div className="max-w-7xl mx-auto grid grid-cols-4 items-center text-center mb-10">

  {/* Empty first column */}
  <div></div>

  {/* Topmate */}
  <div className="flex items-center justify-center">
    <div className=" rounded-full px-4 py-2 flex items-center justify-center">
      <img
        src={TopmateLogo}
        alt="topmate"
        className="h-[30px] object-contain"
      />
    </div>
  </div>

  {/* Calendly */}
  <div className="flex items-center justify-center">
    <img
      src={calendlylogo}
      alt="calendly"
      className="h-[30px] object-contain"
    />
  </div>

  {/* G Logo */}
  <div className="flex items-center justify-center">
    <div className="bg-red-200 rounded-full p-2 flex items-center justify-center">
      <img
        src={glogo}
        alt="g"
        className="h-[30px] object-contain"
      />
    </div>
  </div>

</div>

      {/* Table */}
      <div className="max-w-7xl mx-auto border-t border-gray-200">

        {/* Pricing */}
        <Row title="Pricing" values={["10%", "$10 - $20/m", "10%"]} />

        {/* Transaction Fees */}
        <Row title="Transaction fees" values={["2% / 3%", "2.9%", "2.9%"]} />

        {/* Section */}
        <Section title="Monetization" />

        <RowIcon
          title="Instant payouts"
          values={[true, true, false]}
        />

        <RowIcon
          title="Country based pricing"
          values={[true, false, true]}
        />

        {/* Section */}
        <Section title="Marketing" />

        <RowIcon
          title="Content library for your socials"
          values={[true, false, false]}
        />

        <RowIcon
          title="Discount codes"
          values={[true, false, true]}
        />

        <RowIcon
          title="Buy again & cart abandonment emails"
          values={[true, false, false]}
        />


<Section title="Page" />

<RowIcon title="Beautiful personal page" values={[true, false, false]} />
<RowIcon title="Custom themes" values={[true, false, false]} />
<RowIcon title="Custom highlights & social links" values={[true, false, false]} />
<RowIcon title="Testimonials showcase" values={[true, false, false]} />
<RowIcon title="Profile badges to boost credibility" values={[true, false, false]} />

<Section title="Services" />

<RowIcon title="Scheduling" values={[true, true, false]} />
<RowIcon title="Digital Products" values={[true, false, true]} />
<RowIcon title="Priority DM" values={[true, false, false]} />
<RowIcon title="Webinars, group sessions & live cohorts" values={[true, false, false]} />
<RowIcon title="Packages" values={[true, false, false]} />
<RowIcon title="Zoom Pro" values={[true, false, false]} />



      </div>
      <div className="w-full justify-center flex items-center mt-10 mb-10">

<button className="bg-black text-white justify-center  w-auto  py-2 px-10  text-xl rounded-full">
Get Started 
</button>
      </ div>

    </div>
  );
}

/* ---------- Components ---------- */

function Row({ title, values }) {
  return (
    <div className="grid grid-cols-4 items-center py-4 border-b border-gray-200">
      <div className="text-gray-700 text-2xl ">{title}</div>
      {values.map((val, i) => (
        <div key={i} className="text-center text-gray-700 text-2xl">
          {val}
        </div>
      ))}
    </div>
  );
}

function RowIcon({ title, values }) {
  return (
    <div className="grid grid-cols-4 items-center py-4 border-b border-gray-200">
      <div className="text-gray-700 text-2xl">{title}</div>

      {values.map((val, i) => (
        <div key={i} className="flex justify-center">
          {val ? (
            <div className="bg-blue-500 text-white rounded-full p-1">
              <Check size={20} />
            </div>
          ) : (
            <div className="bg-gray-200 text-gray-400 rounded-full p-1">
              <X size={20} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Section({ title }) {
  return (
    <div className="py-6 text-2xl font-semibold text-gray-800">
      {title}
    </div>
  );
}