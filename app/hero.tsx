"use client";
import React from "react";
import { GrDeliver } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
  
  <div>   
     <section>
      <div className="max-w-screen-lg  bg-purple-950 text-white mx-auto p-5 bg-primary-900 flex flex-col md:flex-row items-center md:items-start mb-7">
      <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
      <h1 className="text-white text-2xl md:text-xl font-bold mb-4 md:mb-6 ">
        The furniture brand for the future, with timeless designs</h1>
        <button className="bg-zinc-500 text-white py-2 px-4 md:px-6  font-semibold mb-4 md:mb-6 w-48">View Collection</button>
        <p className="text-white text-sm md:text-sm mt-48 ">A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
        </div>
        
        <div className="md:w-1/2 h-[300px] md:h-full hidden md:flex">
        <Image src="/chair.png" alt="Furniture Image" width="200" 
  height="300"  className="w-full h-full object-cover flex"/>
        </div>
        </div>
        
      </section>

      <div className="p-12 w-full">
                    <div className="max-w-screen-lg mx-auto py-8 px-4">
                        <h2 className="text-center justify-center text-3xl font-bold mb-8 text-primary-900">What Makes Our Brand Different</h2>
                        <div className="flex flex-wrap justify-between gap-">
                            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center text-center">
                            <div className="text-5xl text-gray-500 mb-4 justify-center"><GrDeliver/></div>
                        
                            <h3 className="text-xl font-bold mb-2"> Next day as Standard</h3>
                            <p>Order before 3pm and get your order the next day as standard.</p>
                            </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center text-center">
                            <div className="text-5xl text-gray-500 mb-4 justify-center"><FaCheckCircle /></div>
                            
                            <h3 className="text-xl font-bold mb-2"> Made by 2 to Artisian</h3>
                            <p>Handmade crafted goods made with real passion and craftsmanship.</p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center text-center">
                            <div className="text-5xl text-gray-500 mb-4 justify-center"> <FaTags /></div>
                            
                            <h3 className="text-xl font-bold mb-2"> Unbeatable prices</h3>
                            <p>For our materials and quality you won not find better prices anywhere.</p>
                        </div>


                        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center text-center">
                            <div className="text-5xl text-gray-500 mb-4 justify-center"><FaLeaf /></div>
                            
                            <h3 className="text-xl font-bold mb-2">Recycled packaging</h3>
                            <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-center text-3xl font-bold  mb-8">New Ceramics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center">
                    <Image src="/Right Image.png" alt="The Dandy Chair" width={500} 
  height={300} className="w-full h-96 object-cover rounded-lg mb-4"/>
                    <h3 className="text-lg font-semibold">The Dandy Chair</h3>
                    <p className="text-gray-700">$45.00</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image  width={500} 
  height={300} src="/Three Vase.png" alt="Rustic Vase Set" className="w-full h-96 object-cover rounded-lg mb-4"/>
                        <h3 className="text-lg font-semibold">Rustic Vase Set</h3>
                        <p className="text-gray-700">$30.00</p>
                        </div>
                        
                        <div className="flex flex-col items-center">
                            <Image src="/Silky Vase.png" alt="The Silky Vase" width={500} 
  height={300}className="w-full h-96 object-cover rounded-lg mb-4"/>
                            <h3 className="text-lg font-semibold">The Silky Vase</h3>
                            <p className="text-gray-700">$20.00</p>
                            </div>
                            <div className="flex flex-col items-center">
                             <Image src="/Lamp.jpg" alt="The Lucy Lamp" width={500} 
  height={300} className="w-full h-96 object-cover rounded-lg mb-4"/>
                                <h3 className="text-lg font-semibold">The Lucy Lamp</h3>
                                <p className="text-gray-700">$25.00</p>
                                </div>
                                </div>
                </div>
    
      
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-center text-3xl font-bold mb-8">Our popular products</h2>
            <div className=" flex flex-wrap gap-6">
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <Image width={500} 
  height={300} src="/sofa1.jpg" alt="Sofa" className="w-full h-96 object-cover rounded-lg mb-4 "/>
                <h3 className="text-lg font-semibold">The popular Suede sofa</h3>
                <p className="text-gray-700">$50.00</p>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="flex items-center justify-center gap-6">
                <div className="flex flex-col items-center">
                    <Image width={500} 
  height={300} src="/chair.png" alt="The Dandy chair" className="w-full h-96 object-cover rounded-lg mb-4"/>
                    <h3 className="text-lg font-semibold">The Dandy Chair</h3>
                    <p className="text-gray-700">$35.00</p>
                </div>

                <div className=" flex flex-col items-center">
                    <Image width={500} 
  height={300} src="/Dandy chair.png" alt="The Dandy chair" className="w-full h-96 object-cover rounded-lg mb-4"/>
                    <h3 className="text-lg font-semibold">The Dandy chair</h3>
                    <p className="text-gray-700">$20.00</p>
                    
            </div>   

            </div>

            
            </div>

            
            <div className="w-full bg-gray-200 py-12">
              <div className="max-w-screen-lg  mx-auto  py-8  px-4 bg-white p-12 rounded-sm text-center">
                <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
                <p className="text-sm mb-8">Sign up for our newsletter and receive exclusive offers on new<br></br> ranges, sales, pop-up stores, and more.</p>
                
                <form className="flex flex-col items-center gap-4">
                  <div className="relative w-full max-w-md">
                    <input type="email" placeholder="Enter your @email.com" className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-900 pr-28"></input>
                    <button type="submit" className="absolute right-1 top-1/2  transform -translate-y-1/2 text-white px-4 py-2 rounded-sm  bg-purple-950 hover:bg-blue-800"> Sign Up </button>
                    </div>
                    </form>
                    </div>
                    </div>

                    <div className="container mx-auto py-8 px-4 bg-white my-12 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="md:w-1/2 flex flex-col justify-center text-left">
                      <h2 className="text-3xl font-bold mb-4 p-9 text-purple-950">From a studio in London to a global brand with over 400 outlets</h2>
                      <p className="text-sm mb-8 p-9">When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design, so our Chelsea boutique became the hotbed for the London interior design community.</p>
                      
                      <button className="self-start  bg-gray-400 px-6 py-2 ml-10  hover:text-primary-900">Get in Touch</button>
                      </div>
                      <div className="md:w-1/2">
                      <Image  width={500} 
  height={300} src="/Feature pic.png" alt="Studio Image" className="w-full h-full object-cover rounded-lg"/>
                      </div>
                      </div>
        </div>
        </div>
    </div>
  );
};

export default Hero;