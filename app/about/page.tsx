import Image from "next/image";
import React from "react";


export default function About() {
  return (
  
    <div>
      <div className="w-full bg-white text-center py-12">
        <h1 className="text-purple-950  text-3xl md:text-3xl font-semibold mb-4">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </h1>
      </div>
      <div className="container mx-auto py-8 px-4 bg-white my-12 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="md:w-1/2 flex flex-col justify-center text-left">
          <h1 className="text-3xl font-bold mb-4 p-9 text-primary-900">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="text-sm mb-8 p-9">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design, so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
         
        </div>
        <div className="md:w-1/2">
          <Image width={500} 
  height={300}alt="Studio Image" className="w-full h-full object-cover rounded-lg" src="/Feature pic.png" loading="lazy"/>
        </div>
      </div>
      <div className="container mx-auto py-8 px-4 bg-white my-12 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="md:w-1/2">
          <Image  alt="Studio Image" className="w-full h-full object-cover rounded-lg" width={500} 
  height={300} src="/Feature pic2.png" loading="lazy"/>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center text-left">
          <h2 className="text-3xl font-bold mb-4 p-9 text-primary-900">
            Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite
          </h2>
          <p className="text-sm mb-8 p-9">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="self-start bg-gray-400 px-6 py-2 ml-10 hover:text-primary-900">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
