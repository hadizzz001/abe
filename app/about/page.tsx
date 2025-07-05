"use client";

import { useState } from "react";

export default function Home() { 

  const handleWhatsAppRedirect = () => {
 

    const phoneNumber = "+9613933437";
    const message = encodeURIComponent(`I am interested in booking a consultancy session`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white lg:grid lg:min-h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Book a
            <strong className="text-[#725038]"> consultancy </strong>
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Our consultancy services include sermons, Friday khutbahs, and mourning video coverage, along with spiritual guidance tailored to your needs. You can book private sessions for problem-solving, marriage contracts, or divorce (Talaq) procedures. All consultations are delivered with full confidentiality, respect, and in accordance with Islamic principles.
          </p>

 
          {/* WhatsApp Button */}
          <div className="mt-4 flex gap-4 sm:mt-6">
            <button
              className="inline-block rounded border border-indigo-600 bg-[#725038] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-800"
              onClick={handleWhatsAppRedirect}
            >
              Book via WhatsApp
            </button>
          </div>
        </div>

        {/* Responsive Image */}
        <div className="mt-6 md:mt-0 sm:p-10">
          <img
            className="w-full h-auto max-w-full rounded-lg object-cover md:h-[400px] lg:h-[500px]"
            src="https://res.cloudinary.com/da48bjec6/image/upload/v1751706001/2_g9m8rr.webp"
            alt="Any Image Here"
          />
        </div>
      </div>
    </section>
  );
}
