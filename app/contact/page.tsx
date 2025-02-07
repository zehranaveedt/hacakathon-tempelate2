"use client"

import { FiPhone, FiMail} from "react-icons/fi";

export default function Contact() {
  
     return(
        <div>
          <div className="min-h-screen bg-gray-100 py-12 font-sans">
            <div className="container mx-auto px-8 md:flex md:justify-between">
              <div className="bg-white p-8 rounded-lg shadow-lg md:w-80 md:mr-8 mb-8 md:mb-10">
                <div className="flex flex-row gap-6">
                  <div className="bg-primary-900 rounded-full w-9 h-9 flex items-center justify-center">
                    <FiPhone/>

                   </div>
                   <h2 className="text-xl font-sm mb-4">Call to us</h2>
                   </div>
                   <p className="text-sm mb-2">We are available 24/7, 7 days in a week</p>
                   <p className="text-sm mb-6">Phone: +123 456 7890</p>
                  {/* // <hr className="border-t-2 border-gray-300 my-6"> */}
                   <div className="flex flex-row gap-6">
                    <div className="bg-primary-900 rounded-full w-9 h-9 flex items-center justify-center">
                      <FiMail />
                      </div>
                      <h2 className="text-xl font-sm mb-4">Write to Us</h2>
                      </div>
                      <p className="text-sm mb-4">Fill out our form and we will contact you within 24 hours.</p>
                      <p className="text-sm ">Email: support@exclusive.com</p>
                      <p className="text-sm ">Email: customer@exclusive.com</p>
                      </div>
                      <div className="bg-white p-8 rounded-lg shadow-lg md:w-2/3 md:mr-8 mb-8 md:mb-10">
                      <form> 
  <div className="flex flex-row gap-3">
    <div className="mb-4">
      <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
      <input id="name" className="w-full p-2 border rounded text-sm bg-gray-200" placeholder="Your Name" required type="text" />
    </div> 
    <div className="mb-4">
      <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
      <input id="email" className="w-full p-2 border rounded text-sm bg-gray-200" placeholder="Your Email" required type="email" />
    </div>
    <div className="mb-4"> 
      <label htmlFor="phone" className="block text-lg font-semibold mb-2">Phone</label>
      <input id="phone" className="w-full p-2 border rounded text-sm bg-gray-200" placeholder="Your Phone" required type="text" />
    </div> 
  </div>
  <div className="mb-4"> 
    <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
    <textarea id="message" className="w-full p-3 border rounded-lg bg-gray-200" placeholder="Your Message" rows={6} required></textarea>
  </div> 
  <div className="text-right">
    <button type="submit" className="bg-primary-900 text-white px-11 py-3 rounded-lg hover:bg-blue-900 transition duration-300">
      Send Message
    </button>  
  </div> 
</form>


                          </div>
                          </div>
                          </div>
                          </div>
     )} 